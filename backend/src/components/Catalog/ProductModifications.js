import React from "react";
import {Table, Input, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationTableRows from "./ProductModificatons/ModificationTableRows";
import ModificationTableNewItem from "./ProductModificatons/ModificationTableNewItem";
import ModificationHeadTable from "./ProductModificatons/ModificationHeadTable";
import ModificationBodyTable from "./ProductModificatons/ModificationBodyTable";

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

	handleAdd(data){
		console.log('NEW MODIFICATION', data);
		this.state.rows = this.state.rows.concat(data);
		this.setState(this.state);
		this.props.handleChange(this.state);
	}

	handleDelete(index){
		console.log('handleDelete: ', this.state.rows[index]);
		var rows = this.state.rows;
		rows.splice(index, 1);
		this.setState({rows: rows});
		this.props.handleChange(this.state);
	}

	render() {
		return (
			<Table className="mb0">
				<thead>
					<ModificationHeadTable
						columns={this.state.columns}
						handleChange={this.handleChangeColumn.bind(this)}
					/>
				</thead>
				<ModificationBodyTable 
					rows={this.state.rows} 
					handleDeleteRow={this.handleDelete.bind(this)}/>
				<tfoot>
					<ModificationTableNewItem
						parentId={this.props.dataTable.parentId}
						columns={this.state.columns}
						handleAdd={this.handleAdd.bind(this)}/>
				</tfoot>
			</Table>
		)
	}
}
