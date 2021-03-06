/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

import ModalResponseMessage from "./ModalResponseMessage";
import gitHubHelper from "../../utils/gitHubHelper";

export default class ModalFormIssue extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			url: '',
			title: '',
			body: '',
			label: '',
			showMessage: false,
			textMessage: '',
			titleMessage: 'Alert',
			typeMessage: 'success',
			sizeMessage: 'lg'
		}
	}

	hideModal() {
		this.props.hide();
		this.setState({
			url: document.location.href,
			title: '',
			body: ''
		});
	}

	hideMessage() {
		this.setState({
			showMessage: false
		});
	}

	componentWillMount(){
		this.setState({
			url: document.location.href
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
		var data = {
			"title": this.state.title,
			"body": '## ' + this.state.url + '\n\n' + this.state.body,
			"labels": [(this.state.label)?this.state.label:'ошибка']};
		console.log(data);
		gitHubHelper.newIssue(data)
			.then(function(dataInfo){
				console.log(dataInfo);
				if(dataInfo.status == 201 && dataInfo.statusText == 'Created'){
					this.hideModal();
					this.setState({
						showMessage: true,
						titleMessage: 'Сообщение #' + dataInfo.data.number +'.',
						textMessage: 'Ваше сообщение об ошибке создано. Благодарю за помощь. В ближайшее время ошибка будет исправлена!',
					});
				}
				else{
					this.setState({
						showMessage: true,
						typeMessage: 'danger',
						titleMessage: 'Ошибка!',
						textMessage: 'Сообщение не отправлено. Ошибка сервера. Обратитесь к администратору.',
						sizeMessage: 'small'
					});
				}
			}.bind(this));
	}

	render(){
		return(
			<div>
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
						<form>
							<FormGroup>
								<ControlLabel>Название ошибки</ControlLabel>
								<FormControl
									type="text"
									placeholder="Название ошибки"
									name="title"
									value={this.state.title}
									onChange={this.handleChange('title').bind(this)}
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Тип ошибки</ControlLabel>
								<FormControl
									componentClass="select"
									placeholder="select"
									name="label"
									onChange={this.handleChange('label').bind(this)}>
									<option value="select">...</option>
									<option value="ошибка">ошибка</option>
									<option value="доработка">доработка</option>
									<option value="enhancement">предложение</option>
									<option value="question">вопрос</option>
								</FormControl>
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
						<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
						<Button bsStyle="primary" onClick={this.sendIssue.bind(this)}>Отправить</Button>
					</Modal.Footer>
				</Modal>
				<ModalResponseMessage
					showMessage={this.state.showMessage}
					hideMessage={this.hideMessage.bind(this)}
					title={this.state.titleMessage}
					type={this.state.typeMessage}
					text={this.state.textMessage}
					size={this.state.sizeMessage}
				/>
			</div>

		);
	}
}