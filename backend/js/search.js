var Search = (function () {
    function Search() {
        this.searchQueryElement = document.getElementById('search-query');
        this.ajaxContent = document.getElementById('google-search');
        this.searchQueryElement && this.init();
    }
    Search.prototype.init = function () {
        var _this = this;
        this.searchQueryElement.onkeyup = function (event) {
            console.log(event.target.value);
            _this.makeRequest('/api/search', event.target.value);
        };
    };
    Search.prototype.makeRequest = function (url, value) {
        var _this = this;
        this.httpRequest = new XMLHttpRequest();
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = function () {
            if (_this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (_this.httpRequest.status === 200) {
                    console.log(JSON.parse(_this.httpRequest.responseText));
                }
                else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };
        this.httpRequest.open('POST', url, true);
        this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        this.httpRequest.send('query=' + encodeURIComponent(value));
    };
    return Search;
}());
var search = new Search();
//# sourceMappingURL=search.js.map