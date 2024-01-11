const { User } = require("../models");

const userData = [
  {
    username: "SalServerLyfe",
    password: "password12345",
  },
  {
    username: "Lernantino",
    password: "password12345",
  },
  {
    username: "AmikoCodez",
    password: "password12345",
  },
  {
    username: "JordanLovesTurtle",
    password: "password12345",
  },
  {
    username: "BlakeCanCode",
    password: "password12345",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
