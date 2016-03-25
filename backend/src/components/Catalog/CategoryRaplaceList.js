import React from "react";
import {ListGroupItem, Row, Col, Input, Badge, Button, Glyphicon} from "react-bootstrap/lib";

export default class CategoryList extends React.Component {
	constructor(props){
		super(props);
	}

	handlerClick(e){
		e.preventDefault();
		this.props.eventClick(this.props.category.id);
	}

	selectedCategory(e){
		this.props.handlerSelect(e.target.id);
	}

	render(){
		const category = this.props.category;
		const badgeInstance = <Badge
				pullRight={true}
				className={(category.countSubCategories != 0)?"":"hidden"}>
				{category.countSubCategories}
			</Badge>;

		const labelInstance = (category.countSubCategories != 0)
			? <a href=""
					 className={(category.active != 0)?"":"text-muted"}
					 onClick={this.handlerClick.bind(this)}>{category.name}</a>
			: <span
					className={(category.active != 0)?"":"text-muted"}>
					{category.name}</span>;

		const radioInstance = (category.id != this.props.currentId)
			? <input
					type="radio"
					name="catalogCategory"
					defaultChecked=""
					id={category.id}
					onClick={this.selectedCategory.bind(this)}
				/>
			: <Glyphicon glyph="ok" />;

		return(
				<ListGroupItem  >
					<Row>
						<Col xs={1}>
							{radioInstance}
						</Col>
						<Col xs={10}>
							{labelInstance}
						</Col>
						<Col xs={1}>
							{badgeInstance}
						</Col>
					</Row>
				</ListGroupItem>

		)
	}
}