//import Test from "./module";
import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav"

const app = document.getElementById('admin-panel');

var data = [
    {id: 1, icon: "pencil-square-o", text: "Редактировать", action: "edit"},
    {id: 2, icon: "plus", text: "Добавить", action: "add"},
    {id: 3, icon: "trash", text: "Удалить", action: "delete"},
    {id: 4, icon: "share-alt", text: "SEO", action: "seo"}

];
ReactDOM.render(<Nav data={data}/>, app);
