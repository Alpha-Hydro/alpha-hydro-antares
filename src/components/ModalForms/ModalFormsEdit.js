import React from "react";
import DefaultFormEdit from "./DefaultFormEdit";
import PagesFormEdit from "./../Pages/PagesFormEdit";
import CategoriesFormEdit from "./../Catalog/Categories/CategoriesFormEdit";
import ProductsFormEdit from "./../Catalog/Products/ProductsFormEdit";
import MediaFormEdit from "./../Media/MediaFormEdit";
import MediaCategoriesFormEdit from "./../Media/MediaCategoriesFormEdit";

export default class ModalFormsEdit extends React.Component{
	constructor(props){
		super(props);
	}

	selectEditInputs(){
		switch (this.props.data.controller){
			case "pages": return <PagesFormEdit {...this.props}/>;
			case "categories": return <CategoriesFormEdit {...this.props}/>;
			case "products": return <ProductsFormEdit {...this.props}/>;
			case "media": return <MediaFormEdit {...this.props}/>;
			case "media-categories": return <MediaCategoriesFormEdit {...this.props}/>;
			default: return <DefaultFormEdit {...this.props}/>;
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
