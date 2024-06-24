import Admin from "../models/admin.model.js";

const findAdminByEmail = async (email) => {
    return await Admin.findOne({ email });
};

const createAdmin = async (adminData) => {
    return await Admin.create(adminData);
};

const findAdminByCredentials = async (email, password) => {
    return await Admin.findOne({ email, password });
};

export { findAdminByEmail, createAdmin, findAdminByCredentials };
