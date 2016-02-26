import React from "react";

import Button from "./buttons/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

import ModalPanel from "./modal/ModalPanel";

export default class Buttons extends React.Component{
	constructor(){
		super();
		this.state = {
			show: false,
			action: '',
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

	showModal(action) {
		this.setState({
			show: true,
			action: action
		});
	}

	hideModal() {
		this.setState({show: false});
	}

	render() {
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
				<ModalPanel
					show={this.state.show}
					hide={this.hideModal.bind(this)}
					data={this.state.data}
					title={this.state.action}
				/>
			</div>
		);
	}
};