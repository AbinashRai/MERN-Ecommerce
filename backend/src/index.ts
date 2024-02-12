import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import cartRoutes from "./routers/cartRoutes";
import { UserModel } from "./models/User";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import cookieParser from 'cookie-parser';

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/ecommercedb";
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error connecting to mongodb");
  });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/products", productRouter);

app.use(express.json());

app.use("/", cartRoutes);

app.post("/signup", (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (err) {
            res.json("The password is incorrect!");
          }
          if (response) {
            res.json("Success");
          }
        });
      } else {
        res.json("The account is not registered!");
      }
    } else {
      res.json("The account is not registered!");
    }
  });
});

// app.use(cookieParser())

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
