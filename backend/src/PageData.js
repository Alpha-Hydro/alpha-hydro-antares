class PageData {

	constructor(){
		//this.init();
	}

	init() {
		//localStorage.clear();
		var dataPage;
		$.ajax({
			url: window.location.href,
			data: {json:""},
			dataType: 'json',
			cache: false,
			success: function(data) {
				//localStorage.setItem('dataPage', JSON.stringify(data));
				dataPage = JSON.stringify(data);
			},
			error: function(xhr, status, err) {
				console.error(window.location.href, status, err.toString());
			}
		});
		console.log(dataPage);
	}

	getData(){
		return this.init();
	}
}

var pageData = new PageData();
//pageData.init();

export default pageData;
