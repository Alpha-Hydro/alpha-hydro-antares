import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationTableColumn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: props.column.name
		}
	}

	handleChange(e){
		this.setState({
			name: e.target.value
		});
	}
	
	render(){
		return(
			<th>
				<Input
					type="text"
					groupClassName="mb0"
					className="text-center"
					value={this.state.name}
					onChange={this.handleChange.bind(this)}/>
			</th>
		)
	}
}