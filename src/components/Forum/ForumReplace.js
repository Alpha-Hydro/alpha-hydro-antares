import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";

export default class ForumReplace extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			replace: ''
		}
	}

	hideModal() {
		this.props.hide();
		this.setState({
			replace: ''
		});
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
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
						<div className="panel-body pt0">
							<div dangerouslySetInnerHTML={{__html: this.props.data.content}}/>
							<div className="text-right">
								<strong>{this.props.data.author}</strong>
								<span> - </span>
								<em>{this.props.data.timestamp}</em>
							</div>
						</div>
						<FormGroup>
							<FormControl
								componentClass="textarea"
								placeholder="Ваш ответ"
								name="contentMarkdown"
								value={this.state.replace}
								onChange={this.handleChange('replace').bind(this)}
								rows="8"
							/>
						</FormGroup>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button bsStyle="success" form="formModal" type="submit" disabled={!this.state.replace}>Ответить</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}