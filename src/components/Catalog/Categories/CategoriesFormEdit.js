import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import InputGroup from "react-bootstrap/lib/InputGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import ImagesUpload from "./../../../utils/ImagesUpload";
import Slugify from "./../../../utils/slugifyHelper";
import categoryHelpers from "./../../../utils/getDataHelper";

import CategoryReplaceComponent from "./CategoryReplaceComponent";
import CategoryReplaceTest from "./CategoryReplaceTest";

export default class CategoriesFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: props.data,
			parentId: props.data.parentId,
			showReplace : false,
			categoryInfo: ''
		}
	}

	showReplace(){
		this.setState({
			showReplace: true
		})
	}

	hideReplace(){
		this.setState({
			showReplace: false
		})
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

	titleChange(e){
		var title = e.target.value;
		Slugify.getSlugify(title)
			.then(function (path) {
				var data = this.state.data;
				data['path']	= path;
				this.setState({data: data});
			}.bind(this));
	}

	generatePathFromTitle(){
		var title = this.state.data.name;
		Slugify.getSlugify(title)
			.then(function (path) {
				var data = this.state.data;
				data['path']	= path;
				this.setState({data: data});
			}.bind(this));
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
		var uploadPath = (!this.state.data.uploadPath)?'/files/images/product/':this.state.data.uploadPath;
		var image = (!this.state.data.image)
			?"2012-05-22_foto_nv.jpg"
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
							<ControlLabel>Url</ControlLabel>
							<InputGroup>
								<InputGroup.Button>
									<Button bsStyle="primary" onClick={this.generatePathFromTitle.bind(this)}>
										<Glyphicon glyph="refresh" />
									</Button>
								</InputGroup.Button>
								<FormControl
									type="text"
									value={this.state.data.path}
									placeholder="Url"
									name="dataFormCategory[path]"
									onChange={this.handleChange('path').bind(this)}
									required
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Родительская категория</ControlLabel>
							<InputGroup>
								<InputGroup.Button>
									<Button  bsStyle="primary" onClick={this.showReplace.bind(this)}>
										<Glyphicon glyph="refresh" />
									</Button>
								</InputGroup.Button>
								<FormControl
									type="text"
									value={this.state.data.breadcrumbs}
									readOnly
								/>
							</InputGroup>
							<CategoryReplaceTest
								show={this.state.showReplace}
								hide={this.hideReplace.bind(this)}
								selectId={this.props.data.parentId}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Описание категории</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={(this.state.data.description)?this.state.data.description:''}
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
								value={this.state.data.contentMarkdown}
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
									value={this.state.data.sorting}
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