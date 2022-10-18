export const formatDate = (date: string): string => {
  const objdate = new Date(date);
  const month = objdate.toLocaleString('default', { month: '2-digit' });
  const day = objdate.toLocaleString('default', { day: '2-digit' });
  const year = objdate.toLocaleString('default', { year: 'numeric' });

  console.log(date);

  return `${day} /${month}/ ${year}`;
};
