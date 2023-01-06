import { chain } from "lodash";

export const phoneNumberValidator = (value: string): boolean => {
  if (value.length != 11) return false;
  try {
    var res = Number(value);
    return true;
  } catch {
    return false;
  }
};
