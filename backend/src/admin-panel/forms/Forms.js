import React from "react";
import InputsSeo from "./inputs/InputsSeo";

export default class Forms extends React.Component{
	constructor(props){
		super(props);
	}

	selectInputs(){
		switch (this.props.action) {
			case "edit":   return this.props.action;
			case "seo": return <InputsSeo data = {this.props.data}/>;
			case "add": return this.props.action;
			case "delete": return "Вы действительно хотите удалить этот раздел!";
			case "disabled": return "Вы действительно хотите отключить этот раздел и поставить страницу заглушку!";
		}
	}

	render(){
		return (
			<form
				action={'/admin/'+this.props.data.controller+'/'+this.props.action+'/'+this.props.data.id}
				id="formModal"
				method="post"
			>
				{this.selectInputs()}
			</form>
		);
	}

}