import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import InputGroup from "react-bootstrap/lib/InputGroup";

import ImagesUpload from "./../../../utils/ImagesUpload";
import Slugify from "./../../../utils/slugifyHelper";
import categoryHelpers from "./../../../utils/getDataHelper";

import CategoryReplaceComponent from "./CategoryReplaceComponent";

export default class CategoriesFormAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : '',
			path: '',
			description: '',
			contentMarkdown: '',
			contentHtml: '',
			sorting: 0,
			image: "/files/images/product/2012-05-22_foto_nv.jpg",
			parentId: props.data.id,
			parentCategoryInfo: props.data,
			categoryList: ''
		}
	}

	componentWillMount(){
		var parentId = this.props.data.id;

		categoryHelpers.getCurrentGategoryList(parentId)
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
		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.state.image} delete="hidden"/>
					</Col>
					<Col md={9}>
						<FormGroup>
							<ControlLabel>Заголовок</ControlLabel>
							<FormControl
								type="text"
								value={this.state.name}
								placeholder="Заголовок"
								name="dataFormCategory[name]"
								onChange={this.handleChange('name').bind(this)}
								onBlur={this.titleChange.bind(this)}
								required
							/>
						</FormGroup>
						<input type="hidden"
									 name="dataFormCategory[path]"
									 value={this.state.path}
									 required
						/>
						<FormGroup>
							<ControlLabel>Родительская категория</ControlLabel>
							<InputGroup>
								<InputGroup.Button>
									<CategoryReplaceComponent
										selectId={this.state.parentCategoryInfo.id}
										parentCategoryId={this.props.data.parentId}
										currentCategoryId={this.props.data.id}
										selectCategory={this.selectCategory.bind(this)}
									/>
								</InputGroup.Button>
								<FormControl
									type="text"
									value={this.state.parentCategoryInfo.name}
									readOnly
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Описание категории</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={this.state.description}
								placeholder="Описание категории"
								name="dataFormCategory[description]"
								onChange={this.handleChange('description').bind(this)}
								rows="4"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Текст на странице (markdown)</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Текст на странице"
								name="dataFormCategory[contentMarkdown]"
								value={this.state.contentMarkdown}
								onChange={this.handleChange('contentMarkdown').bind(this)}
								rows="8"
							/>
						</FormGroup>
						<div className="form-inline">
							<FormGroup>
								<ControlLabel className="mr2">Сортировка</ControlLabel>
								<FormControl
									type="number"
									min="0"
									value={this.state.sorting}
									name="dataFormCategory[sorting]"
									onChange={this.handleChange('sorting').bind(this)}
									required
								/>
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