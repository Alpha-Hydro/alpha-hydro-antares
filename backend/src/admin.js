import React from "react";
import ReactDOM from "react-dom";

import PanelNavComponent from "./components/PanelNavComponent"
//import TitleEdit from "./edit-title/TitleEdit";

const adminPanel = document.getElementById('admin-panel');
if(adminPanel)
	ReactDOM.render(<PanelNavComponent />, adminPanel);

//const pageTitle = document.querySelector('h1');
//const title = pageTitle.textContent;
//const pageHeader = document.querySelector('.page-header');
//
//if(pageHeader)
//	ReactDOM.render(<TitleEdit title={title}/>, pageHeader);
