import React from "react";
import dataHelpers from "../utils/getDataHelper";

import ButtonComponent from "./PanelButtons/ButtonComponent";
import ModalComponent from "./ModalComponent";

export default class PanelButtonsComponent extends React.Component{
	constructor(){
		super();
		this.roles = ['manager', 'admin'];
		this.state = {
			show: false,
			action: '',
			title: '',
			data: ''
		};
	}

	showModal() {
		this.setState({show: true});
	}

	hideModal() {
		this.setState({show: false});
	}

	precedence(role){
		return this.roles.indexOf(role);
	}

	handlerClickButton(action, title){
		dataHelpers.getPageInfo()
			.then(function(pageInfo){
				this.setState({
					data: pageInfo,
					action: action,
					title: title,
					show: true
				});
			}.bind(this));
	}

	render() {
		const bsStyle = "primary";

		const Buttons = [
			{icon: "edit", action: "edit", role: "manager", title:"Редактировать"},
			{icon: "cog", action: "seo", role: "admin", title:"Мета теги"},
			{icon: "trash", action: "delete", role: "admin", title:"Удалить"},
			{icon: "eye-close", action: "disabled", role: "admin", title:"Скрыть"}
		].map((button, i) =>
			<ButtonComponent key={i} bsStyle={bsStyle} eventClick={this.handlerClickButton.bind(this)} action={button.action} icon={button.icon} title={button.title}/>
		/*{
			if(this.precedence(this.state.data.role) >= this.precedence(button.role)){
				return <Button key={i} bsStyle={bsStyle} eventClick={button.click} action={button.action} icon={button.icon} title={button.title}/>
			}
		}*/

		);

		return (
			<div className="btn-group-vertical btn-group-lg">
				{Buttons}
				<ModalComponent
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