const {Sequelize, Model, DataTypes} = require('sequelize/lib');

describe("Initialization tests", () => {
    test("Can connect", async () => {
        const sequelize = new Sequelize('postgres://learn-sequelize:learn-sequelize@localhost:5432/learn-sequelize');
        await sequelize.authenticate();
    });
});