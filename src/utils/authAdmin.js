/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

var axios = require('axios');

var helpers = {
	login: (data) => {
		console.log(data);

		/*var instance = axios.create({
			headers: {"Content-Type": "application/form-data"}
		});

		return instance.post("/admin/auth/login", data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.log(response);
				return "error";
			});*/

		return axios({
			method: 'post',
			url: '/admin/auth/login',
			data: {
				'firstName': 'Fred',
				'lastName': 'Flintstone'
			}
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.log(response);
				return "error";
			});


		/*return axios.get("/admin/auth/login?username="+data.username+"&password="+data.password)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.log(response);
				return "error";
			});*/
	}
};

module.exports = helpers;
