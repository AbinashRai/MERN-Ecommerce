import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import cartRoutes from "./routers/cartRoutes";
import { UserModel } from "./models/User";
import bcrypt from "bcrypt";
import jwt, { VerifyErrors } from "jsonwebtoken";
import cookieParser from "cookie-parser";

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

app.use(cookieParser());

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

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json("The token as not available");
  } else {
    jwt.verify(
      token,
      "jwt-secret-key",
      (err: VerifyErrors | null, decoded: object | undefined) => {
        if (err) return res.json("Token is wrong");
        next();
      }
    );
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json("Success");
});

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign({ email: user.email }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            res.json("Success");
          } else {
            res.json("The password is incorrect");
          }
        });
      } else {
        res.json("Password is missing for the user");
      }
    } else {
      res.json("The account is not registered!");
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
