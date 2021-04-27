const sequelize = require('../config/connection');
const { User, Create } = require('../models');

const userData = require('./userData.json');
const CreateData = require('./createData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const create of createData) {
    await Create.create({
      ...create,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
