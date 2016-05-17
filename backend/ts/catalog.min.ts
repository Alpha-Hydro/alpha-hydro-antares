class categoryHeight {
    items: any;
    height: any;
    constructor(classItem: string){
        this.items = [].slice.call(document.querySelectorAll(classItem));
        this.height = 200;

        this._init();
    }

    _init(){
        this.items.forEach((element:HTMLElement)=>{
            if(element.offsetHeight > this.height){
                this.height = element.offsetHeight;
            }
            element.style.height = this.height + 'px';
        })
    }
}

new categoryHeight('.categories-list-item');
new categoryHeight('.categories-item');
