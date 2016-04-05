import React from "react";
import {Input, Button, Glyphicon, ButtonGroup, Modal} from "react-bootstrap/lib";

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

	onChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	onBlur(){
		this.props.handleChange(this.state, this.props.index);
	}

	handleChangeValue(data, indexValue){
		this.props.handleChangeValue(data, this.props.index, indexValue)
	}

	render(){
		const values = this.props.row.values;
		const valuesTd = values.map(
			(value, i) => <ModificationTableRowValue
				key={i}
				index={i}
				value={value}
				handleChange={this.handleChangeValue.bind(this)}
			/>
		);
		return(
			<tr>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.order}
						onChange={this.onChange('order').bind(this)}
						onBlur={this.onBlur.bind(this)}
					/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.sku}
						onChange={this.onChange('sku').bind(this)}
						onBlur={this.onBlur.bind(this)}
					/>
				</td>
				{valuesTd}
				<td className="col-sm-1">
					<ButtonGroup bsSize="small">
						<Button bsStyle="success"><Glyphicon glyph="pencil"/></Button>
						<Button bsStyle="danger"><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}
}