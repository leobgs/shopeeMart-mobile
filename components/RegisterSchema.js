import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username harus diisi'),
    password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .required('Password harus diisi'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password tidak cocok')
        .required('Konfirmasi password harus diisi'),
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email harus diisi'),
    fullName: Yup.string()
        .required('Nama lengkap harus diisi'),
    address: Yup.string()
        .required('Alamat harus diisi'),
    mobilePhone: Yup.string()
        .required('Nomor telepon harus diisi'),
});

export default RegisterSchema;