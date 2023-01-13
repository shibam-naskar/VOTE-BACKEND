const Joi = require('@hapi/joi');

const createUserValidation = (data) => {
    const schema = new Joi.object({
        name: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        role: Joi.string().required(),
        createdBy: Joi.required(),
    });
    return schema.validate(data);
}

const albumValidation = (data) => {
    const schema = new Joi.object({
        albumName: Joi.string().min(2).max(255).required(),
        albumDescription: Joi.string().min(2).required(),
        images: Joi.array().required(),
        createdBy: Joi.required(),
        active: Joi.boolean()
    });
    return schema.validate(data);
}
const createNoticeValidation = (data) => {
    const schema = new Joi.object({
        title: Joi.string().max(255).required(),
        type: Joi.string().required(),
        content: Joi.string().required(),
        department: Joi.required(),
        createdBy: Joi.required(),
        active: Joi.boolean()
    });
    return schema.validate(data);
}
const createDepartmentValidation = (data) => {
    const schema = new Joi.object({
        name: Joi.string().max(255).required(),
        about: Joi.string().required(),
        short: Joi.string().max(255).required(),
        yearOfEstablishment: Joi.number().required(),
        messageFromHod: Joi.string().required(),
        hodId: Joi.string().required(),
        mission: Joi.string().required(),
        vision: Joi.string().required(),
        laboratories: Joi.string().required(),
        achievements: Joi.string().required(),
        activities: Joi.string().required(),
        createdBy: Joi.string().required(),
    });
    return schema.validate(data);
}
const createRoleValidation = (data) => {
    const schema = new Joi.object({
        name: Joi.string().max(255).required(),
        permissions: Joi.array().required()
    });
    return schema.validate(data);
}
const createEventValidation = (data) => {
    const schema = new Joi.object({
        title: Joi.string().max(255).required(),
        description: Joi.string().required(),
        date: Joi.required(),
        time: Joi.string(),
        image: Joi.string(),
        active: Joi.boolean(),
        department: Joi.string(),
    });
    return schema.validate(data);
}
module.exports = {
    createUserValidation,
    createNoticeValidation,
    createDepartmentValidation,
    createRoleValidation,
    createEventValidation,
    albumValidation
};