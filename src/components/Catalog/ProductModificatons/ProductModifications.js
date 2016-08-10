import React from "react";

import Button from "react-bootstrap/lib/Button";
import Modal from "react-bootstrap/lib/Modal";

import dataHelpers from "../../../utils/getDataHelper";
import modificationHelpers from "../../../utils/productModificationHelper";

import ProductModificationsTable from "./ModificationsTable";

export default class ProductModifications extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: [],
			rows:[],
			deleted: []
		};
	}
	
	componentWillMount(){
		dataHelpers.getCategoryProductModification(this.props.id)
			.then(function (response) {
				this.setState({
					columns: response.columns,
					rows: response.rows
				})
			}.bind(this));
	}

	close() {
		this.props.hideModal();
	}

	handleChange(data, index){
		var rows = this.state.rows;
		rows[index] = data;
		this.setState({rows: rows});
	}

	handleDelete(index){
		console.log('handleDelete: ', this.state.rows[index]);
		var deleted = (this.state.rows[index].item.id != 'new')
			? this.state.deleted.concat(this.state.rows[index])
			: this.state.deleted;
		var rows = this.state.rows;
		rows.splice(index, 1);
		this.setState({
			rows: rows,
			deleted: deleted
		})
	}

	handleAdd(data){
		console.log('NEW MODIFICATION', data);
		var rows = this.state.rows;
		rows = this.state.rows.concat(data);
		this.setState({rows: rows});
	}

	onCancel(){
		dataHelpers.getCategoryProductModification(this.props.id)
			.then(function (response) {
				this.setState({
					columns: response.columns,
					rows: response.rows,
					deleted: []
				}, () => {
					this.props.hideModal();
				});
			}.bind(this));
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

	render(){
		return(
			<Modal
				dialogClassName="w100"
				show={this.props.showModal}
				onHide={this.close.bind(this)}
			>
				<Modal.Header closeButton>
					<Modal.Title>Модификации и размеры</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ProductModificationsTable
						id={this.props.id}
						columns={this.state.columns}
						rows={this.state.rows}
						handleChange={this.handleChange.bind(this)}
						handleDelete={this.handleDelete.bind(this)}
						handleAdd={this.handleAdd.bind(this)}
						role={this.props.role}
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