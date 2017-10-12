var View = require('jquery-simple-view');

module.exports = View.extend({
    initialize: function() {
        var $searchInput = this.$('.query');
        $searchInput.on('input', function() {
            require.ensure(['fastsearch'], function() {
                require('fastsearch');
                $searchInput.fastsearch({
                    onItemSelect: 'fillInput'
                });
            });
        });
    }
});

