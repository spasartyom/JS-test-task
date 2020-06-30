export default (type, audience) => {
  const amountBonuses = Math.max(audience - 30, 0);
  if ("comedy" === type) {
    return amountBonuses + Math.floor(audience / 5); // в данном случае начисляются доп.бонусы в зависимости от аудитории для жанра комедия, без более подробного объяснения тяжело исправить
  }
  return amountBonuses;
};