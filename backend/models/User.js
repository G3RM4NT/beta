const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  searches: [{ type: String }],
});

module.exports = mongoose.model('User ', userSchema);