import React from "react";
import ButtonList from "./ButtonList";
import ReactBootstrap from "react-bootstrap";

export default class Nav extends React.Component {
    render() {
        return(
            <nav className="affix side-nav right mw70">
              <ButtonList data={this.props.data}/>

							<ReactBootstrap.Modal.Dialog>
								<ReactBootstrap.Modal.Header>
									<ReactBootstrap.Modal.Title>Modal title</ReactBootstrap.Modal.Title>
								</ReactBootstrap.Modal.Header>

								<ReactBootstrap.Modal.Body>
									One fine body...
								</ReactBootstrap.Modal.Body>

								<ReactBootstrap.Modal.Footer>
									<ReactBootstrap.Button>Close</ReactBootstrap.Button>
									<ReactBootstrap.Button bsStyle="primary">Save changes</ReactBootstrap.Button>
								</ReactBootstrap.Modal.Footer>

							</ReactBootstrap.Modal.Dialog>
            </nav>
        );
    }
}
