import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {type: String, required: true},
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
});

export const User = mongoose.model("User", userSchema);
