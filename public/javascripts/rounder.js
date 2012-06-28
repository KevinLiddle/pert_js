rounder = {

  round_up : function(mean) {
    return Math.ceil(mean);
  },

  round_down : function(mean) {
    return Math.floor(mean);
  },

  nearest : function(mean) {
    return Math.round(mean);
  },

  no_rounding : function(mean) {
    return parseFloat(mean.toFixed(2));
  },

  quarter_point: function(mean) {
    return (mean*4).toFixed(0)/4.0;
  }
};
