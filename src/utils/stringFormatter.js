export const toPropercase = (str) => str.split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
