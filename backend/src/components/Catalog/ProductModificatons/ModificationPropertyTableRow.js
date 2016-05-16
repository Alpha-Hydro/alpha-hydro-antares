import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";

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
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.props.property.order}
							onChange={this.onChange('order').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.props.property.name}
							onChange={this.onChange('name').bind(this)}
						/>
					</FormGroup>
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