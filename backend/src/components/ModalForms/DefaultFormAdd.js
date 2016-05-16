import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

import ImagesUpload from "./../../utils/ImagesUpload";
import Slugify from "./../../utils/slugifyHelper";

export default class DefaultFormAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : '',
			path: '',
			description: '',
			contentMarkdown: '',
			contentHtml: '',
			sorting: 0,
			image: "/files/images/product/2012-05-22_foto_nv.jpg"
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	titleChange(e){
		var title = e.target.value;
		Slugify.getSlugify(title)
			.then(function (path) {
				this.setState({path: path});
			}.bind(this));
	}

	render(){
		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={this.state.image} delete="hidden"/>
					</Col>
					<Col md={9}>
						<FormGroup>
							<ControlLabel>Заголовок</ControlLabel>
							<FormControl
								type="text"
								placeholder="Заголовок"
								name="dataPage[title]"
								value={this.state.title}
								onChange={this.handleChange('title').bind(this)}
								onBlur={this.titleChange.bind(this)}
								required
							/>
						</FormGroup>

						<input type="hidden"
									 name="dataPage[path]"
									 value={this.state.path}
									 required
						/>
						<FormGroup>
							<ControlLabel>Краткое описание</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Краткое описание"
								name="dataPage[description]"
								value={this.state.description}
								onChange={this.handleChange('description').bind(this)}
								rows="4"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Текст на странице (markdown)</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Текст на странице"
								name="dataPage[contentMarkdown]"
								value={this.state.contentMarkdown}
								onChange={this.handleChange('contentMarkdown').bind(this)}
								rows="8"
							/>
						</FormGroup>
						<div className="form-inline">
							<FormGroup>
								<ControlLabel className="mr2">Сортировка</ControlLabel>
								<FormControl
									type="number"
									min="0"
									name="dataPage[sorting]"
									value={this.state.sorting}
									onChange={this.handleChange('sorting').bind(this)}
									required
								/>
							</FormGroup>
						</div>

						<Input type="hidden"
									 name="dataPage[contentHtml]"
									 value={this.state.contentHTML}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}