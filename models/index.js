var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/wikistack');

function titleConverter(str){
    if(str){
        return str.replace(/\s+/g, '_').replace(/\W/g, '');
    }
    else{
        return Math.random().toString(36).substring(2,7);
    }


}


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
    },

    {
    hooks:{
    beforeValidate:(page, options) =>{
        page.urlTitle = titleConverter(page.title);

    }


    },

    getterMethods: {
        route() {
            return '/wiki/' + this.urlTitle
        }
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
