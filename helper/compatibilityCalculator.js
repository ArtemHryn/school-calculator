import { checkNum, personalCalculator } from "./personalCalculator";

export const calcCompatibility = (info) => {
  const partners = info.map((el) => personalCalculator(el));
  const data = partners.reduce((acc, partner) => {
    Object.entries(partner).forEach(([key, value]) => {
      acc[key] = checkNum((+acc[key] || 0) + +value);
    });
    return acc;
  }, {});
  return personalCalculator(data, false);
};

export const getPurpose = (info) => {
  const {
    day,
    bottom1,
    month,
    year,
    topLeft1,
    bottomLeft1,
    bottomRight1,
    topRight1,
  } = info;
  const data = {
    relationships: {
      sky: checkNum(month, bottom1),
      earth: checkNum(day, year),
    },
    partnership: {
      m: checkNum(topLeft1, bottomRight1),
      w: checkNum(topRight1, bottomLeft1),
    },
  };

  data.relationships.result = checkNum(
    data.relationships.sky,
    data.relationships.earth
  );
  data.partnership.result = checkNum(data.partnership.m, data.partnership.w);

  data.total = checkNum(data.relationships.result, data.partnership.result);

  return data;
};
