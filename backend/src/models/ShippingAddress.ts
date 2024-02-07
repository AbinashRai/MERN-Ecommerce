import { Schema, Document, model } from "mongoose";

export interface IShippingAddress extends Document {
  fullName: string;
  address: string;
  city: string;
}

const ShippingAddressSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
});

export const ShippingAddressModel = model<IShippingAddress>(
  "ShippingAddress",
  ShippingAddressSchema
);
