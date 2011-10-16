(function(jQuery) {
  jQuery.fn.extend({
    activeDurations: function(i) {
      var durations = Instapoppin.getActiveDurations(this[0]);
      if (typeof(i) == 'undefined')
        return durations;
      else
        return durations[i];
    }
  });
})(jQuery);
