Sequelize - Learning Project
============================


# Notes
[Logging config examples](https://sequelize.org/master/manual/getting-started.html#logging)  
[Table name inference](https://sequelize.org/master/manual/model-basics.html#table-name-inference)  
[Model Sync'n](https://sequelize.org/master/manual/model-basics.html#model-synchronization): Only if not exists, drop first & update options. For one or all tables.  
Drop one or more tables.  
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


RESUME: https://sequelize.org/master/manual/model-instances.html