import React from "react";
import {Input, Button} from "react-bootstrap/lib";

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
		e.preventDefault();
		var data = this.state;
		if(data.order && data.name && data.value){
			this.setState({
				order: '',
				name: '',
				value: ''
			}, () => {this.props.handleAdd(data)});
		}
	}
	
	render(){
		return(
			<tr className="active">
				<td className="col-sm-1"><Input
					type="text"
					groupClassName="mb0"
					value={this.state.order}
					onChange={this.handleChange('order').bind(this)}/>
				</td>
				<td><Input
					type="text"
					groupClassName="mb0"
					value={this.state.name}
					onChange={this.handleChange('name').bind(this)}/>
				</td>
				<td><Input
					type="text"
					groupClassName="mb0"
					value={this.state.value}
					onChange={this.handleChange('value').bind(this)}/>
				</td>
				<td>
					<Button bsStyle="primary" onClick={this.addNewProperty.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}