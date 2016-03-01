module.exports = {
	init: function() {
		localStorage.clear();
		$.ajax({
			url: window.location.href,
			data: {json:""},
			dataType: 'json',
			cache: false,
			success: function(data) {
				localStorage.setItem('dataPage', JSON.stringify(data));
			},
			error: function(xhr, status, err) {
				console.error(window.location.href, status, err.toString());
			}
		});
	}
};