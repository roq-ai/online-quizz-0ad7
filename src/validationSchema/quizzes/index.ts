import * as yup from 'yup';

export const quizValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  teacher_id: yup.string().nullable(),
});
