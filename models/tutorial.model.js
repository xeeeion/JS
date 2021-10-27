const { Sequelize } = require("sequelize/types");

module.exports = (sequlize, Sequelize) => {
    const Tutorial = sequlize.define("tutorial", { 
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tutorial;
}