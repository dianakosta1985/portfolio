const { createClient } = require("@vercel/postgres");
require("dotenv").config();

const sql = createClient();

module.exports = sql;
