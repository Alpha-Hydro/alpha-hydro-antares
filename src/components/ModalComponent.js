import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ModalFormsEdit from "./ModalForms/ModalFormsEdit";
import ModalFormSeo from "./ModalForms/ModalFormSeo";
import ModalFormsAdd from "./ModalForms/ModalFormsAdd";
import ModalFormDelete from "./ModalForms/ModalFormDelete";
import ModalFormRecover from "./ModalForms/ModalFormRecover";
import ModalFormDisabled from "./ModalForms/ModalFormDisabled";
import ModalFormEnable from "./ModalForms/ModalFormEnable";
import ModalFormIssue from "./ModalForms/ModalFormIssue";


export default class ModalComponent extends React.Component{

	hideModal() {
		this.props.hide()
	}

	btnSubmit(){
		switch (this.props.action) {
			case "add": return <Button form="formModal" bsStyle="success" type="submit">Добавить</Button>;
			case "disabled": return <Button form="formModal" bsStyle="primary" type="submit">Скрыть</Button>;
			case "enabled": return <Button form="formModal" bsStyle="success" type="submit">Показать</Button>;
			case "delete": return <Button form="formModal" bsStyle="danger" type="submit">Удалить</Button>;
			case "recover": return <Button form="formModal" bsStyle="success" type="submit">Восстановить</Button>;
			case "issue" : return <Button form="formModal" bsStyle="primary" type="submit">Отправить</Button>;
			default: return <Button form="formModal" bsStyle="success" type="submit">Сохранить</Button>;
		}
	};

	modalForm(){
		switch (this.props.action) {
			case "edit":  return <ModalFormsEdit {...this.props}/>;
			case "seo": 	return <ModalFormSeo {...this.props}/>;
			case "add": 	return <ModalFormsAdd {...this.props}/>;
			case "delete": return <ModalFormDelete {...this.props}/>;
			case "recover": return <ModalFormRecover {...this.props}/>;
			case "disabled": return <ModalFormDisabled {...this.props}/>;
			case "enabled": return <ModalFormEnable {...this.props}/>;
			case "issue": return <ModalFormIssue {...this.props}/>;
		}
	};

	render() {
		return (
			<Modal
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
						<small className="block">{this.props.title}</small>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.modalForm()}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					{this.btnSubmit()}
				</Modal.Footer>
			</Modal>
		);
	}
};

