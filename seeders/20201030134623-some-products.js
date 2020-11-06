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
            "https://cdn.shopify.com/s/files/1/1341/5633/products/IgolDxhRG6AjYKZqlQHs_Punk_IPA_50cl_png.png?v=1587131442",
          description: "Punk IPA is the beer that kick-started it.",
          priceInEuroCents: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Corona",
          categoryId: 10,
          image:
            "https://www.ab-inbev.com/content/dam/abinbev/our-brands/our-beer/desktop/beer-cards/Corona_Card.png",
          description:
            "Corona Extra is a pale lager produced by Mexican brewery Cervecería Modelo.",
          priceInEuroCents: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Heineken",
          categoryId: 9,
          image:
            "https://www.heineken.com/media-us/01pfxdqq/heineken-original-bottle.png?quality=85",
          description:
            "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International. ",
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
          description:
            "Our distinctive, golden Amstel beer with its very distinctive, mildly bitter taste and excellent quality has become well.",
          priceInEuroCents: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Heiniken 0.0",
          categoryId: 9,
          image:
            "https://www.heineken.com/media-us/p0bazdia/heineken-00-bottle.png?quality=85",
          description:
            "An alcohol free beer with a refreshing and fruity taste, combined with a with malty body. ",
          priceInEuroCents: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Kronenbourg",
          categoryId: 9,
          image:
            "https://www.thedesignateddriver.co.uk/wp-content/uploads/2019/08/Kronenbourg_Can-600x600.jpg",
          description:
            " Kronenbourg 1664 is a 5.5% pale lager first brewed in 1952. A small amount of the Strisselspalt hop, a French aroma hop from Alsace, is used.",
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
