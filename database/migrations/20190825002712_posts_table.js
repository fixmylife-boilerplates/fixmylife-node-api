exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.increments();
    tbl.string("description", 1000).notNullable();

    tbl.string("image").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
