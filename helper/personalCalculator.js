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
