/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Alert from "react-bootstrap/lib/Alert";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export default class ModalFormDisabled extends React.Component{
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
						<h5>Вы действительно хотите скрыть этот раздел!</h5>
						<Alert bsStyle="danger">
							<Glyphicon glyph='warning-sign' className = 'mr1'/>
							Все <strong>подразделы</strong> и существующие <strong>товары</strong> в этих подразделах на сайте отображаться не будут!
						</Alert>
						<input type="hidden" name="currentUrl" value={window.location.href}/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>{this.state.textCloseBtn}</Button>
					<Button form="formModal" bsStyle="primary" type="submit">Скрыть</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}