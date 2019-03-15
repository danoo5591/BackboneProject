var app = app || {};

app.User = Backbone.Model.extend({
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
