import React from "react";
import {Grid, Row, Col, Input, Image, ButtonGroup, Button} from "react-bootstrap/lib";

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
						<Input type="text" label="Заголовок" placeholder="Заголовок"
									 name="dataPage[title]"
									 value={this.state.title}
									 onChange={this.handleChange('title').bind(this)}
									 onBlur={this.titleChange.bind(this)}
									 required
						/>
						<Input type="hidden"
									 name="dataPage[path]"
									 value={this.state.path}
									 required
						/>
						<Input type="textarea" label="Краткое описание" placeholder="Краткое описание"
									 name="dataPage[description]"
									 value={this.state.description}
									 onChange={this.handleChange('description').bind(this)}
									 rows="4"
						/>
						<Input type="textarea" label="Текст на странице (markdown)" placeholder="Текст на странице"
									 name="dataPage[contentMarkdown]"
									 value={this.state.contentMarkdown}
									 onChange={this.handleChange('contentMarkdown').bind(this)}
									 rows="8"
						/>
						<div className="form-horizontal">
							<Input type="text" label="Сортировка"
										 labelClassName="col-md-2"
										 wrapperClassName="col-md-1"
										 name="dataPage[sorting]"
										 value={this.state.sorting}
										 onChange={this.handleChange('sorting').bind(this)}
										 required
							/>
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