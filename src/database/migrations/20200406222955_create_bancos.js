exports.up = function(knex) {
    return knex.schema.createTable('bancos', function(table){
        table.increments('banco_id');
        table.string('nome');
        table.string('documento');
        table.string('updateat');
        table.string('isdeleted');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('bancos');
};
