import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";
import dataHelpers from "../../../utils/getDataHelper";
import productPropertyHelpers from "../../../utils/productPropertyHelper";
import ProductProperties from "./ProductProperties"


export default class ProductPropertyEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			properties: [],
			deleted: []
		}
	}

	componentWillMount(){
		dataHelpers.getCategoryProductProperties(this.props.productId)
			.then(function (response) {
				this.setState({properties:response})
			}.bind(this));
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleChange(data, index){
		var properties = this.state.properties;
		properties[index] = data;
		this.setState({properties: properties});
	}

	handleDelete(index){
		console.log('DELETE PROPERTY: ', this.state.properties[index]);
		var deleted = (this.state.properties[index].id != 'new')
			?	this.state.deleted.concat(this.state.properties[index])
			: this.state.deleted;
		var properties = this.state.properties;
		properties.splice(index, 1);
		this.setState({
			properties: properties,
			deleted: deleted
		});
	}

	handleAdd(data){
		console.log('NEW PROPERTY: ', data);
		var properties = this.state.properties.concat(data);
		this.setState({properties: properties});
	}

	onSave(e){
		e.preventDefault();
		var data = {
			properties: this.state.properties,
			deleted: this.state.deleted
		};
		this.setState({showModal: false});
		console.log('SEND DATA: ', data);

		productPropertyHelpers.editProperty(data)
			.then(function (response) {
				console.log('SAVE DATA: ',response);
				window.location.reload(true);
				return false;
			});
	}

	onCancel(){
		dataHelpers.getCategoryProductProperties(this.props.productId)
			.then(function (response) {
				this.setState({
					properties:response,
					deleted: [],
					showModal: false
				})
			}.bind(this));
	}

	render(){
		return(
			<div>
				<Button
					{...this.props}
					onClick={this.open.bind(this)} >
					{(!this.props.buttonText)?<Glyphicon glyph="pencil" />:this.props.buttonText}
				</Button>
				<Modal
					dialogClassName="modal-lg"
					show={this.state.showModal}
					onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Свойства продукта</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<ProductProperties
							{...this.props}
							properties={this.state.properties}
							handleChange={this.handleChange.bind(this)}
							handleDelete={this.handleDelete.bind(this)}
							handleAdd={this.handleAdd.bind(this)}
						/>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.onCancel.bind(this)}>Отмена</Button>
						<Button bsStyle="success" onClick={this.onSave.bind(this)}>Сохранить</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	};
}