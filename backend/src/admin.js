import React from "react";
import ReactDOM from "react-dom";

import PanelNavComponent from "./components/PanelNavComponent";
import ItemButtonsComponent from "./components/ItemButtonsComponent";
//import TitleEdit from "./edit-title/TitleEdit";

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
		//console.log(dataItem);
		ReactDOM.render(<ItemButtonsComponent dataItem = {dataItem}/>, item);
	});
}

//const pageTitle = document.querySelector('h1');
//const title = pageTitle.textContent;
//const pageHeader = document.querySelector('.page-header');
//
//if(pageHeader)
//	ReactDOM.render(<TitleEdit title={title}/>, pageHeader);
