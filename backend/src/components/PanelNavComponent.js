import React from "react";
import PanelButtonsComponent from "./PanelButtonsComponent";

export default class PanelNavComponent extends React.Component {
    render() {
        return(
					<nav className="affix side-nav right text-right mw70">
						<PanelButtonsComponent bsClass="btn-group-vertical btn-group-lg" bsStyle="primary"/>
					</nav>
        );
    }
}
