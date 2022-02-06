import bcrypt from "bcrypt";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
const postSignin = async (req, res, next) => {
  const { name, username, password } = req.body;
  if (username.length < 5 || password.length < 5)
    res.status(401).json({ message: "username or password is small" });

  const hashedPw = await bcrypt.hash(password, 12);
  const user = new User({
    name: name,
    username: username,
    password: hashedPw,
  });
  const result = await user.save();
  res.status(200).json({
    message: "user created",
    result,
  });
};

const postLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) res.status(401).json({ message: "User not found" });
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) res.status(401).json({ message: "User not found" });
  const token = jwt.sign(
    {
      userId: user._id.toString(),
      username: user.username,
    },
    "secretpasswordhere",
    { expiresIn: "1h" }
  );

  res.status(200).json({
    token: token,
    userId: user._id.toString(),
  });
};

export { postSignin, postLogin };
