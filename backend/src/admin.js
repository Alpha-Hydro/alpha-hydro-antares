import React from "react";
import ReactDOM from "react-dom";
import {ButtonGroup} from "react-bootstrap";
import PanelNavComponent from "./components/PanelNavComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
import AddButtonComponent from "./components/AddButtonComponent";
import ProductPropertyEditButton from "./components/ProductPropertyEditButton";
import ProductModificationEditButton from "./components/ProductModificationEditButton";
import ProductModificationPropertyEditButton from "./components/ProductModificationPropertyEditButton";

//import TitleEdit from "./edit-title/TitleEdit";

var productId;

const adminPanel = document.getElementById('admin-panel');
if(adminPanel)
	ReactDOM.render(<PanelNavComponent />, adminPanel);

if(document.querySelector('.itemButtonsComponent')){
	const itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
	itemButtonsComponents.forEach(function (item) {
		var dataItem = {
			controller: item.getAttribute('data-controller'),
			id: item.getAttribute('data-id'),
			active: item.getAttribute('data-active')
		};
		ReactDOM.render(<ItemButtonsComponent dataItem = {dataItem}/>, item);
	});
}

const addButtton = document.getElementById('addButtonComponent');
if (addButtton){
	var dataItem = {
		controller: addButtton.getAttribute('data-controller'),
		id: addButtton.getAttribute('data-id'),
		action: addButtton.getAttribute('data-action'),
		title: addButtton.getAttribute('data-title')
	};
	ReactDOM.render(<AddButtonComponent dataItem = {dataItem}/>, addButtton);
}

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


//const pageTitle = document.querySelector('h1');
//const title = pageTitle.textContent;
//const pageHeader = document.querySelector('.page-header');
//
//if(pageHeader)
//	ReactDOM.render(<TitleEdit title={title}/>, pageHeader);
