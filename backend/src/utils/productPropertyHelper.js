var axios = require('axios');

var helpers = {
	editProperty: function (data) {
		return $.ajax({
			url: '/admin/products/property-edit',
			type: 'POST',
			data: {property: data},
			success: function(data){
				return data;
			},
			error:function(xhr, status){
				console.log('error', status);
			}
		});
	},
	deleteProperty: function (id) {
		return axios.get("/admin/products/property-del/?id=" + id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;