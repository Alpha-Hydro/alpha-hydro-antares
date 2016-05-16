import React from "react";

import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";

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
				<td className="col-sm-1">
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.state.order}
							onChange={this.handleChange('order').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.state.name}
							onChange={this.handleChange('name').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.state.value}
							onChange={this.handleChange('value').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<Button bsStyle="primary" onClick={this.addNewProperty.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}