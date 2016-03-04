import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import Forms from "../forms/Forms"

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
				dialogClassName={
					(() => {
						switch (this.props.action) {
							case "delete":   return "modal-sm";
							case "disabled": return "modal-sm";
							case "seo": return "modal-lg";
							default:      return "w100";
						}
					})()
				}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>{this.props.data.title}</h4>
					<Forms {...this.props}/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Close</Button>
					<Button form="formModal" bsStyle="primary" onClick={this.hideModal.bind(this)} type="submit">Save changes</Button>
				</Modal.Footer>
			</Modal>
		);
	}
};

