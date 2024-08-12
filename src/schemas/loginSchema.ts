import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // Verifica se é um e-mail válido
    .required() // Torna o campo obrigatório
    .messages({
      'string.email': 'O e-mail fornecido não é válido.',
      'string.empty': 'O e-mail é obrigatório.',
      'any.required': 'O e-mail é obrigatório.',
    }),

  password: Joi.string()
    .min(8) // Define o tamanho mínimo da senha
    .max(30) // Define o tamanho máximo da senha
    .required() // Torna o campo obrigatório
    .messages({
      'string.min': 'A senha deve ter pelo menos {#limit} caracteres.',
      'string.max': 'A senha deve ter no máximo {#limit} caracteres.',
      'string.empty': 'A senha é obrigatória.',
      'any.required': 'A senha é obrigatória.',
    }),
});
