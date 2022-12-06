// @desc Add new exercises
// @route POST /api/exercises/log
// @access Private

import asyncHandler from "express-async-handler";
import ExerciseLog from "../../models/exerciseLogModel.js";
import WorkoutLog from "../../models/workoutLogModel.js";

import WorkouteLog from "../../models/workoutLogModel.js";
import Workout from "../../models/workoutModel.js";

export const createNewWorkoutLog = asyncHandler(
	async (req, res) => {
		const { workoutId } = req.body;
		const user = req.user._id

		const workout = await Workout.findById(workoutId).populate('exercises')

		if (workout) {
			const workoutLog = await WorkouteLog.create({
				user: req.user._id,
				workout: workoutId,
			})

			const logs = workout.exercises.map(ex => {
				let timesArray = []

				for (let i = 0; i < ex.times; i++) {
					timesArray.push({
						weight: 0,
						repeat: 0
					})
				}

				return {
					user,
					exercises: ex._id,
					times: timesArray,
					workoutLog: workoutLog._id
				}

			})

			const createdExLogs = await ExerciseLog.insertMany(logs)

			const exLogs = createdExLogs.map(log => log._id)
			const foundWorkoutLog = await WorkoutLog.findById(workoutLog._id)
			foundWorkoutLog.exerciseLog = exLogs
			const updateWorkoutLog = await foundWorkoutLog.save()
			res.json(updateWorkoutLog)
		} else {
			res.status(404)
			throw new Error("Workout  not found!")
		}
	})


// @desc Get exercises
// @route GET /api/exercises/log/:id
// @access Public

export const getWorkoutLog = asyncHandler(async (req, res) => {
	const workoutLog = await WorkoutLog.findById(req.params.id)
		.populate('workout')
		.populate({
			path: "exerciseLogs",
			populate: {
				path: 'exercise'
			}
		}).lean()

	const minute = Math.ceil(workoutLog.workout.exercises.length * 3.7)

	res.json({ ...workoutLog, minute })
})

// @desc Update workout log completed
// @route PUT /api/workouts/log/completed
// @access Private

export const updateCompleteWorkLog = asyncHandler(async (req, res) => {
	const { logId } = req.body
	const currentLog = await WorkouteLog.findById(logId)

	if (!currentLog) {
		res.status(404)
		throw new Error("Данный лог не найдён!")
	}

	currentLog.completed = true
	const updateLog = await currentLog.save()
	res.json(updateLog)
})
