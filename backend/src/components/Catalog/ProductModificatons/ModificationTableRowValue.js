import React from "react";
import Input from "react-bootstrap/lib/Input";


export default class ModificationTableRowValue extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			paramId: props.value.paramId,
			subproductId: props.value.subproductId,
			value: props.value.value
		}
	}

	onChange(e){
		this.setState({
			value: e.target.value
		});
	}

	onBlur(){
		this.props.handleChange(this.state, this.props.index);
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
						onChange={this.onChange.bind(this)}
						onBlur={this.onBlur.bind(this)}/>
				</td>
		)
	}
}