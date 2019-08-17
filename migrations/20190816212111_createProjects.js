
exports.up = function(knex) {
    return (
        knex.schema
        .createTable('project', table => {
            table.increments();
            table.varchar('name', 256)
            .notNullable();
            table.varchar('description', 256)
            table.boolean('completed')
            .notNullable()
            .defaultTo(false);
        })
        .createTable('resource', table => {
            table.increments();
            table.varchar('name', 256)
            .notNullable();
            table.varchar('description', 256)
        })
        .createTable('task', table => {
            table.increments();
            table.varchar('description', 256)
            .notNullable();
            table.varchar('notes', 256)
            table.boolean('completed')
            .notNullable()
            .defaultTo(false);
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
    );
};
