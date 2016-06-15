var Search = (function () {
    function Search() {
        this.searchQueryElement = document.getElementById('search-query');
        this.ajaxContent = document.getElementById('search-autocomplete');
        this.dropdownElement = document.querySelector('.dropdown');
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
                    var items = JSON.parse(_this.httpRequest.responseText);
                    console.log(items);
                    if (items.length > 0) {
                        _this.setList(items);
                        _this.dropdownElement.classList.add('open');
                    }
                    else {
                        _this.dropdownElement.classList.remove('open');
                    }
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
    Search.prototype.setList = function (items) {
        var _this = this;
        while (this.ajaxContent.hasChildNodes()) {
            this.ajaxContent.removeChild(this.ajaxContent.firstChild);
        }
        items.map(function (item) {
            var nodeLi = document.createElement("LI");
            var nodeA = document.createElement("A");
            var textnode = document.createTextNode(item.sku);
            var href = document.createAttribute('href');
            var title = document.createAttribute('title');
            href.value = '/catalog/' + item.fullPath;
            title.value = item.name;
            nodeA.appendChild(textnode);
            nodeA.setAttributeNode(href);
            nodeA.setAttributeNode(title);
            nodeLi.appendChild(nodeA);
            _this.ajaxContent.appendChild(nodeLi);
        });
    };
    return Search;
}());
var search = new Search();
//# sourceMappingURL=search.js.map