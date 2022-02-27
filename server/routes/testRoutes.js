const express = require('express');
const router = express.Router();
const newTestService = require('../services/newTestService');
const asyncHandler = require('../helpers/asyncHandler');
const getAllTestsService = require('../services/getAllTestsService');
const getTestById = require('../services/getTestById');
const newTestInstanceService = require('../services/newTestInstanceService');
const updateTestService = require('../services/updateTestService');

router.post(
  '/addTest',
  asyncHandler(async (req, res) => {
    try {
      await newTestService.addTest(req.body);
      res.status(200).send({ msg: 'Test Added Successfully!' });
    } catch {
      res.status(400).send({ msg: 'Test Failed to Add' });
    }
  })
);

router.post(
  '/addTestInstance',
  asyncHandler(async (req, res) => {
    try {
      await newTestInstanceService.addTestInstance(req.body);
      res.status(200).send({ msg: 'Test Added Successfully!' });
    } catch {
      res.status(400).send({ msg: 'Test Failed to Add' });
    }
  })
);

router.post(
  '/getAllByField',
  asyncHandler(async (req, res) => {
    const data = await getAllTestsService.getAllTestsByField(req.body.field);
    res.send(data);
  })
);

router.post(
  '/getById',
  asyncHandler(async (req, res) => {
    const data = await getTestById.getTestById(req.body.id);
    res.send(data);
  })
);

router.post(
  '/update',
  asyncHandler(async (req, res) => {
    const data = await updateTestService.updateTest(req.body);
    res.send(data);
  })
);

module.exports = router;
