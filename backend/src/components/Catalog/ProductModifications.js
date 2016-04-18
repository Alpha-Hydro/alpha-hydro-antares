import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";

import dataHelpers from "../../utils/getDataHelper";
import modificationHelpers from "../../utils/productModificationHelper";

import ProductModificationsTable from "./ProductModificatons/ProductModificationsTable";


export default class ProductModifications extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	/*componentDidMount(){
		dataHelpers.getCategoryProductModification(this.props.productId)
			.then(function (response) {
				this.setState(response)
			}.bind(this));
	}*/

	handleChange(data){
		this.setState(data);
	}

	onSave(e){
		e.preventDefault();
		this.props.hideModal();
		console.log('SEND DATA: ', this.state);
		modificationHelpers.editModification(this.state)
			.then(function (response) {
				console.log('SAVE DATA: ',response);
				window.location.reload(true);
				return false;
			});
	}

	close() {
		this.props.hideModal();
	}

	render(){
		return(
			<Modal
				dialogClassName="w100"
				show={this.props.showModal}
				onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
					<Modal.Title>Модификации и размеры</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ProductModificationsTable
						dataTable={this.state}
						handleChange={this.handleChange.bind(this)}
					/>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Отмена</Button>
					<Button bsStyle="success" onClick={this.onSave.bind(this)}>Сохранить</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}