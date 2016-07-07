import React from "react";
import ReactDOM from "react-dom";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

import PanelButtonsComponent from "./components/PanelButtonsComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
import CategoriesAddButton from "./components/Catalog/Categories/CategoriesAddButton";
import ProductAddButton from "./components/Catalog/Products/ProductAddButton";
import ProductPropertyEditButton from "./components/Catalog/ProductProperties/ProductPropertyEditButton";
import ProductModificationEditButton from "./components/Catalog/ProductModificatons/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./components/Catalog/ProductModificatons/ProductModificationPropertyEditButton";

const adminPanel = document.getElementById('admin-panel');
if(adminPanel)
	ReactDOM.render(<PanelButtonsComponent bsClass="btn-group-lg btn-group" dataItem = {adminPanel.dataset}/>, adminPanel);

if(document.querySelector('.itemButtonsComponent')){
	const itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
	itemButtonsComponents.forEach(function (item) {
		/*var dataItem = {
			controller: item.getAttribute('data-controller'),
			id: item.getAttribute('data-id'),
			active: item.getAttribute('data-active'),
			deleted: item.getAttribute('data-deleted')
		};*/
		ReactDOM.render(<ItemButtonsComponent dataItem = {item.dataset}/>, item);
	});
}

//var dataItem;
const categoriesAddButtton = document.getElementById('categoriesAddButtton');
if (categoriesAddButtton){
	/*dataItem = {
		controller: categoriesAddButtton.dataset.controller,
		id: categoriesAddButtton.dataset.id,
		action: categoriesAddButtton.dataset.action,
		title: categoriesAddButtton.dataset.title
	};*/
	ReactDOM.render(<CategoriesAddButton dataItem = {categoriesAddButtton.dataset}/>, categoriesAddButtton);
}

const productAddButtton = document.getElementById('itemAddButtton');
if (productAddButtton){
	/*dataItem = {
		controller: itemAddButtton.dataset.controller,
		categoryId: itemAddButtton.dataset.categoryid,
		action: itemAddButtton.dataset.action,
		title: itemAddButtton.dataset.title
	};*/
	ReactDOM.render(<ProductAddButton dataItem = {productAddButtton.dataset}/>, productAddButtton);
}

var productId;
const productPropertyEdit = document.getElementById('product-property-edit');
if (productPropertyEdit){
	productId = productPropertyEdit.getAttribute('data-id');
	ReactDOM.render(<ProductPropertyEditButton
		productId = {productId}
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
			<ProductModificationEditButton productId = {productId} bsStyle="primary"/>
			<ProductModificationPropertyEditButton productId = {productId} bsStyle="primary"/>
		</ButtonGroup>
		, productModificationEdit);
}
