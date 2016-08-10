import React from "react";

import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import ModificationProperties from "./ModificationProperties";

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
					{(!this.props.title)?<Glyphicon glyph="cog" />:this.props.title}
					<ModificationProperties
						{...this.props}
						showModal={this.state.showModificationPropertiesTable}
						hideModal={this.closeModificationPropertiesTable.bind(this)}/>
				</Button>
		)
	};
}