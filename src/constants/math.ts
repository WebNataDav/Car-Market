export const getMonthlyPayment = (price: number): number => {
  return Math.round(price / 100);
};
