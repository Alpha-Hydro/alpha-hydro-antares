import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import HelpBlock from "react-bootstrap/lib/HelpBlock";


import ImagesUpload from "./../../../utils/ImagesUpload";
import Slugify from "./../../../utils/slugifyHelper";

export default class ProductFormAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sku: '',
			name : '',
			path: '',
			description: '',
			contentMarkdown: '',
			contentHtml: '',
			sorting: 0,
			image: "/files/images/product/2012-05-22_foto_nv.jpg",
			draft: "/files/images/product/2012-05-22_foto_nv.jpg",
			error: false,
			errorHelp: 'Error.'
		}
	}

	onChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	skuOnChange(e){
		var input = e.target;
		var sku = e.target.value;
		this.setState({
			sku: sku
		},() => {this.validateInput(input)});
	}

	validateInput(input){
		Slugify.getProductSlugify(input.value)
			.then(function (result) {
				if(!result.error){
					var path = result.path;
					this.setState({
						path: path,
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


	render(){
		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.state.image} delete="hidden" inputName="fileLoadImage"/>
						<ImagesUpload image={this.state.draft} delete="hidden" inputName="fileLoadDraft"/>
					</Col>
					<Col md={9}>
						<FormGroup className={(!this.state.error)?'':'has-error'}>
							<ControlLabel>Код товара</ControlLabel>
							<FormControl
								type="text"
								placeholder="Код товара"
								id="sku"
								name="dataFormProducts[sku]"
								value={this.state.sku}
								onChange={this.skuOnChange.bind(this)}
								required
							/>
							<HelpBlock>{this.state.error && this.state.errorHelp}</HelpBlock>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Наименование товара</ControlLabel>
							<FormControl
								type="text"
								placeholder="Наименование товара"
								name="dataFormProducts[name]"
								value={this.state.name}
								onChange={this.onChange('name').bind(this)}
								required
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Oписание</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Описание"
								value={this.state.description}
								name="dataFormProducts[description]"
								onChange={this.onChange('description').bind(this)}
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
									name="dataFormProducts[sorting]"
									onChange={this.onChange('sorting').bind(this)}
									required
								/>
							</FormGroup>
						</div>
						<input type="hidden"
									 name="dataFormProducts[path]"
									 value={this.state.path}
						/>
						<input type="hidden"
									 name="categoryId"
									 value={this.props.data.id}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}