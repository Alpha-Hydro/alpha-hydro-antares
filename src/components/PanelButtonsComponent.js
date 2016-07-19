import React from "react";
import dataHelpers from "../utils/getDataHelper";

import ButtonComponent from "./PanelButtons/ButtonComponent";
import ModalComponent from "./ModalComponent";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

export default class PanelButtonsComponent extends React.Component{
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

	precedence(role){
		return this.roles.indexOf(role);
	}

	componentDidMount(){
		var controller = this.props.dataItem.controller;
		var id = this.props.dataItem.id;
		dataHelpers.getDataInfo(controller, id)
			.then(function(dataInfo){
				this.setState({
					data: dataInfo
				});
			}.bind(this));
	}

	handlerClickButton(action, title){
		this.setState({
			action: action,
			title: title,
			show: true
		});
	}

	render() {
		const bsStyle = (this.props.bsstyle)?this.props.bsstyle:'link';
		const Buttons = [
			{
				icon: "pencil",
				enable: true,
				action: "edit",
				role: "manager",
				title:"Редактировать"
			},
			{
				icon: "tags",
				enable: true,
				action: "seo",
				role: "admin",
				title:"Мета теги"
			},
			{
				icon: "trash",
				enable: !this.props.dataItem.deleted,
				action: "delete",
				role: "admin",
				title:"Удалить"
			},
			{
				icon: "open",
				enable: this.props.dataItem.deleted,
				action: "recover",
				role: "admin",
				title:"Восcтановить"
			},
			{
				icon: "eye-close",
				enable: this.props.dataItem.active && !this.props.dataItem.deleted,
				action: "disabled",
				role: "admin",
				title:"Скрыть"
			},
			{
				icon: "eye-open",
				enable: !this.props.dataItem.active && !this.props.dataItem.deleted,
				action: "enabled",
				role: "admin",
				title:"Показать"
			},
			{
				icon: "comment",
				enable: true,
				action: "issue",
				role: "manager",
				title:"Сообщение об ошибке"
			}
		].map((button, i) =>
			button.enable && <ButtonComponent
				key={i}
				bsStyle={bsStyle}
				eventClick={this.handlerClickButton.bind(this)}
				action={button.action}
				icon={button.icon}
				title={button.title}
			/>
		);

		return (
			<div>
				<ButtonGroup {...this.props}>
					{Buttons}
				</ButtonGroup>
				<ModalComponent
					show={this.state.show}
					hide={this.hideModal.bind(this)}
					data={this.state.data}
					title={this.state.title}
					action={this.state.action}
					keyboard={false}
				/>
			</div>
		);
	}
};
