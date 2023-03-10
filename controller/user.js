var userModel = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

function createUser(user) {
  console.log("sended user", user);
  return userModel.create(user);
}

function getUserNames(id) {
  return userModel.findById(id).select("firstName");
}

function deleteUser(id) {
  return userModel.deleteOne({ _id: id });
}
function editUser(id, obj) {
  return userModel.updateOne({ _id: id }, obj, {
    returnNewDocument: true,
  });
}

async function login(req, res) {
  console.log("body request", req.body);
  var { username, password } = req.body;
  console.log(`username: ${username}, password: ${password}`);
  user = await userModel.findOne({ username });
  console.log(`finded user firstname is ${user.firstName}`);
  if (user) {
    var valid_login = bcrypt.compareSync(password, user.password);
    if (valid_login) {
      var JWT = jwt.sign(
        {
          userID: user._id,
          username: user.lastName,
        },
        process.env.SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).json(JWT);
    } else {
      res.status(401).end("Invalid email or password");
    }
  } else {
    res.status(401).end("User not found");
  }
}

function getUserTodos(id) {
    return userModel.find({ 'userId': id });
  }

module.exports = { createUser, getUserNames, deleteUser, editUser, login ,getUserTodos };
