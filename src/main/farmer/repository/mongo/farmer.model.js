const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

const FarmerModel = mongoose.model('Farmer', FarmerSchema);

export default FarmerModel;
