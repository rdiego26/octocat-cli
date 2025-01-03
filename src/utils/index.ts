export const getUniqueValues = (arr: string[]): string[] => {
  return [...new Set(arr)];
}

export const cleanArray = (arr: (string | null)[]): string[] => {
  return arr.filter((value): value is string => value !== null);
}

export const cleanAndUnique = (arr: (string | null)[]): string[] => {
  return getUniqueValues(cleanArray(arr));
};
