const userService = require('../services/userServices');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = userService.registerUser(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = (req,res) =>{
  const { username, password } = req.body;

  const user = userService.loginUser(username, password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
