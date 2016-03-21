import React from "react";
import {Image, ButtonGroup, Button, Glyphicon, Input} from "react-bootstrap/lib";

export default class ImagesUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: props.image,
			delete: props.delete
		}
	}

	fileSelect(e){
		e.preventDefault();
		var fileElem = document.getElementById("fileElem");
		fileElem.click();
	}

	handleFiles(e){
		var _reader = new FileReader();
		_reader.onload = () => {
			this.setState({
				image: _reader.result
			})
		};
		_reader.readAsDataURL(e.target.files[0]);

	}

	fileDelete(e){
		e.preventDefault();
		this.setState({
			image: "/files/images/product/2012-05-22_foto_nv.jpg"
		});
		console.log('Файл удален...');
	}

	render() {
		return (
			<div className="text-center">
				<Image src={this.state.image} thumbnail />
				<Input
					type="file"
					className="hidden"
					id="fileElem"
					multiple
					accept="image/*"
					name="fileLoad"
					onChange={this.handleFiles.bind(this)}/>
				<ButtonGroup>
					<Button bsStyle="primary" onClick={this.fileSelect.bind(this)}>
						<Glyphicon glyph="download-alt" />
					</Button>
					<Button bsStyle="danger" className={this.state.delete} onClick={this.fileDelete.bind(this)}>
						<Glyphicon glyph="trash" />
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}
