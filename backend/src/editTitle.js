import React from "react";
import ReactDOM from "react-dom";

import TitleEdit from "./edit-title/TitleEdit";

const pageTitle = document.querySelector('h1');

ReactDOM.render(<TitleEdit title={pageTitle.innerText}/>, document.querySelector('.page-header'));
