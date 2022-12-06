// @desc Register user
// @route POST /api/users/profile
// @access Public

import asyncHandler from "express-async-handler";

import User from "../../models/userModel.js";
import { generateToken } from "../helpers/generateToken.js";

export const registerUser = asyncHandler(
	async (req, res) => {
		const { email, password } = req.body;

		const isHaveUser = await User.findOne({ email })

		if (isHaveUser) {
			res.status(404)
			throw new Error("Данный пользователь уже зарегистрирован")
		}

		const user = await User.create({ email, password })
		const token = generateToken(user._id)

		res.json({ user, token })
	}
) 
