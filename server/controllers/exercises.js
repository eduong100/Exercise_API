import Exercise from "../models/exercise.js";

export const getExercises = async (req, res) => {
  console.log("Getting All Exercises!");
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (err) {
    console.log("OH NO ERROR");
    res.status(404).json({ message: err.message });
  }
};

export const getTargetList = async (req, res) => {
  console.log("Getting Target Muscle List");
  try {
    const targets = await Exercise.distinct("target");
    res.status(200).json(targets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getBodyPartList = async (req, res) => {
  console.log("Getting Body Part List!");
  try {
    const bodyParts = await Exercise.distinct("bodyPart");
    res.status(200).json(bodyParts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getEquipmentList = async (req, res) => {
  console.log("Getting Equipment List");
  try {
    const equipment = await Exercise.distinct("equipment");
    res.status(200).json(equipment);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getByBodyPart = async (req, res) => {
  console.log("Getting Exercises By Body Part");
  const { part } = req.params;

  try {
    const exercises = await Exercise.find({ bodyPart: part });
    res.status(200).json(exercises);
  } catch (err) {
    console.log("OH NO ERROR");
    res.status(404).json({ message: err.message });
  }
};

export const getById = async (req, res) => {
  console.log("Getting Exercise By Id!");
  const { id } = req.params;
  try {
    const exercise = await Exercise.findOne({ id });
    res.json(exercise);
  } catch (err) {
    console.log("OH NO ERROR!");
    res.status(404).json({ message: err.message });
  }
};

export const getByName = async (req, res) => {
  console.log("Getting Exercise By Name!");
  const { nameQuery } = req.params;
  console.log(nameQuery);
  try {
    const name = new RegExp(nameQuery, "i");
    const exercises = await Exercise.find({ name });
    res.status(200).json(exercises);
  } catch (err) {
    console.log("OH NO ERROR!");
    res.status(404).json({ message: err.message });
  }
};

export const getByTarget = async (req, res) => {
  console.log("Getting Exercise By Target!");
  const { target } = req.params;
  try {
    const exercises = await Exercise.find({ target });
    if (!exercises.length)
      throw { message: `No exercises with target '${target}'` };
    res.status(200).json(exercises);
  } catch (err) {
    console.log("OH NO ERROR!");
    res.status(404).json({ message: err.message });
  }
};

export const getByEquipment = async (req, res) => {
  console.log("Getting By Equipment");
  const { equipment } = req.params;
  try {
    const exercises = await Exercise.find({ equipment });
    if (!exercises.length)
      throw { message: `No exercises use equipment '${equipment}'` };
    res.status(200).json(exercises);
  } catch (err) {
    console.log("OH NO ERROR!");
    res.status(404).json({ message: err.message });
  }
};
