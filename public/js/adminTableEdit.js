/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
;
(function (window) {
    'use strict';
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }
    var TabEdit = (function () {
        function TabEdit(table, options) {
            this.table = table;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        }
        return TabEdit;
    })();
})(Window);
//# sourceMappingURL=adminTableEdit.js.map