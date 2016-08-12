/// <reference path="../../src/libs/jquery.d.ts" />
/// <reference path="../../src/libs/bootstrap.d.ts" />
;(function (window) {
    'use strict';

    function extend( a:any, b:any ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    class TabEdit{
        table:any;
        options: any;
        settings:any = {};
        row: any;

        constructor (table, options){
            this.table = table;
            this.settings = extend( {}, this.settings );
            extend( this.settings, options );

            this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        }
    }

})(Window);
