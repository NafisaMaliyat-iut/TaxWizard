
const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
  nid: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  yearly_amount: {
    type: Number,
    required: true,
  },
  taxable_amount: {
    type: Number,
    required: false,
  },
});

taxSchema.index({ nid: 1, year: 1 }, { unique: true });

const Tax = mongoose.model('Tax', taxSchema);

module.exports = Tax;
