import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'at least 8 characters long')
        .max(70, 'Too Long!')
        .required('Required'),
});

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(1027).required(),
    lastName: Yup.string().min(3).max(1027).required(),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'at least 8 characters long')
        .max(70, 'Too Long!')
        .required('Required'),
});