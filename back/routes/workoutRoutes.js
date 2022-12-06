import exress from "express"
import { createNewWorkoutLog, getWorkoutLog, updateCompleteWorkLog } from "../controllers/workout/logController.js"

import { createNewWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from "../controllers/workout/workoutController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = exress.Router()

router.route("/").post(protect, createNewWorkout)
router.route("/").put(protect, updateWorkout)
router.route("/").get(protect, getWorkouts)
router.route("/").delete(protect, deleteWorkout)
router.route("/log").post(protect, createNewWorkoutLog)
router.route("/log/completed").put(protect, updateCompleteWorkLog)
router.route("/log/:id").get(protect, getWorkoutLog)
router.route("/:id").get(protect, getWorkout)

export default router
