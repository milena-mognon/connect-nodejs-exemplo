import { celebrate, Joi, Segments } from "celebrate";

const CreateClientValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    telefone: Joi.string().required(),
    email: Joi.string().allow(null, ""),
    data_nascimento: Joi.string().allow(null, ""),
  },
});

export default CreateClientValidation;
