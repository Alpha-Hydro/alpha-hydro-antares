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
	
	getCategoryProduct: function (id) {
		return axios.get("/admin/products/category/?id=" + id)
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
	},

	getSubGategoryList: function(id){
		return axios.get("/admin/categories/list/?id=" + id + "&children=true")
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	},

	getDataInfo: function(controller, id) {
		var url = "/admin/"+controller+"/json/?id=";
		return axios.get(url + id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	},

	getPageInfo: function() {
		return axios.get(window.location.href + "?json")
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;