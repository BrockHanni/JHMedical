const { AuthenticationError } = require('apollo-server-express');
const { Profile, Product } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // profile query's
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // product query's
    products: async () => {
      return await Product.find();
    },
    productsByType: async (parent, { type }) => {
      return Product.find({ type: type });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, username, password }) => {
      const profile = await Profile.create({ name, username, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { username, password }) => {
      const profile = await Profile.findOne({ username: username });

      if (!profile) {
        throw new AuthenticationError('No profile with this username found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
