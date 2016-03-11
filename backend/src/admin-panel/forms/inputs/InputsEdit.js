import React from "react";
import PagesEdit from "./pagesEdit";
import CatalogCategoriesEdit from "./catalogCategoriesEdit";

export default class InputsEdit extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "pages": return <PagesEdit {...this.props}/>;
			case "categories": return <CatalogCategoriesEdit {...this.props}/>;
		}
	}

	render(){
		return this.selectEditInputs();
	}
}
