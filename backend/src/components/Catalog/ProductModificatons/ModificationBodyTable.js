import React from "react";
import {Input, ButtonGroup, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationBodyTableRow from "./ModificationBodyTableRow";


export default class ModificationBodyTable extends React.Component{
	constructor(props){
		super(props);
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
			<tbody>
				{this.bodyTable()}
			</tbody>
		);
	}
}
