const express = require('express');
const router = express.Router();
const newTestService = require('../services/newTestService');
const asyncHandler = require('../helpers/asyncHandler');

router.post(
  '/addTest',
  asyncHandler(async (req, res) => {
      console.log('got to route')
    try {
      await newTestService.addTest(req.body);
      res.status(200).send({ msg: 'Test Added Successfully!' });
    } catch {
      res.status(400).send({ msg: 'Test Failed to Add' });
    }
  })
);

module.exports = router;
