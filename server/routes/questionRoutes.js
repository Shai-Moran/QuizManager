const express = require("express");
const router = express.Router();
const newQuestionService = require('../services/newQuestionService')
const asyncHandler = require("../helpers/asyncHandler");
const getAllQuestionsService = require("../services/getAllQuestionsService");

// Get questions from json
router.get(
  "/getAll",
  asyncHandler(async (req, res) => {
    const data = await getAllQuestionsService.getAllQuestions();
    res.send(data);
  })
); 

// Add question to the list in json
router.post(
  "/addQuestion",
  asyncHandler(async (req, res) => {
    try {
      const data = await newQuestionService.addQuestion(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

module.exports = router;
