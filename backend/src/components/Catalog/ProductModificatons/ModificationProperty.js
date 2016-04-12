import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap/lib";

export default class ModificationProperty extends  React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<tr>
				<td className="col-sm-2">
					<Input
						type="text"
						groupClassName="mb0"
						value={this.props.property.order}
						/>
				</td>
				<td>
					<Input
					type="text"
					groupClassName="mb0"
					value={this.props.property.name}
					/>
				</td>
				<td>
					<Button bsStyle="danger">
						<Glyphicon glyph="trash"/>
					</Button>
				</td>
			</tr>
		)
	}
}