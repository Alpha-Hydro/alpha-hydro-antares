import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";

export default class ProductModifications extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: props.showModal,
			modification: ''
		}
	}

	close() {
		this.props.hideModal();
	}

	open() {
		this.setState({ showModal: true });
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
					Modification table
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Отмена</Button>
					<Button bsStyle="success" onClick={this.close.bind(this)}>Сохранить</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}