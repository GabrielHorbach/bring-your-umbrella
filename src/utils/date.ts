/* eslint-disable import/no-duplicates */
import locale from 'date-fns/locale/pt-BR';
import format from 'date-fns/format';

export const getCurrentDateAndTime = () => {
  const todayDate = new Date();
  return format(todayDate, 'eee dd MMMM HH:mm', { locale });
};

export const getGreetingBasedOnPeriodOfTheDay = () => {
  const todayDate = new Date();
  const hours = todayDate.getHours();

  if (hours > 0 && hours <= 12) {
    return 'Bom dia!';
  }

  if (hours > 12 && hours <= 18) {
    return 'Boa tarde!';
  }

  return 'Boa noite!';
};
