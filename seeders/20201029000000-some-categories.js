"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: 9,
          name: "Lager",
          description: "traditional European style. Clean and crisp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "IPA",
          description: "Hoppy stye",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Sours",
          description: "Sour beers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
