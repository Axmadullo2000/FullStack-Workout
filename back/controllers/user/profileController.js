import asyncHandler from "express-async-handler"
import ExerciseLog from "../../models/exerciseLogModel.js"

import User from "../../models/userModel.js"
import WorkoutLog from "../../models/workoutLogModel.js"
// @desc Get user profile
// @route Get /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id).select('-password').lean()

	const exercisesLogByUser = await ExerciseLog.find({
		user: user._id,
		completed: true
	})

	let countExercisesTimesCompleted = 0;
	let kgs = 0;

	exercisesLogByUser.forEach(log => {
		countExercisesTimesCompleted += log.times.length
		log.times.forEach(item => {
			kgs += item.weight;
		})
	})

	const minutes = Math.ceil(countExercisesTimesCompleted * 2.3)

	const workouts = await WorkoutLog.find({
		user: user._id,
		completed: false
	}).countDocuments()

	res.json({
		...user,
		minutes,
		workouts,
		kgs
	})
})