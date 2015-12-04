/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class Converter {
    form: Element;

    constructor(formId:string, public units: Object){
        this.form = document.getElementById(formId);

        this._init();
    }
    _init(){
        var self = this,
            units = this.units,
            select = document.createElement('select'),
            div_content = document.createElement('div');
        select.classList.add('form-control');
        div_content.classList.add('conv_content');
        div_content.setAttribute('id', 'conv_content');

        for(var i in units){
            if(units.hasOwnProperty(i)){
                var text = units[i].title;
                this.addOption(select, text, i);
            }
        }
        this.form.appendChild(select);
        this.form.appendChild(div_content);

        var selectedUnit = select.options.item(select.selectedIndex).value;
        console.log(selectedUnit);

        select.addEventListener('change', function(ev){
            ev.preventDefault();
            var val:string = this.value;
            self._changeUnitType(val);
        });
    }

    addOption = (oSelect, text, value, isDefaultSelected:boolean = false, isSelected:boolean = false) => {
        var oOption = document.createElement("option");
        oOption.appendChild(document.createTextNode(text));
        oOption.setAttribute("value", value);

        if (isDefaultSelected) oOption.defaultSelected = true;
        else if (isSelected) oOption.selected = true;

        oSelect.appendChild(oOption);
    };

    _changeUnitType(type:string){
        var self = this,
            div_content = self.form.querySelector('div#conv_content'),
            typeUnits:any[] = this.units[type].u;
        console.log(typeUnits);
        typeUnits.forEach(function(u){
            var inputUnit = document.createElement('input');
            inputUnit.type = 'text';
            div_content.appendChild(inputUnit);
        });
    }
}

var units = {
    'pressure':{
        'title':'Давление',
        'u': [
            ['бар',1],
            //['мбар',0.001],
            //['мкбар',0.000001],
            ['Па',0.00001],
            //['кПа',0.01],
            //['МПа',10],
            ['мм рт.ст.',0.00133322],
            ['мм вод.ст',0.0000980665],
            //['м вод.ст',0.0980665],
            ['кг/мм&sup2',98.0665],
            ['кг/см&sup2',0.980665],
            ['атм',1.01325],
            ['psi',0.06894887]
        ]
    },
    'length':{
        'title':'Длина',
        'u': [
            ['м',1],
            ['см',0.01],
            ['мм',0.001],
            ['дюйм',0.0254],
            ['фут',0.3048]
        ]
    },
    'capacity':{
        'title':'Объем',
        'u': [
            ['л',1],
            ['м&sup3',1000],
            ['gal(UK)',4.546],
            ['gal(US)',3.785]
        ]
    },
    'weight':{
        'title':'Вес',
        'u': [
            ['кг',1],
            ['lb(фунт)',0.454]
        ]
    },
    'mass':{
        'title':'Масса',
        'u': [
            ['кг',1],
            ['г',0.001],
            ['мг',0.000001],
            ['ц',100],
            ['т',1000],
            ['кН',102],
            ['карат',0.0002]
        ]
    },
    'moment':{
        'title':'Крутящий момент',
        'u': [
            ['Н*м',1],
            ['lb*ft',1.356]
        ]
    },
    'speed':{
        'title':'Скорость',
        'u': [
            ['м/с',1],
            ['ft/s',0.3048]
        ]
    },
    'exp':{
        'title':'Расход',
        'u': [
            ['л/мин',1],
            ['gal/min(UK)',4.54596],
            ['gal/min(US)',3.78533]
        ]
    },
    'temp':{
        'title':'Температура',
        'u': [
            ['&deg;C',1],
            ['&deg;F',33.8],
            ['K',274.1],
            ['&deg;Re',0.8]
        ]
    }
};

var converter = new Converter('converter', units);
