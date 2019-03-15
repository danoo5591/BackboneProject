/*
<tagName id=id class=className>.html()</tagName>
<ul id="todos" class="container"></ul>

*/
var app = app || {}

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    
    template: _.template($('#bookTemplate').html()),

	initialize: function(){
		this.render();
	},
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
	},
});