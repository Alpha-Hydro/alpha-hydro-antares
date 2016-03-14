import React from "react";

import Button from "./buttons/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

import ModalPanel from "./modal/ModalPanel";

export default class Buttons extends React.Component{
	constructor(){
		super();
		this.roles = ['manager', 'admin'];
		this.state = {
			show: false,
			action: '',
			title: '',
			data: {}
		};
	}

	componentDidMount() {
		this.loadDataPage();
	}

	loadDataPage() {
		$.ajax({
			url: window.location.href,
			data: {json:""},
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(window.location.href, status, err.toString());
			}.bind(this)
		});
	}

	showModal(action, title) {
		this.setState({
			show: true,
			action: action,
			title: title
		});
	}

	hideModal() {
		this.setState({show: false});
	}

	precedence(role){
		return this.roles.indexOf(role);
	}

	render() {
		const bsStyle = "primary";

		const Buttons = [
			{icon: "pencil-square-o", click: this.showModal.bind(this), action: "edit", role: "manager", title:"Параметры страницы"},
			{icon: "share-alt", click: this.showModal.bind(this), action: "seo", role: "admin", title:"Мета теги"},
			//{icon: "plus", click: this.showModal.bind(this), action: "add", role: "admin", title:"Добавить"},
			{icon: "trash", click: this.showModal.bind(this), action: "delete", role: "admin", title:"Удалить"},
			{icon: "eye-slash", click: this.showModal.bind(this), action: "disabled", role: "admin", title:"Страница заглушка"},
		].map((button, i) =>
			<Button key={i} bsStyle={bsStyle} eventClick={button.click} action={button.action} icon={button.icon} title={button.title}/>
		/*{
			if(this.precedence(this.state.data.role) >= this.precedence(button.role)){
				return <Button key={i} bsStyle={bsStyle} eventClick={button.click} action={button.action} icon={button.icon} title={button.title}/>
			}
		}*/

		);

		return (
			<div class="btn-group-vertical">
				{Buttons}
				<ModalPanel
					show={this.state.show}
					hide={this.hideModal.bind(this)}
					data={this.state.data}
					title={this.state.title}
					action={this.state.action}
				/>
			</div>
		);


	}
};