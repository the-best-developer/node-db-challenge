
exports.up = function(knex) {
    return (
        knex.schema
        .createTable('projects', table => {
            table.increments();
            table.varchar('name', 256)
            .notNullable();
            table.varchar('description', 256)
            table.boolean('completed')
            .notNullable()
            .defaultTo(false);
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema.dropTableIfExists('projects')
    );
};
