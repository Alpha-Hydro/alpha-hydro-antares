import React from "react";
import Button from "./buttons/Button";


export default class ButtonList extends React.Component{
  render(){

		const Buttons  = [
			{icon: "pencil-square-o", text: "Редактировать", action: "edit"},
			{icon: "plus", text: "Добавить", action: "add"},
			{icon: "trash", text: "Удалить", action: "delete"},
			{icon: "eye-slash", text: "Скрыть", action: "disabled"},
			{icon: "share-alt", text: "SEO", action: "seo"}
		].map((button, i) => <Button key={i} icon={button.icon} title={button.text} action={button.action}/>);

		return (
      <ul class="navigation">
				{Buttons}
      </ul>
    )
  }
}
