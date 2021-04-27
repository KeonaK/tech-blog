const User = require('./User');
const Create = require('./Create');

User.hasMany(Create, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Create.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Create };
