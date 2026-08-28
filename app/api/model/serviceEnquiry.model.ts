import mongoose, { Schema, Model } from "mongoose";

export interface ServiceEnquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  plan: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const serviceEnquirySchema = new Schema<ServiceEnquiry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    plan: {
      type: String,
      default: "",
      trim: true,
    },
    message: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const ServiceEnquiryModel: Model<ServiceEnquiry> =
  mongoose.models.ServiceEnquiry ||
  mongoose.model<ServiceEnquiry>("ServiceEnquiry", serviceEnquirySchema);

export default ServiceEnquiryModel;
