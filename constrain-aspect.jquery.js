(function(jQuery) {
  jQuery.fn.extend({
    constrainAspect: function(aWidth, aHeight) {
      var self = this;
      var idealAspect = aWidth / aHeight;
      
      $(window).resize(function() {
        var wWidth = $(window).width();
        var wHeight = $(window).height();

        if (wWidth / wHeight > idealAspect)
          self.css({
            marginTop: 0,
            width: Math.floor(aWidth * (wHeight / aHeight)),
            height: wHeight
          });
        else {
          var selfHeight = Math.floor(aHeight * (wWidth / aWidth));
          self.css({
            marginTop: (wHeight - selfHeight) / 2,
            width: wWidth,
            height: selfHeight
          });
        }
      });
      
      $(window).resize();
    }
  });
})(jQuery);
