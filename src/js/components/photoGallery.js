var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {
        var $thumbnail = this.$('.imageGallery1 a');
        $thumbnail.on('click', function(e) {
            e.preventDefault();
            require.ensure(['simple-lightbox'], function() {
                require('simple-lightbox');
                $thumbnail.simpleLightbox();
            });
        });

    }

});
