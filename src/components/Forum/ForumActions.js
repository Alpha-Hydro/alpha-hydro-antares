/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import ForumReplace from "./ForumReplace";
import ForumEdit from "./ForumEdit";

export default class ForumActions extends React.Component{
	render() {
		const forumAction = () => {
			switch (this.props.action) {
				case "edit":
					return <ForumEdit {...this.props}/>;
					break;
				case "delete":
					return <ForumReplace {...this.props}/>;
					break;
				case "reply":
					return <ForumReplace {...this.props}/>;
					break;
				default: return false;
			}
		};

		return forumAction();
	}
}