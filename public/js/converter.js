var NumberFormat = Intl.NumberFormat;
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
        this.numberFormat = function (number, decimal) {
            if (decimal === void 0) { decimal = 6; }
            var res = parseFloat(number), exp10 = Math.pow(10, decimal);
            res = Math.round(res * exp10) / exp10;
            return res;
        };
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
    Converter.prototype._init = function () {
        var self = this, units = this.units;
        this.input_result.readOnly = true;
        for (var i in units) {
            if (units.hasOwnProperty(i)) {
                var text = units[i].title;
                this.addOption(this.selectType, text, i);
            }
        }
        this.currentType = this.selectType.options.item(this.selectType.selectedIndex).value;
        this._changeUnitType(this.currentType);
        this.selectType.addEventListener('change', function (ev) {
            ev.preventDefault();
            var val = this.value;
            self._changeUnitType(val);
            self.currentType = val;
        });
        this._initEvent();
    };
    Converter.prototype._changeUnitType = function (type) {
        var self = this, typeUnits = this.units[type].u;
        this.input_value.value = this.units[type].default;
        this.select_value.innerHTML = '';
        for (var i in typeUnits) {
            if (typeUnits.hasOwnProperty(i)) {
                var text = typeUnits[i][0];
                this.addOption(this.select_value, text, typeUnits[i][1]);
            }
        }
        this.select_result.innerHTML = '';
        for (var i in typeUnits) {
            if (typeUnits.hasOwnProperty(i)) {
                var text = typeUnits[i][0];
                this.addOption(self.select_result, text, typeUnits[i][1]);
            }
        }
        this.select_result.options.item(1).selected = true;
        if (type != 'temp') {
            self._convert();
        }
        else {
            self._convertTemp();
        }
    };
    Converter.prototype._initEvent = function () {
        var self = this;
        this.input_value.addEventListener('input', function (ev) {
            ev.preventDefault();
            if (self.currentType != 'temp') {
                self._convert();
            }
            else {
                self._convertTemp();
            }
        });
        this.select_value.addEventListener('change', function (ev) {
            ev.preventDefault();
            if (self.currentType != 'temp') {
                self._convert();
            }
            else {
                self._convertTemp();
            }
        });
        this.select_result.addEventListener('change', function (ev) {
            ev.preventDefault();
            if (self.currentType != 'temp') {
                self._convert();
            }
            else {
                self._convertTemp();
            }
        });
    };
    Converter.prototype._convert = function () {
        var a = this.select_value.value, b = this.select_result.value, c = this.input_value.value, res = (c * a) / b;
        this.input_result.value = this.numberFormat(res);
    };
    Converter.prototype._convertTemp = function () {
        var a = this.select_value.value, b = this.select_result.value, c = this.input_value.value, res = 0;
        if (a == b)
            res = c;
        if (a == 'c' && b == 'f')
            res = c * 1.8000 + 32.00;
        if (a == 'k' && b == 'f')
            res = (c - 273.15) * 1.8000 + 32.00;
        if (a == 'k' && b == 'c')
            res = c - 273.15;
        if (a == 'c' && b == 'k')
            res = Number(c) + 273.15;
        if (a == 'f' && b == 'k')
            res = (c - 32.00) / 1.8000 + 273.15;
        if (a == 'f' && b == 'c')
            res = (c - 32.00) / 1.8000;
        this.input_result.value = this.numberFormat(res);
    };
    return Converter;
}());
var units = {
    'pressure': {
        'title': 'Давление',
        'default': 1,
        'u': [
            ['бар', 1],
            ['Па', 0.00001],
            ['мбар', 0.001],
            ['мкбар', 0.000001],
            ['кПа', 0.01],
            ['МПа', 10],
            ['мм рт.ст.', 0.00133322],
            ['мм вод.ст', 0.0000980665],
            ['м вод.ст', 0.0980665],
            ['кг/мм2', 98.0665],
            ['кг/см2', 0.980665],
            ['атм', 1.01325],
            ['psi', 0.06894887]
        ]
    },
    'length': {
        'title': 'Длина',
        'default': 1,
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
        'default': 0,
        'u': [
            ['C', 'c'],
            ['F', 'f'],
            ['K', 'k'],
        ]
    }
};
var converter = new Converter('converter', units);
//# sourceMappingURL=converter.js.map