rounder = {

  round_up : function(mean) {
    return Math.ceil(mean);
  },

  nearest : function(mean) {
    return Math.round(mean);
  },

  round_down : function(mean) {
    return Math.floor(mean);
  },

  no_rounding : function(mean) {
    return parseFloat(mean.toFixed(2));
  }
};
