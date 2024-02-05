const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('please provide a username and password');
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
    msg: `Hello, ${req.user.username}`,
    secret: `the number is your number ${rand}`,
  });
};

module.exports = { login, dashboard };
