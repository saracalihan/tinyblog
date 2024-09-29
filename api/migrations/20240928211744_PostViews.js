export const up = function (knex) {
  return knex.schema.createTable("post_views", function (table) {
    table.increments();
    table.integer("user_id").unsigned().notNullable();
    table.integer("post_id").unsigned().notNullable();
    table.timestamps();

    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("post_id")
      .references("posts.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("post_views");
};