import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Badge from "react-bootstrap/lib/Badge";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export default class CategoryReplaceListItem extends React.Component{
	radioInstance(){
		switch (true) {
			case this.props.active:
				return <Glyphicon glyph="ok" />;
				break;
			case this.props.levelUp:
				return <Glyphicon glyph="level-up" />;
				break;
			default:
				return <input
					type="radio"
					name="catalogCategory"
					defaultChecked=""
					onClick={() => {this.props.select(this.props.id)}} />
		}
	}

	render(){
		return(
			<li
				id={this.props.id}
				className={(this.props.active)?'list-group-item active':'list-group-item'}>
				<Row>
					<Col xs={1}>
						{this.radioInstance()}
					</Col>
					<Col xs={11} onClick={() => {this.props.replace(this.props.id)}} className="text-hover">
						<Glyphicon glyph="folder-close" className="mlr1"/>
						{this.props.children}
					</Col>
				</Row>
			</li>
		)
	}
}