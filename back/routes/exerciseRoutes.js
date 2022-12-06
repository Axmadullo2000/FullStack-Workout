import express from "express";
import { getExercisesLog } from "../controllers/exercise/log/getController.js";

import { createNewExerciseLog } from "../controllers/exercise/log/createController.js";
import { createNewExercise, deleteExercises, getExercises, updateExercises } from "../controllers/exercise/mainController.js";

import { protect } from "../middleware/authMiddleware.js";
import { updateExerciseLog, updateExerciseStatus } from "../controllers/exercise/log/updateController.js";

const router = express.Router()
router.route("/").post(protect, createNewExercise)
router.route("/").get(protect, getExercises)
router.route("/").put(protect, updateExercises)
router.route("/").delete(protect, deleteExercises)

router.route("/log").post(protect, createNewExerciseLog)
router.route("/log").put(protect, updateExerciseLog)
router.route("/log/completed").put(protect, updateExerciseStatus)
router.route('/log/:id').get(protect, getExercisesLog)

export default router;
