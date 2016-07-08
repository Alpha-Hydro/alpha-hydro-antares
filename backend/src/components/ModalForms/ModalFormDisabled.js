/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import Alert from "react-bootstrap/lib/Alert";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

export default class ModalFormDisabled extends React.Component{

	render(){
		return (
			<div>
				<h5>Вы действительно хотите скрыть этот раздел!</h5>
				<Alert bsStyle="danger">
					<Glyphicon glyph='warning-sign' className = 'mr1'/>
					Все <strong>подразделы</strong> и существующие <strong>товары</strong> в этих подразделах на сайте отображаться не будут!
				</Alert>
			</div>
		);
	}

}