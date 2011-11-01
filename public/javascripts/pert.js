pert = {

  weightedMean : function(optimistic, realistic, pessimistic) {
    return ((optimistic + (4 * realistic) + pessimistic) / 6);
  },

  standardDeviation : function(optimistic, pessimistic) {
    return ((pessimistic - optimistic) / 6);
  },

  variance : function(optimistic, pessimistic) {
    return (Math.pow(this.standardDeviation(optimistic, pessimistic), 2));
  },

  estimate : function(estimationMode, optimistic, realistic, pessimistic) {
    var mean = this.weightedMean(optimistic, realistic, pessimistic);
    if(estimationMode == "stddev"){
      mean += (this.standardDeviation(optimistic, pessimistic) * 2);
    }
    return (mean*4).toFixed(0)/4.0;
  }
};
