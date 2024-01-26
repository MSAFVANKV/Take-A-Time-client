import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Password is too short - should be 3 chars minimum.').required('username is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is Required'),
});

export const LoginSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Password is too short - should be 3 chars minimum.').required('username is Required'),
    password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is Required'),
});


export const AccountDetails = Yup.object().shape({
    fullname: Yup.string().min(3, 'Password is too short - should be 3 chars minimum.').required('username is Required'),
    phone: Yup.string().max(10, 'Phone number should be a valid number.').required('Phone number is Required'),
    pincode: Yup.string().required('pincode is Required'),
    postOffice: Yup.string().required('postOffice is Required'),
    district: Yup.string().required('district is Required'),
    state: Yup.string().required('state is Required'),

});

export const RouteDetailsValid = Yup.object().shape({
    standname: Yup.string().min(3, 'standname is too short - should be 3 chars minimum.').required('Standname is Required'),

});

export const PaymentDetailsValid = Yup.object().shape({
    payment: Yup.string().required('Payment is Required'),

});
