/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

var helpers = {
	login: (data) => {
		var settings = {
			async: true,
			crossDomain: true,
			url: "http://admin.alpha-hydro.loc/admin/auth/login",
			method: "POST",
			headers: {
				"cache-control": "no-cache",
				"content-type": "application/x-www-form-urlencoded"
			},
			data: data
		};

		$.ajax(settings).done(function (response) {
			return response;
		});
	}
};
module.exports = helpers;
