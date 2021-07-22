const db = require("./connection");

const { Decoration, Frosting , CakeType, CakeFlavor } = require("../models");

db.once("open", async () => {
  await CakeFlavor.deleteMany();

  const cakeFlavors = await CakeFlavor.insertMany([
    {
      name: "Dutch Chocolate",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Cookies Crunch",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Funfetti",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Vanilla",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Red Velvet",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Strawberries and Cream",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "White Chocolate Raspberry",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Carrot",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Lemon",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
    {
      name: "Banana Walnut",
      description:
        "Integer auctor ultricies elit, eget accumsan lectus tincidunt ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet odio malesuada, molestie diam vitae, mollis justo. Vivamus et porta leo, et malesuada mauris. Nulla gravida, nibh non varius sodales, purus velit blandit mi, ac.",
      image: "cake.png",
    },
  ]);

  console.log("cake flavors seeded");

  await Decoration.deleteMany();

  const decorations = await Decoration.insertMany([
    {
      name: "Spiderman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Paw Patrol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Teenage Mutant Ninja Turtles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Minions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Lego Batman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Moana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Frozen II",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Baseball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Soccer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Volleyball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Basketball",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Football",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Valentine's Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Father's Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Mother's Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "St. Patrick's Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Thanksgiving",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "New Year's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
  ]);

  console.log("decorations seeded");

  await Frosting.deleteMany();

  const frostings = await Frosting.insertMany([
    {
      name: "Buttercream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Chocolate Ganache",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Vanilla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Strawberries and Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Buttercream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Caramel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Whipped Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
    {
      name: "Swiss Meringue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
    },
  ]);

  console.log("frostings seeded");

  await CakeType.deleteMany();

  const cakeTypes = await CakeType.insertMany([
    {
      name: "1/4 Sheet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 2599,
    },
    {
      name: "1/2 Sheet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 4599,
    },
    {
      name: "Full Sheet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 7999,
    },
    {
      name: "Bundt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 3199,
    },
    {
      name: "Cupcakes (6 pk.)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 1599,
    },
    {
      name: "Cupcakes (12 pk.)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 2899,
    },
    {
      name: "Classic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 3599,
    },
    {
      name: "Two-Tier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 4199,
    },
    {
      name: "Three-Tier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "cake.png",
      price: 4999,
    },
  ]);

  console.log("cake types seeded");

  process.exit();
});
