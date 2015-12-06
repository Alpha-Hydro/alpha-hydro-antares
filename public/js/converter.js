/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
var Converter = (function () {
    function Converter(formId, units) {
        this.units = units;
        this.addOption = function (oSelect, text, value, isDefaultSelected, isSelected) {
            if (isDefaultSelected === void 0) { isDefaultSelected = false; }
            if (isSelected === void 0) { isSelected = false; }
            var oOption = document.createElement("option");
            oOption.appendChild(document.createTextNode(text));
            oOption.setAttribute("value", value);
            if (isDefaultSelected)
                oOption.defaultSelected = true;
            else if (isSelected)
                oOption.selected = true;
            oSelect.appendChild(oOption);
        };
        this.form = document.getElementById(formId);
        this._init();
    }
    Converter.prototype._init = function () {
        var self = this, units = this.units, select = document.createElement('select'), div_content = document.createElement('div');
        select.classList.add('form-control');
        select.classList.add('mb1');
        select.classList.add('input-sm');
        div_content.classList.add('conv_content');
        div_content.setAttribute('id', 'conv_content');
        for (var i in units) {
            if (units.hasOwnProperty(i)) {
                var text = units[i].title;
                this.addOption(select, text, i);
            }
        }
        this.form.appendChild(select);
        this.form.appendChild(div_content);
        var currentType = select.options.item(select.selectedIndex).value;
        this._changeUnitType(currentType);
        select.addEventListener('change', function (ev) {
            ev.preventDefault();
            var val = this.value;
            self._changeUnitType(val);
        });
    };
    Converter.prototype._changeUnitType = function (type) {
        var self = this, div_content = self.form.querySelector('div#conv_content'), typeUnits = this.units[type].u, defaultUnitsValue = this.units[type].default;
        div_content.innerHTML = '';
        typeUnits.forEach(function (u) {
            var formGroup = document.createElement('div'), inputGroup = document.createElement('div'), inputUnit = document.createElement('input'), unitAddon = document.createElement('span'), unitValue = u[1] * defaultUnitsValue;
            formGroup.classList.add('form-group');
            formGroup.classList.add('mb1');
            inputGroup.classList.add('input-group');
            inputGroup.classList.add('input-group-sm');
            inputUnit.type = 'text';
            inputUnit.value = unitValue;
            inputUnit.classList.add('form-control');
            unitAddon.classList.add('input-group-addon');
            unitAddon.appendChild(document.createTextNode(u[0]));
            inputGroup.appendChild(inputUnit);
            inputGroup.appendChild(unitAddon);
            formGroup.appendChild(inputGroup);
            div_content.appendChild(formGroup);
        });
    };
    return Converter;
})();
var units = {
    'pressure': {
        'title': 'Давление',
        'default': 100,
        'u': [
            ['бар', 1],
            ['Па', 0.00001],
            ['мм рт.ст.', 0.00133322],
            ['мм вод.ст', 0.0000980665],
            ['кг/мм2', 98.0665],
            ['кг/см2', 0.980665],
            ['атм', 1.01325],
            ['psi', 0.06894887]
        ]
    },
    'length': {
        'title': 'Длина',
        'default': 100,
        'u': [
            ['м', 1],
            ['см', 0.01],
            ['мм', 0.001],
            ['дюйм', 0.0254],
            ['фут', 0.3048]
        ]
    },
    'capacity': {
        'title': 'Объем',
        'default': 100,
        'u': [
            ['л', 1],
            ['м3', 1000],
            ['gal(UK)', 4.546],
            ['gal(US)', 3.785]
        ]
    },
    'weight': {
        'title': 'Вес',
        'default': 100,
        'u': [
            ['кг', 1],
            ['lb(фунт)', 0.454]
        ]
    },
    'mass': {
        'title': 'Масса',
        'default': 100,
        'u': [
            ['кг', 1],
            ['г', 0.001],
            ['мг', 0.000001],
            ['ц', 100],
            ['т', 1000],
            ['кН', 102],
            ['карат', 0.0002]
        ]
    },
    'moment': {
        'title': 'Крутящий момент',
        'default': 100,
        'u': [
            ['Н*м', 1],
            ['lb*ft', 1.356]
        ]
    },
    'speed': {
        'title': 'Скорость',
        'default': 100,
        'u': [
            ['м/с', 1],
            ['ft/s', 0.3048]
        ]
    },
    'exp': {
        'title': 'Расход',
        'default': 100,
        'u': [
            ['л/мин', 1],
            ['gal/min(UK)', 4.54596],
            ['gal/min(US)', 3.78533]
        ]
    },
    'temp': {
        'title': 'Температура',
        'default': 100,
        'u': [
            ['C', 1],
            ['F', 33.8],
            ['K', 274.1],
            ['Re', 0.8]
        ]
    }
};
var converter = new Converter('converter', units);
//# sourceMappingURL=converter.js.map