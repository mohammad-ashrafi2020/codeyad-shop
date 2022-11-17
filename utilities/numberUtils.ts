export function splitNumber(value: number | string | null) {
  if (value === null || value == undefined || value == 0) {
    return "0";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "00");
}
