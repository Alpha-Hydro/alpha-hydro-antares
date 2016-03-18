import React from "react";
import DefaultFormEdit from "./DefaultFormEdit";
import PagesFormEdit from "./../Pages/PagesFormEdit";
import CategoriesFormEdit from "./../Catalog/CategoriesFormEdit";

export default class ModalFormsEdit extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "pages": return <PagesFormEdit {...this.props}/>;
			case "categories": return <CategoriesFormEdit {...this.props}/>;
			default: return <DefaultFormEdit {...this.props}/>;
		}
	}

	render(){
		return this.selectEditInputs();
	}
}
