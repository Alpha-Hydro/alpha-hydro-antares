import React from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";

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
				<FormGroup className="mb0" bsSize="small">
					<FormControl
						type="text"
						className="text-center"
						value={this.props.value}
						onChange={this.onChange.bind(this)}
					/>
				</FormGroup>
			</td>
		)
	}
}
