import { merge } from "../src/merge";

describe("merge()", () => {

  it("should merge correctly", () => {
    const c1 = [9, 7, 5, 3]; // DESC
    const c2 = [1, 4, 6];    // ASC
    const c3 = [2, 8];       // ASC

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it("should handle empty arrays", () => {
    const result = merge([], [1,2], [3]);
    expect(result).toEqual([1,2,3]);
  });

  it("should handle duplicates", () => {
    const result = merge([5,4,3], [3,4], [2]);
    expect(result).toEqual([2,3,3,4,4,5]);
  });

});
