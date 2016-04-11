import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationBodyTableRowTd extends React.Component{
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
		console.log('NEW VALUE: ',e.target.value);
		console.log(this);
	}

	render(){
		const value = this.state.value;
		return(
			<td className={this.props.classTd}>
				<Input type="text"
							 groupClassName="mb0"
							 bsSize="small"
							 value={value}
							 onChange={this.onChange.bind(this)}
							 onBlur={this.onBlur.bind(this)}
				/>
			</td>
		);
	}
}