export default class Slugify {
    slugify:any;
    httpRequest:XMLHttpRequest;
    ajaxContent:any;
    sourseInput:any;

    constructor(className: string){
        this.slugify = document.querySelector(className);
        this.httpRequest = new XMLHttpRequest();
    }

    onchange(){
        if(this.slugify){
            this.slugify.onchange = (event) => {
                this.ajaxContent = document.getElementById(event.target.dataset.slugify);
                this.makeRequest(
                    '/admin/index/slugify',
                    event.target.value
                );
            };
        }
    }

    refresh(){
        if(this.slugify){
            this.slugify.addEventListener('click', (event)=>{
                event.preventDefault();

                this.sourseInput = document.getElementById(event.target.dataset.sourse);
                this.ajaxContent = document.getElementById(event.target.dataset.slugify);

                this.makeRequest(
                    '/admin/index/slugify',
                    this.sourseInput.value
                );
            });
        }
    }

    makeRequest(url:string, value:string):any{
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        this.httpRequest.onreadystatechange = ()=>{
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    this.ajaxContent.value = JSON.parse(this.httpRequest.responseText);
                } else {
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