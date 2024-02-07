import { Schema, Document, model } from "mongoose";

export interface ICartItem extends Document {
  image?: string;
  slug: string;
  quantity: number;
  countInStock: number;
  price: number;
  _id: string;
  name: string;
}

const CartItemSchema: Schema = new Schema({
  image: { type: String },
  slug: { type: String, required: true },
  quantity: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  price: { type: Number, required: true },
  _id: { type: String, required: true },
  name: { type: String, required: true },
});

export const CartItemModel = model<ICartItem>("CartItem", CartItemSchema);
