import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import CategoriesFormAdd from "./CategoriesFormAdd";
import dataHelpers from "../../../utils/getDataHelper";

export default class CategoriesAddButton extends React.Component{
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
		let	id = this.props.dataItem.id;
		dataHelpers.getCategoryInfo(id)
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
					{...this.props}
					onClick={this.showModal.bind(this)}>
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
							action={'/admin/categories/add/'}
							id="formModal"
							method="post"
							encType="multipart/form-data"
						>
							<CategoriesFormAdd data={this.state.data} />
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