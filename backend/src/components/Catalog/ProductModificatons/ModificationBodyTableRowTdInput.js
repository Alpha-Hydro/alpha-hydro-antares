import React from "react";
import Input from "react-bootstrap/lib/Input";


export default class ModificationBodyTableRowTdInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value
		}
	}

	onChange(e){
		e.preventDefault();
		this.setState({value:e.target.value});
	}

	onBlur(e){
		var newValue = e.target.value;
		console.log('new value: ', newValue);
		this.props.handleBlur(newValue);
	}
	
	render(){
		return(
			<Input type="text"
						 groupClassName="mb0"
						 bsSize="small"
						 value={this.state.value}
						 onChange={this.onChange.bind(this)}
						 onBlur={this.onBlur.bind(this)}
			/>
		)
	}
}