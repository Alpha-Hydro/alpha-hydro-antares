import React from "react";

import ModalFormsEdit from "./ModalForms/ModalFormsEdit";
import ModalFormSeo from "./ModalForms/ModalFormSeo";

export default class ModalFormsComponent extends React.Component{
	constructor(props){
		super(props);
	}

	selectInputs(){
		switch (this.props.action) {
			case "edit":  return <ModalFormsEdit data = {this.props.data}/>;
			case "seo": 	return <ModalFormSeo data = {this.props.data}/>;
			case "add": 	return this.props.action;
			case "delete": return "Вы действительно хотите удалить этот раздел!";
			case "disabled": return "Вы действительно хотите отключить этот раздел!";
			case "enabled": return "Вы действительно хотите показать этот раздел!";
		}
	}

	render(){
		return (
			<form
				action={'/admin/'+this.props.data.controller+'/'+this.props.action+'/'+this.props.data.id}
				id="formModal"
				method="post"
				encType="multipart/form-data"
			>
				{this.selectInputs()}
			</form>
		);
	}

}