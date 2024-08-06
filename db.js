const { Pool } = require('pg')
const pool = new Pool({
    host: '172.22.247.57',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'postgres'
})

module.exports = pool