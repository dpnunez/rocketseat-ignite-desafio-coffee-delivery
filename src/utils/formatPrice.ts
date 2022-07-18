const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(price: number): string {
  return formatter.format(price);
}
