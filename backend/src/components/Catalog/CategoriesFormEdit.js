import React from "react";
import {Grid, Row, Col, Input, Button, Glyphicon} from "react-bootstrap/lib";

import ImagesUpload from "./../../utils/ImagesUpload";
import categoryHelpers from "../../utils/getDataHelper";

import CategoryReplace from "./CategoryReplaceComponent";

export default class CategoriesFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: props.data,
			parentId: props.data.parentId,
			categoryInfo: ''
		}
	}

	componentWillMount(){
		var id = this.props.data.parentId;
		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					categoryInfo: categoryInfo
				});
			}.bind(this));
	}

	handleChange(key){
		return (e) => {
			var data = this.state.data;
			data[key]	= e.target.value;
			this.setState({data:data});
		};
	}

	selectCategory(id){
		console.log('SELECTED CATEGORY',id);
		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				var data = this.state.data;
				data['breadcrumbs'] = (categoryInfo.breadcrumbs)
					? categoryInfo.breadcrumbs + ' > ' + categoryInfo.name
					: categoryInfo.name;
				this.setState({
					data: data,
					parentId: categoryInfo.id,
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
						<ImagesUpload image={this.imgSrc()}/>
					</Col>
					<Col md={9}>
						<Input type="text" label="Заголовок" placeholder="Заголовок"
									 name="dataFormCategory[name]"
									 value={(!this.state.data.title)?this.state.data.name:this.state.data.title}
									 onChange={this.handleChange('title').bind(this)}
									 required
						/>
						<Input type="text" label="Родительская категория"
									 value={this.state.data.breadcrumbs}
									 buttonAfter={this.innerButton()}
						/>
						<Input type="textarea" label="Описание категории" placeholder="Описание категории"
									 name="dataFormCategory[description]"
									 value={this.state.data.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="8"
						/>
						<Input type="text" label="Сортировка"
									 labelClassName="col-md-2"
									 wrapperClassName="col-md-2"
									 name="dataFormCategory[sorting]"
									 value={this.state.data.sorting}
									 onChange={this.handleChange('sorting').bind(this)}
									 required
						/>
						<input type="hidden"
									 name="dataFormCategory[parentId]"
									 value={this.state.parentId}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}
}