var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function(options) {

        $.simpleLightbox.open({
            content: $('<div>').load('login-modal.html'),
            elementClass: 'slbContentEl'
        });

    }

});
