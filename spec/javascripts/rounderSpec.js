describe("JS Rounder Library", function() {

  it("rounds up", function() {
    expect(rounder.round_up(1.53)).toEqual(2);
  });

  it("rounds up with a low decimal", function() {
    expect(rounder.round_up(1.23)).toEqual(2);
  });

  it("rounds up with an integer", function() {
    expect(rounder.round_up(1)).toEqual(1);
  });

  it("rounds down with a low decimal", function() {
    expect(rounder.round_down(1.23)).toEqual(1);
  });

  it("rounds down with a high decimal", function() {
    expect(rounder.round_down(1.73)).toEqual(1);
  });

  it("rounds down with an integer", function() {
    expect(rounder.round_down(1)).toEqual(1);
  });

  it("rounds nearest with a low decimal", function() {
    expect(rounder.nearest(1.23)).toEqual(1);
  });

  it("rounds nearest with a high decimal", function() {
    expect(rounder.nearest(1.73)).toEqual(2);
  });

  it("rounds nearest with a .5 decimal", function() {
    expect(rounder.nearest(1.5)).toEqual(2);
  });

  it("rounds nearest with an integer", function() {
    expect(rounder.nearest(2)).toEqual(2);
  });

  it("rounds to 2 decimal places for no_rounding", function() {
    expect(rounder.no_rounding(2.23333333333)).toEqual(2.23);
  });

  it("rounds to .0 for an integer", function() {
    expect(rounder.no_rounding(2)).toEqual(2.0);
  });
});
