import React from "react";
import {Input, ButtonGroup, Button, Glyphicon} from "react-bootstrap/lib";

import ModificationBodyTableRow from "./ModificationBodyTableRow";


export default class ModificationBodyTable extends React.Component{
	constructor(props){
		super(props);
	}

	onDelete(index){
		return (e) => {
			this.props.handleDeleteRow(index);
		};
	}

	bodyTable(){
		const self = this;
		return this.props.rows.map(function (row, i) {
			return <ModificationBodyTableRow
				key={i}
				row={row}
				index={i}
				handleDelete={self.onDelete(i).bind(this)}/>
		});
	}

	/*valuesTd(values){
		return values.map(function (value, i)	{
			return <td key={i}>{value.value}</td>
		})
	}

	bodyTable(){
		const self = this;
		return this.props.rows.map(function (row, i) {
			return <tr key={i}>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={row.item.order}
					/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={row.item.sku}
					/>
				</td>
				{self.valuesTd(row.values)}
				<td>
					<ButtonGroup bsSize="small">
						<Button bsStyle="success"><Glyphicon glyph="pencil"/></Button>
						<Button bsStyle="danger" onClick={self.onDelete(i).bind(this)}><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>
				</td>
			</tr>
		});
	}*/

	render() {
		return (
			<tbody>
				{this.bodyTable()}
			</tbody>
		);
	}
}
