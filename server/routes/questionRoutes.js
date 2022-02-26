const express = require("express");
const router = express.Router();
const newQuestionService = require('../services/newQuestionService')
const asyncHandler = require("../helpers/asyncHandler");
const getAllQuestionsService = require("../services/getAllQuestionsService");
const getQuestionById = require('../services/getQuestionById');
const deleteQuestionById = require('../services/deleteQuestionById')

router.get(
  "/getAll",
  asyncHandler(async (req, res) => {
    const data = await getAllQuestionsService.getAllQuestions();
    res.send(data);
  })
); 

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

router.post(
  '/getById',
  asyncHandler(async (req, res) => {
    const data = await getQuestionById.getQuestionById(req.body.id);
    res.send(data);
  })
);

router.delete(
  '/deleteQuestion',
  asyncHandler(async (req, res) => {
    const data = await deleteQuestionById.deleteQuestionById(req.body.id);
    res.send(data);
  })
);


module.exports = router;
