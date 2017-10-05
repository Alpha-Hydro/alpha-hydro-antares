class SelectMediaSectionSite {
    constructor(selectElementClass) {
        this.selectFeedback = [].slice.call(document.querySelectorAll(selectElementClass));
        this.init();
    }
    init() {
        var self = this;
        this.selectFeedback.forEach((select) => {
            self.selectElement = select.querySelector('select');
            self.selectElement.addEventListener('change', (e) => {
                var sectionId = e.target.value;
                var itemId = e.target.dataset.itemid;
                this.makeRequest(sectionId, itemId);
            });
        });
    }
    makeRequest(sectionId, itemId) {
        this.httpRequest = new XMLHttpRequest();
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var response = JSON.parse(this.httpRequest.responseText);
                    console.log(response);
                    if (response.message) {
                        document.getElementById('sectionSite_' + itemId).parentElement.classList.add('success');
                    }
                }
                else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };
        this.httpRequest.open('POST', '/admin/media/section/', true);
        this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        this.httpRequest.send('sectionId=' + sectionId + '&itemId=' + itemId);
    }
}
//# sourceMappingURL=SelectMediaSectionSite.js.map