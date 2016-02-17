import React from "react";
import Button from "./Button";

export default class ButtonList extends React.Component{
  render(){
		var buttonItems = this.props.data.map((button)=>{
			return (
				<Button icon={button.icon} title={button.text} key={button.id} action={button.action}/>
			)
		});
    return (
      <ul class="navigation">
				{buttonItems}
      </ul>
    )
  }
}
