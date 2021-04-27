const User = require('./User');
const Create = require('./Create');
const Comment = require('./Comment');

User.hasMany(Create ,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Create.hasMany(Comment ,{
  foreignKey: 'create_id',
  onDelete: 'CASCADE'
});



Create.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Create, Comment };
