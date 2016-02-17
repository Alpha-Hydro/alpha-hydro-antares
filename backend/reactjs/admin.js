import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav"

const app = document.getElementById('admin-panel');

var data = [
    {id: 1, icon: "pencil-square-o", text: "Редактировать"},
    {id: 2, icon: "plus", text: "Добавить"},
    {id: 3, icon: "trash", text: "Удалить"},
    {id: 4, icon: "share-alt", text: "SEO"}

];

ReactDOM.render(<Nav data={data}/>, app);
