/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";

export default class ModalFormDisabled extends React.Component{
	render(){
		return (
			<form
				action={'/admin/'+this.props.data.controller+'/'+this.props.action+'/'+this.props.data.id}
				id="formModal"
				method="post"
				encType="multipart/form-data"
			>
				<p>Вы действительно хотите показать этот раздел!</p>
				<input type="hidden" name="currentUrl" value={window.location.href}/>
			</form>
		);
	}
}