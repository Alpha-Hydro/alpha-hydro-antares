import React from "react";
import {Table, Input, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationTableColumn from "./ProductModificatons/ModificationTableColumn"
import ModificationTableRows from "./ProductModificatons/ModificationTableRows"

export default class ProductModifications extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: props.dataTable.columns,
			rows: props.dataTable.rows
		};
	}

	handleChangeColumn(data, index){
		this.state.columns[index] = data;
		this.setState(this.state);
		this.props.handleChange(this.state);
	}
	
	handleChangeRowItem(data, index){
		this.state.rows[index].item = data;
		this.setState(this.state);
		this.props.handleChange(this.state);
	}

	handleChangeRowValue(data, indexRow, indexValue){
		this.state.rows[indexRow].values[indexValue] = data;
		this.setState(this.state);
		this.props.handleChange(this.state);
	}


	render() {
		const columns = this.state.columns;
		const columnsTh = columns.map(
			(column, i) => <ModificationTableColumn
				key={i}
				column={column}
				index={i}
				handleChange={this.handleChangeColumn.bind(this)}/>
		);
		const rows = this.state.rows;
		const rowsTr = rows.map(
			(row, i) => <ModificationTableRows
				key={i}
				row={row}
				index={i}
				handleChange={this.handleChangeRowItem.bind(this)}
				handleChangeValue={this.handleChangeRowValue.bind(this)}
			/>
		);
		
		return (
			<Table>
				<thead>
					<tr>
						<th>№№/пп</th>
						<th>Наименование</th>
						{columnsTh}
						<th><Button><Glyphicon glyph="plus"/></Button></th>
					</tr>
				</thead>
				<tbody>
					{rowsTr}
				</tbody>
			</Table>
		)
	}
}
