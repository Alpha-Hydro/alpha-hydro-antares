import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ProductFormAdd from "./ProductFormAdd";
import dataHelpers from "../../../utils/getDataHelper";

export default class ProductAddButton extends React.Component{
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

	componentDidMount(){
		let	categoryId = this.props.dataItem.categoryid;
		dataHelpers.getCategoryInfo(categoryId)
			.then(function(dataCategoryInfo){
				this.setState({
					data: dataCategoryInfo
				});
			}.bind(this));
	}
	
	render() {
		return (
			<div>
				<Button
					onClick={this.showModal.bind(this)}
					disabled={this.props.dataItem.role != 'admin'}>
					{this.props.dataItem.title}
				</Button>
				<Modal
					show={this.state.show}
					onHide={this.hideModal.bind(this)}
					dialogClassName="w100"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg" className="h3">
							{this.state.data.name}
							<small className="block">{this.props.dataItem.title}</small>
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