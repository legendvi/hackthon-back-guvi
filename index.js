import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes.js";
import manageRoute from "./routes/managerRoutes.js";
const app = express();

app.use(express.json());

app.use("/user", userRoute);
app.use("/manage", manageRoute);
await mongoose.connect(
  "mongodb+srv://dvignesh3:dvignesh3@cluster0.zbefi.mongodb.net/money_Manager?retryWrites=true&w=majority"
);
app.listen(9000, () => {
  console.log("server running");
});
