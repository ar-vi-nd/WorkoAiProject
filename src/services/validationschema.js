import Joi from "joi";


const userJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
  });
const adminJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    age: Joi.number().integer().min(18).required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
  });


  const userUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    age: Joi.number().integer().min(18),
    city: Joi.string(),
    zipcode: Joi.string(),
  });

  const loginValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(6).required()
  }).options({allowUnknown:true})


  export {userJoiSchema,adminJoiSchema,userUpdateSchema,loginValidationSchema}