import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export default class ProductPropertyComponent extends React.Component{
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

	onChange(key){
		var data = this.props.properties[this.props.index]
		return (e) => {
			data[key]	= e.target.value;
			this.props.handleChange(data, this.props.index);
		};
	}

	onDelete(){
		this.setState({ showModal: false }, () => {
			this.props.handleDelete(this.props.index)
		});
	}

	render(){
		return (
			<tr>
				<td className="col-md-1">
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
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.props.property.value}
							onChange={this.onChange('value').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<Button bsStyle="danger" onClick={this.open.bind(this)}>
						<Glyphicon glyph="trash"/>
					</Button>

					<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Удалить свойство</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="text-center">
								<p>Вы действительно хотите удалить свойство</p>
								<p className="lead">"{this.props.property.name}"</p>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.close.bind(this)}>Отмена</Button>
							<Button onClick={this.onDelete.bind(this)} bsStyle="danger">Удалить</Button>
						</Modal.Footer>
					</Modal>
				</td>
			</tr>
		)
	}
}
