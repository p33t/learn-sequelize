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
        
        expect(sequelize.models.UserRole).toBeDefined();
    });
});