import { getAmountByType } from './getAmountByType.js';
import getBonus from './getBonus.js';
import format from './format.js';

const invoices = [
  {
    "customer": "MDT",
    "performance": [
      {
        "playId": "Гамлет",
        "audience": 55,
        "type": "tragedy"
      },
      {
        "playId": "Ромео и Джульетта",
        "audience": 35,
        "type": "tragedy"
      },
      {
        "playId": "Отелло",
        "audience": 40,
        "type": "comedy"
      }
    ]
  },
  {
    "customer": "ЮЗ",
    "performance": [
      {
        "playId": "Вишневый сад",
        "audience": 45,
      },
      {
        "playId": "Отцы и дети",
        "audience": 40,
      },
      {
        "playId": "Теремок",
        "audience": 50,
      }
    ]
  }
];

const plays = [
  {
    "playId": "Гамлет",
    "type": "tragedy"
  },
  {
    "playId": "Ромео и Джульетта",
    "type": "tragedy"
  },
  {
    "playId": "Отелло",
    "type": "comedy"
  },
  {
    "playId": "Вишневый сад",
    "type": "tragedy"
  },
  {
    "playId": "Отцы и дети",
    "type": "tragedy"
  },
  {
    "playId": "Теремок",
    "type": "comedy"
  }
];

const statement = (invoice, plays) => {
  const resultInfo = {
    "totalAmount": 0,
    "volumeCredits": 0,
    "plays": [],
    "customer": invoice.customer
  };
  for (const perf of invoice.performance) {
    const play = plays.find((play) => perf.playId === play.playId)
    const thisAmount = getAmountByType(play.type, perf.audience);
    // Добавление бонусов
    resultInfo.volumeCredits += getBonus(play.type, perf.audience);
    // Формирования результатов
    resultInfo.plays.push({
      "playId": perf.playId,
      "audience": perf.audience,
      "amount": thisAmount
    });
    resultInfo.totalAmount += thisAmount;
  }
  // возвращаем итоговую строку. Возможно, имеет смысл вовзращать объект с результатом (удобнее тестиировать), а после к нему применять функцию формирования текста
  return format(resultInfo);
}

const resultArr = invoices.map((invoice) => statement(invoice, plays));
console.log(resultArr[1]);