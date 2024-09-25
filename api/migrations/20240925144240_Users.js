export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("email").notNullable().unique().index();
    table.string("username").notNullable().unique().index();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.text("bio").nullable();
    table.integer("stats_post").notNullable().defaultTo(0);
    table.integer("stats_follower").notNullable().defaultTo(0);
    table.integer("stats_following").notNullable().defaultTo(0);
    table.timestamps();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};