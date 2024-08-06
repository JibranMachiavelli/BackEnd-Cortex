const { Pool } = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'posgres',
    password: '123',
    database: 'postgres'
})

module.exports = pool