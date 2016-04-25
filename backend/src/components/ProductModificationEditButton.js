import React from "react";
import {ButtonGroup, Button, Glyphicon, Modal} from "react-bootstrap/lib";

import ProductModifications from "./Catalog/ProductModifications";

export default class ProductModificationEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModificationTable: false
		}
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
				<Button
					{...this.props}
					onClick={this.openModificationTable.bind(this)}	>
					{(!this.props.buttonText)?<Glyphicon glyph="pencil" />:this.props.buttonText}
					<ProductModifications
						{...this.props}
						showModal={this.state.showModificationTable}
						hideModal={this.closeModificationTable.bind(this)}/>
				</Button>
		)
	};
}