const {Sequelize} = require('sequelize/lib');

describe("Basic jest test", () => {
    test("t1", () => {
        expect("hellox".substring(0, 5)).toBe("hello")
    });

    test("Instantiate, authenticate sequelize", async () => {
        const sequelize = new Sequelize('sqlite::memory:');
        await sequelize.authenticate();
    });
});
