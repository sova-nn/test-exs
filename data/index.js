const { Pool } = require('pg');

const config = {
    host: 'localhost',
    database: 'data',
    user: 'postgres',
    password: 'postgres',
    port: '5432',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000

};

const pool = new Pool(config);

function db_connect(sql, params) {
    pool.connect((err, client, done) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query(sql, params, (err, res) => {
            done();
            if (err) {
                return console.error('Error executing query', err.stack)
            }
            console.log("Data table was changed")
        });
    });
}

module.exports = db_connect;



