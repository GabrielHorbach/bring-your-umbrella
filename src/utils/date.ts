/* eslint-disable import/no-duplicates */
import locale from 'date-fns/locale/pt-BR';
import format from 'date-fns/format';

export const getCurrentDateAndTime = () => {
  const todayDate = new Date();
  return format(todayDate, 'eee dd MMMM HH:mm', { locale });
};
