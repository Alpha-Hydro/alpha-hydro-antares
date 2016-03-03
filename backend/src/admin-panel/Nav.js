import React from "react";
import Buttons from "./Buttons";

export default class Nav extends React.Component {
    render() {
        return(
					<div>
            <nav className="affix side-nav right mw70">
              <Buttons />
            </nav>
					</div>
        );
    }
}
