import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";
import categoryHelpers from "../../helpers/categoryHelper";


export default class categoryChangeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			categories: []
		}
	}


	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({
			showModal: true,
			categories: this.props.categoryList
		});
	}

	render(){
		return(
			<div>
				<Button  bsStyle="primary" onClick={this.open.bind(this)}>
					<Glyphicon glyph="refresh" />
				</Button>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Сменить категорию</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Curent category {this.props.currentId}
						<div><pre>{JSON.stringify(this.state.categories, null, ' ')}</pre></div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Close</Button>
						<Button onClick={this.close.bind(this)} bsStyle="primary">Save changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
