import { getUniqueValues, cleanArray } from "../../src/utils";

test('getUniqueValues', () => {
  const arr = ['Java', 'Java', 'Ruby', 'C'];
  expect(getUniqueValues(arr)).toEqual(['Java', 'Ruby', 'C']);
});

test('cleanArray', () => {
  const arr = ['Java', null, 'Ruby', 'C', null];
  expect(cleanArray(arr)).toEqual(['Java', 'Ruby', 'C']);
});
