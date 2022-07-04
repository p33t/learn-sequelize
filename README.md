Sequelize - Learning Project
============================


# Notes
[Logging config examples](https://sequelize.org/master/manual/getting-started.html#logging)  
[Table name inference](https://sequelize.org/master/manual/model-basics.html#table-name-inference)  
[Model Sync'n](https://sequelize.org/master/manual/model-basics.html#model-synchronization) `model.sync()`:  
Only-if-not-exists, drop-first & update options. For one or all tables.  
Drop one or more tables. `model.drop()`  
"match" regexp option for db name as a safety measure  
Opt for Migrations via  Sequelize CLI for production environments  
[Timestamps](https://sequelize.org/master/manual/model-basics.html#timestamps)  
Default added & managed when using auto, non-direct queries: createdAt, updatedAt  
deletedAt for soft-delete, [paranoid](https://sequelize.org/master/manual/paranoid.html) tables  
[Data Types](https://sequelize.org/master/manual/model-basics.html#data-types)  
Some are DB specific  
UUID support with optional auto generation (v1 or v4)  
[Column Options](https://sequelize.org/master/manual/model-basics.html#column-options)
All the typical stuff plus 'column comment' & Postgres-specific foreign key check options  

## CRUD Ops ([ref](https://sequelize.org/master/manual/model-instances.html))
Instantiate in memory `model.build()` and then save `instance.save()` or do both with `model.create()`.  
Modify with `instance.set()` and save or do both with `instance.update()`  
Delete with `instance.destroy()`  

Can save only some fields with `instance.save({fields: ["field1", "field2", ...]})` which is handy
for form submission.
Save is _change-aware_ so only necessary fields are rendered into update statement.

Increment (or decrement) multiple fields without concurrency issues: `instance.increment()`

### Multi CRUD ([ref](https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries))
Update & Delete with _where_ clauses (see below)  
Delete entire table with `model.destroy({truncate: true})`

Create multiple records without validation using `model.bulkCreate([..])` or with validation `..], {validate: true})`.  
Can also limit fields being written too (which might be prudent if from user input)

## Query
### Select
Fields `model.findAll({attributes: []})`:  
- certain fields only
- field rename
- aggregate 'sequelize.fn()'

Where `model.findAll({where: {..})`
- Defaults to `=`, `AND`, `IN`
- Use `Op.?` for [complex clauses & operators](https://sequelize.org/master/manual/model-querying-basics.html#operators0)
- Advanced clauses and Postgres-specific range operators

Order with `{order: ..}` including functions and other advanced features  
Grouping with `{group: ..}` very similar to Ordering  
Pagination with `{limit: n, offset: m}`
Utility methods on model: `count()`, `min()`, `max()`, `sum()`, `increment()`, `decrement()`  
[Convenience methods]() on model: `findByPk()`, `findOne()`, `findOrCreate()`, `findAndCountAll()` for pagination amid total count  

Models [can have](https://sequelize.org/master/manual/getters-setters-virtuals.html):
- getters that transform a value transparently (e.g. to upper case)
- setters that writes a transformed value transparently (e.g. to salt + hash a password)
- combine custom getter & setter for custom serialized value (e.g. compression .. not typically necessary)
- virtual fields that are not actually in the database (e.g. calculated full name field) with `DataType.VIRTUAL`

## Migrations ([ref](https://sequelize.org/master/manual/migrations.html))
Need `sequelize-cli`  
`init` to create folders and `config.json`, scaffold  
`model:generate` to add a table  
`db:migrate` to modify schema (and update `SequelizeMeta` table)  
`db:migrate:undo` to revert most recent change  
`db:migrate:undo:all` for full reset, or `--to XXX..-create-XXX.js`  

Looks like migrations are not as automated as Entity Framework (of .NET Core). E.g. Migration scripts (up & down) appear
to be generated in basic form and then customized by hand (?).

Have created UserRole table with command: `sequelize model:generate --name UserRole --attributes 'userId:integer,roleId:integer'`
- Model is disconnected from migration. So can customize them independently, which doesn't sound appealing but might be necessary.
- Will leave migrations at this point. Target code base uses `sequelize.sync({alter: true})` which seems to be an alternative to explicit migration


## Transactions
TODO: https://sequelize.org/master/manual/transactions.html





RESUME: https://sequelize.org/master/manual/validations-and-constraints.html

