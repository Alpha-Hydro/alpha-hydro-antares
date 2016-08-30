/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

var helpers = {
	loginAuth: (data) => {
		return $.ajax({
			url: "/admin/auth/login",
			type: "POST",
			data: data,
			success: (data) => {
				return data;
			},
			error: (xhr, status) => {
				console.log('error', status);
			}
		});
	}
};
module.exports = helpers;
