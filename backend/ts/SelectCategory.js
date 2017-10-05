class SelectCategory {
    constructor(selectElementId, pathInputId, fullPathInputId) {
        this.selectElement = document.getElementById(selectElementId);
        this.pathInput = document.getElementById(pathInputId);
        this.fullPathInput = document.getElementById(fullPathInputId);
        this.selectElement && this.fullPathInput && this.init();
    }
    init() {
        this.selectElement.addEventListener('change', (e) => {
            var value = e.target.value;
            var controller = e.target.dataset.controller;
            if (value != 0) {
                this.makeRequest(value, controller);
            }
        });
    }
    makeRequest(value, controller) {
        this.httpRequest = new XMLHttpRequest();
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var response = JSON.parse(this.httpRequest.responseText);
                    if (response.fullPath)
                        this.fullPathInput.value = response.fullPath + '/' + this.pathInput.value;
                    console.log(this.fullPathInput.value);
                }
                else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };
        this.httpRequest.open('GET', '/api/' + controller + '/get/' + value + '/', true);
        this.httpRequest.send();
    }
}
//# sourceMappingURL=SelectCategory.js.map