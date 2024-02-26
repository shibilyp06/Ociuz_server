const userModel = require("../model/userSchema");
const object = {
  saveUser: async (req, res) => {
    try {
      const { name, email, phone, address, city, state, pin, country } =
        req.body;
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exist" });
      }
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        city,
        state,
        pin,
        country,
      }).save();
      const users = await userModel.find();

      res.status(200).json({ message: " User saved successfuly", users });

      console.log(req.body);
    } catch {
      res.status(400).json({ message: " Error found in submiting data" });
    }
  },
  getUsers: async (req, res) => {
    const users = await userModel.find();
    console.log("looi");
    console.log(users);
    res.status(200).json(users);
  },
  deleteUser: async (req, res) => {
    const userId = req.params.userId;
    console.log(userId, "id");

    try {
      const deletedUser = await userModel.findByIdAndDelete(userId);
      res.status(200).json({ message: "User deleted " });
    } catch {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  editUser: async (req, res) => {
    const userId = req.params.userId;
    const editUser = await userModel.findOne({ _id: userId });
    console.log(editUser,"uder");
    res.status(200).json(editUser);
  },
};
module.exports = object;
