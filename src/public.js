/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import ReactDOM from "react-dom";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

const mountNode = document.getElementById('modalAuth');

const modalInstance = (
	<div className="static-modal">
		<Modal.Dialog>
			<Modal.Header>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				One fine body...
			</Modal.Body>

			<Modal.Footer>
				<Button>Close</Button>
				<Button bsStyle="primary">Save changes</Button>
			</Modal.Footer>

		</Modal.Dialog>
	</div>
);

ReactDOM.render(modalInstance, mountNode);