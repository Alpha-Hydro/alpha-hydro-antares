var axios = require('axios');

var helpers = {
	editModification: function (data) {
		return $.ajax({
			url: '/admin/products/modification-edit',
			type: 'POST',
			data: {
				modificationTableData: data
			},
			success: function(data){
				return data;
			},
			error:function(xhr, status){
				console.log('error', status);
			}
		});
	},
	deleteModification: function (id) {
		return axios.get("/admin/products/modification-del/?id=" + id)
			.then(function (response) {
				return response.data;
			})
			.catch(function (response) {
				console.log(response);
			});
	}
};

module.exports = helpers;