/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2017, Alpha-Hydro
 */

export default class Search {
    formSearch: HTMLElement;
    dropdownElement: any;
    searchQueryElement: HTMLElement;
    httpRequest:XMLHttpRequest;
    ajaxContent:any;
    
    constructor(elementId: string){
        this.formSearch = document.getElementById(elementId);
        this.searchQueryElement = document.getElementById('search-query');
        this.ajaxContent = document.getElementById('search-autocomplete');
        this.dropdownElement = this.formSearch.querySelector('.dropdown');
        
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
                    var items:Array<any> = JSON.parse(this.httpRequest.responseText);
                    console.log(items);
                    if(items.length > 0){
                        this.setList(items);
                        this.dropdownElement.classList.add('open');
                    }
                    else{
                        this.dropdownElement.classList.remove('open');
                    }

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

    setList(items:Array<any>){
        while (this.ajaxContent.hasChildNodes()) {
            this.ajaxContent.removeChild(this.ajaxContent.firstChild);
        }
        items.map((item) => {
            const nodeLi: HTMLElement = document.createElement("LI");
            const nodeA: HTMLElement = document.createElement("A");
            const textnode = document.createTextNode(item.sku);
            const href = document.createAttribute('href');
            const title = document.createAttribute('title');

            href.value = '/catalog/'+item.fullPath;
            title.value = item.name;
            nodeA.appendChild(textnode);
            nodeA.setAttributeNode(href);
            nodeA.setAttributeNode(title);

            nodeLi.appendChild(nodeA);
            this.ajaxContent.appendChild(nodeLi);
        });
    }
}