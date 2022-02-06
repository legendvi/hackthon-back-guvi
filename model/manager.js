import mongoose from "mongoose";
const Schema = mongoose.Schema;

const managerSchema = new Schema(
  {
    flow: String,
    category: String,
    division: String,
    summary: String,
    amount: String,
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Manager", managerSchema);
