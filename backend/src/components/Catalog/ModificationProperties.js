import React from 'react';

import {Button, Glyphicon, Modal} from "react-bootstrap/lib";

export default class ModificationProperties extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	close() {
		this.props.hideModal();
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
					Modification properties table
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Отмена</Button>
					<Button bsStyle="success" onClick={this.close.bind(this)}>Сохранить</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}