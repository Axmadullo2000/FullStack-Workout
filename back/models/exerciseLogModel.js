import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema

const ExerciseLogSchema = mongoose.Schema({
	user: {
		type: ObjectId,
		ref: "User",
		required: true
	},
	workout: { type: ObjectId, ref: "Workout" },
	exercise: { type: ObjectId, ref: "Exercise", required: true },
	completed: { type: Boolean, default: false },
	times: [
		{
			weight: { type: Number, required: true },
			repeat: { type: Number, required: true },
			completed: { type: Boolean, default: false }
		},
	],
	workoutLog: { type: ObjectId, ref: "WorkoutLog" }
},
	{
		minimize: false,
		timestamp: true
	})

const ExerciseLog = mongoose.model("ExerciseLog", ExerciseLogSchema)

export default ExerciseLog
