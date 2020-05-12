exports.up = function(knex) {
    return knex.schema.createTable('servicos_empresa', function(table){
        table.increments('id').primary();
        table.string('nome_servico').notNullable();
        table.string('valor_servico').notNullable();
        table.string('descricao').notNullable();
        table.string('categoria').notNullable();
        table.string('numero_vagas').notNullable(); 

        table.string('id_empresa').notNullable();

        table.foreign('id_empresa').references('id').inTable('empresas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('servicos_empresa');
};
