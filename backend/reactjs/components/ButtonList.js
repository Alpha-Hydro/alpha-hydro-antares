import React from "react";
import Button from "./Button";

export default class ButtonList extends React.Component{
  render(){
    return (
      <ul class="navigation">
        <Button icon="pencil-square-o" title="Редактировать"/>
        <Button icon="plus" title="Добавить"/>
        <Button icon="trash" title="Удалить"/>
        <Button icon="share-alt" title="SEO"/>
      </ul>
    )
  }
}
