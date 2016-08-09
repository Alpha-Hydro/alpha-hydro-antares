import React from "react";
import dataHelpers from "../utils/getDataHelper";

import ButtonComponent from "./PanelButtons/ButtonComponent";
import ModalComponent from "./ModalComponent";

export default class ItemButtonsComponent extends React.Component{
	constructor(props){
		super(props);
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

	componentWillMount(){
		var controller = this.props.dataItem.controller,
				id = this.props.dataItem.id;
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
		const bsStyle = (this.props.dataItem.bsstyle)?this.props.dataItem.bsstyle:'default';

		const Buttons = [
			{
				icon: "edit",
				enable: true,
				action: "edit",
				role: ['manager', 'admin'],
				title:"Редактировать"
			},
			{
				icon: "trash",
				enable: !this.props.dataItem.deleted,
				action: "delete",
				role: ['admin'],
				title:"Удалить"
			},
			{
				icon: "open",
				enable: this.props.dataItem.deleted,
				action: "recover",
				role: ['admin'],
				title:"Восcтановить"
			},
			{
				icon: "eye-close",
				enable: this.props.dataItem.active && !this.props.dataItem.deleted,
				action: "disabled",
				role: ['admin'],
				title:"Скрыть"
			},
			{
				icon: "eye-open",
				enable: !this.props.dataItem.active && !this.props.dataItem.deleted,
				action: "enabled",
				role: ['admin'],
				title:"Показать"
			}
		]
			/*.filter(
				(button) => button.enable && button.role.indexOf(this.props.dataItem.role) != -1
			)*/
			.map(
				(button, i) => button.enable && <ButtonComponent
					key={i}
					bsStyle={bsStyle}
					onClick={this.handlerClickButton.bind(this)}
					action={button.action}
					icon={button.icon}
					title={button.title}
					disabled={!(button.role.indexOf(this.props.dataItem.role) != -1)}/>
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