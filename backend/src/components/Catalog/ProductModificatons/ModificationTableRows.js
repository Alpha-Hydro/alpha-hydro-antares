import React from "react";
import {Input, Button, Glyphicon, ButtonGroup, Modal} from "react-bootstrap/lib";

import ModificationTableRowValue from "./ModificationTableRowValue";

export default class ModificationTableRows extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sku: props.row.item.sku,
			order: props.row.item.order
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	handleSaveItem(e){
		e.preventDefault();
		console.log(e.target.value);
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
						value={this.state.order}
						onChange={this.handleChange('order').bind(this)}
						onBlur={this.handleSaveItem.bind(this)}
					/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						className="text-center"
						value={this.state.sku}
						onChange={this.handleChange('sku').bind(this)}
						onBlur={this.handleSaveItem.bind(this)}
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