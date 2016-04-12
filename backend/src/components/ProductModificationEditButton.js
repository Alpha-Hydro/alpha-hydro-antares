import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";
import dataHelpers from "../utils/getDataHelper";
import modificationHelpers from "../utils/productModificationHelper";

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
				this.setState({modification:response})
			}.bind(this));
	}

	handleChange(data){
		this.setState({modification:data});
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	save(e){
		e.preventDefault();
		this.setState({ showModal: false });
		console.log('SEND DATA: ', this.state.modification);
		modificationHelpers.editModification(this.state.modification)
			.then(function (response) {
				console.log('SAVE DATA: ',response);
				window.location.reload(true);
				return false;
			});
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
						<ProductModifications
							dataTable={this.state.modification}
							handleChange={this.handleChange.bind(this)}
						/>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Отмена</Button>
						<Button bsStyle="success" onClick={this.save.bind(this)}>Сохранить</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	};
}