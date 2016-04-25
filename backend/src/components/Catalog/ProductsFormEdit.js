import React from "react";
import {Grid, Row, Col, Input, Button} from "react-bootstrap";
import categoryHelpers from "../../utils/getDataHelper";
import Slugify from "./../../utils/slugifyHelper";

import ImagesUpload from "./../../utils/ImagesUpload";
import CategoryReplace from "./CategoryReplaceComponent";
import ProductPropertyEditButton from "./../ProductPropertyEditButton";
import ProductModificationEditButton from "./../ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./../ProductModificationPropertyEditButton";

export default class ProductsFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data,
			sku: this.props.data.sku,
			categoryInfo: '',
			error: false,
			errorHelp: 'Error.'
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

	onChange(key){
		return (e) => {
			this.state.data[key]	= e.target.value;
			this.setState({data:this.state.data});
		};
	}

	skuOnChange(e){
		var input = e.target;
		var data = this.state.data;
		data['sku'] = e.target.value;
		this.setState({
			data: data
		},() => {this.validateInput(input)});
	}

	validateInput(input){
		Slugify.getProductSlugify(input.value)
			.then(function (result) {
				if(!result.error){
					this.state.data['path'] = result.path;
					this.setState({
						data: this.state.data,
						error: false,
						errorHelp: 'Error.'
					}, input.setCustomValidity(''));
				}
				else{
					this.setState({
						error: true,
						errorHelp: result.error
					}, input.setCustomValidity(result.error + ' Надо исправить!'));
				}
			}.bind(this));
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
									 onChange={this.skuOnChange.bind(this)}
									 required
						/>
						<Input type="text" label="Наименование товара" placeholder="Наименование товара"
									 name="dataFormProducts[name]"
									 value={this.state.data.name}
									 onChange={this.onChange('name').bind(this)}
									 required
						/>
						<Input type="text" label="Категория"
									 value={this.breadcrumbs()}
									 buttonAfter={this.innerButton()}
						/>
						<Input type="textarea" label="Описание" placeholder="Описание"
									 name="dataFormProducts[description]"
									 value={this.state.data.description}
									 onChange={this.onChange('description').bind(this)}
									 rows="8"
						/>
						<Input type="textarea" label="Примечание" placeholder="Примечание"
									 name="dataFormProducts[note]"
									 value={this.state.data.note}
									 onChange={this.onChange('note').bind(this)}
									 rows="2"
						/>
						<Row>
							<Col md={3} >
								<Input type="text" label="Сортировка"
											 labelClassName="col-md-6"
											 wrapperClassName="col-md-6"
											 name="dataFormProducts[sorting]"
											 value={this.state.data.sorting}
											 onChange={this.onChange('sorting').bind(this)}
											 required
								/>
							</Col>
							<Col md={3}>
								<ProductPropertyEditButton
									productId={this.props.data.id}
									buttonText="Ствойства товара"
									bsStyle="primary"
									className="pull-right"
								/>
							</Col>
							<Col md={3}>
								<ProductModificationEditButton
									productId={this.props.data.id}
									buttonText="Модификации товара"
									bsStyle="primary"
									className="pull-right"

								/>
							</Col>
							<Col md={3}>
								<ProductModificationPropertyEditButton
									productId={this.props.data.id}
									buttonText="Свойства модификаций"
									bsStyle="primary"
									className="pull-right"
								/>
							</Col>
						</Row>
						
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