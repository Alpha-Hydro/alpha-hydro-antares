import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
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
					<Col xs={10} onClick={() => {this.props.badge && this.props.replace(this.props.id)}} className="text-hover">
						{!this.props.levelUp && <Glyphicon glyph="folder-close" className="mlr1"/>}
						{this.props.children}
					</Col>
					<Col xs={1}>
						<Badge
							pullRight={true}
							className={(this.props.badge != 0)?"":"hidden"}>
							{this.props.badge}
						</Badge>
					</Col>
				</Row>
			</li>
		)
	}
}