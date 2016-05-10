import React from "react";
import {
	Grid,
	Row,
	Col,
	ButtonGroup,
	Button,
	FormGroup,
	FormControl,
	ControlLabel,
	InputGroup} from "react-bootstrap";

import ImagesUpload from "./../../../utils/ImagesUpload";
import categoryHelpers from "../../../utils/getDataHelper";

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

	render(){
		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.imgSrc()}/>
					</Col>
					<Col md={9}>
						<FormGroup>
							<ControlLabel>Заголовок</ControlLabel>
							<FormControl
								type="text"
								value={this.state.data.name}
								placeholder="Заголовок"
								name="dataFormCategory[name]"
								onChange={this.handleChange('name').bind(this)}
								required
							/>
						</FormGroup>

						<FormGroup>
							<ControlLabel>Родительская категория</ControlLabel>
							<InputGroup>
								<InputGroup.Button>
									<CategoryReplace
										currentCategory={this.state.categoryInfo}
										selectCategory={this.selectCategory.bind(this)}
									/>
								</InputGroup.Button>
								<FormControl
									type="text"
									value={this.state.data.breadcrumbs}
									readOnly
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Описание категории</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={(this.state.data.description)?this.state.data.description:''}
								placeholder="Описание категории"
								name="dataFormCategory[description]"
								onChange={this.handleChange('description').bind(this)}
								rows="8"
							/>
						</FormGroup>
						<div className="form-horizontal">
							<FormGroup>
								<Col componentClass={ControlLabel} md={2}>
									Сортировка
								</Col>
								<Col md={2}>
									<FormControl
										type="text"
										value={this.state.data.sorting}
										name="dataFormCategory[sorting]"
										onChange={this.handleChange('sorting').bind(this)}
										required
									/>
								</Col>
							</FormGroup>
						</div>
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