import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

import FaIcon from "./buttons/FaIcon";

export default class ModalBtn extends React.Component{
	constructor(){
		super();
		this.state = {show: false};
	}

	showModal() {
		this.setState({show: true});
	}

	hideModal() {
		this.setState({show: false});
	}

	test(e){
		console.log(this.props.children);
	}

	render() {

		const bsStyle = "primary";

		const Buttons = [
			{icon: "pencil-square-o", click: this.showModal.bind(this), action: "edit"},
			{icon: "plus", click: this.showModal.bind(this), action: "add"},
			{icon: "trash", click: console.log.bind(console), action: "delete"},
			{icon: "eye-slash", click: this.test.bind(this), action: "disabled"},
			{icon: "share-alt", click: this.showModal.bind(this), action: "seo"}
		].map((button, i) =>
			<Button key={i} bsStyle={bsStyle} onClick={button.click} action={button.action}>
				<FaIcon icon={button.icon} />
			</Button>
		);

		return (
			<div class="btn-group-vertical">
				{Buttons}
				<Modal
					{...this.props}
					show={this.state.show}
					onHide={this.hideModal.bind(this)}
					dialogClassName="w100"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Wrapped Text</h4>
						<p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
							Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
							odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
							Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus
							fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem excepturi molestiae alias in tenetur beatae placeat architecto. Sit possimus rerum
							fugiat sapiente aspernatur.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.hideModal.bind(this)}>Close</Button>
						<Button bsStyle="primary" onClick={this.hideModal.bind(this)}>Save changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
};