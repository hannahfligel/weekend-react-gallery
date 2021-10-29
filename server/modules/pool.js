//require pg first 
const pg = require ('pg');

const pool = new pg.Pool({
    database: 'react_gallery',//only change the name to the db
    host: 'localhost',
    port: 5432,
    max: 15,
    idleTimeoutMillis: 30000
})
// export
module.exports = pool;