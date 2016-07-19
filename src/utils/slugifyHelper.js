var axios = require('axios');

var helpers = {
	getSlugify: function (string) {
		return axios.get("/admin/index/slugify/?slugify=" + string)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	},
	getProductSlugify: function (string) {
		return axios.get("/admin/index/slugify-product-sku/?slugify=" + string)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;