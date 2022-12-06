// @desc add New exercise
// @route POST /api/exercises
// @access Private

import asyncHandler from "express-async-handler";

import Exercise from "../../models/exerciseModel.js";

export const createNewExercise = asyncHandler(
	async (req, res) => {
		const { name, times, imageId } = req.body;
		console.log(name, times, imageId);
		const exercise = await Exercise.create({ name, times, imageId });
		res.json(exercise);
	})

// @desc Update Exercises
// @route PUT /api/exercises
// @access Private
export const updateExercises = asyncHandler(
	async (req, res) => {
		const { name, times, imageId, exerciseIndex } = req.body

		const exercise = await Exercise.findById(exerciseIndex)

		if (!exercise) {
			res.status(404)
			throw new Error("Упраженение не найдена!")
		}

		exercise.name = name
		exercise.times = times
		exercise.imageId = imageId

		const updateExercise = await exercise.save()

		res.json(updateExercise)
	}
)

// @desc Delete Exercises
// @route DELETE /api/exercises
// @access Private
export const deleteExercises = asyncHandler(
	async (req, res) => {
		const { exerciseIndex } = req.body

		const exercise = await Exercise.findById(exerciseIndex)

		if (!exercise) {
			res.status(404)
			throw new Error("Данное упражненин не найдено!")
		}

		await exercise.remove()

		res.json({ message: "Упражнение удалено из списка!" })
	}
)

// @desc Get Exercises
// @route GET /api/exercises
// @access Public
export const getExercises = asyncHandler(
	async (req, res) => {
		const exercise = await Exercise.find({})

		res.json(exercise)
	}
)