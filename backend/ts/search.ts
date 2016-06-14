class Search {
    dropdownElement: any;
    searchQueryElement: HTMLElement;
    httpRequest:XMLHttpRequest;
    ajaxContent:any;
    
    constructor(){
        this.searchQueryElement = document.getElementById('search-query');
        this.ajaxContent = document.getElementById('google-search');
        
        this.searchQueryElement && this.init();
    }
    
    init(){
        this.searchQueryElement.onkeyup = (event:any) => {
            console.log(event.target.value);
            this.makeRequest('/api/search', event.target.value);
        }
    }

    makeRequest(url:string, value:string):any{
        this.httpRequest = new XMLHttpRequest();

        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        this.httpRequest.onreadystatechange = ()=>{
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    console.log(JSON.parse(this.httpRequest.responseText));
                    //this.ajaxContent.value = JSON.parse(this.httpRequest.responseText);
                } else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };
        this.httpRequest.open('POST', url, true);
        this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        this.httpRequest.send('query=' + encodeURIComponent(value));
    }
}

var search = new Search();