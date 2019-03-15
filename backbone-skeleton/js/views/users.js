// js/views/todos.js

var app = app || {};

// User Item View

app.UserView = Backbone.View.extend({

    //... is a list tag.
    tagName: 'li',
    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    /*
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    */
    initialize: function () {
        this.render();
    },
    render: function() {
        this.$el.html(this.model.get('id') + ': ' + this.model.get('name') + ' ' + this.model.get('last'));
    }
});