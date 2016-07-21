import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

export default class ModalFormSeo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			metaTitle : props.data.metaTitle,
			metaDescription: props.data.metaDescription,
			metaKeywords: props.data.metaKeywords
		}
	}

	hideModal() {
		this.props.hide()
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	render(){
		return (
			<Modal
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
				dialogClassName="modal-lg"
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
						<FormGroup>
							<ControlLabel>meta Title</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter meta Title"
								name="dataFormSeo[metaTitle]"
								value={this.state.metaTitle}
								onChange={this.handleChange('metaTitle').bind(this)}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>meta Description</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Enter meta Description"
								name="dataFormSeo[metaDescription]"
								value={this.state.metaDescription}
								onChange={this.handleChange('metaDescription').bind(this)}
								rows="4"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>meta Keywords</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Enter meta Keywords"
								name="dataFormSeo[metaKeywords]"
								value={this.state.metaKeywords}
								onChange={this.handleChange('metaKeywords').bind(this)}
								rows="4"
							/>
						</FormGroup>
						<input type="hidden" name="currentUrl" value={window.location.href}/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button form="formModal" bsStyle="success" type="submit">Добавить</Button>
				</Modal.Footer>
			</Modal>
		);
	}

}