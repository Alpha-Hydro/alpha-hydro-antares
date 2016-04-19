import React from "react";
import ModificationTableColumn from "./ModificationTableColumn";

export default class ModificationHeadTable extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<tr>
				<th>№№/пп</th>
				<th>Наименование</th>
				{this.props.columns.map(function (column, i) {
					return <ModificationTableColumn
						key={i}
						column={column} />
				})}
				<th>Действия</th>
			</tr>
		);
	}
}
