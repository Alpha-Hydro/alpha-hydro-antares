import React from "react";
import { Modal, Button, Glyphicon } from "react-bootstrap/lib";

import ModificationBodyTableRowTd from "./ModificationBodyTableRowTd";

export default class ModificationBodyTableRow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleChangeItem(key){
		var dataItem = this.props.row.item;
		return (e) => {
			dataItem[key] = e.target.value;
			this.props.handleChangeRowItem(dataItem, this.props.index);
		}
	}

	handleChangeValue(index){
		var dataValue = this.props.row.values[index];
		return (e) => {
			dataValue.value = e.target.value;
			this.props.handleChangeRowValue(dataValue, this.props.index, index);
		}
	}

	onDelete(){
		this.setState({ showModal: false }, () => {
			this.props.handleDeleteRow(this.props.index)
		});
	}

	itemProperty(){
		var self = this;
		var properties = this.props.row.values;
		return properties.map(function (property, i)	{
			return <ModificationBodyTableRowTd
				key={i}
				value={property.value}
				onChange={self.handleChangeValue(i).bind(this)}
			/>
		})
	}

	render() {
		return(
			<tr>
				<ModificationBodyTableRowTd
					onChange={this.handleChangeItem('order').bind(this)}
					value={this.props.row.item.order}
					classTd="col-sm-1"/>
				<ModificationBodyTableRowTd
					onChange={this.handleChangeItem('sku').bind(this)}
					value={this.props.row.item.sku}/>
				{this.itemProperty()}
				<td>
					<Button
						bsSize="small"
						bsStyle="danger"
						onClick={this.open.bind(this)}>
						<Glyphicon glyph="trash"/>
					</Button>
					<Modal
						show={this.state.showModal}
						onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Удаление товарной модификации</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<div className="text-center">
								<p>Вы действительно хотите удалить товарную модификацию</p>
								<p className="lead">{this.props.row.item.sku}</p>
								<p>со всеми значениями свойств. Восстановление возможно будет через корзину, с правами администратора.</p>
							</div>
						</Modal.Body>

						<Modal.Footer>
							<Button onClick={this.close.bind(this)}>Отмена</Button>
							<Button bsStyle="danger" onClick={this.onDelete.bind(this)}>Удалить</Button>
						</Modal.Footer>
					</Modal>
				</td>
			</tr>
		)
	}
}