const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: [true, 'Please add some type'],
  },
  desc: {
    type: String,
    trim: true,
    required: [true, 'Please add some desc'],
  },
  amt: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
