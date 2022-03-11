const {Sequelize, Model, DataTypes} = require('sequelize/lib');

describe("Basic jest test", () => {
    test("t1", () => {
        expect("hellox".substring(0, 5)).toBe("hello")
    });

    test("Instantiate, authenticate sequelize", async () => {
        const sequelize = new Sequelize('sqlite::memory:');
        await sequelize.authenticate();
    });

    test('Model.init() example - define()', () => {
        const attributes = {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING, allowNull: false
            }, lastName: {
                type: DataTypes.STRING
                // allowNull defaults to true
            }
        };

        const sequelize = new Sequelize('sqlite::memory:');

        const User = sequelize.define('User', attributes, {
            // Other model options go here
        });

        // `sequelize.define` also returns the model added to the instance
        expect(sequelize.models.User).toBe(User);
    });
});
