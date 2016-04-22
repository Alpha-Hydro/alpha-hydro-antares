import React from "react";
import {Grid, Row, Col, Input} from "react-bootstrap";
import categoryHelpers from "../../utils/getDataHelper";
import Slugify from "./../../utils/slugifyHelper";

import ImagesUpload from "./../../utils/ImagesUpload";
import CategoryReplace from "./CategoryReplaceComponent";

export default class ProductsFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data,
			sku: this.props.data.sku,
			categoryInfo: '',
			error: false,
			errorHelp: 'error'
		}
	}

	componentWillMount(){
		var id = this.props.data.id;
		categoryHelpers.getCategoryProduct(id)
			.then(function(categoryInfo){
				this.setState({
					categoryInfo: categoryInfo
				});
			}.bind(this));
	}

	handleChange(key){
		return (e) => {
			this.state.data[key]	= e.target.value;
			this.setState({data:this.state.data});
		};
	}

	skuChange(e){
		var sku = e.target.value;
		var data = this.state.data;
		var input = e.target;
		if(sku !=  this.state.sku){
			Slugify.getProductSlugify(sku)
				.then(function (result) {
					if(!result.error){
						data['path'] = result.path;
						this.setState({
							data: data,
							error: false,
							errorHelp: 'error'
						});
					}
					else{
						input.setCustomValidity('Нужно исправить!!!');
						this.setState({
							error: true,
							errorHelp: result.error
						}, input.focus());
					}
				}.bind(this));
		}
	}

	selectCategory(id){
		console.log('SELECTED CATEGORY',id);
		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					categoryInfo: categoryInfo
				});
			}.bind(this));
	}

	imgSrc(){
		var uploadPath = (!this.state.data.uploadPath)?'':this.state.data.uploadPath;
		var image = (!this.state.data.image)
			?"/files/images/product/2012-05-22_foto_nv.jpg"
			:this.state.data.image;
		return uploadPath + image;
	}

	imgDraft(){
		var uploadPath = (!this.state.data.uploadPath)?'':this.state.data.uploadPath;
		var draft = (!this.state.data.draft)
			?"/files/images/product/2012-05-22_foto_nv.jpg"
			:this.state.data.draft;
		return uploadPath + draft;
	}

	breadcrumbs(){
		return (this.state.categoryInfo.breadcrumbs)
			? this.state.categoryInfo.breadcrumbs + ' > ' + this.state.categoryInfo.name
			: this.state.categoryInfo.name
	}

	innerButton(){
		return <CategoryReplace
			currentCategory={this.state.categoryInfo}
			selectCategory={this.selectCategory.bind(this)}
		/>
	}

	render(){
		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.imgSrc()} inputName="fileLoadImage"/>
						<ImagesUpload image={this.imgDraft()} inputName="fileLoadDraft"/>
					</Col>
					<Col md={9}>
						<Input type="text" label="Код товара" placeholder="Код товара"
									 id="sku"
									 groupClassName={(!this.state.error)?'':'has-error'}
									 help={this.state.error && this.state.errorHelp}
									 name="dataFormProducts[sku]"
									 value={this.state.data.sku}
									 onChange={this.handleChange('sku').bind(this)}
									 onBlur={this.skuChange.bind(this)}
									 required
						/>
						<Input type="text" label="Наименование товара" placeholder="Наименование товара"
									 name="dataFormProducts[title]"
									 value={(!this.state.data.title)?this.state.data.name:this.state.data.title}
									 onChange={this.handleChange('title').bind(this)}
									 required
						/>
						<Input type="text" label="Категория"
									 value={this.breadcrumbs()}
									 buttonAfter={this.innerButton()}
						/>
						<Input type="textarea" label="Примечание" placeholder="Примечание"
									 name="dataFormProducts[note]"
									 value={this.state.data.note}
									 onChange={this.handleChange('note').bind(this)}
									 rows="2"
						/>
						<Input type="textarea" label="Описание" placeholder="Описание"
									 name="dataFormProducts[description]"
									 value={this.state.data.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="8"
						/>

						<Input type="text" label="Сортировка"
									 groupClassName="clearfix"
									 labelClassName="col-md-2"
									 wrapperClassName="col-md-2"
									 name="dataFormProducts[sorting]"
									 value={this.state.data.sorting}
									 onChange={this.handleChange('sorting').bind(this)}
									 required
						/>
						
						<input type="hidden"
									 name="dataFormProducts[path]"
									 value={this.state.data.path}
						/>
						<input type="hidden"
									 name="categoryId"
									 value={this.state.categoryInfo.id}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}