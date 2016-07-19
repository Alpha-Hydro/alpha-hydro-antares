import React from "react";

import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";

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
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.state.order}
							onChange={this.onChange('order').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<FormGroup className="mb0">
						<FormControl
							type="text"
							value={this.state.name}
							onChange={this.onChange('name').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<Button bsStyle="primary" onClick={this.addNewPropertyModification.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}