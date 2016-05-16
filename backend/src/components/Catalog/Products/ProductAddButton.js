import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ProductFormAdd from "./ProductFormAdd";
import dataHelpers from "../../../utils/getDataHelper";

export default class ItemAddButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: false,
			data: ''
		};
	}

	showModal() {
		this.setState({show: true});
	}

	hideModal() {
		this.setState({show: false});
	}

	componentWillMount(){
		let	categoryId = this.props.dataItem.categoryId;
		dataHelpers.getCategoryInfo(categoryId)
			.then(function(dataCategoryInfo){
				this.setState({
					data: dataCategoryInfo
				});
			}.bind(this));
	}
	
	render() {
		return (
			<div className="categories-list-item z-depth-1" onClick={this.showModal.bind(this)}>
				<img src="/files/images/category/icons/add-category.png" />
				<p className="categories-list-item-name">{this.props.dataItem.title}</p>
				<Modal
					show={this.state.show}
					onHide={this.hideModal.bind(this)}
					dialogClassName="w100"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg" className="h3">
							{this.state.data.name}
							<small>{this.props.dataItem.title}</small>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form
							action={'/admin/products/add/'}
							id="formModal"
							method="post"
							encType="multipart/form-data"
						>
							<ProductFormAdd data={this.state.data} />
							<input type="hidden" name="currentUrl" value={window.location.href}/>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
						<Button form="formModal" bsStyle="success" type="submit">Сохранить изменения</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}

}