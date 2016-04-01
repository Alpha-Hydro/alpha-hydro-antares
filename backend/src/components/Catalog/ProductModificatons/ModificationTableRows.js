import React from "react";
import {Input, Button, Glyphicon, ButtonGroup, Modal} from "react-bootstrap/lib";
import modificationHelpers from "./../../../utils/productModificationHelper";

import ModificationTableRowValue from "./ModificationTableRowValue";

export default class ModificationTableRows extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.row.item.id,
			parentId: props.row.item.parentId,
			sku: props.row.item.sku,
			name: props.row.item.name,
			order: props.row.item.order,
			deleted: props.row.item.deleted
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	handleSave(e){
		modificationHelpers.editModification(this.state)
			.then(function (response) {
				console.log('EDIT', response);
			}.bind(this));
	}

	render(){
		const values = this.props.row.values;
		const valuesTd = values.map(
			(value, i) => <ModificationTableRowValue key={i} value={value} />
		);
		return(
			<tr>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.order}
						onChange={this.handleChange('order').bind(this)}
						onBlur={this.handleSave.bind(this)}
					/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.sku}
						onChange={this.handleChange('sku').bind(this)}
						onBlur={this.handleSave.bind(this)}
					/>
				</td>
				{valuesTd}
				<td className="col-sm-1">
					<ButtonGroup>
						<Button><Glyphicon glyph="pencil"/></Button>
						<Button><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}
}