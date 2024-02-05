const customAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new customAPIError('please provide a username and password', 400);
  }
  // db usually provides ID, this is a demo
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = (req, res) => {
  const rand = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${decoded.username}`,
    secret: `the number is your number ${rand}`,
  });
};

module.exports = { login, dashboard };
