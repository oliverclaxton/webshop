"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Brew Dog - Punk IPA",
          categoryId: 9,
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brewdog.com%2Feu_en%2Fpunk-ipa-bottle-eu&psig=AOvVaw3kcYQR4lqcZthKNC2Lu0N7&ust=1604152241775000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDm4ve63OwCFQAAAAAdAAAAABAD",
          description: "Hoppy beer",
          priceInEuroCents: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Corona",
          categoryId: 10,
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thebottleclub.com%2Fproducts%2Fcorona-extra-lager-bottle-1-x-710-ml&psig=AOvVaw2pcmd2pE3fAB4_m5zAFhOl&ust=1604152325079000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLik85673OwCFQAAAAAdAAAAABAD",
          description: "Sick beer",
          priceInEuroCents: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Heineken",
          categoryId: 9,
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heineken.com%2Fglobal%2Fen%2Fhome%2F&psig=AOvVaw1Y7EklzRSPMyYkC1rUOfFf&ust=1604152379208000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODx9ri73OwCFQAAAAAdAAAAABAD",
          description: "Local beer",
          priceInEuroCents: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Amstel",
          categoryId: 9,
          image:
            "https://static.ah.nl/static/product/AHI_43545239363438333133_1_LowRes_JPG.JPG?options=399,q85",
          description: "Local Lager",
          priceInEuroCents: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Heiniken 0.0",
          categoryId: 9,
          image:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.beerwulf.com%2Fglobalassets%2Fheineken-0.0.3_1_2.png&imgrefurl=https%3A%2F%2Fwww.beerwulf.com%2Fen-nl%2Fp%2Fbeers%2Fheineken-0.0.3&tbnid=ej3L6TbUBtGA0M&vet=12ahUKEwiTjcyf_e3sAhVVtqQKHX-_Aj4QMygBegUIARDDAQ..i&docid=byYot3cGbPZdYM&w=532&h=950&q=heineken%200.0&ved=2ahUKEwiTjcyf_e3sAhVVtqQKHX-_Aj4QMygBegUIARDDAQ",
          description: "Alcohol free beer",
          priceInEuroCents: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Kronenbourg",
          categoryId: 9,
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsouriredessaveurs.com%2F434-biere-kronenbourg-blonde-francaise-45-boite-metal-33-cl.html&psig=AOvVaw1slgYbeIozeQt66P7j-Bz0&ust=1604754280001000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjM6tn97ewCFQAAAAAdAAAAABAI"          description: "Local beer",
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
