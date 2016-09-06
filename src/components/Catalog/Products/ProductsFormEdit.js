import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import InputGroup from "react-bootstrap/lib/InputGroup";
import HelpBlock from "react-bootstrap/lib/HelpBlock";

import categoryHelpers from "../../../utils/getDataHelper";
import Slugify from "./../../../utils/slugifyHelper";

import ImagesUpload from "./../../../utils/ImagesUpload";
import CategoryReplace from "../Categories/_categoryReplaceComponent";
import ProductPropertyEditButton from "../ProductProperties/ProductPropertyEditButton";
import ProductModificationEditButton from "../ProductModificatons/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "../ProductModificatons/ProductModificationPropertyEditButton";

export default class ProductsFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: props.data,
			categoryInfo: '',
			categoryId: props.data.categoryId,
			breadcrumbs: props.data.breadcrumbs,
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
					categoryInfo: categoryInfo,
					breadcrumbs: categoryInfo.breadcrumbs + ' > ' + categoryInfo.name,
					categoryId: categoryInfo.id
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

	imgDraft(){
		var uploadPath = (!this.state.data.uploadPathDraft)?'/files/images/product/':this.state.data.uploadPathDraft;
		var draft = (!this.state.data.draft)
			?"2012-05-22_foto_nv.jpg"
			:this.state.data.draft;
		return uploadPath + draft;
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
						<FormGroup className={(!this.state.error)?'':'has-error'}>
							<ControlLabel>Код товара</ControlLabel>
							<FormControl
								type="text"
								placeholder="Код товара"
								id="sku"
								name="dataFormProducts[sku]"
								value={this.state.data.sku}
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
								value={this.state.data.name}
								onChange={this.onChange('name').bind(this)}
								required
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Категория</ControlLabel>
							<InputGroup>
								<InputGroup.Button>
									<CategoryReplace
										currentCategory={this.state.categoryInfo}
										selectCategory={this.selectCategory.bind(this)}
									/>
								</InputGroup.Button>
								<FormControl
									type="text"
									value={this.state.breadcrumbs}
									readOnly
								/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Описание</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={(this.state.data.description)?this.state.data.description:''}
								placeholder="Описание"
								name="dataFormProducts[description]"
								onChange={this.onChange('description').bind(this)}
								rows="8"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Примечание</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={(this.state.data.note)?this.state.data.note:''}
								placeholder="Примечание"
								name="dataFormProducts[note]"
								onChange={this.onChange('note').bind(this)}
								rows="2"
							/>
						</FormGroup>

						<Row>
							<Col md={3} >
									<FormGroup>
										<Col componentClass={ControlLabel} md={6} className="pl0">
											Сортировка
										</Col>
										<Col md={6}>
											<FormControl
												type="number"
												min="0"
												name="dataFormProducts[sorting]"
												value={this.state.data.sorting}
												onChange={this.onChange('sorting').bind(this)}
												required
											/>
										</Col>
									</FormGroup>
							</Col>
							<Col md={3}>
								<ProductPropertyEditButton
									id={this.props.data.id}
									title="Ствойства товара"
									bsStyle="primary"
									className="pull-right"
									role={this.props.data.role}
								/>
							</Col>
							<Col md={3}>
								<ProductModificationEditButton
									id={this.props.data.id}
									title="Модификации товара"
									bsStyle="primary"
									className="pull-right"
									role={this.props.data.role}

								/>
							</Col>
							<Col md={3}>
								<ProductModificationPropertyEditButton
									id={this.props.data.id}
									title="Свойства модификаций"
									bsStyle="primary"
									className="pull-right"
									role={this.props.data.role}
								/>
							</Col>
						</Row>
						<input type="hidden"
									 name="dataFormProducts[path]"
									 value={this.state.data.path}
						/>
						<input type="hidden"
									 name="categoryId"
									 value={this.state.categoryId}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}