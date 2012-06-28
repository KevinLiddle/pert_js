describe("JS PERT library", function() {

  describe("#weightedMean", function() {
    it("calculates the weightedMean of a set of estimates", function() {
      expect(pert.weightedMean(1,1,1)).toEqual(1);
    });

    it("calculates the WM of better numbers", function() {
      expect(pert.weightedMean(1,7,11)).toEqual(6.666666666666667);
    });
  });

  describe("#standardDeviation", function() {
    it("calculates the standard deviation of a set of estimates", function() {
      expect(pert.standardDeviation(1,3)).toEqual(0.3333333333333333);
    });

    it("calculates the stddev of some more interesting numbers", function() {
      expect(pert.standardDeviation(2,7)).toEqual(0.8333333333333334)
    });
  });

  describe("#variance", function() {
    it("calculates the variance of some numbers", function() {
      expect(pert.variance(1,3)).toEqual(0.1111111111111111);
    });

    it("calculates the variance of way cooler numbers", function() {
      expect(pert.variance(2,7)).toEqual(0.6944444444444445);
    });
  });

  describe("#estimate", function() {

    describe("stddev", function() {
      it("rounds the estimates up", function() {
        expect(pert.estimate("stddev", "round_up", 1, 6, 9)).toEqual(9);
      });

      it("rounds the estimates down", function() {
        expect(pert.estimate("stddev", "round_down", 1, 6, 10)).toEqual(8);
      });

      it("rounds the estimates to nearest point", function() {
        expect(pert.estimate("stddev", "nearest", 1, 6, 9)).toEqual(8);
      });

      it("estimates a story with no rounding", function() {
        expect(pert.estimate("stddev", "no_rounding", 1, 6, 9)).toEqual(8.33);
      });

      it("rounds the estimates to the nearest quarter point", function() {
        expect(pert.estimate("stddev", "quarter_point", 1, 6, 9)).toEqual(8.25);
      });
    });

    describe("mean", function() {
      it("rounds the estimates up", function() {
        expect(pert.estimate("mean", "round_up", 1, 6, 9)).toEqual(6);
      });

      it("rounds the estimates down", function() {
        expect(pert.estimate("mean", "round_down", 1, 6, 10)).toEqual(5);
      });

      it("rounds the estimates to nearest point", function() {
        expect(pert.estimate("mean", "nearest", 1, 6, 9)).toEqual(6);
      });

      it("estimates a story with no rounding", function() {
        expect(pert.estimate("mean", "no_rounding", 1, 6, 9)).toEqual(5.67);
      });

      it("rounds the estimates to the nearest quarter point", function() {
        expect(pert.estimate("mean", "quarter_point", 1, 6, 9)).toEqual(5.75);
      });
    });
  });
});
