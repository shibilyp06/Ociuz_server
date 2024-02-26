const express = require("express");
const router = express.Router();
const { saveUser,getUsers,deleteUser,editUser } = require("../controllers/userController");

router.post("/saveUser", saveUser);
router.get('/getUsers',getUsers)
router.delete('/deleteUser/:userId',deleteUser)
router.put('/editUser/:userId',editUser)
module.exports = router;
