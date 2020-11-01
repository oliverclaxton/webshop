"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          productId: 1,
          orderId: 1,
          quantity: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          orderId: 3,
          quantity: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          orderId: 2,
          quantity: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};
