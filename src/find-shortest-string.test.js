"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
  var shortestString = stringArr[0];
  for (let str of stringArr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString.length;
}
/*
console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
console.log(findShortestString(["why", "hello", "to", "you"]), "to");
console.log(findShortestString(["brave", "dance"]), "brave");
*/

test("findLongestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});
