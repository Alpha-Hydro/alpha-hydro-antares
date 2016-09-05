import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import categoryHelpers from "./../../../utils/getDataHelper";
import CategoryReplaceListItem from "./CategoryReplaceListItem";

export default class CategoryReplaceTest extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectId: '',
			parentId: '',
			parentCategoryInfo: '',
			categoryList: []
		}
	}
	hideModal() {
		this.props.hide();
	}

	componentWillMount(){
		console.log('LIST CATEGORY',this.props.selectId);

		categoryHelpers.getCategoryInfo(this.props.selectId)
			.then(function(categoryInfo){
				this.setState({
					parentId: this.props.selectId,
					parentCategoryInfo: categoryInfo
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(this.props.selectId)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));
	}

	selectCategory(id){
		console.log('SELECT CATEGORY',id);
		this.setState({
			selectId: id
		})
	}

	replaceCategory(id){
		console.log('LIST CATEGORY',id);

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					parentId: id,
					parentCategoryInfo: categoryInfo
				});
			}.bind(this));

		categoryHelpers.getSubGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));
	}

	render(){
		const headerListGroup = () => {
			switch (false) {
				case this.state.parentId != 0 && this.state.parentCategoryInfo.parentId != 0:
					return 'Каталог';
					break;
				default: return '... ' + this.state.parentCategoryInfo.name;
			}
		};

		const listgroupInstance = this.state.categoryList.map((category) =>
			<CategoryReplaceListItem
				key={category.id}
				id={category.id}
				select={this.selectCategory.bind(this)}
				replace={this.replaceCategory.bind(this)}
				active={category.id == this.state.parentId}
			>
				{category.name}
			</CategoryReplaceListItem>
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
					<ListGroup componentClass="ul">
						<CategoryReplaceListItem
							select={this.selectCategory.bind(this)}
							replace={this.replaceCategory.bind(this)}
							levelUp={this.state.parentId != 0 && this.state.parentCategoryInfo.parentId != 0}
							active={this.state.parentId == 0}
							id={this.state.parentCategoryInfo.parentId}>
							{headerListGroup()}
						</CategoryReplaceListItem>
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