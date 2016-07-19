import React from "react";
import {Image, ButtonGroup, Button, Glyphicon} from "react-bootstrap";

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
		var fileElem = document.getElementById((!this.props.inputName)?"fileElem":this.props.inputName);
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
			<div className="text-center mb2 image-edit">
				<Image src={this.state.image} thumbnail />
				<input
					type="file"
					className="hidden"
					id={(!this.props.inputName)?"fileElem":this.props.inputName}
					multiple
					accept="image/*"
					name={(!this.props.inputName)?"fileLoad":this.props.inputName}
					onChange={this.handleFiles.bind(this)}/>
				<div className="show-btn-group">
					<ButtonGroup bsSize="small">
						<Button bsStyle="primary" onClick={this.fileSelect.bind(this)}>
							<Glyphicon glyph="download-alt" />
						</Button>
						<Button bsStyle="danger" className={this.state.delete} onClick={this.fileDelete.bind(this)}>
							<Glyphicon glyph="trash" />
						</Button>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}
