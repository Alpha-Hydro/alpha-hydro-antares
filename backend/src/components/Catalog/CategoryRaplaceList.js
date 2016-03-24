import React from "react";
import {ListGroupItem, Row, Col, Input, Badge, Button} from "react-bootstrap/lib";

export default class CategoryList extends React.Component {
	constructor(props){
		super(props);
	}

	handlerClick(e){
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
			? <a href="#"
					 className={(category.active != 0)?"":"text-muted"}
					 onClick={this.handlerClick.bind(this)}>{category.name} - {category.id}</a>
			: <span
					className={(category.active != 0)?"":"text-muted"}>
					{category.name} - {category.id}</span>;

		return(
				<ListGroupItem  >
					<Row>
						<Col xs={1}>
							<input
								type="radio"
								name="catalogCategory"
								defaultChecked=""
								id={category.id}
								onClick={this.selectedCategory.bind(this)}
							/>
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