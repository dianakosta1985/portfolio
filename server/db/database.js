const { createClient } = require("@vercel/postgres");
require("dotenv").config();

const client = createClient();

module.exports = client;
