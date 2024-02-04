const express = require('express');

const login = (req, res) => {
  res.send('login');
};

const dashboard = (req, res) => {
  const rand = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `this is a random number`,
    secret: `the number is ${rand}`,
  });
};

module.exports = { login, dashboard };
