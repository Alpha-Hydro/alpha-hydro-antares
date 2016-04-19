import React from "react";
import {ButtonGroup, Button, Glyphicon, Modal} from "react-bootstrap/lib";

import ProductModifications from "./Catalog/ProductModifications";
import ModificationProperties from "./Catalog/ModificationProperties";

export default class ProductModificationEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModificationPropertiesTable: false,
			showModificationTable: false
		}
	}

	closeModificationPropertiesTable() {
		this.setState({ showModificationPropertiesTable: false });
	}

	openModificationPropertiesTable(e) {
		e.preventDefault();
		this.setState({ showModificationPropertiesTable: true });
	}

	openModificationTable(e) {
		e.preventDefault();
		this.setState({ showModificationTable: true });
	}

	closeModificationTable() {
		this.setState({ showModificationTable: false });
	}

	render(){
		return(
			<div className="pull-right">
				<ButtonGroup bsSize="small">
					<Button
						onClick={this.openModificationPropertiesTable.bind(this)}
						bsStyle="primary"	>
						<Glyphicon glyph="cog" />
					</Button>
					<Button
						onClick={this.openModificationTable.bind(this)}
						bsStyle="primary"	>
						<Glyphicon glyph="pencil" />
					</Button>
				</ButtonGroup>
				<ProductModifications
					{...this.props}
					showModal={this.state.showModificationTable}
					hideModal={this.closeModificationTable.bind(this)}/>
				<ModificationProperties
					{...this.props}
					showModal={this.state.showModificationPropertiesTable}
					hideModal={this.closeModificationPropertiesTable.bind(this)}/>
			</div>
		)
	};
}