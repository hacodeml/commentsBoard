module.exports = (sequelize, type) => {
    return sequelize.define('comments', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        comment: type.STRING
    })
}