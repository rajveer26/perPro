const Pool = require(`pg`).Pool;

const pool = new Pool({
    client: `postgres`,
   // host: 'db',
    host: 'localhost',
    user: `postgres`,
    port: process.env.PORT || 32768,//comment it use in docker
    password: `postgrespw`,
    database: `Personaldb`


});

module.exports = pool;