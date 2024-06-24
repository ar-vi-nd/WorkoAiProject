import { findAllUsers, findUserById, findUserByEmail, createUser, updateUserById, deleteUserById } from "../dao/user.dao.js";
import { userJoiSchema, userUpdateSchema } from "../services/validationschema.js";
import { isValidObjectId } from "mongoose";

const getAllUsersService = async () => {
    return await findAllUsers();
};

const getUserByIdService = async (userId) => {
    if (!isValidObjectId(userId)) {
        throw new Error("Invalid userId");
    }
    const user = await findUserById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const createUserService = async (userData) => {
    const { error, value } = userJoiSchema.validate(userData,{
        abortEarly: false,
    });
    if (error) {
        throw new Error(error.details.map((detail) => detail.message).join(", "));
    }

    const existingUser = await findUserByEmail(userData.email);
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    return await createUser(userData);
};

const updateUserService = async (userId, updateData) => {
    if (!isValidObjectId(userId)) {
        throw new Error("Invalid userId");
    }

    const { error, value } = userJoiSchema.validate(updateData,{
        abortEarly: false,
    });
    if (error) {
        throw new Error(error.details.map((detail) => detail.message).join(", "));
    }

    const existingUser = await findUserByEmail(updateData.email);
    if (existingUser && !existingUser._id.equals(userId)) {
        throw new Error("User with this email already exists");
    }

    const updatedUser = await updateUserById(userId, value);
    if (!updatedUser) {
        throw new Error("User not found");
    }
    return updatedUser;
};

const updateUserPartialService = async (userId, updateData) => {
    if (!isValidObjectId(userId)) {
        throw new Error("Invalid userId");
    }

    const { error, value } = userUpdateSchema.validate(updateData, {
        abortEarly: false,
    });
    if (error) {
        throw new Error(error.details.map((detail) => detail.message).join(", "));
    }

    if (updateData.email) {
        const existingUser = await findUserByEmail(updateData.email);
        if (existingUser && !existingUser._id.equals(userId)) {
            throw new Error("User with this email already exists");
        }
    }

    const updatedUser = await updateUserById(userId, { $set: value });
    if (!updatedUser) {
        throw new Error("User not found");
    }
    return updatedUser;
};

const deleteUserService = async (userId) => {
    if (!isValidObjectId(userId)) {
        throw new Error("Invalid userId");
    }

    const deletedUser = await deleteUserById(userId);
    if (!deletedUser) {
        throw new Error("User not found");
    }
    return deletedUser;
};

export { getAllUsersService, getUserByIdService, createUserService, updateUserService, updateUserPartialService, deleteUserService };
