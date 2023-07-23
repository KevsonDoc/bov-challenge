const mongoose = require('mongoose');

const MilkProductionSchema = new mongoose.Schema({
  volume: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },

  distance: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    equired: true,
  },

  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
  },
  createdAt: {
    type: Date,
    equired: true,
  },
});

const MilkProductionModel = mongoose.model('MilkProduction', MilkProductionSchema);

export default MilkProductionModel;
