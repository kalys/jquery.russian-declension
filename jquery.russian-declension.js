;(function ( $, window, undefined ) {

    var pluginName = 'russian_declension',
        document = window.document,
        defaults = {
            one: "",
            several: "",
            many: ""
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var title_keys = ['one', 'several', 'many'];
        var titles = [];
        for (i=0; i<=2; i++) {
            if ($(this.element).data(title_keys[i])) {
                titles.push($(this.element).data(title_keys[i]));
            } else {
                titles.push(this.options[title_keys[i]]);
            }
        }

        var title = this.pluralize( parseInt($(this.element).html()), titles);
        $(this.element).append(" " + title);
    };

    Plugin.prototype.pluralize = function(number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100 > 4 && number%100 < 20) ? 2 : cases[(number%10 < 5) ? number%10 : 5] ];
    }

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };


    $(window).on('load', function() {
        $('[data-rudecle]').russian_declension()
    });

}(jQuery, window));
