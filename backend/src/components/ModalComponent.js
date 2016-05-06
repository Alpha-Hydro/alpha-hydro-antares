import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ModalFormsComponent from "./ModalFormsComponent"

export default class ModalComponent extends React.Component{

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
							case "edit":	return "w100";
							case "add":	return "w100";
							case "seo": 	return "modal-lg";
							default:    	return "";
						}
					})()
				}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg" className="h3">
						{(!this.props.data.title)?this.props.data.name:this.props.data.title}
						<small>{this.props.title}</small>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ModalFormsComponent {...this.props}/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button form="formModal" bsStyle="success" type="submit">Сохранить изменения</Button>
				</Modal.Footer>
			</Modal>
		);
	}
};
