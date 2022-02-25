const express = require('express');
const router = express.Router();
const newUserService = require('../services/newUserService');
const asyncHandler = require('../helpers/asyncHandler');

router.post(
  '/addUser',
  asyncHandler(async (req, res) => {
    try {
      await newTestService.addTest(req.body);
      res.status(200).send({ msg: 'User Added Successfully!' });
    } catch {
      res.status(400).send({ msg: 'User Failed to Add' });
    }
  })
);

module.exports = router;
