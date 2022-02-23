const express = require('express');
const router = express.Router();
const GetFieldsService = require('../services/getFieldsService');
const asyncHandler = require('../helpers/asyncHandler');

router.get(
  '/getFields',
  asyncHandler(async (req, res) => {
    const data = await GetFieldsService.getFields(req.body.field);
    res.send(data);
  })
);

module.exports = router;
