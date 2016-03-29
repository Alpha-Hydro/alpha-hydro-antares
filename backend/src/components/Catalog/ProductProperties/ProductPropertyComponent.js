import React from "react";
import {Glyphicon, Input, Button, ButtonGroup} from "react-bootstrap/lib";
import propertyHelpers from "./../../../utils/productPropertyHelper"

export default class ProductPropertyComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.property.id,
			productId: props.property.productId,
			order: props.property.order,
			name: props.property.name,
			value: props.property.value
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	handleSave(){
		this.props.onSave(this.state, this.props.index);
	}

	handleDelete(){
		propertyHelpers.deleteProperty(this.state.id)
			.then(function (response) {
				response === 'deleted' && this.props.onDelete(this.props.index);
			}.bind(this));
	}

	render(){
		return (
			<tr>
				<td className="col-md-1">
					<Input
						type="text"
						groupClassName="mb0" type="text"
						value={this.state.order}
						onChange={this.handleChange('order').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0" type="text"
						value={this.state.name}
						onChange={this.handleChange('name').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						value={this.state.value}
						onChange={this.handleChange('value').bind(this)}/>
				</td>
				<td>
					<input
						type="hidden"
						value={this.state.productId}/>
						<Button onClick={this.handleDelete.bind(this)}><Glyphicon glyph="trash"/></Button>
						<Button onClick={this.handleSave.bind(this)}><Glyphicon glyph="floppy-save" /></Button>
				</td>
			</tr>
		)
	}
}
