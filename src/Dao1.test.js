// const {Sequelize, Model, DataTypes} = require('sequelize/lib');
const {sequelize} = require('../models')

describe("Initialization tests", () => {
    test("Can connect", async () => {
        await sequelize.authenticate();
    });
    
    test("Implicit models are present", () => {
        // sanity checks
        expect(sequelize.models.ShouldNotExist).not.toBeDefined();
        expect(sequelize.models.User).toBeDefined();
        
        // NOTE: This isn't a great way to go. The defaults for association tables are likely not exactly what we want.
        //       Really want to define constraints etc. explicitly in one place.
        expect(sequelize.models.UserRole).toBeDefined();
    });
});