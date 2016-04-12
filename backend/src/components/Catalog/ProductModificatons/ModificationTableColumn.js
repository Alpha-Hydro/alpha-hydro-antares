import React from "react";

export default class ModificationTableColumn extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<th>{this.props.column.name}</th>
		)
	}
}