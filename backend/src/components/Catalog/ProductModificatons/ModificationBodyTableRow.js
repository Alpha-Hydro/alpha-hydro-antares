import React from "react";
import {ButtonGroup, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationBodyTableRowTd from "./ModificationBodyTableRowTd";

export default class ModificationBodyTableRow extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<tr>
				<ModificationBodyTableRowTd value={this.props.row.item.order} classTd="col-sm-1"/>
				<ModificationBodyTableRowTd value={this.props.row.item.sku}/>
				<td>
					<ButtonGroup bsSize="small">
						<Button bsStyle="success"><Glyphicon glyph="pencil"/></Button>
						<Button bsStyle="danger" onClick={this.props.handleDelete.bind(this)}><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}
}