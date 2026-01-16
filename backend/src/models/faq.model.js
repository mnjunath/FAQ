import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

faqSchema.index({
  question: "text",
  answer: "text",
  category: "text"
});

export default mongoose.model("FAQ", faqSchema);
