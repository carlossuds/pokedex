export const formatId = (id: number): string =>
  `#${String(id).padStart(3, '0')}`;

export const formatHeight = (height: number): string => `${height / 10} m`;

export const formatWeight = (height: number): string => {
  const kg = height / 10;
  const lbs = kg * 2.20462;

  return `${lbs.toFixed(2)} lbs (${kg} Kg)`;
};
