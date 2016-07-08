import React from "react";
import Alert from "react-bootstrap/lib/Alert";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export default class ModalFormDelete extends React.Component{

	render(){
		return (
			<div>
				<h5>Вы действительно хотите удалить этот раздел!</h5>
				<Alert bsStyle="danger">
					<Glyphicon glyph='warning-sign' className = 'mr1'/>
					Все <strong>подразделы</strong> и существующие <strong>товары</strong> в этих подразделах на сайте отображаться не будут!
				</Alert>
			</div>
		);
	}

}