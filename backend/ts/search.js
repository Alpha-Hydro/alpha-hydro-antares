class Search {
    constructor() {
        this.searchQueryElement = document.getElementById('search-query');
        this.ajaxContent = document.getElementById('search-autocomplete');
        this.dropdownElement = document.querySelector('.dropdown');
        this.searchQueryElement && this.init();
    }
    init() {
        this.searchQueryElement.onkeyup = (event) => {
            console.log(event.target.value);
            this.makeRequest('/api/search', event.target.value);
        };
    }
    makeRequest(url, value) {
        this.httpRequest = new XMLHttpRequest();
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var items = JSON.parse(this.httpRequest.responseText);
                    console.log(items);
                    if (items.length > 0) {
                        this.setList(items);
                        this.dropdownElement.classList.add('open');
                    }
                    else {
                        this.dropdownElement.classList.remove('open');
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
    }
    setList(items) {
        while (this.ajaxContent.hasChildNodes()) {
            this.ajaxContent.removeChild(this.ajaxContent.firstChild);
        }
        items.map((item) => {
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
            this.ajaxContent.appendChild(nodeLi);
        });
    }
}
var search = new Search();
//# sourceMappingURL=search.js.map