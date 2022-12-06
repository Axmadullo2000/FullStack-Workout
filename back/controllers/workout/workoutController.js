import asyncHandler from "express-async-handler"

import Workout from "../../models/workoutModel.js"

// @desc add New Workout
// @route POST /api/workout
// @access Private
export const createNewWorkout = asyncHandler(
	async (req, res) => {
		const { name, exercisesId } = req.body

		const workout = await Workout.create({
			name,
			exercises: exercisesId
		})
		res.json(workout)
	}
)


// @desc get Workout
// @route GET /api/workouts/:id
// @access Public
export const getWorkout = asyncHandler(
	async (req, res) => {
		const workout = await Workout.findById(req.params.id)
			.populate('exercises').lean()

		console.log(workout)

		const minutes = Math.ceil(workout.exercises.length * 3.7)

		res.json({ ...workout, minutes })
	}
)

// @desc Update Workout
// @route PUT /api/workout
// @access Private
export const updateWorkout = asyncHandler(
	async (req, res) => {
		const { name, exercisesId, workoutId } = req.body

		const workout = await Workout.findById(workoutId)

		if (!workout) {
			res.status(404)
			throw new Error("Тренировка не найдена!")
		}

		workout.exercises = exercisesId
		workout.name = name
		const updateWorkout = await workout.save()

		res.json(updateWorkout)
	}
)

// @desc Delete Workout
// @route DELETE /api/workout
// @access Private
export const deleteWorkout = asyncHandler(
	async (req, res) => {
		const { workoutId } = req.body

		const workout = await Workout.findById(workoutId)
		console.log(workout)

		if (!workout) {
			res.status(404)
			throw new Error("Данная тренировка не найдена!")
		}

		await workout.remove()

		res.json({ message: "Тренировка удалена из списка!" })
	}
)


// @desc Get Workouts
// @route GET /api/workouts
// @access Public
export const getWorkouts = asyncHandler(
	async (req, res) => {
		const workout = await Workout.find({})

		res.json(workout)
	}
)