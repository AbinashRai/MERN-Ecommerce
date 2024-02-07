import express, { Request, Response } from "express";
import { CartItemModel } from "../models/CartItem";

const router = express.Router();

router.post("/api/cart/add", async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const newItem = new CartItemModel({
      productId,
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
