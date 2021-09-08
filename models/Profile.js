const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  age: {
    type: Number,
    required: true,
  },
  job: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: [
      'Single',
      'Poly and Bi',
      'Looking for that NRE',
      'Just took 10 or 12 benadryl',
      'Looking for hardcore guys',
    ],
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
    maxLength: 250,
  },

  social: {
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
