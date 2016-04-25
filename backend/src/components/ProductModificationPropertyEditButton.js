import React from "react";
import {ButtonGroup, Button, Glyphicon, Modal} from "react-bootstrap/lib";

import ModificationProperties from "./Catalog/ModificationProperties";

export default class ProductModificationPropertyEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModificationPropertiesTable: false
		}
	}

	closeModificationPropertiesTable() {
		this.setState({ showModificationPropertiesTable: false });
	}

	openModificationPropertiesTable(e) {
		e.preventDefault();
		this.setState({ showModificationPropertiesTable: true });
	}

	render(){
		return(
				<Button
					{...this.props}
					onClick={this.openModificationPropertiesTable.bind(this)} >
					{(!this.props.buttonText)?<Glyphicon glyph="cog" />:this.props.buttonText}
					<ModificationProperties
						{...this.props}
						showModal={this.state.showModificationPropertiesTable}
						hideModal={this.closeModificationPropertiesTable.bind(this)}/>
				</Button>
		)
	};
}