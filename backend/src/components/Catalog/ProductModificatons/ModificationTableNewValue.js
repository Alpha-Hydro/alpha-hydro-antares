import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationTableNewValue extends React.Component{
	constructor(props){
		super(props);
	}

	onChange(e){
		var value = e.target.value;
		this.props.handleChange(value, this.props.index);
	}

	render(){
		return(
			<td>
				<Input
					type="text"
					groupClassName="mb0"
					bsSize="small"
					className="text-center"
					value={this.props.value}
					onChange={this.onChange.bind(this)} />
			</td>
		)
	}
}
