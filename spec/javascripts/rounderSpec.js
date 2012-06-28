describe("JS Rounder Library", function() {

  describe("#round_up", function() {
    it("rounds up", function() {
      expect(rounder.round_up(1.53)).toEqual(2);
      expect(rounder.round_up(1.23)).toEqual(2);
    });

    it("doesn't round with an integer", function() {
      expect(rounder.round_up(1)).toEqual(1);
    });
  });

  describe("#round_down", function() {
    it("rounds down", function() {
      expect(rounder.round_down(1.23)).toEqual(1);
      expect(rounder.round_down(1.73)).toEqual(1);
    });

    it("doesn't round with an integer", function() {
      expect(rounder.round_down(1)).toEqual(1);
    });
  });

  describe("#nearest", function() {
    it("rounds nearest", function() {
      expect(rounder.nearest(1.23)).toEqual(1);
      expect(rounder.nearest(1.73)).toEqual(2);
    });

    it("rounds up with a .5 decimal", function() {
      expect(rounder.nearest(1.5)).toEqual(2);
    });

    it("doesn't round with an integer", function() {
      expect(rounder.nearest(2)).toEqual(2);
    });
  });

  describe("#no_rounding", function() {
    it("leaves only 2 decimal places", function() {
      expect(rounder.no_rounding(2.23333333333)).toEqual(2.23);
    });

    it("does nothing for an integer", function() {
      expect(rounder.no_rounding(2)).toEqual(2);
    });
  });

  describe("#quarter_point", function() {
    it("rounds to the nearest quarter point", function() {
      expect(rounder.quarter_point(1.02)).toEqual(1.0);
      expect(rounder.quarter_point(2.19)).toEqual(2.25);
      expect(rounder.quarter_point(3.59)).toEqual(3.5);
      expect(rounder.quarter_point(4.81)).toEqual(4.75);
    });

    it("does nothing for a quarter point", function() {
      expect(rounder.quarter_point(1)).toEqual(1);
      expect(rounder.quarter_point(2.25)).toEqual(2.25);
      expect(rounder.quarter_point(3.5)).toEqual(3.5);
      expect(rounder.quarter_point(4.75)).toEqual(4.75);
    });
  });
});
