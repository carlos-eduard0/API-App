exports.up = function(knex) {
    return knex.schema.createTable('bancos', function(table){
        table.string('banco_id').primary();
        table.string('nome').notNullable();
        table.string('document').notNullable();
        table.string('updateAt').notNullable();
        table.string('isDeleted').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Bancos');
};
