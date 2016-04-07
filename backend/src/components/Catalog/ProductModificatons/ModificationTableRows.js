import React from "react";
import {Input, Button, Glyphicon, ButtonGroup, Modal} from "react-bootstrap/lib";
import modificationHelpers from "./../../../utils/productModificationHelper";

import ModificationTableRowValue from "./ModificationTableRowValue";

export default class ModificationTableRows extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			modification:{
				id: props.row.item.id,
				parentId: props.row.item.parentId,
				sku: props.row.item.sku,
				name: props.row.item.name,
				order: props.row.item.order,
				deleted: props.row.item.deleted
			}
		}
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	onChange(key){
		return (e) => {
			this.state.modification[key]	= e.target.value;
			this.setState(data);
		};
	}

	onBlur(){
		this.props.handleChange(this.state.modification, this.props.index);
	}

	handleChangeValue(data, indexValue){
		this.props.handleChangeValue(data, this.props.index, indexValue)
	}

	onDelete(){
		this.props.handleDelete(this.props.index);
		// modificationHelpers.deleteModification(this.state.modification.id)
		// 	.then(function (response) {
		// 		response === 'deleted' && this.props.onDelete(this.props.index);
		// 		this.setState({ showModal: false });
		// 	}.bind(this));
	}

	render(){
		const values = this.props.row.values;
		const valuesTd = values.map(
			(value, i) => <ModificationTableRowValue
				key={i}
				index={i}
				value={value}
				handleChange={this.handleChangeValue.bind(this)}
			/>
		);
		return(
			<tr>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.modification.order}
						onChange={this.onChange('order').bind(this)}
						onBlur={this.onBlur.bind(this)}
					/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.modification.sku}
						onChange={this.onChange('sku').bind(this)}
						onBlur={this.onBlur.bind(this)}
					/>
				</td>
				{valuesTd}
				<td className="col-sm-1">
					<ButtonGroup bsSize="small">
						<Button bsStyle="success"><Glyphicon glyph="pencil"/></Button>
						<Button bsStyle="danger" onClick={this.onDelete.bind(this)}><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>

					<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Удалить товарную модификацию</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>Подтвердите перемещение товарной модификации в корзину...</p>
							<p>Отменить данное действие нельзя!</p>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.onDelete.bind(this)} bsStyle="danger">Удалить</Button>
							<Button onClick={this.close.bind(this)}>Отмена</Button>
						</Modal.Footer>
					</Modal>
				</td>
			</tr>
		)
	}
}