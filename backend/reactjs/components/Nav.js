import React from "react";

import ButtonList from "./ButtonList"

export default class Nav extends React.Component {
    render() {
        return(
            <nav className="affix side-nav right mw70">
              <ButtonList />
            </nav>
        );
    }
}
