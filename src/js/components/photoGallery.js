var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function() {

        this.$('.imageGallery1 a').simpleLightbox();

    }

});
