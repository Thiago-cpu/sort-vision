export const randomSeed = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
