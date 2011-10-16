(function(jQuery) {
  jQuery.fn.extend({
    constrainAspect: function(nativeWidth, nativeHeight) {
      var self = this;
      
      $(window).resize(function() {
        var height = $(window).height();
        var width = $(window).width();
        var aspect = width / height;
        var idealAspect = nativeWidth / nativeHeight;

        if (aspect > idealAspect)
          self.css({
            width: Math.floor(nativeWidth * (height / nativeHeight)),
            height: height
          });
        else
          self.css({
            width: width,
            height: Math.floor(nativeHeight * (width / nativeWidth))
          });
      });
      
      $(window).resize();
    }
  });
})(jQuery);
