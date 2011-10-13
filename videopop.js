(function(Popcorn) {
    
  Popcorn.plugin( "videopop" , function( options ) {

    return {
      _setup: function() {
        // optional                          
      },
      start: function( event, options ) {
        // Do stuff at the start!
	console.log("starting pop" + options.start + " src is " + options.source );
	$("#" + options.target).hide();
        $("<video/>", { src: options.source, id: options.name,  width: "240", poster: options.poster, controls: "true"}).appendTo("#" + options.target);
	$("#" + options.target).fadeIn(3000);
 	vpop = Popcorn("#"+ options.name);
	vpop.listen("play", function() {
	    Popcorn("#background").pause();
	});
	vpop.listen("pause", function() {
	    Popcorn("#background").play();
	}); 
	vpop.listen("ended", function() {
	    Popcorn("#background").play();
	});
      },
      end: function( event, options ) {
        // Do stuff at the end!
	console.log("stopping pop");
	$("#" + options.name).remove();
        console.log("The End!");
      }, 
      _teardown: function() {
        // optional            
      }
    };
  });
    
})(Popcorn);

