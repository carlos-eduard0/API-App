exports.up = function(knex) {
    return knex.schema.createTable('empresa', function(table){
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('nome_empresa').notNullable();
        table.string('senha').notNullable();
        table.string('servicos').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresa');
};
