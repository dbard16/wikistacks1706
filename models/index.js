var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/wikistack');


var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isEmail: true
        }
    }
});

module.exports = {
  Page,
  User,
  db
};
