import React from 'react';

import Button from "react-bootstrap/lib/Button";
import Modal from "react-bootstrap/lib/Modal";

import dataHelpers from "../../../utils/getDataHelper";
import modificationHelpers from "../../../utils/productModificationHelper";

import ModificationPropertiesTable from "./ModificationPropertiesTable"

export default class ModificationProperties extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: [],
			deleted: []
		}
	}

	componentWillMount(){
		dataHelpers.getCategoryProductModification(this.props.productId)
			.then(function (response) {
				this.setState({columns: response.columns});
			}.bind(this));
	}

	close() {
		this.props.hideModal();
	}

	handleChange(data, index){
		var columns = this.state.columns;
		columns[index] = data;
		this.setState({columns: columns});
	}

	handleDelete(index){
		console.log('DELETE PROPERTY: ', this.state.columns[index]);
		var deleted = (this.state.columns[index].id != 'new')
			?	this.state.deleted.concat(this.state.columns[index])
			: this.state.deleted;
		var columns = this.state.columns;
		columns.splice(index, 1);
		this.setState({
			columns: columns,
			deleted: deleted
		});
	}

	handleAdd(data){
		console.log('NEW PROPERTY: ', data);
		var columns = this.state.columns.concat(data);
		this.setState({columns: columns});
	}

	onCancel(){
		dataHelpers.getCategoryProductModification(this.props.productId)
			.then(function (response) {
				this.setState({columns: response.columns, deleted: []}, () => {
					this.props.hideModal();
				});
			}.bind(this));
	}

	onSave(e){
		e.preventDefault();
		this.props.hideModal();
		console.log('SEND DATA: ', this.state);
		modificationHelpers.editModificationProperty(this.state)
			.then(function (response) {
				console.log('SAVE DATA: ',response);
				window.location.reload(true);
				return false;
			});
	}

	render(){
		return(
			<Modal
				show={this.props.showModal}
				onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
					<Modal.Title>Свойства товарных модификаций (шапка таблицы)</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ModificationPropertiesTable
						productId={this.props.productId}
						dataTable={this.state.columns}
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
		)
	}
}