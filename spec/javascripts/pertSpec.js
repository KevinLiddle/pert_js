describe("JS PERT library", function() {

  it("calculates the weightedMean of a set of estimates", function() {
    expect(pert.weightedMean(1,1,1)).toEqual(1);
  });

  it("calculates the WM of better numbers", function() {
    expect(pert.weightedMean(1,7,11)).toEqual(6.666666666666667);
  });

  it("calculates the standard deviation of a set of estimates", function() {
    expect(pert.standardDeviation(1,3)).toEqual(0.3333333333333333);
  });

  it("calculates the stddev of some more interesting numbers", function() {
    expect(pert.standardDeviation(2,7)).toEqual(0.8333333333333334)
  });

  it("calculates the variance of some numbers", function() {
    expect(pert.variance(1,3)).toEqual(0.1111111111111111);
  });

  it("calculates the variance of way cooler numbers", function() {
    expect(pert.variance(2,7)).toEqual(0.6944444444444445);
  });

  it("estimates a story with no rounding and stddev as the estimate mode", function() {
    expect(pert.estimate("stddev", 1, 1, 2)).toEqual(1.5);
  });

  it("rounds the estimates to the nearest quarter point", function() {
    expect(pert.estimate("stddev", 1, 6, 9)).toEqual(8.25);
  });
});
