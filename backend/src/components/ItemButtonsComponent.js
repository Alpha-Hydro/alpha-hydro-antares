import React from "react";
import dataHelpers from "../utils/getDataHelper";

import ButtonComponent from "./PanelButtons/ButtonComponent";
import ModalComponent from "./ModalComponent";

export default class ItemButtonsComponent extends React.Component{
	constructor(props){
		super(props);
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
	
	handlerClickButton(action, title){
		var controller = this.props.dataItem.controller,
			id = this.props.dataItem.id;
		dataHelpers.getDataInfo(controller, id)
			.then(function(dataInfo){
				this.setState({
					data: dataInfo,
					action: action,
					title: title,
					show: true
				});
			}.bind(this));
	}

	render() {
		const bsStyle = (this.props.dataItem.bsstyle)?this.props.dataItem.bsstyle:'default';

		const Buttons = [
			{
				icon: "edit",
				enable: true,
				action: "edit",
				role: "manager",
				title:"Редактировать"
			},
			{	icon: "trash",
				enable: !this.props.dataItem.deleted,
				action: "delete",
				role: "admin",
				title:"Удалить"
			},
			{
				icon: "open",
				enable: this.props.dataItem.deleted,
				action: "delete",
				role: "admin",
				title:"Востановить"
			},
			{
				icon: "eye-close",
				enable: this.props.dataItem.active,
				action: "disabled",
				role: "admin",
				title:"Скрыть"
			},
			{
				icon: "eye-open",
				enable: !this.props.dataItem.active,
				action: "enabled",
				role: "admin",
				title:"Показать"
			}
		].map((button, i) =>
			button.enable && <ButtonComponent key={i} bsStyle={bsStyle} eventClick={this.handlerClickButton.bind(this)} action={button.action} icon={button.icon} title={button.title}/>
		);

		return (
			<div className="btn-group btn-group-sm">
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