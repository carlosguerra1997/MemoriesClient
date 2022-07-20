import * as Yup from 'yup'

export const commentSchema = Yup.object().shape({
  comment: Yup
    .string()
    .required('* El comentario debe contener al menos un caracter')
})
