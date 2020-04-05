exports.up = function(knex) {
    return knex.schema.createTable('dados_bancarios', function(table){
        table.increments('id').primary();
        table.string('nome_banco').notNullable();
        table.string('agencia').notNullable();
        table.string('conta').notNullable();
        table.string('digito').notNullable();

        table.string('id_empresa').notNullable();

        table.foreign('id_empresa').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dados_bancarios')
};
