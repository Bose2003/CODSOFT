// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  postedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
