import React from "react";

export default class Button extends React.Component{
  render(){
    return (
      <li>
        <a href="" data-toggle="tooltip" data-placement="left" title={this.props.title}>
          <i className={"text-muted fa fa-fw fa-2x fa-"+ (this.props.icon)}></i>
        </a>
      </li>
    )
  }
}
