import React from "react";
import ButtonList from "./ButtonList";
import Buttons from "./Buttons";

export default class Nav extends React.Component {
    render() {
        return(
            <nav className="affix side-nav right mw70">
              <Buttons />
            </nav>
        );
    }
}
