export function checkNum(...nums) {
  const result = nums.reduce((acc, el) => {
    return +acc + +el;
  }, 0);
  if (+result > 22) {
    return String(result)
      .split("")
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +result;
}

export const personalCalculator = (info) => {
  const date = { ...info };

  //основні точки(особистий квадрат)
  Object.keys(date).forEach((el) => {
    if (el === "year") {
      date[el] = checkNum(checkNum(date[el]));
      return;
    }
    date[el] = checkNum(date[el]);
  });

  date.bottom1 = checkNum(date.day, date.month, date.year);
  date.center = checkNum(date.day, date.month, date.year, date.bottom1);

  //самі верхні точки під 45 градусів(родовий квадрат)
  date.topLeft1 = checkNum(date.day, date.month);
  date.topRight1 = checkNum(date.month, date.year);
  date.bottomRight1 = checkNum(date.bottom1, date.year);
  date.bottomLeft1 = checkNum(date.bottom1, date.day);

  //внутрішній квадрат
  date.left3 = checkNum(date.day, date.center);
  date.top3 = checkNum(date.month, date.center);
  date.right3 = checkNum(date.year, date.center);
  date.bottom3 = checkNum(date.bottom1, date.center);

  //внутрішній квадрат до родового
  date.topLeft3 = checkNum(date.topLeft1, date.center);
  date.topRight3 = checkNum(date.topRight1, date.center);
  date.bottomRight3 = checkNum(date.bottomRight1, date.center);
  date.bottomLeft3 = checkNum(date.bottomLeft1, date.center);

  //внутрішня точка в особистому квадраті

  date.left2 = checkNum(date.day, date.left3);
  date.top2 = checkNum(date.month, date.top3);
  date.right2 = checkNum(date.year, date.right3);
  date.bottom2 = checkNum(date.bottom1, date.bottom3);

  //внутрішня точка в родовому квадраті

  date.topLeft2 = checkNum(date.topLeft1, date.topLeft3);
  date.topRight2 = checkNum(date.topRight1, date.topRight3);
  date.bottomRight2 = checkNum(date.bottomRight1, date.bottomRight3);
  date.bottomLeft2 = checkNum(date.bottomLeft1, date.bottomLeft3);

  //внутрішні точки
  date.innerLeft = checkNum(date.left3, date.center);
  date.innerTop = checkNum(date.top3, date.center);
  date.balance = checkNum(date.right3, date.bottom3);
  date.love = checkNum(date.balance, date.bottom3);
  date.money = checkNum(date.balance, date.right3);

  return date;
};

const chakras = [
  {
    name: "Сахасрара-чакра",
    desc: "Місія",
    color: "linear-gradient(to bottom, #BD6ED9CC, #CF9BDECC)",
  },
  {
    name: "Аджна-чакра",
    desc: "Доля, егрегори",
    color:
      "linear-gradient(180deg, rgba(79,130,232,1) 16%, rgba(156,168,215,1) 74%)",
  },
  {
    name: "Вішудха-чакра",
    desc: "Самосприйняття, самовираження",
    color:
      "linear-gradient(180deg, rgba(97,199,251,1) 53%, rgba(168,227,254,1) 85%)",
  },
  {
    name: "Анахата-чакра",
    desc: "Відносини, картина світу",
    color:
      "linear-gradient(180deg, rgba(188,225,177,1) 0%, rgba(106,146,88,1) 44%)",
  },
  {
    name: "Маніпура-чакра",
    desc: "Статус, партнерство, місце в соціумі, гроші",
    color:
      "linear-gradient(180deg, rgba(255,251,94,1) 79%, rgba(255,255,255,1) 100%)",
  },
  {
    name: "Свадхістана-чакра",
    desc: "Радість, задоволення",
    color:
      "linear-gradient(180deg, rgba(242,212,188,1) 4%, rgba(251,175,112,1) 49%, rgba(255,159,82,1) 75%, rgba(255,146,58,1) 100%)",
  },
  {
    name: "Муладхара-чакра",
    desc: "Тіло, матерія",
    color:
      "linear-gradient(180deg, rgba(250,85,79,1) 0%, rgba(247,110,104,1) 27%, rgba(241,141,135,1) 58%)",
  },
];

export const personalTables = (info) => {
  const {
    day,
    left2,
    left3,
    innerLeft,
    center,
    right3,
    year,
    month,
    top2,
    top3,
    innerTop,
    bottom3,
    bottom1,
    topLeft1,
    bottomRight1,
    topRight1,
    bottomLeft1,
  } = info;

  //здоров'я
  const tables = {
    healthMap: [
      { column1: day, column2: month },
      { column1: left2, column2: top2 },
      { column1: left3, column2: top3 },
      { column1: innerLeft, column2: innerTop },
      { column1: center, column2: center },
      { column1: right3, column2: bottom3 },
      { column1: year, column2: bottom1 },
    ],
    total: {},
    sum: {},
  };

  tables.healthMap.forEach(
    (el) => (el.column3 = checkNum(el.column1, el.column2))
  );

  tables.sum.column1 = tables.healthMap.reduce(
    (acc, el) => acc + el.column1,
    0
  );

  tables.sum.column2 = tables.healthMap.reduce(
    (acc, el) => acc + el.column2,
    0
  );
  tables.sum.column3 = tables.healthMap.reduce(
    (acc, el) => acc + el.column3,
    0
  );
  tables.total.column1 = checkNum(tables.sum.column1);
  tables.total.column2 = checkNum(tables.sum.column2);
  tables.total.column3 = checkNum(tables.sum.column3);

  tables.healthMap.forEach((el, index) => (el.chakras = chakras[index]));

  //призначення
  const purpose = {
    personal: { point1: checkNum(month, bottom1), point2: checkNum(day, year) },
    social: {
      point1: checkNum(topLeft1, bottomRight1),
      point2: checkNum(topRight1, bottomLeft1),
    },
    total: {},
  };

  purpose.personal.result = checkNum(
    purpose.personal.point1,
    purpose.personal.point2
  );
  purpose.social.result = checkNum(
    purpose.social.point1,
    purpose.social.point2
  );
  purpose.total.spirit = checkNum(
    purpose.personal.result,
    purpose.social.result
  );
  purpose.total.planetary = checkNum(
    purpose.social.result,
    purpose.total.spirit
  );
  return { tables, purpose };
};

export const genericPrograms = (info) => {
  const { topLeft1, bottomRight1, topRight1, bottomLeft1, center } = info;
  const data = {
    father: [topLeft1, bottomRight1, checkNum(topLeft1, bottomRight1)],
    mother: [topRight1, bottomLeft1, checkNum(topRight1, bottomLeft1)],
  };

  data.genericPower = checkNum(topLeft1, topRight1, bottomLeft1, bottomRight1);
  data.internal = [
    center,
    data.genericPower,
    checkNum(center, data.genericPower),
  ];

  return data;
};

//період
export const getPeriod = (info) => {
  const {
    day,
    topLeft1,
    month,
    topRight1,
    year,
    bottomRight1,
    bottom1,
    bottomLeft1,
  } = info;
  const elements = [];
  const arcanes = [
    day,
    topLeft1,
    month,
    topRight1,
    year,
    bottomRight1,
    bottom1,
    bottomLeft1,
  ];
  let arcaneIndex = 0;
  for (let i = 0; i < 80; i += 1.25) {
    if (i === 0 || i % 10 === 0) {
      elements.push({ age: i, arcane: arcanes[arcaneIndex] });
      arcaneIndex++;
      continue;
    }
    elements.push({ age: i });
  }

  elements.forEach((element, index, array) => {
    try {
      if (index === 60) {
        element.arcane = checkNum(array[index - 4].arcane, array[0].arcane);
        return;
      }
      if (element.age % 5 === 0 && element.age % 10 !== 0) {
        element.arcane = checkNum(
          array[index - 4].arcane,
          array[index + 4].arcane
        );
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 62) {
        element.arcane = checkNum(array[index - 2].arcane, array[0].arcane);
        return;
      }
      if (element.age % 2.5 === 0 && element.age % 5 !== 0) {
        element.arcane = checkNum(
          array[index - 2].arcane,
          array[index + 2].arcane
        );
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 63) {
        element.arcane = checkNum(array[index - 1].arcane + array[0].arcane);
        return;
      }
      if (element.age % 1.25 === 0 && element.age % 2.5 !== 0) {
        element.arcane = checkNum(
          array[index - 1].arcane + array[index + 1].arcane
        );
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((el, index) => (el.style = `arcane${index + 1}`));
  return elements;
};
