import React from "react";
import DefaultFormAdd from "./DefaultFormAdd";
import CategoriesFormAdd from "../Catalog/CategoriesFormAdd";

export default class ModalFormsAdd extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "categories": return <CategoriesFormAdd {...this.props}/>;
			default: return <DefaultFormAdd {...this.props}/>;
		}
	}

	render(){
		return this.selectEditInputs();
	}
}
