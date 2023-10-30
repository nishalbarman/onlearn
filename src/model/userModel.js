import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Please provide an username"] },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide a password"] },
  isVerified: { type: Boolean, default: false },
  role: { type: Number, default: 1 }, // 0 for admin, 1 students, 2 teacher
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Number,
  verifyToken: String,
  verifyTokenExpiry: Number,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
