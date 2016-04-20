import React from "react";
import {Modal, Input, Button, Glyphicon} from "react-bootstrap/lib";

export default class ModificationPropertyTableRow extends  React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
	}
	
	onChange(key){
		return (e) => {
			this.props.property[key] = e.target.value;
			this.props.handleChange(this.props.property, this.props.index);
		}
	}
	
	onDelete(){
		this.setState({ showModal: false }, () => {
			this.props.handleDelete(this.props.index)
		});
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	render(){
		return (
			<tr>
				<td className="col-sm-2">
					<Input
						type="text"
						groupClassName="mb0"
						value={this.props.property.order}
						onChange={this.onChange('order').bind(this)}
						/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						value={this.props.property.name}
						onChange={this.onChange('name').bind(this)}
					/>
				</td>
				<td>
					<Button bsStyle="danger" onClick={this.open.bind(this)}>
						<Glyphicon glyph="trash"/>
					</Button>

					<Modal
						show={this.state.showModal}
						onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Удаление свойства товарной модификации</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<div className="text-center">
								<p>Вы действительно хотите удалить свойство</p>
								<p className="lead">"{this.props.property.name}"</p>
								<p>Данное свойство будет удалено со всеми значениями во всех модификациях данного товара (т.е будет удален весь столбец в таблице модификаций со всеми значениями). Восстановление невозможно!</p>
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