import React from "react";
import {Grid, Row, Col, Input, Image, ButtonGroup, Button, Radio} from "react-bootstrap/lib";

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
						<Input type="text" label="Код товара" placeholder="Код товара"
									 id="sku"
									 groupClassName={(!this.state.error)?'':'has-error'}
									 help={this.state.error && this.state.errorHelp}
									 name="dataFormProducts[sku]"
									 value={this.state.sku}
									 onChange={this.skuOnChange.bind(this)}
									 required
						/>
						<Input type="text" label="Наименование товара" placeholder="Наименование товара"
									 name="dataFormProducts[name]"
									 value={this.state.name}
									 onChange={this.onChange('name').bind(this)}
									 required
						/>
						<Input type="textarea" label="Oписание" placeholder="Описание"
									 name="dataFormProducts[description]"
									 value={this.state.description}
									 onChange={this.onChange('description').bind(this)}
									 rows="8"
						/>
						<Row>
							<Col md={4} >
								<Input type="text" label="Сортировка"
											 labelClassName="col-md-6"
											 wrapperClassName="col-md-6"
											 name="dataFormProducts[sorting]"
											 value={this.state.sorting}
											 onChange={this.onChange('sorting').bind(this)}
											 required
								/>
							</Col>
							<Col md={4} >
								<Radio inline checked name="dataFormProducts[active]">Активность</Radio>
							</Col>
							<Col md={4} >
								<Radio inline name="dataFormProducts[deleted]">Удален</Radio>
							</Col>
						</Row>

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