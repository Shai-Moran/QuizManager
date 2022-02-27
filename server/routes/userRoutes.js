const express = require('express');
const router = express.Router();
const newUserService = require('../services/newUserService');
const asyncHandler = require('../helpers/asyncHandler');
const getUserById = require('../services/getUserById');

router.post(
  '/addUser',
  asyncHandler(async (req, res) => {
    try {
      await newUserService.addUser(req.body);
      res.status(200).send({ msg: 'User Added Successfully!' });
    } catch {
      res.status(400).send({ msg: 'User Failed to Add' });
    }
  })
);

router.post(
  '/getById',
  asyncHandler(async (req, res) => {
    const data = await getUserById.getUserById(req.body.id);
    res.send(data);
  })
);

module.exports = router;
