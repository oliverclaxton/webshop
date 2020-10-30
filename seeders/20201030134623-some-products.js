"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Brew Dog",
          category: "IPA",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brewdog.com%2Feu_en%2Fpunk-ipa-bottle-eu&psig=AOvVaw3kcYQR4lqcZthKNC2Lu0N7&ust=1604152241775000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDm4ve63OwCFQAAAAAdAAAAABAD",
          description: "Hoppy beer",
          priceInEuroCents: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corona",
          category: "Lager",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thebottleclub.com%2Fproducts%2Fcorona-extra-lager-bottle-1-x-710-ml&psig=AOvVaw2pcmd2pE3fAB4_m5zAFhOl&ust=1604152325079000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLik85673OwCFQAAAAAdAAAAABAD",
          description: "Sick beer",
          priceInEuroCents: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heiniken",
          category: "Lager",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heineken.com%2Fglobal%2Fen%2Fhome%2F&psig=AOvVaw1Y7EklzRSPMyYkC1rUOfFf&ust=1604152379208000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODx9ri73OwCFQAAAAAdAAAAABAD",
          description: "Local beer",
          priceInEuroCents: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
