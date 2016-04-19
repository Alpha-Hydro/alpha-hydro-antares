import React from "react";
import Table from "react-bootstrap/lib/Table";

import ModificationPropertyTableRow from "./ModificationPropertyTableRow";

export default class ModificationPropertiesTable extends React.Component{
	constructor(props){
		super(props);
	}

	modificationProperties() {
		const self = this;
		return this.props.dataTable.map(function (data, i) {
			return <ModificationPropertyTableRow
				key={i}
				index={i}
				property={data}
				{...self.props}	/>
		});
	}
	
	render(){
		return(
			<Table className="mb0">
				<thead>
				<tr>
					<th className="col-sm-2">№№/пп</th>
					<th>Наименование</th>
					<th className="col-sm-2">Действие</th>
				</tr>
				</thead>
				<tbody>
					{this.modificationProperties()}
				</tbody>
				<tfoot>
				
				</tfoot>
			</Table>
		)
	}
}