import React from "react";

import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import ProductModifications from "./ProductModifications";

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