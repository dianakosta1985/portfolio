// dbClient.js
const { createClient } = require("@vercel/postgres");
require("dotenv").config();

let client;
let isConnected = false;

const createDbClient = async () => {
  if (!client) {
    client = createClient();
  }

  // Connect only if not already connected
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw new Error("Database connection failed");
    }
  }
  return client;
};

// Optional: close the connection when shutting down the server
const closeDbClient = async () => {
  if (client && isConnected) {
    await client.end();
    isConnected = false;
    console.log("Database connection closed");
  }
};

module.exports = { createDbClient, closeDbClient };
