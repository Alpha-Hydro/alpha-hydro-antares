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
				return "error";
			});
	},

	newIssue: function (data) {
		var instance = axios.create({
			headers: {'Authorization': 'Basic YWxwaGFIeWRybzpOUW45ZlF2VUpYa2o='}
		});

		return instance.post("https://api.github.com/repos/Alpha-Hydro/alpha-hydro-antares/issues", data)
			.then(function (response) {
				return response;
			})
			.catch(function (response) {
				console.log(response);
				return "error";
			});
	}
};

module.exports = helpers;