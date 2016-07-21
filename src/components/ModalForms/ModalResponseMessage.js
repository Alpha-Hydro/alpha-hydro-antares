/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

export default class ModalResponseMessage extends React.Component{
	constructor(props){
		super(props);
	}

	hideModal() {
		this.props.hideMessage();
	}

	render(){
		return(
			<Modal show={this.props.showMessage} onHide={this.hideModal.bind(this)} bsSize="small">
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.text}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)} bsStyle="success">OK</Button>
				</Modal.Footer>
			</Modal>
		)
	};
}