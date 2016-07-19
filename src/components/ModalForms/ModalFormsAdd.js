import React from "react";
import DefaultFormAdd from "./DefaultFormAdd";
import CategoriesFormAdd from "../Catalog/Categories/CategoriesFormAdd";
import ProductFormAdd from "../Catalog/Products/ProductFormAdd";

export default class ModalFormsAdd extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "categories": return <CategoriesFormAdd {...this.props}/>;
			case "products": return <ProductFormAdd {...this.props}/>;
			default: return <DefaultFormAdd {...this.props}/>;
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
				{this.selectEditInputs()}
				<input type="hidden" name="currentUrl" value={window.location.href}/>
			</form>
		);

	}
}
