export default (resultInfo) => {
  let resultString = `Счет для ${resultInfo.customer}\n`;
  const format = new Intl.NumberFormat("ru-RU", // Inti заменил на Intl
    {
      style: "currency", currency: "RUB",
      minimumFractionDigits: 2
    }).format;
  const playsString = resultInfo.plays.map((item) => `${item.playId}: ${format(item.amount / 100)} (${item.audience} мест)`).join('\n');
  resultString += playsString;
  resultString += `\nИтого с вас ${format(resultInfo.totalAmount / 100)}\n`;
  resultString += `Вы заработали ${resultInfo.volumeCredits} бонусов\n`;
  return resultString;
};
