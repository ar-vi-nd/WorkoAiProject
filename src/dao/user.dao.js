import User from "../models/user.model.js";

const findAllUsers = async () => {
    return await User.find({});
};

const findUserById = async (userId) => {
    return await User.findById(userId);
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const createUser = async (userData) => {
    return await User.create(userData);
};

const updateUserById = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

const deleteUserById = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

export { findAllUsers, findUserById, findUserByEmail, createUser, updateUserById, deleteUserById };
