import * as Yup from 'yup';

export const signUpValidation = Yup.object({
    name: Yup.string().required("Enter the name"),
    email: Yup.string().required("Enter the email"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Enter the password"),
    cpassword: Yup.string().oneOf([Yup.ref('password')], 'password not matched').min(6, "Minimum 6 characters").required("Enter the confirm password")
})