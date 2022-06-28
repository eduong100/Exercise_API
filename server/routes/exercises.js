import express from "express";
import {
  getExercises,
  getBodyPartList,
  getByBodyPart,
  getById,
  getByName,
  getTargetList,
  getByTarget,
  getEquipmentList,
  getByEquipment,
} from "../controllers/exercises.js";
const router = express.Router();

router.get("/", getExercises);
router.get("/targetList", getTargetList);
router.get("/bodyPartList", getBodyPartList);
router.get("/equipmentList", getEquipmentList);
router.get("/bodyPart/:part", getByBodyPart);
router.get("/name/:nameQuery", getByName);
router.get("/target/:target", getByTarget);
router.get("/equipment/:equipment", getByEquipment);

router.get("/:id", getById);

export default router;
