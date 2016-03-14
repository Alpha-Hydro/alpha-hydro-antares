import React from "react";
import {Grid, Row, Col, Input, Button, Glyphicon} from "react-bootstrap/lib";

import ImagesUpload from "./ImagesUpload";
import CategoryChangeButton from "../../buttons/CategoryChangeButton";
import categoryHelpers from "../../../helpers/categoryHelper";

export default class catalogCategoriesEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : (!props.data.title)
				?props.data.name
				:props.data.title,
			path: props.data.path,
			description: props.data.description,
			contentMarkdown: props.data.contentMarkdown,
			contentHtml: props.data.contentHtml,
			sorting: props.data.sorting,
			uploadPath: (!props.data.uploadPath)?'':props.data.uploadPath,
			image: (!props.data.image)
				?"/files/images/product/2012-05-22_foto_nv.jpg"
				:props.data.image
		}
	}

	componentDidMount(){
		var parentId = this.props.data.parentId;
		if(parentId != 0){
			categoryHelpers.getCategoryInfo(parentId)
				.then(function(categoryInfo){
					this.setState({parentCategoryInfo: categoryInfo});
				}.bind(this));
		}

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

	render(){
		const imgSrc = this.state.uploadPath + this.state.image;
		const parentCategoryName = (!this.state.parentCategoryInfo)
			?'root'
			:this.state.parentCategoryInfo.name;
		const innerButton = <CategoryChangeButton
			currentId={this.props.data.id}
			categoryList={this.state.categoryList}/>;

		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={imgSrc}/>
					</Col>
					<Col md={9}>
						<Input type="text" label="Заголовок" placeholder="Заголовок"
									 name="dataPage[title]"
									 value={this.state.title}
									 onChange={this.handleChange('title').bind(this)}
									 required
						/>
						<Input type="text" label="Родительская категория"
									 name="dataPage[path]"
									 disabled
									 value={parentCategoryName}
									 buttonBefore={innerButton}
						/>
						<Input type="textarea" label="Краткое описание" placeholder="Краткое описание"
									 name="dataPage[description]"
									 value={this.state.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="4"
						/>
						<Input type="textarea" label="Текст на странице (markdown)" placeholder="Текст на странице"
									 name="dataPage[contentMarkdown]"
									 value={this.state.contentMarkdown}
									 onChange={this.handleChange('contentMarkdown').bind(this)}
									 rows="8"
						/>
						<div className="form-horizontal">
							<Input type="text" label="Сортировка"
										 labelClassName="col-md-2"
										 wrapperClassName="col-md-1"
										 name="dataPage[sorting]"
										 value={this.state.sorting}
										 onChange={this.handleChange('sorting').bind(this)}
										 required
							/>
						</div>

						<input type="hidden"
									 name="dataPage[contentHtml]"
									 value={this.state.contentHTML}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}
}