interface classie{
    has(element: Element, className: string): classie;
    add(element: Element, className: string): classie;
    remove(element: Element, className: string): classie;
    toggle(element: Element, className: string): classie;
}

declare var classie: classie;