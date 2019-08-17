
exports.up = function(knex) {
    return (
        knex.schema
        // Project table
        .createTable('project', table => {
            table.increments();
            table.varchar('name', 256)
            .notNullable();
            table.varchar('description', 256)
            table.boolean('completed')
            .defaultTo(false);
        })

        // Resource table
        .createTable('resource', table => {
            table.increments();
            table.varchar('name', 256)
            .unique()
            .notNullable();
            table.varchar('description', 256)
        })

        // Task table
        .createTable('task', table => {
            table.increments();
            table.varchar('description', 256)
            .notNullable();
            table.varchar('notes', 256)
            table.boolean('completed')
            .defaultTo(false);
            table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('project')
        })

        // project_resources
        .createTable('project_resources', table => {
            table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('project')
            table.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('resource')
            .notNullable();
            table.primary(['project_id', 'resource_id']);
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
        .dropTableIfExists('project_resources')
    );
};
