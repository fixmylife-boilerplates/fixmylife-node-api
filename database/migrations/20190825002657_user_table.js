exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128);

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("avatar");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
