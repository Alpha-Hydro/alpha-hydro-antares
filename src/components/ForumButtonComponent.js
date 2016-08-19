import React from "react";
import dataHelpers from "../utils/getDataHelper";

import ButtonComponent from "./PanelButtons/ButtonComponent";
import ForumActions from "./Forum/ForumActions"

export default class ForumButtonComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show:false,
			action: '',
			title: '',
			data: ''
		}
	}

	showModal() {
		this.setState({show: true});
	}

	hideModal() {
		this.setState({show: false});
	}

	componentWillMount(){
		dataHelpers.getDataInfo('forum', this.props.dataItem.id)
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
		const Buttons = [
			{
				icon: "share",
				enable: this.props.dataItem.question,
				action: "reply",
				title:"Ответ на сообщение",
				style: "success"
			},
			{
				icon: "edit",
				enable: this.props.dataItem.replace,
				action: "edit",
				title:"Редактировать сообщение",
				style: "default"
			},
			{
				icon: "trash",
				enable: !this.props.dataItem.delete,
				action: "delete",
				title:"Удалить сообщение",
				style: (this.props.dataItem.question)?"danger":"default"
			}
		].map(
			(button, i) => button.enable && <ButtonComponent
				key={i}
				bsStyle={button.style}
				onClick={this.handlerClickButton.bind(this)}
				action={button.action}
				icon={button.icon}
				title={button.title}/>
		);

		return(
			<div className="btn-group btn-group-sm">
				{Buttons}
				<ForumActions
					show={this.state.show}
					hide={this.hideModal.bind(this)}
					data={this.state.data}
					title={this.state.title}
					action={this.state.action}
				/>
			</div>
		);
	}
}
