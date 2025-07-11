import mongoose from "mongoose";

const SignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
      index: true,
    },
    refreshToken: {
      type: String,
      default: "",
    },
    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },
  },
  { timestamps: true }
);

const signInUser =
  mongoose.models.signInUser || mongoose.model("signInUser", SignSchema);

export default signInUser;
