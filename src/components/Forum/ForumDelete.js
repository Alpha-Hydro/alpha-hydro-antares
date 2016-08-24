/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

export default class ForumDelete extends React.Component{
	hideModal() {
		this.props.hide();
	}

	render(){
		return(
			<Modal
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg" className="h3">
						{this.props.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						action={'/admin/forum/'+this.props.action+'/'+this.props.data.id}
						id="formModal"
						method="post"
						encType="multipart/form-data"
					>
						<div dangerouslySetInnerHTML={{__html: this.props.data.content}}/>
						<div className="text-right">
							<strong>{this.props.data.author}</strong> - <em>{this.props.data.timestamp}</em>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button bsStyle="danger" form="formModal" type="submit">Удалить</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}