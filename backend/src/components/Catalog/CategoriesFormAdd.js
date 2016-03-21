import React from "react";
import {Grid, Row, Col, Input, Image, ButtonGroup, Button} from "react-bootstrap/lib";

import ImagesUpload from "./../../utils/ImagesUpload";
import Slugify from "./../../utils/slugifyHelper";
import categoryHelpers from "../../utils/getDataHelper";

import CategoryReplace from "./CategoryReplaceComponent";

export default class CategoriesFormAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : '',
			path: '',
			description: '',
			contentMarkdown: '',
			contentHtml: '',
			sorting: 0,
			image: "/files/images/product/2012-05-22_foto_nv.jpg",
			parentId: props.data.id,
			parentCategoryInfo: '',
			categoryList: ''
		}
	}

	componentDidMount(){
		var parentId = this.props.data.id;

		categoryHelpers.getCategoryInfo(parentId)
			.then(function(categoryInfo){
				this.setState({parentCategoryInfo: categoryInfo});
			}.bind(this));


		categoryHelpers.getGategoryList(parentId)
			.then(function(categoryList){
				this.setState({categoryList: categoryList});
			}.bind(this));
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	titleChange(e){
		console.log(e.target.value);
		var title = e.target.value;
		Slugify.getSlugify(title)
			.then(function (path) {
				this.setState({path: path});
			}.bind(this));
	}

	selectCategory(id){
		console.log('SELECTED CATEGORY',id);
		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					parentCategoryInfo: categoryInfo,
					parentId: id
				});
			}.bind(this));
	}

	render(){
		const parentCategoryName = this.state.parentCategoryInfo && this.state.parentCategoryInfo.name;
		const innerButton = <CategoryReplace
			currentCategory={this.props.data}
			categoryList={this.state.categoryList}
			selectCategory={this.selectCategory.bind(this)}
		/>;

		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.state.image} delete="hidden"/>
					</Col>
					<Col md={9}>
						<Input type="text" label="Заголовок" placeholder="Заголовок"
									 name="dataFormCategory[name]"
									 value={this.state.title}
									 onChange={this.handleChange('title').bind(this)}
									 onBlur={this.titleChange.bind(this)}
									 required
						/>
						<input type="hidden"
									 name="dataFormCategory[path]"
									 value={this.state.path}
									 required
						/>
						<Input type="text" label="Категория"
									 disabled
									 value={parentCategoryName}
									 buttonBefore={innerButton}
						/>
						<Input type="textarea" label="Краткое описание" placeholder="Описание категории"
									 name="dataFormCategory[description]"
									 value={this.state.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="8"
						/>
						<Input type="text" label="Сортировка"
									 labelClassName="col-md-2"
									 wrapperClassName="col-md-2"
									 name="dataFormCategory[sorting]"
									 value={this.state.sorting}
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