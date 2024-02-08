import express from "express";
import { CartItemModel } from "../models/CartItem";
import { ObjectId } from "mongodb";

const router = express.Router();

router.post("/api/cart/add", async (req, res) => {
  try {
    const _id = new ObjectId();
    const { name, price, countInStock, slug, quantity } = req.body;

    if (
      !name ||
      !_id ||
      !price ||
      !countInStock ||
      !slug ||
      !quantity ||
      quantity <= 0
    ) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const newItem = new CartItemModel({
      name,
      _id,
      price,
      countInStock,
      slug,
      quantity,
    });

    await newItem.save();

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
