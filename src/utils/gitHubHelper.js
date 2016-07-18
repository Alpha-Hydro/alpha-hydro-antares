/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

var axios = require('axios');

var helpers = {
	getIssue: function(){
		return axios.get("https://api.github.com/repos/Alpha-Hydro/alpha-hydro-antares/issues")
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	},

	newIssue: function (data) {
		var instance = axios.create({
			headers: {'Authorization': 'token 30d23e53874d5420d710a1b664449c474b174bd4'}
		});

		return instance.post("https://api.github.com/repos/Alpha-Hydro/alpha-hydro-antares/issues", data)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;