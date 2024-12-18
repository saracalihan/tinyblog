export const up = function (knex) {
  return knex.schema.createTable("notifications_triggers", function (table) {
    table.bigIncrements();
    table.bigInteger("notification_id").unsigned().notNullable();
    table.bigInteger("trigger_user_id").unsigned().notNullable();
    table.timestamps();

    table
      .foreign("notification_id")
      .references("notifications.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("trigger_user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("notifications_triggers");
};
