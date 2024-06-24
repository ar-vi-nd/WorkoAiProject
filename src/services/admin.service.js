import { findAdminByEmail, createAdmin, findAdminByCredentials } from "../dao/admin.dao.js";
import { adminJoiSchema, loginValidationSchema } from "./validationschema.js";
import jwt from "jsonwebtoken";

const createAdminService = async (adminData) => {
    const { error, value } = adminJoiSchema.validate(adminData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    const existingAdmin = await findAdminByEmail(adminData.email);
    if (existingAdmin) {
        throw new Error("Admin with this email already exists");
    }

    const newAdmin = await createAdmin(adminData);
    if (!newAdmin) {
        throw new Error("Error creating Admin");
    }

    return newAdmin;
};

const loginAdminService = async (loginData) => {
    console.log(loginData)
    // here this login data will have an extra field name : undefined so validaion gives error unless i use options (unknown: true) on validation object
    // but now this loginData doesnt have name field so options(unknown: true) on validation object is not required
    const { error, value } = loginValidationSchema.validate(loginData,{ presence: 'required' });
    if (error) {
        throw new Error(error.details[0].message);
    }

    // const { email, password } = loginData;

    const admin = await findAdminByCredentials(email, password);
    if (!admin) {
        throw new Error("Invalid Credentials");
    }

    const accessToken = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY);
    return { admin, accessToken };
};

export { createAdminService, loginAdminService };
