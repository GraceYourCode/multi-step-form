import * as yup from 'yup'

export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email.").required("This field is required."),
  name: yup.string().required("This field is required."),
  phone: yup.number().required("This field is required."),
})