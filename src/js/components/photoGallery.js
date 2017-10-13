var $ = require('jquery');
var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {
        var $thumbnail = this.$('.imageGallery1 a');
        $thumbnail.on('click', function(e) {
            e.preventDefault();
            require.ensure(['simple-lightbox'], function() {
                require('simple-lightbox');
                $.simpleLightbox.open({
                    $items: $thumbnail,
                    startAt: $thumbnail.index($(e.target)),
                    bindToItems: false
                });

                var links = document.getElementsByTagName('link'),
                needCSS = true;
                for ( var i = 0; i < links.length; i++ ) {
                    if ( links[i].href.indexOf("css/lightbox.css") !== -1) 
                    needCSS = false;
                }
                if (needCSS) {
                    var ls = document.createElement('link');
                    ls.rel="stylesheet";
                    ls.href="css/lightbox.css";
                    document.getElementsByTagName('head')[0].appendChild(ls);
                }
            });
        });

    }

});
