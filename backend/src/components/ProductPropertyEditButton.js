import React from "react";
import {Button, Glyphicon, Modal} from "react-bootstrap/lib";
import dataHelpers from "../utils/getDataHelper";
import ProductProperties from "./Catalog/ProductProperties"


export default class ProductPropertyEditButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			properties: ''
		}
	}

	componentDidMount(){
		dataHelpers.getCategoryProductProperties(this.props.productId)
			.then(function (response) {
				this.setState({properties:response})
			}.bind(this));
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
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
					dialogClassName="modal-lg"
					show={this.state.showModal}
					onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Свойства продукта</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<ProductProperties properties={this.state.properties} productId={this.props.productId}/>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Закрыть</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	};
}