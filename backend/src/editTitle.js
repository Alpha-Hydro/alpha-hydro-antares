import React from "react";
import ReactDOM from "react-dom";

import TitleEdit from "./edit-title/TitleEdit";

const pageTitle = document.querySelector('h1');
const title = pageTitle.textContent;

const pageHeader = document.querySelector('.page-header');

if(pageHeader)
	ReactDOM.render(<TitleEdit title={title}/>, pageHeader);
