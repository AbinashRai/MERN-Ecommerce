import express from "express";
import { CartItemModel } from "../models/CartItem";

const router = express.Router();

router.post("/api/cart/add", async (req, res) => {
  try {
    const { name, _id, price, countInStock, slug, quantity } = req.body;

    // Validate request data
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

    // Create a new cart item document
    const newItem = new CartItemModel({
      name,
      _id,
      price,
      countInStock,
      slug,
      quantity,
    });

    // Save the new cart item to the database
    await newItem.save();

    // Respond with success message
    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
