const priceFormater = new Intl.NumberFormat("ru-ru", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

const priceFormaterDecimals = new Intl.NumberFormat("ru-ru", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 2,
});

export { priceFormater, priceFormaterDecimals };
