/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class Converter {
    form: Element;
    selectType: any;
    div_value:Element;
    input_value:any;
    select_value:any;
    div_result:Element;
    input_result:any;
    select_result:any;

    constructor(formId:string, public units: Object){
        this.form = document.getElementById(formId);
        this.selectType = this.form.querySelector('select#select-type');
        this.div_value = this.form.querySelector('div#value');
        this.input_value = this.div_value.querySelector('input');
        this.select_value = this.div_value.querySelector('select');
        this.div_result = this.form.querySelector('div#result');
        this.input_result = this.div_result.querySelector('input');
        this.select_result = this.div_result.querySelector('select');

        this._init();
    }
    _init(){
        var self = this,
            units = this.units;

        this.input_result.readOnly = true;

        for(var i in units){
            if(units.hasOwnProperty(i)){
                var text = units[i].title;
                this.addOption(this.selectType, text, i);
            }
        }

        var currentType = this.selectType.options.item(this.selectType.selectedIndex).value;
        this._changeUnitType(currentType);

        this.selectType.addEventListener('change', function(ev){
            ev.preventDefault();
            var val:string = this.value;
            self._changeUnitType(val);
            //currentType = val;
        });

        //this._initEvent(currentType);
    }

    _changeUnitType(type:string){
        var self = this,
            typeUnits:any[] = this.units[type].u;

        this.input_value.value = this.units[type].default;

        this.select_value.innerHTML = '';
        for(var i in typeUnits){
            if(typeUnits.hasOwnProperty(i)){
                var text = typeUnits[i][0];
                this.addOption(this.select_value, text, typeUnits[i][1]);
            }
        }

        this.select_result.innerHTML = '';
        for(var i in typeUnits){
            if(typeUnits.hasOwnProperty(i)){
                var text = typeUnits[i][0];
                this.addOption(self.select_result, text, typeUnits[i][1]);
            }
        }
        this.select_result.options.item(1).selected = true;
        this._convert();

        this._initEvent(type);
    }

    _initEvent(type){
        var self = this;

        this.input_value.addEventListener('input', function(ev){
            ev.preventDefault();
            self._convert();
        });

        this.select_value.addEventListener('change', function(ev){
            ev.preventDefault();
            self._convert();
            console.log(type);
        });

        this.select_result.addEventListener('change', function(ev){
            ev.preventDefault();
            self._convert();
        });
    }

    _convert(){
        var a = this.select_value.value,
            b = this.select_result.value,
            c = this.input_value.value,
            //res = Math.round(((c*a)/b)*100)/100;
            res = (c*a)/b;
        this.input_result.value = this.numberFormat(res);
    }

    _convertTemp(){
        var a = this.select_value.value,
            b = this.select_result.value,
            c = this.input_value.value,
            //res = Math.round(((c*a)/b)*100)/100;
            res = (c*a)/b;
        this.input_result.value = this.numberFormat(res);
    }

    addOption = (oSelect, text, value, isDefaultSelected:boolean = false, isSelected:boolean = false) => {
        var oOption = document.createElement("option");
        oOption.appendChild(document.createTextNode(text));
        oOption.setAttribute("value", value);

        if (isDefaultSelected) oOption.defaultSelected = true;
        else if (isSelected) oOption.selected = true;

        oSelect.appendChild(oOption);
    };

    numberFormat = (number:any,decimal:number = 6) => {
        var res = parseFloat(number),
            exp10 = Math.pow(10,decimal);
        res = Math.round(res*exp10)/exp10;
        return res;
    }

}

var units = {
    'pressure':{
        'title':'Давление',
        'default': 1,
        'u': [
            ['бар',1],
            ['Па',0.00001],
            ['мбар',0.001],
            ['мкбар',0.000001],
            ['кПа',0.01],
            ['МПа',10],
            ['мм рт.ст.',0.00133322],
            ['мм вод.ст',0.0000980665],
            ['м вод.ст',0.0980665],
            ['кг/мм2',98.0665],
            ['кг/см2',0.980665],
            ['атм',1.01325],
            ['psi',0.06894887]
        ]
    },
    'length':{
        'title':'Длина',
        'default': 1,
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
        'default': 100,
        'u': [
            ['л',1],
            ['м3',1000],
            ['gal(UK)',4.546],
            ['gal(US)',3.785]
        ]
    },
    'weight':{
        'title':'Вес',
        'default': 100,
        'u': [
            ['кг',1],
            ['lb(фунт)',0.454]
        ]
    },
    'mass':{
        'title':'Масса',
        'default': 100,
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
        'default': 100,
        'u': [
            ['Н*м',1],
            ['lb*ft',1.356]
        ]
    },
    'speed':{
        'title':'Скорость',
        'default': 100,
        'u': [
            ['м/с',1],
            ['ft/s',0.3048]
        ]
    },
    'exp':{
        'title':'Расход',
        'default': 100,
        'u': [
            ['л/мин',1],
            ['gal/min(UK)',4.54596],
            ['gal/min(US)',3.78533]
        ]
    },
    'temp':{
        'title':'Температура',
        'default': 100,
        'u': [
            ['C',1],
            ['F',33.8],
            ['K',274.1],
            ['Re',0.8]
        ]
    }
};

var converter = new Converter('converter', units);
