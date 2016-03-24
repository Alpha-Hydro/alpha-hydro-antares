import React from "react";
import {Grid, Row, Col, Input, Image, ButtonGroup, Button} from "react-bootstrap/lib";

import ImagesUpload from "./../../utils/ImagesUpload";
import categoryHelpers from "../../utils/getDataHelper";
import CategoryReplace from "./CategoryReplaceComponent";

export default class ProductsFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : (!props.data.title)
				?props.data.name
				:props.data.title,
			sku : props.data.sku,
			path: props.data.path,
			note: props.data.note,
			description: props.data.description,
			sorting: props.data.sorting,
			uploadPath: (!props.data.uploadPath)?'':props.data.uploadPath,
			image: (!props.data.image)
				?"/files/images/product/2012-05-22_foto_nv.jpg"
				:props.data.image,
			categoryInfo: '',
			parentId: ''
		}
	}

	componentDidMount(){
		var id = this.props.data.id;

		categoryHelpers.getCategoryProduct(id)
			.then(function(categoryInfo){
				this.setState({
					categoryInfo: categoryInfo,
					parentId: categoryInfo.parentId
				});
			}.bind(this));
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	selectCategory(id){
		console.log('SELECTED CATEGORY',id);
		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					categoryInfo: categoryInfo,
					parentId: id
				});
			}.bind(this));
	}

	render(){
		const imgSrc = this.state.uploadPath + this.state.image;
		const innerButton = <CategoryReplace
			currentCategory={this.state.categoryInfo}
			selectCategory={this.selectCategory.bind(this)}
		/>;

		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={imgSrc}/>
					</Col>
					<Col md={9}>
						<Input type="text" label="Код товара" placeholder="Код товара"
									 name="dataFormProducts[sku]"
									 value={this.state.sku}
									 onChange={this.handleChange('sku').bind(this)}
									 required
						/>
						<Input type="text" label="Наименование товара" placeholder="Наименование товара"
									 name="dataFormProducts[title]"
									 value={this.state.title}
									 onChange={this.handleChange('title').bind(this)}
									 required
						/>
						<Input type="text" label="Категория"
									 disabled
									 value={this.state.categoryInfo.breadcrumbs}
									 buttonAfter={innerButton}
						/>
						<Input type="textarea" label="Примечание" placeholder="Примечание"
									 name="dataFormProducts[note]"
									 value={this.state.note}
									 onChange={this.handleChange('note').bind(this)}
									 rows="2"
						/>
						<Input type="textarea" label="Описание" placeholder="Описание"
									 name="dataFormProducts[description]"
									 value={this.state.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="8"
						/>

						<Input type="text" label="Сортировка"
									 labelClassName="col-md-2"
									 wrapperClassName="col-md-2"
									 name="dataFormProducts[sorting]"
									 value={this.state.sorting}
									 onChange={this.handleChange('sorting').bind(this)}
									 required
						/>
						
						<input type="hidden"
									 name="dataFormProducts[path]"
									 value={this.state.path}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}