import React from "react";
import PanelButtonsComponent from "./PanelButtonsComponent";

export default class PanelNavComponent extends React.Component {
    render() {
        return(
					<div>
            <nav className="affix side-nav right text-right mw70">
              <PanelButtonsComponent />
            </nav>
					</div>
        );
    }
}
