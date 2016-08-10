import React from "react";
import ReactDOM from "react-dom";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

import IssueModalForm from "./components/IssueModalForm";

import PanelButtonsComponent from "./components/PanelButtonsComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
import CategoriesAddButton from "./components/Catalog/Categories/CategoriesAddButton";
import ProductAddButton from "./components/Catalog/Products/ProductAddButton";
import ProductPropertyEditButton from "./components/Catalog/ProductProperties/ProductPropertyEditButton";
import ProductModificationEditButton from "./components/Catalog/ProductModificatons/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./components/Catalog/ProductModificatons/ProductModificationPropertyEditButton";
import ProductPassportPdf from "./components/Catalog/Products/ProductPassportPdf";

/*const issueModal = document.getElementById('issueModal');
issueModal && ReactDOM.render(
	<IssueModalForm/>,
	issueModal
);*/

const adminPanel = document.getElementById('admin-panel');
adminPanel && ReactDOM.render(
	<PanelButtonsComponent bsClass="btn-group-lg btn-group" dataItem = {adminPanel.dataset}/>,
	adminPanel
);

if(document.querySelector('.itemButtonsComponent')){
	const itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
	itemButtonsComponents.forEach(function (item) {
		ReactDOM.render(<ItemButtonsComponent dataItem = {item.dataset}/>, item);
	});
}

const categoriesAddButtton = document.getElementById('categoriesAddButtton');
categoriesAddButtton &&	ReactDOM.render(
	<CategoriesAddButton dataItem = {categoriesAddButtton.dataset}/>,
	categoriesAddButtton
);

const productAddButtton = document.getElementById('itemAddButtton');
productAddButtton && ReactDOM.render(
	<ProductAddButton dataItem = {productAddButtton.dataset}/>,
	productAddButtton
);

var productId;
const productPropertyEdit = document.getElementById('product-property-edit');
if (productPropertyEdit){
	productId = productPropertyEdit.getAttribute('data-id');
	ReactDOM.render(<ProductPropertyEditButton
		role = {productPropertyEdit.getAttribute('role')}
		id = {productPropertyEdit.getAttribute('data-id')}
		bsStyle="primary"
		bsSize="small"
		className="pull-right"
	/>, productPropertyEdit);
}

const productModificationEdit = document.getElementById('product-modification-edit');
if (productModificationEdit){
	productId = productModificationEdit.getAttribute('data-id');
	ReactDOM.render(
		<ButtonGroup className="pull-right"	bsSize="small">
			<ProductModificationEditButton
				id = {productId}
				bsStyle="primary"
				role = {productPropertyEdit.getAttribute('role')}/>
			<ProductModificationPropertyEditButton
				id = {productId}
				bsStyle="primary"
				role = {productPropertyEdit.getAttribute('role')}/>
		</ButtonGroup>
		, productModificationEdit);
}

const passportPdf = document.getElementById('passport-pdf');
passportPdf && ReactDOM.render(
	<ProductPassportPdf dataItem = {passportPdf.dataset}/>
	, passportPdf
);