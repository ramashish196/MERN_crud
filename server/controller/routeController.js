import { userModel } from "../models/userSchema.js";

class Allroutes {
  // ctreate
  static signup = async (req, res) => {
    try {
      const { email } = req.body;
      const data = req.body;
      const user = await userModel.findOne({ email });
      if (user) {
        res.status(409).json({ message: "already registerd", success: false });
      }
      const newUser = new userModel(data);
      const mongoUser = await newUser.save();
      // console.log(mongoUser._id);
      res.status(201).json(mongoUser);
    } catch (error) {
      console.log("error while creating userSchema", error);
    }
  };
  // update
  static updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await userModel.findByIdAndUpdate(
        { _id: id },
        {
          $set: { name: req.body.name, email: req.body.email },
        },
        { new: true }
      );
      res
        .status(201)
        .json({ message: "updated successfully", success: true, updatedUser });
    } catch (error) {
      console.log("err while updating user", error);
    }
  };
  // delete
  static deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await userModel.findOneAndDelete({ _id: id });
      res
        .status(201)
        .json(
          { message: "user delete successfully", success: true },
          deletedUser
        );
    } catch (error) {
      console.log("err while deleting user", error);
    }
  };
  static allUser = async (req, res) => {
    try {
      const userData = await userModel.find();
      res.status(201).json({ message: "users", success: true, userData });
    } catch (error) {
      console.log("err while getting users", error);
    }
  };

  //get user by id
  static getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const userById = await userModel.findById(id);
      // console.log(userById);
      res.status(201).json({
        success: true,
        userById,
      });
    } catch (error) {
      console.log("err while getting users", error);
    }
  };
}

export default Allroutes;
