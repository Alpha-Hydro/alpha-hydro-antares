import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

import ImagesUpload from "./../../utils/ImagesUpload";

export default class MediaFormEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : (!props.data.title)?props.data.name:props.data.title,
			path: props.data.path,
			description: props.data.description,
			contentMarkdown: props.data.contentMarkdown,
			contentHtml: props.data.contentHtml,
			sorting: props.data.sorting,
			uploadPath: (!props.data.uploadPath)?'':props.data.uploadPath,
			image: (!props.data.image)
				?"/files/images/product/2012-05-22_foto_nv.jpg"
				:props.data.image
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	render(){
		const imgSrc = this.state.uploadPath + this.state.image;

		return (
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col md={3}>
						<ImagesUpload image={imgSrc}/>
					</Col>
					<Col md={9}>
						<FormGroup>
							<ControlLabel>Заголовок</ControlLabel>
							<FormControl
								type="text"
								value={this.state.title}
								placeholder="Заголовок"
								name="dataPage[title]"
								onChange={this.handleChange('title').bind(this)}
								required
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Краткое описание</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={this.state.description}
								placeholder="Краткое описание"
								name="dataPage[description]"
								onChange={this.handleChange('description').bind(this)}
								rows="4"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Текст на странице (markdown)</ControlLabel>
							<FormControl
								componentClass="textarea"
								value={this.state.contentMarkdown}
								placeholder="Текст на странице (markdown)"
								name="dataPage[contentMarkdown]"
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
									value={this.state.sorting}
									name="dataPage[sorting]"
									onChange={this.handleChange('sorting').bind(this)}
									required
								/>
							</FormGroup>
						</div>
						<input type="hidden"
									 name="dataPage[contentHtml]"
									 value={this.state.contentHTML}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}

}