var axios = require('axios');

var helpers = {
	getCategoryInfo: function(id){
		return axios.get("/admin/categories/json/?id=" + id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	},

	getGategoryList: function(id){
		return axios.get("/admin/categories/list/?id=" + id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;