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
            marginTop: 0,
            width: Math.floor(nativeWidth * (height / nativeHeight)),
            height: height
          });
        else {
          var newHeight = Math.floor(nativeHeight * (width / nativeWidth));
          self.css({
            marginTop: (height - newHeight) / 2,
            width: width,
            height: newHeight
          });
        }
      });
      
      $(window).resize();
    }
  });
})(jQuery);
