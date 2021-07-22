const db = require("./connection");

const { Decoration, Frosting , CakeType, CakeFlavor } = require("../models");

db.once("open", async () => {
  await CakeFlavor.deleteMany();

  const cakeFlavors = await CakeFlavor.insertMany([
    {
      name: "Dutch Chocolate",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "chocolate-cake.jpg",
    },
    {
      name: "Cookies Crunch",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cookie-cake.jpg",
    },
    {
      name: "Funfetti",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "funfetti-cake.jpg",
    },
    {
      name: "Vanilla",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "vanilla-cake.jpg",
    },
    {
      name: "Red Velvet",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "red-velvet-cake.jpg",
    },
    {
      name: "Strawberries and Cream",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "strawberry-cake.jpg",
    },
    {
      name: "White Chocolate Raspberry",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "raspberry-cake.jpg",
    },
    {
      name: "Carrot",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "carrot-cake.jpg",
    },
    {
      name: "Lemon",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "lemon-cake.jpg",
    },
    {
      name: "Banana Walnut",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "banana-cake.jpg",
    },
  ]);

  console.log("cake flavors seeded");

  await Decoration.deleteMany();

  const decorations = await Decoration.insertMany([
    {
      name: "Spiderman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "spiderman-cake.jpg",
    },
    {
      name: "Paw Patrol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "paw-patrol-cake.jpg",
    },
    {
      name: "Teenage Mutant Ninja Turtles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "tmnt-cake.jpg",
    },
    {
      name: "Minions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "minion-cake.jpg",
    },
    {
      name: "Baseball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "baseball-cake.jpg",
    },
    {
      name: "Volleyball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "volleyball-cake.jpg",
    },
    {
      name: "Basketball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "basketball-cake.jpg",
    },
    {
      name: "PRIDE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "pride-cake.jpg",
    },
    {
      name: "St. Patrick's Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "st-patrick-cake.jpg",
    },
  ]);

  console.log("decorations seeded");

  await Frosting.deleteMany();

  const frostings = await Frosting.insertMany([
    {
      name: "Buttercream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "banana-cake.jpg",
    },
    {
      name: "Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "carrot-cake.jpg",
    },
    {
      name: "Chocolate Ganache",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "ganache-cake.jpg",
    },
    {
      name: "Vanilla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "vanilla-cake.jpg",
    },
    {
      name: "Strawberries and Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "strawberry-cake.jpg",
    },
    {
      name: "Whipped Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "quarter-cake.jpg",
    },
  ]);

  console.log("frostings seeded");

  await CakeType.deleteMany();

  const cakeTypes = await CakeType.insertMany([
    {
      name: "1/4 Sheet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "quarter-cake.jpg",
      price: 3999,
    },
    {
      name: "Bundt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "bundt-cake.jpg",
      price: 3199,
    },
    {
      name: "Cupcakes (6 pk.)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cupcake-6.jpg",
      price: 1599,
    },
    {
      name: "Cupcakes (12 pk.)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cupcake-12.jpg",
      price: 2899,
    },
    {
      name: "Classic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "chocolate-cake.jpg",
      price: 3599,
    },
    {
      name: "Two-Tier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "2-tier-cake.jpg",
      price: 4199,
    },
    {
      name: "Three-Tier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "3-tier-cake.jpg",
      price: 4999,
    },
  ]);

  console.log("cake types seeded");

  process.exit();
});
