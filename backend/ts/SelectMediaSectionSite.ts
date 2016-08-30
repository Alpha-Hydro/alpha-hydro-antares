class SelectMediaSectionSite{
    selectFeedback:any;
    selectElement:HTMLElement;
    httpRequest:XMLHttpRequest;
    constructor(selectElementClass:string){
        this.selectFeedback = [].slice.call(document.querySelectorAll(selectElementClass));
        
        this.init();
    }

    init(){
        var self:any = this;
        this.selectFeedback.forEach((select: HTMLElement) => {
            self.selectElement = select.querySelector('select');
            self.selectElement.addEventListener('change', (e:any) => {
                var sectionId:string = e.target.value;
                var itemId:string = e.target.dataset.itemid;
                this.makeRequest(sectionId, itemId);
            });
        });
    }

    makeRequest(sectionId, itemId){
        this.httpRequest = new XMLHttpRequest();

        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var response:any = JSON.parse(this.httpRequest.responseText);
                    console.log(response);
                    if(response.message){
                        document.getElementById('sectionSite_'+itemId).parentElement.classList.add('success');
                    }
                } else {
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
export = SelectMediaSectionSite;