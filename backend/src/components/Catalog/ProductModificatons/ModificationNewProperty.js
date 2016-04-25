import React from "react";
import {Input, Button} from "react-bootstrap/lib";

export default class ModificationNewProperty extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: 'new',
			productId: this.props.productId,
			order: '',
			name: ''
		}
	}

	onChange(key){
		return (e) => {
			this.state[key]	= e.target.value;
			this.setState(this.state);
		};
	}

	addNewPropertyModification(e){
		e.preventDefault();
		var newProperty = this.state;
		if(newProperty.order && newProperty.name){
			this.setState({
				id: 'new',
				productId: this.props.productId,
				order: '',
				name: ''
			}, () => {this.props.handleAdd(newProperty)});
		}
	}

	render(){
		return(
			<tr className="active">
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						value={this.state.order}
						onChange={this.onChange('order').bind(this)} />
				</td>
				<td>
					<Input
						type="text" 
						groupClassName="mb0" 
						value={this.state.name}
						onChange={this.onChange('name').bind(this)} />
				</td>
				<td>
					<Button bsStyle="primary" onClick={this.addNewPropertyModification.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}