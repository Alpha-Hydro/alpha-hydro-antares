import React from "react";
import {Button, Glyphicon} from "react-bootstrap/lib";
import ModificationTableColumn from "./ModificationTableColumn";

export default class ModificationHeadTable extends React.Component{
	constructor(props){
		super(props);
	}

	columnName() {
		var self = this;
		return this.props.columns.map(function (column, i) {
			return <ModificationTableColumn
				key={i}
				column={column}
				index={i}
				handleChange={self.props.handleChange}/>
		});
	}

	render() {
		return (
			<tr>
				<th>№№/пп</th>
				<th>Наименование</th>
				{this.columnName()}
				<th><Button bsStyle="success"><Glyphicon glyph="pencil"/></Button></th>
			</tr>
		);
	}
}
