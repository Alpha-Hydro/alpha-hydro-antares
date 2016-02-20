import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

export default class ModalPanel extends React.Component{

	hideModal() {
		this.props.hide()
	}

	render() {
		return (
			<Modal
				{...this.props}
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
				dialogClassName="w100"
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">{this.props.data.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Wrapped Text</h4>
					<p>Modal Admin...</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Close</Button>
					<Button bsStyle="primary" onClick={this.hideModal.bind(this)}>Save changes</Button>
				</Modal.Footer>
			</Modal>
		);
	}
};

