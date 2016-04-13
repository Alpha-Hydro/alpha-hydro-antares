import React from "react";
import {Table, Input, Button, Glyphicon} from "react-bootstrap/lib";
import modificationHelpers from "./../../../utils/productModificationHelper"

import ModificationTableNewItem from "./ModificationTableNewItem";
import ModificationHeadTable from "./ModificationHeadTable";
import ModificationBodyTable from "./ModificationBodyTable";

export default class ProductModificationsTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: props.dataTable.columns,
			rows: props.dataTable.rows
		};
	}

	handleChangeColumn(data, index){
		this.state.columns[index] = data;
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});
	}

	handleDeleteColumn(index){
		console.log('DELETE PROPERTY: ', this.state.columns[index]);
		var columns = this.state.columns;
		var rows = this.state.rows;
		columns.splice(index, 1);
		rows.map(function (row) {
			row.values.splice(index, 1);
		});
		this.setState({columns: columns, rows: rows}, ()=>{
			this.props.handleChange(this.state);
		})
	}

	handleAddColumn(data){
		console.log('NEW PROPERTY: ', data);
		this.state.columns = this.state.columns.concat(data);
		this.state.rows.map(function (row) {
			row.values = row.values.concat({value: ''});
		});
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});
	}
	
	handleChangeRowItem(data, index){
		this.state.rows[index].item = data;
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});
	}

	handleChangeRowValue(data, indexRow, indexValue){
		this.state.rows[indexRow].values[indexValue] = data;
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});

	}

	handleAdd(data){
		console.log('NEW MODIFICATION', data);
		this.state.rows = this.state.rows.concat(data);
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});
	}

	handleDelete(index){
		console.log('handleDelete: ', this.state.rows[index]);
		var rows = this.state.rows;
		var item = rows[index].item;
		if(item.id != 'new') modificationHelpers.deleteModification(item.id);
		rows.splice(index, 1);
		this.setState({rows: rows}, ()=>{
			this.props.handleChange(this.state);
		});
	}

	render() {
		return (
			<Table className="mb0">
				<thead>
					<ModificationHeadTable
						productId={this.props.dataTable.parentId}
						columns={this.state.columns}
						handleChange={this.handleChangeColumn.bind(this)}
						handleDelete={this.handleDeleteColumn.bind(this)}
						handleAdd={this.handleAddColumn.bind(this)}
					/>
				</thead>
				<ModificationBodyTable 
					rows={this.state.rows} 
					handleDeleteRow={this.handleDelete.bind(this)}
					handleChangeRowItem={this.handleChangeRowItem.bind(this)}
					handleChangeRowValue={this.handleChangeRowValue.bind(this)} />
				<tfoot>
					<ModificationTableNewItem
						parentId={this.props.dataTable.parentId}
						columns={this.state.columns}
						handleAdd={this.handleAdd.bind(this)} />
				</tfoot>
			</Table>
		)
	}
}
