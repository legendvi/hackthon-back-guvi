import jwt from "jsonwebtoken";

export default async function isAuth(req, res, next) {
  try {
    const token = req.get("Authorization");
    const decodedToken = jwt.verify(token, "secretpasswordhere");
    if (!decodedToken) throw new Error("token not found");

    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    res.status(401).send({ message: err });
  }
}
