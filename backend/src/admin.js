import React from "react";
import ReactDOM from "react-dom";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

import PanelNavComponent from "./components/PanelNavComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
import CategoriesAddButton from "./components/Catalog/Categories/CategoriesAddButton";
import ItemAddButton from "./components/Catalog/Products/ProductAddButton";
import ProductPropertyEditButton from "./components/Catalog/ProductProperties/ProductPropertyEditButton";
import ProductModificationEditButton from "./components/Catalog/ProductModificatons/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./components/Catalog/ProductModificatons/ProductModificationPropertyEditButton";

const adminPanel = document.getElementById('admin-panel');
if(adminPanel)
	ReactDOM.render(<PanelNavComponent />, adminPanel);

if(document.querySelector('.itemButtonsComponent')){
	const itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
	itemButtonsComponents.forEach(function (item) {
		var dataItem = {
			controller: item.getAttribute('data-controller'),
			id: item.getAttribute('data-id'),
			active: item.getAttribute('data-active'),
			deleted: item.getAttribute('data-deleted')
		};
		ReactDOM.render(<ItemButtonsComponent dataItem = {dataItem}/>, item);
	});
}

var dataItem;
const categoriesAddButtton = document.getElementById('categoriesAddButtton');
if (categoriesAddButtton){
	dataItem = {
		controller: categoriesAddButtton.getAttribute('data-controller'),
		id: categoriesAddButtton.getAttribute('data-id'),
		action: categoriesAddButtton.getAttribute('data-action'),
		title: categoriesAddButtton.getAttribute('data-title')
	};
	ReactDOM.render(<CategoriesAddButton dataItem = {dataItem}/>, categoriesAddButtton);
}

const itemAddButtton = document.getElementById('itemAddButtton');
if (itemAddButtton){
	dataItem = {
		controller: itemAddButtton.getAttribute('data-controller'),
		categoryId: itemAddButtton.getAttribute('data-categoryId'),
		action: itemAddButtton.getAttribute('data-action'),
		title: itemAddButtton.getAttribute('data-title')
	};
	ReactDOM.render(<ItemAddButton dataItem = {dataItem}/>, itemAddButtton);
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
