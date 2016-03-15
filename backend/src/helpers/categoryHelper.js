var axios = require('axios');

var helpers = {
	getCategoryInfo: function(id){
		var categoryId = (id != 0)? id : '';
		var url = window.location.href;
		var param = "?json=";

		return axios.get(url + param + categoryId)
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