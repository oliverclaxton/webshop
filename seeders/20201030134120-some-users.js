"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          firstName: "Oliver",
          lastName: "Claxton",
          address: "123 onetwothree lane",
          email: "claxton@c.com",
          phone: 123456789,
          password: bcrypt.hashSync("password1", 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Thibaud",
          lastName: "Szymczak",
          address: "1234 onetwothree lane",
          email: "syz@z.com",
          phone: 123456788,
          password: bcrypt.hashSync("password1", 10),
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstName: "Ol",
          lastName: "Cl",
          address: "12356 onetwothree lane",
          email: "c@c.com",
          phone: 123456777,
          password: bcrypt.hashSync("password1", 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          firstName: "Th",
          lastName: "Sz",
          address: "12333 onetwothree lane",
          email: "s@s.com",
          phone: 123456666,
          password: bcrypt.hashSync("password1", 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
