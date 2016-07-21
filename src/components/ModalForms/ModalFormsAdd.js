import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import DefaultFormAdd from "./DefaultFormAdd";
import CategoriesFormAdd from "../Catalog/Categories/CategoriesFormAdd";
import ProductFormAdd from "../Catalog/Products/ProductFormAdd";

export default class ModalFormsAdd extends React.Component{
	constructor(props){
		super(props);
	}

	hideModal() {
		this.props.hide()
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "categories": return <CategoriesFormAdd {...this.props}/>;
			case "products": return <ProductFormAdd {...this.props}/>;
			default: return <DefaultFormAdd {...this.props}/>;
		}
	}

	render(){
		return (
			<Modal
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
				dialogClassName="w100"
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg" className="h3">
						{(!this.props.data.title)?this.props.data.name:this.props.data.title}
						<small className="block">{this.props.title}</small>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						action={'/admin/'+this.props.data.controller+'/'+this.props.action+'/'+this.props.data.id}
						id="formModal"
						method="post"
						encType="multipart/form-data"
					>
						{this.selectEditInputs()}
						<input type="hidden" name="currentUrl" value={window.location.href}/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>{this.state.textCloseBtn}</Button>
					<Button form="formModal" bsStyle="success" type="submit">Добавить</Button>
				</Modal.Footer>
			</Modal>
		);

	}
}
