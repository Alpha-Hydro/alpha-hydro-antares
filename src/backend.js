import React from "react";
import ReactDOM from "react-dom";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

import IssueModalComponent from "./components/IssueModalComponent";

//import ForumActions from "./ts/ForumActions";
import Slugify from "./ts/Slugify";
import SearchForm from "./ts/search";

import PanelButtonsComponent from "./components/PanelButtonsComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
import ForumButtonsComponent from "./components/ForumButtonComponent";
import CategoriesAddButton from "./components/Catalog/Categories/CategoriesAddButton";
import ProductAddButton from "./components/Catalog/Products/ProductAddButton";
import ProductPropertyEditButton from "./components/Catalog/ProductProperties/ProductPropertyEditButton";
import ProductModificationEditButton from "./components/Catalog/ProductModificatons/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./components/Catalog/ProductModificatons/ProductModificationPropertyEditButton";
import ProductPassportPdf from "./components/Catalog/Products/ProductPassportPdf";
import AdminModalAuth from "./components/AdminModalAuth";

const modalIssue = document.getElementById('modalIssue');
modalIssue && ReactDOM.render(
	<IssueModalComponent data={modalIssue.dataset}/>,
 	modalIssue
);

const modalAuth = document.getElementById('modalAuth');
modalAuth && ReactDOM.render(
	<AdminModalAuth/>, modalAuth
);

//let forumActions = ForumActions;

let onchangeSlugify = new Slugify('.onchangeSlugify');
onchangeSlugify.onchange();

let refreshSlugify = new Slugify('.refreshSlugify');
refreshSlugify.refresh();

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

if(document.querySelector('.forumButtonComponent')){
	const forumButtonsComponents = [].slice.call(document.querySelectorAll('.forumButtonComponent'));
	forumButtonsComponents.forEach(function (item) {
		ReactDOM.render(<ForumButtonsComponent dataItem = {item.dataset}/>, item);
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

const passportPdf = document.getElementById('passport-pdf');
passportPdf && ReactDOM.render(
	<ProductPassportPdf dataItem = {passportPdf.dataset}/>
	, passportPdf
);

let productId;

if (document.getElementById('product-property-edit')){
	const productPropertyEdit = document.getElementById('product-property-edit');
	productId = productPropertyEdit.getAttribute('data-id');
	ReactDOM.render(<ProductPropertyEditButton
		role = {productPropertyEdit.getAttribute('role')}
		id = {productPropertyEdit.getAttribute('data-id')}
		bsStyle="primary"
		bsSize="small"
		className="pull-right"
	/>, productPropertyEdit);
}

if (document.getElementById('product-modification-edit')){
	const productModificationEdit = document.getElementById('product-modification-edit');
	productId = productModificationEdit.getAttribute('data-id');
	ReactDOM.render(
		<ButtonGroup className="pull-right"	bsSize="small">
			<ProductModificationEditButton
				id = {productId}
				bsStyle="primary"
				role = {productModificationEdit.getAttribute('role')}/>
			<ProductModificationPropertyEditButton
				id = {productId}
				bsStyle="primary"
				role = {productModificationEdit.getAttribute('role')}/>
		</ButtonGroup>
		, productModificationEdit);
}

if (document.getElementById('search')){
	new SearchForm('search');
}