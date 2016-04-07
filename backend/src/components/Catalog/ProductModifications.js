import React from "react";
import {Table, Input, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationTableColumn from "./ProductModificatons/ModificationTableColumn"
import ModificationTableRows from "./ProductModificatons/ModificationTableRows"
import ModificationTableNewItem from "./ProductModificatons/ModificationTableNewItem"

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

	onAdd(data){
		console.log('NEW MODIFICATION', data);
		this.state.rows = this.state.rows.concat(data);
		this.setState(this.state);
		this.props.handleChange(this.state);
	}

	onDelete(index){
		// console.log('onDelete: ', this.state.rows[index]);
		console.log(index);
		var rows = this.state.rows;
		rows.splice(index, 1);
		console.log(rows);
		this.setState({rows: rows});
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
		console.log(rows);
		const rowsTr = rows.map(
			(row, i) => <ModificationTableRows
				key={i}
				row={row}
				index={i}
				handleChange={this.handleChangeRowItem.bind(this)}
				handleChangeValue={this.handleChangeRowValue.bind(this)}
				handleDelete={this.onDelete.bind(this)}
			/>
		);
		
		return (
			<Table className="mb0">
				<thead>
					<tr>
						<th>№№/пп</th>
						<th>Наименование</th>
						{columnsTh}
						<th><Button bsStyle="success"><Glyphicon glyph="pencil"/></Button></th>
					</tr>
				</thead>
				<tbody>
					{rowsTr}
				</tbody>
				<tfoot>
					<ModificationTableNewItem
						parentId={this.props.dataTable.parentId}
						columns={this.state.columns}
						handleAdd={this.onAdd.bind(this)}/>
				</tfoot>
			</Table>
		)
	}
}
