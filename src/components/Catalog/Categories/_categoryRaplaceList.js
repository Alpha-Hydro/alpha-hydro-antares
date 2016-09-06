import React from "react";

import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Badge from "react-bootstrap/lib/Badge";
import Glyphicon from "react-bootstrap/lib/Glyphicon";


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
							<Badge
								pullRight={true}
								className={(category.countSubCategories != 0)?"":"hidden"}>
								{category.countSubCategories}
							</Badge>
						</Col>
					</Row>
				</ListGroupItem>

		)
	}
}