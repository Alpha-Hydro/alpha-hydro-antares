import React from "react";

export default class Button extends React.Component{
  render(){
    return (
      <li>
        <a href="#" title={this.props.title}>
          <i className={"text-muted fa fa-fw fa-2x fa-"+ (this.props.icon)}></i>
        </a>
      </li>
    )
  }
}
