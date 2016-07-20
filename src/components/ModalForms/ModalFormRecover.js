/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

export default class ModalFormDelete extends React.Component{
	constructor(props){
		super(props);
	}

	hideModal() {
		this.props.hide()
	}

	render(){
		return (
			<Modal
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
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
						<p>Вы действительно хотите восстановить этот раздел!</p>
						<input type="hidden" name="currentUrl" value={window.location.href}/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button form="formModal" bsStyle="success" type="submit">Восстановить</Button>
				</Modal.Footer>
			</Modal>
		);
	}

}