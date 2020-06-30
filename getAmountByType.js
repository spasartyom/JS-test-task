export const getAmountTragedy = (audience) => {
  let amount = 40000;
  if (audience > 30) {
    amount += 1000 * (audience - 30);
  }
  return amount;
};

export const getAmountComedy = (audience) => {
  let amount = 30000;
  if (audience > 20) {
    amount += 10000 + 500 * (audience - 20);
  }
  amount += 300 * audience;
  return amount;
};

export const getAmountByType = (type, audience) => {
  let thisAmount = 0;
  switch (type) { // play на perf
    case "tragedy":
      thisAmount = getAmountTragedy(audience);
      break;
    case "comedy":
      thisAmount = getAmountComedy(audience);
      break;
    default:
      throw new Error(`неизвестный тип: ${type}`);
  }
  return thisAmount;
};