import React from "react";
import {Glyphicon, Input, Button, ButtonGroup, Modal} from "react-bootstrap/lib";
import propertyHelpers from "./../../../utils/productPropertyHelper"

export default class ProductPropertyComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			showSave: false,
			property:{
				id: props.property.id,
				productId: props.property.productId,
				order: props.property.order,
				name: props.property.name,
				value: props.property.value
			}
		}
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleChange(key){
		return (e) => {
			this.state.property[key]	= e.target.value;
			this.setState({
				showSave: true,
				property: this.state.property
			});
		};
	}

	handleSave(){
		propertyHelpers.editProperty(this.state.property)
			.then(function (response) {
				this.props.onSave(response, this.props.index);
				this.setState({showSave:false});
			}.bind(this));
	}

	handleDelete(){
		propertyHelpers.deleteProperty(this.state.property.id)
			.then(function (response) {
				response === 'deleted' && this.props.onDelete(this.props.index);
			}.bind(this));
	}

	render(){
		return (
			<tr>
				<td className="col-md-1">
					<Input
						type="text"
						groupClassName="mb0" type="text"
						value={this.state.property.order}
						onChange={this.handleChange('order').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0" type="text"
						value={this.state.property.name}
						onChange={this.handleChange('name').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						value={this.state.property.value}
						onChange={this.handleChange('value').bind(this)}/>
				</td>
				<td>
					<input
						type="hidden"
						value={this.state.property.productId}/>

					<ButtonGroup>
						<Button onClick={this.open.bind(this)}><Glyphicon glyph="trash"/></Button>
						{this.state.showSave && <Button bsStyle="success" onClick={this.handleSave.bind(this)}><Glyphicon glyph="floppy-save" /></Button>}
					</ButtonGroup>

					<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Удалить свойство</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Подтвердите удаление свойства товара...
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.close.bind(this)}>Отмена</Button>
							<Button onClick={this.handleDelete.bind(this)} bsStyle="danger">Удалить</Button>
						</Modal.Footer>
					</Modal>
				</td>
			</tr>
		)
	}
}
