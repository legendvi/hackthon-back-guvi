import Manager from "../model/manager.js";
import user from "../model/user.js";
const getAllTrans = async (req, res, next) => {
  const transactions = await Manager.find({ user: req.userId });

  res.status(200).send({
    message: "All transactions are here",
    transactions: transactions,
  });
};

const postTrans = async (req, res, next) => {
  const { type, category, division, summary, amount } = req.body;

  const manage = new Manager({
    flow: type,
    category,
    division,
    summary,
    amount,
    user: req.userId,
  });
  const result = await manage.save();

  res.status(201).json({
    message: "Insertion successful",
    result,
  });
};

export { getAllTrans, postTrans };
