import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import categoryHelpers from "./../../../utils/getDataHelper";

export default class CategoryReplaceTest extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectId: '',
			selectCategoryInfo: '',
			categoryList: []
		}
	}
	hideModal() {
		this.props.hide();
	}

	componentWillMount(){
		categoryHelpers.getCategoryInfo(this.props.selectId)
			.then(function(categoryInfo){
				this.setState({
					selectId: this.props.selectId,
					selectCategoryInfo: categoryInfo
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(this.props.selectId)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));
	}

	render(){
		const headerListGroup = () => {
			switch (false) {
				case this.state.selectId != 0 && this.state.selectCategoryInfo.parentId != 0:
					return 'Каталог';
					break;
				default: return 'link Parent category'
			}
		};

		const listgroupInstance = this.state.categoryList.map((category) =>
			<ListGroupItem key={category.id} active={category.id == this.state.selectId}>{category.name}</ListGroupItem>
		);

		return(
			<Modal
				show={this.props.show}
				onHide={this.hideModal.bind(this)}
			>
				<Modal.Header closeButton>
					<Modal.Title>Выбор категории</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ListGroup>
						<ListGroupItem active={this.state.selectId == 0}>{headerListGroup()}</ListGroupItem>
						{listgroupInstance}
					</ListGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModal.bind(this)}>Отмена</Button>
					<Button bsStyle="primary" onClick={this.hideModal.bind(this)}>Отправить</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}