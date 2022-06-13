select * from "UserRoles";

select * from "Users";
--insert into "Users"("firstName", "lastName", "email", "createdAt", "updatedAt") values ('Bruce', 'Lee', 'blee@yahoo.com', Now(), Now());

select * from "Roles";
--insert into "Roles"("name", "createdAt", "updatedAt") values ('Operator', Now(), Now());

select * from "UserRoles";
--insert into "UserRoles"("userId", "roleId", "createdAt", "updatedAt") values (4, 1, Now(), Now());

-- Should fail
-- Bad roleId
--insert into "UserRoles"("userId", "roleId", "createdAt", "updatedAt") values (3, 99, Now(), Now());
-- Duplicate
--insert into "UserRoles"("userId", "roleId", "createdAt", "updatedAt") values (3, 1, Now(), Now());
-- Violate FK
--delete from "Roles" where "name" = 'Operator'

-- will trigger cascade delete of UserRoles record
-- delete from "Users" where "firstName" = 'Bruce' and "lastName" = 'Lee'

