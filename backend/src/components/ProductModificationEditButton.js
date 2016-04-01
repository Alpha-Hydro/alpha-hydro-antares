import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";
import dataHelpers from "../utils/getDataHelper";

import ProductModifications from "./Catalog/ProductModifications";

export default class ProductModificationEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			modification: ''
		}
	}

	componentDidMount(){
		dataHelpers.getCategoryProductModification(this.props.productId)
			.then(function (response) {
				console.log(response);
				this.setState({modification:response})
			}.bind(this));
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	reload(e){
		e.preventDefault();
		return window.location.reload();
	}

	render(){
		return(
			<div className="pull-right">
				<Button
					onClick={this.open.bind(this)}
					bsStyle="primary"
					bsSize="small">
					<Glyphicon glyph="pencil" />
				</Button>
				<Modal
					dialogClassName="w100"
					show={this.state.showModal}
					onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Модификации и размеры</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<ProductModifications dataTable={this.state.modification} />
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Отмена</Button>
						<Button bsStyle="success" onClick={this.reload.bind(this)}>Сохранить</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	};
}