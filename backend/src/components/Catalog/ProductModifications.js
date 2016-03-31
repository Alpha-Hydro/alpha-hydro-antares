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
		this.dump = this.dump.bind(this);
	}
	
	dump (obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}
	
	render() {
		const columns = this.state.columns;
		const columnsTh = columns.map(
			(column, i) => <ModificationTableColumn key={i} column={column}/>
		);
		const rows = this.state.rows;
		const rowsTr = rows.map(
			(row, i) => <ModificationTableRows key={i} row={row}/>
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
