const db = require('../config/connection');
const { Profile, Product } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const productSeeds = require('./productSeeds.json')

// seed the databse function if no data exists
function seedAll() {
  db.once('open', async () => {

    const dbData = await Profile.find({})

    if (dbData) {
      console.log("data has already been seeded")
    } else {
      try {
        await Profile.deleteMany({});
        await Profile.create(profileSeeds);

        await Product.deleteMany({});
        await Product.insertMany(productSeeds);

        console.log('all done!');
        process.exit(0);
      } catch (err) {
        throw err;
      }
    }
  });
}

module.exports = seedAll