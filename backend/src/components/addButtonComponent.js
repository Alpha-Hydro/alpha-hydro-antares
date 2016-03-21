import React from "react";
import ModalComponent from "./ModalComponent";
import dataHelpers from "../utils/getDataHelper";

export default class AddButtonComponent extends React.Component{
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

	handlerClickButton(){
		var controller = this.props.dataItem.controller,
			id = this.props.dataItem.id;
		dataHelpers.getDataInfo(controller, id)
			.then(function(dataInfo){
				this.setState({
					data: dataInfo,
					action: this.props.dataItem.action,
					title: this.props.dataItem.title,
					show: true
				});
			}.bind(this));
	}
	
	render() {
		return (
			<div className="categories-list-item z-depth-1" onClick={this.handlerClickButton.bind(this)}>
				<img src="/files/images/category/icons/add-category.png" />
				<p className="categories-list-item-name">Добавить категорию</p>
				<ModalComponent
					show={this.state.show}
					hide={this.hideModal.bind(this)}
					data={this.state.data}
					title={this.state.title}
					action={this.state.action}
				/>
			</div>
		)
	}

}