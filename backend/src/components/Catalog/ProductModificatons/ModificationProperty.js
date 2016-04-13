import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap/lib";

export default class ModificationProperty extends  React.Component{
	constructor(props){
		super(props);
	}
	
	onChange(key){
		return (e) => {
			this.props.property[key] = e.target.value;
			this.props.handleChange(this.props.property, this.props.index);
		}
	}
	
	onDelete(){
		this.props.handleDelete(this.props.index);
	}

	render(){
		return (
			<tr>
				<td className="col-sm-2">
					<Input
						type="text"
						groupClassName="mb0"
						value={this.props.property.order}
						onChange={this.onChange('order').bind(this)}
						/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						value={this.props.property.name}
						onChange={this.onChange('name').bind(this)}
					/>
				</td>
				<td>
					<Button bsStyle="danger" onClick={this.onDelete.bind(this)}>
						<Glyphicon glyph="trash"/>
					</Button>
				</td>
			</tr>
		)
	}
}