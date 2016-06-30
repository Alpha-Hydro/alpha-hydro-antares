import React from "react";

import ModalFormsEdit from "./ModalFormsEdit";
import ModalFormSeo from "./ModalFormSeo";
import ModalFormsAdd from "./ModalFormsAdd";
import ModalFormDelete from "./ModalFormDelete";
import ModalFormDisabled from "./ModalFormDisabled";

export default class ModalFormsComponent extends React.Component{
	selectInputs(){
		switch (this.props.action) {
			case "edit":  return <ModalFormsEdit data = {this.props.data}/>;
			case "seo": 	return <ModalFormSeo data = {this.props.data}/>;
			case "add": 	return <ModalFormsAdd data = {this.props.data}/>;
			case "delete": return <ModalFormDelete />;
			case "recover": return "Вы действительно хотите восстановить этот раздел!";
			case "disabled": return <ModalFormDisabled />;
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
				<input type="hidden" name="currentUrl" value={window.location.href}/>
			</form>
		);
	}
}