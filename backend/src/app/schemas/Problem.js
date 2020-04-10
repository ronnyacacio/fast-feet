import mongoose from 'mongoose';

const ProblemSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    delivery_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Problem', ProblemSchema);
