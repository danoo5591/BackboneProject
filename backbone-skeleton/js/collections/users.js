var app = app || {};

var UserList = Backbone.Collection.extend({
    model: app.User,
    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage('users-backbone'),

});

app.Users = new UserList();
