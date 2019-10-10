/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    idquestions: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
create: {
  type: DataTypes.STRING,
  allowNull: false
}
  }, {
    tableName: 'questions'
  });
};