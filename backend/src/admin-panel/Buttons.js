import React from "react";

import Button from "./buttons/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

import ModalPanel from "./modal/ModalPanel";

export default class Buttons extends React.Component{
	constructor(){
		super();
		this.state = {show: false};
	}

	showModal() {
		this.setState({show: true});
		console.log(this.props.action);
	}

	hideModal() {
		this.setState({show: false});
	}

	render() {

		//const data = {title: "Заголовок окна", action: 'action'};
		const data = dataPage;
		console.log(dataPage);

		const bsStyle = "primary";

		const Buttons = [
			{icon: "pencil-square-o", click: this.showModal.bind(this), action: "edit"},
			{icon: "plus", click: this.showModal.bind(this), action: "add"},
			{icon: "trash", click: this.showModal.bind(this), action: "delete"},
			{icon: "eye-slash", click: this.showModal.bind(this), action: "disabled"},
			{icon: "share-alt", click: this.showModal.bind(this), action: "seo"}
		].map((button, i) =>
			<Button key={i} bsStyle={bsStyle} eventClick={button.click} action={button.action} icon={button.icon}/>
		);

		return (
			<div class="btn-group-vertical">
				{Buttons}
				<ModalPanel show={this.state.show} hide={this.hideModal.bind(this)} data={data}/>
			</div>
		);
	}
};