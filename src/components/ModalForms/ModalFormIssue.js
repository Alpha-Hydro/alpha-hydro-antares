/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import gitHubHelper from "../../utils/gitHubHelper";

import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

export default class IssueModalForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			body: '',
			responseMessage: ''
		}
	}

	hideModal() {
		this.props.hide()
	}

	componentWillMount(){
		this.setState({
			title: document.location.href
		});
	}

	componentDidMount(){
		document.onkeydown = (e)=>{
			if(e.altKey && e.keyCode == 113){
				this.setState({
					showModal: true
				});
			}
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	onSubmit(e){
		e.preventDefault();
		var data = {"title": this.state.title, "body": this.state.body, "labels": ["bug"]};
		this.props.handleSubmit(data);
	}

	render(){
		return(
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
				<form id="formModal" onSubmit={this.onSubmit.bind(this)}>
					<FormGroup>
						<ControlLabel>Заголовок (url страницы)</ControlLabel>
						<FormControl
							type="text"
							placeholder="Название ошибки"
							name="title"
							value={this.state.title}
							onChange={this.handleChange('title').bind(this)}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Описание ошибки</ControlLabel>
						<FormControl
							componentClass="textarea"
							placeholder="Описание ошибки"
							name="body"
							value={this.state.body}
							onChange={this.handleChange('body').bind(this)}
							rows="8"
						/>
					</FormGroup>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.hideModal.bind(this)}>{this.state.textCloseBtn}</Button>
				<Button form="formModal" bsStyle="primary" type="submit">Отправить</Button>
			</Modal.Footer>
		</Modal>

		);
	}
}