// js/app.js

var app = app || {};
var ENTER_KEY = 13;

/*
$(function () {
    new app.AppView();
});
*/

var User = Backbone.Model.extend({
    url: '/user',
    defaults: {
        id: 0,
        name: '',
        last: '',
        email: '',
        status: false,
    },
    initialize: function(){
        this.on("change:id", function(model){
        var id = model.get("id"); // 'Stewie Griffin'
        alert("Id changed to " + id);
        });
        this.bind("error", function(model, error){
            alert(error);
        });
    },
    validate: function(attrs){
        if (attrs.id <= 0){
            alert('Id attribute should be greater than 0');
        }
    },
});	

var UserView = Backbone.View.extend({

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
