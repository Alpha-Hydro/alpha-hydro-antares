import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import DefaultFormEdit from "./DefaultFormEdit";
import PagesFormEdit from "./../Pages/PagesFormEdit";
import CategoriesFormEdit from "./../Catalog/Categories/CategoriesFormEdit";
import ProductsFormEdit from "./../Catalog/Products/ProductsFormEdit";
import MediaFormEdit from "./../Media/MediaFormEdit";
import MediaCategoriesFormEdit from "./../Media/MediaCategoriesFormEdit";

export default class ModalFormsEdit extends React.Component{
	constructor(props){
		super(props);
	}

	hideModal() {
		this.props.hide()
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "pages": return <PagesFormEdit {...this.props}/>;
			case "categories": return <CategoriesFormEdit {...this.props}/>;
			case "products": return <ProductsFormEdit {...this.props}/>;
			case "media": return <MediaFormEdit {...this.props}/>;
			case "media-categories": return <MediaCategoriesFormEdit {...this.props}/>;
			default: return <DefaultFormEdit {...this.props}/>;
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
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button form="formModal" bsStyle="success" type="submit">Сохранить</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
