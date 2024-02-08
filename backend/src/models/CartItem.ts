import { Schema, Document, model } from "mongoose";

const CartItemSchema: Schema = new Schema({
  image: { type: String },
  slug: { type: String, required: true },
  quantity: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  price: { type: Number, required: true },
  _id: { type: String, required: true },
  name: { type: String, required: true },
});

export const CartItemModel = model<Document>("CartItem", CartItemSchema);
