var app = app || {}

app.LibraryView = Backbone.View.extend({
	el: '#books',

    initialize: function(books){
        this.library = new app.Library(books)
        //listeners
        this.listenTo(this.library, 'add', this.renderBook);
        this.render();
    },
    
    render: function(){
		this.library.each(function(item){
			this.renderBook(item);
        }, this);
    },
	renderBook: function(book){
        var book_view = new app.BookView({model:book});
        this.$el.append(book_view.el)
    },

    // event handlers
    events: {
        'click #add': 'addBook',
        'click .delete': 'removeBook',
    },

    addBook: function(event){
        event.preventDefault();
        var book_form_data = {};
        $('#addBook input').each(function(){
            book_form_data[this.id] = this.value
        });
        this.library.add(book_form_data);
    },
    removeBook: function(){
        //Delete model
        this.model.destroy();
        //Delete view
        this.remove();
    }

});	
    
