/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import gitHubHelper from "../utils/gitHubHelper";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

export default class IssueModalForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			title: '',
			body: '',
			responseMessage: ''
		}
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

	showModal() {
		this.setState({showModal: true});
	}

	hideModal() {
		this.setState({
			showModal: false,
			title: document.location.href,
			body: ''
		});
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	sendIssue(){
		var data = {"title": this.state.title, "body": this.state.body, "labels": ["design"]};
		console.log(data);
		gitHubHelper.newIssue(data)
			.then(function(dataInfo){
				console.log(dataInfo);
				this.setState({
					responseMessage: (dataInfo.status == 201 && dataInfo.statusText == 'Created')
						? 'Сообщение об ошибке создано. Благодарю за помощь. В ближайшее время ошибка будет исправлена!'
						: 'Сообщение не отправлено. Ошибка сервера. Обратитесь к администратору.'
				})
			}.bind(this));
	}

	render(){
		const modalBody = (!this.state.responseMessage)
			?	<form>
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
			:	<div className="text-center">{this.state.responseMessage}</div>;

		const modalFooter = (!this.state.responseMessage)
			? <div>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button
						bsStyle="primary"
						onClick={this.sendIssue.bind(this)}>Отправить ошибку</Button>
				</div>
			: <Button onClick={this.hideModal.bind(this)}>Ok</Button>;

		return(
			<div className="admin">
				<Button
					bsStyle="link"
					onClick={this.showModal.bind(this)}
				>
					<Glyphicon glyph="comment" />
				</Button>

				<Modal show={this.state.showModal} onHide={this.hideModal.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Сообщение об ошибке</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{modalBody}
					</Modal.Body>
					<Modal.Footer>
						{modalFooter}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
