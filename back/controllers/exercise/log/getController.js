// @desc Get exercisesLog
// @route GET /api/exercises/log/:id
// @access Public
import asyncHandler from "express-async-handler"

import ExerciseLog from "../../../models/exerciseLogModel.js"

export const getExercisesLog = asyncHandler(async (req, res) => {
	const exercisesLog = await ExerciseLog.findById(req.params.id)

	console.log(req.params.id)

	const prevExerciseLog = await ExerciseLog.find({
		user: req.user._id,
		exercise: exercisesLog
	}).sort('desc').lean()

	const reBuildTimes = (log, prevExLog = null) => {
		if (log !== null) {
			return log.times.map((item, index) => ({
				...item,
				prevWeight: prevExLog ? prevExLog.times[index].weight : 0,
				prevRepeat: prevExLog ? prevExLog.times[index].repeat : 0
			}))
		}
	}

	let newTimes = reBuildTimes(exercisesLog)

	if (prevExerciseLog[0]) newTimes = reBuildTimes(exercisesLog)

	res.json({
		...exercisesLog,
		times: newTimes
	});
})
