// routes/jobs.js
const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.post('/jobs', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).send(job);
});

router.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

module.exports = router;
