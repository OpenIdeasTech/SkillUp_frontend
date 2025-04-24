import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  username: yup.string().required('Nome de usuário é obrigatório'),
  phone: yup
    .string()
    .matches(/^\(\d{2,3}\)\d{4,5}-\d{4}$/, 'Formato de telefone inválido')
    .required('Número de celular é obrigatório'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),
  terms: yup.boolean().oneOf([true], 'Você precisa aceitar os termos'),
});