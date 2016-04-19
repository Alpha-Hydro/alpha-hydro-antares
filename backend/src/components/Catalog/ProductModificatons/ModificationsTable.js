import React from "react";
import Table from "react-bootstrap/lib/Table";
import modificationHelpers from "./../../../utils/productModificationHelper"

import ModificationHeadTable from "./ModificationHeadTable";
import ModificationBodyTableRow from "./ModificationBodyTableRow";
import ModificationTableNewItem from "./ModificationTableNewItem";

export default class ModificationsTable extends React.Component{
	constructor(props){
		super(props);
	}

	handleAdd(data){
		console.log('NEW MODIFICATION', data);
		this.state.rows = this.state.rows.concat(data);
		this.setState(this.state, () => {
			this.props.handleChange(this.state);
		});
	}

	bodyTable(){
		const self = this;
		return this.props.rows.map(function (row, i) {
			return <ModificationBodyTableRow
				key={i}
				row={row}
				index={i}
				{...self.props}
			/>
		});
	}

	render() {
		return (
			<Table className="mb0">
				<thead>
					<ModificationHeadTable	columns={this.props.columns} />
				</thead>
				<tbody>
					{this.bodyTable()}
				</tbody>
				<tfoot>
					<ModificationTableNewItem {...this.props} />
				</tfoot>
			</Table>
		)
	}
}
