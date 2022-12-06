import mongoose from "mongoose";
import { ObjectId } from "mongodb"

const workoutLogSchema = mongoose.Schema({
	user: {
		type: ObjectId,
		ref: "User",
		required: true
	},

	workout: { type: ObjectId, ref: "Workout", required: true },
	completed: { type: Boolean, default: false },
	exercisesLog: [
		{
			type: ObjectId,
			ref: "ExerciseLog"
		}
	]
},
	{
		minimize: false,
		timestamp: true
	})

const WorkoutLog = mongoose.model("WorkoutLog", workoutLogSchema)

export default WorkoutLog
