import React from "react";
import {ButtonGroup, Button, Glyphicon} from "react-bootstrap/lib";


export default class ModificationBodyTable extends React.Component{
	constructor(props){
		super(props);
	}

	onDelete(index){
		return (e) => {
			console.log(this.props);
		};
		// this.props.handleDeleteRow(this.props.index);
	}

	bodyTable(){
		const self = this;
		return this.props.rows.map(function (row, i) {
			return <tr key={i}>
				<td>{row.item.name}</td>
				<td>
					<ButtonGroup bsSize="small">
						<Button bsStyle="success"><Glyphicon glyph="pencil"/></Button>
						<Button bsStyle="danger" onClick={self.onDelete(i).bind(this)}><Glyphicon glyph="trash"/></Button>
					</ButtonGroup>
				</td>
			</tr>
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
