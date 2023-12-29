import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PHONE } from '../../../constants';

export const SchemaUa = yup
  .object({
    firstName: yup
      .string('Має бути текстовим')
      .trim()
      .max(15, 'Надто довге імʼя! Максимум 15 символів'),

    lastName: yup
      .string('Має бути текстовим')
      .trim()
      .max(15, 'Надто довге прізвищє! Максимум 15 символів'),

    phone: yup
      .string('Має бути текстовим')
      .matches(
        REGEX_PHONE,
        'Невалідний формат'
      )
      .required('Обов`язкове поле'),

    email: yup
      .string('Має бути текстовим')
      .trim()
      .max(50, 'Надто довга адреса! Максимум 50 символів')
      .matches(REGEX_EMAIL, 'Не правильний формат адреси'),

    isAccept: yup
      .bool()
      .oneOf([true], 'Має бути погоджено')
      .required('Обов`язкове поле'),

    specialization_id: yup.number(),

    lawyer_id: yup.number(),
  })
  .required();

export const SchemaEn = yup
  .object({
    firstName: yup
      .string('Must be text')
      .trim()
      .max(15, 'Name too long! Maximum 15 characters'),

    lastName: yup
      .string('Must be text')
      .trim()
      .max(15, 'Name too long! Maximum 15 characters'),

    phone: yup
      .string('Must be text')
      .matches(
        REGEX_PHONE,
        'Invalid format'
      )
      .required('Обов`язкове поле'),

    email: yup
      .string('Must be text')
      .trim()
      .min(6, 'Short address! Minimum 6 characters')
      .max(50, 'Address too long! Maximum 50 characters')
      .matches(REGEX_EMAIL, 'Invalid address format'),

    isAccept: yup
      .bool()
      .oneOf([true], 'Must be agreed')
      .required('Required field'),

    specialization_id: yup.number(),

    lawyer_id: yup.number(),
  })
  .required();
