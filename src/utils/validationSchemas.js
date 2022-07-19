import * as Yup from 'yup'

export const commentSchema = Yup.object().shape({
  newComment: Yup
    .string()
    .required('* El comentario debe contener al menos un caracter')
})
