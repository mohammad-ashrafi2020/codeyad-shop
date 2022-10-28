export const RemoveEmptyProps = (object) => {
  for (const key in object) {
    //@ts-ignore
    if (object[key] == "" || object[key] == null) {
      //@ts-ignore
      delete object[key];
    }
  }
};

export const RangeNumber = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};
