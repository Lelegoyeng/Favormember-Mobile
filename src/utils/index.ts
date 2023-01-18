export const formatCurrency = (number: any) => {
  const text = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number || 0);

  return text.replace(/\xa0/g, " ").replace(/\u202f/g, " ");
};
