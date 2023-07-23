const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  cnpj: {
    type: String,
    required: true,
    unique: true,
  },
  corporateName: {
    type: String,
    required: true,
  },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer' },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

const FarmerModel = mongoose.model('Farm', FarmerSchema);

export default FarmerModel;
