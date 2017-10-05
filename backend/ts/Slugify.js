class Slugify {
    constructor(slugifyClass) {
        this.slugify = document.querySelector(slugifyClass);
        this.httpRequest = new XMLHttpRequest();
        this.slugify && this.init();
    }
    init() {
        this.slugify.onchange = (event) => {
            this.ajaxContent = document.getElementById(event.target.dataset.slugify);
            this.makeRequest('/admin/index/slugify', event.target.value);
        };
    }
    makeRequest(url, value) {
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    this.ajaxContent.value = JSON.parse(this.httpRequest.responseText);
                }
                else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };
        this.httpRequest.open('POST', url, true);
        this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        this.httpRequest.send('slugify=' + encodeURIComponent(value));
    }
}
//# sourceMappingURL=Slugify.js.map