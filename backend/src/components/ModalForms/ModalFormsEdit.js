import React from "react";
import DefaultFormEdit from "./DefaultFormEdit";
import PagesFormEdit from "./../Pages/PagesFormEdit";
import CategoriesFormEdit from "./../Catalog/CategoriesFormEdit";
import ProductsFormEdit from "./../Catalog/ProductsFormEdit";

export default class ModalFormsEdit extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "pages": return <PagesFormEdit {...this.props}/>;
			case "categories": return <CategoriesFormEdit {...this.props}/>;
			case "products": return <ProductsFormEdit {...this.props}/>;
			default: return <DefaultFormEdit {...this.props}/>;
		}
	}

	render(){
		return this.selectEditInputs();
	}
}
