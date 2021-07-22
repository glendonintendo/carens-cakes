const { AuthenticationError } = require("apollo-server-express");
const { User, CakeFlavor, CakeType, Frosting, Decoration } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    cakeFlavors: async () => {
      return await CakeFlavor.find();
    },
    cakeTypes: async (parent, { name }) => {
      const params = {};

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await CakeType.find(params);
    },
    frostings: async () => {
      return await Frosting.find();
    },
    decorations: async () => {
      return await Decoration.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
