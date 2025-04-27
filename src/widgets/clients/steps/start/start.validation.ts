import { EMAIL_REGEX } from '~/shared/constants';

export const START_FORM_VALIDATION = {
  surname: (value: string) =>
    value.trim().length > 0 ? null : 'Введите фамилию',
  name: (value: string) => (value.trim().length > 0 ? null : 'Введите имя'),
  email: (value: string) =>
    EMAIL_REGEX.test(value) ? null : 'Некорректный email',
  telegram: (value: string) =>
    value.trim().length === 0
      ? 'Укажите Telegram'
      : value.trim().startsWith('@')
        ? null
        : 'Укажите Telegram с "@"',
};
