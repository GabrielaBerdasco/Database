const { options } = require('./options/mariaDB.js');
const knex = require('knex')(options);

knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('email');
    table.string('message');
    table.timestamps();
})

    .then( () => {console.log("Tabla creada")} )
    .catch( (err) => {console.log(err); throw err })
    .finally( () => {knex.destroy();} );