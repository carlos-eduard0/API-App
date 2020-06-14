exports.up = function(knex) {
    return knex.schema.createTable('imagemlogo', function(table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('size').notNullable();
        table.string('key').notNullable();
        table.string('url').notNullable();
        table.string('id_empresa').notNullable();

        table.foreign('id_empresa').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('imagemlogo');
};
