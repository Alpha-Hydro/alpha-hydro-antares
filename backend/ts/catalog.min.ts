class categoryHeight {
    item: any;
    height: any;
    constructor(classItem: string){
        this.item = [].slice.call(document.querySelectorAll(classItem));
        this.height = 200;

        this._init();
    }

    _init(){
        this.item.forEach((element:HTMLElement)=>{
            if(element.offsetHeight > this.height){
                this.height = element.offsetHeight;
            }
            element.style.height = this.height + 'px';
        })
    }
}

var categoriesList = new categoryHeight('.categories-list-item');
var categories = new categoryHeight('.categories-item');
