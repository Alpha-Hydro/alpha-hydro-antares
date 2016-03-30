import React from "react";
import {Input, ButtonInput} from "react-bootstrap/lib";
import propertyHelpers from "./../../../utils/productPropertyHelper"

export default class NewProductProperty extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: 'new',
			productId: props.productId,
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
		var data = this.state;
		if(data.order && data.name && data.value){
			propertyHelpers.editProperty(data)
				.then(function (response) {
					this.props.newProperty(response);
					this.setState({
						order: '',
						name: '',
						value: ''
					})
				}.bind(this));
		}
	}
	
	render(){
		return(
			<tr>
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