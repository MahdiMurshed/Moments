import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//sign in
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send("Account does not exists");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Password is wrong");
    }
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(400).send("Error signing in");
  }
};
//
//sign up
export const signUp = async (req, res) => {
  console.log("signning up");
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(400).send("Error signing up");
  }
};
