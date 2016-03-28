import React from "react";
import {Input, ButtonInput} from "react-bootstrap/lib";

export default class NewProductProperty extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: 'new_' + new Date().getTime(),
			productId: '',
			order: '',
			name: '',
			value: ''
		};
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}
	
	addNewProperty(e){
		this.props.newProperty(this.state);
		this.setState({
			order: '',
			name: '',
			value: ''
		})
	}
	
	render(){
		return(
			<tr className={this.props.show}>
				<td className="col-md-1"><Input
					type="text"
					value={this.state.order}
					onChange={this.handleChange('order').bind(this)}/>
				</td>
				<td><Input
					type="text"
					value={this.state.name}
					onChange={this.handleChange('name').bind(this)}/>
				</td>
				<td><Input
					type="text"
					value={this.state.value}
					onChange={this.handleChange('value').bind(this)}/>
				</td>
				<td>
					<ButtonInput onClick={this.addNewProperty.bind(this)}>Добавить</ButtonInput>
				</td>
			</tr>
		)
	}
}