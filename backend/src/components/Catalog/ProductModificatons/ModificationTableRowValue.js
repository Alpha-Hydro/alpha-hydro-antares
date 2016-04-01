import React from "react";
import Input from "react-bootstrap/lib/Input";


export default class ModificationTableRowValue extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value.value
		}
	}

	handleChange(e){
		this.setState({
			value: e.target.value
		});
	}

	render(){
		return(
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.value}
						onChange={this.handleChange.bind(this)}/>
				</td>
		)
	}
}