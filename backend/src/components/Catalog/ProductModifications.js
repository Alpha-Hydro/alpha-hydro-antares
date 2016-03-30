import React from "react";
import {Table, Input, ButtonInput, Button, Glyphicon} from "react-bootstrap/lib";

export default class ProductModifications extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: props.dataTable.columns,
			rows: props.dataTable.rows
		};
		this.dump = this.dump.bind(this);
	}
	
	dump (obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}
	
	render() {
		const columns = this.state.columns;
		const columnsTh = columns.map(
			(column, i) => <th key={i}>{column.name}</th>
		);
		const rows = this.state.rows;
		const rowsTr = rows.map(
			(row, i) => <tr key={i}>
				<td>{row.item.order}</td>
				<td>{row.item.sku}</td>
			</tr>
		);
		return (
			<Table>
				<thead>
					<tr>
						<th>№№/пп</th>
						<th>Наименование</th>
						{columnsTh}
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					{rowsTr}
				</tbody>
			</Table>
		)
	}
}
