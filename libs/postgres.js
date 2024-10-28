const { Client } = require("pg");

async function getConection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "Franco",
    password: "admin123",
    database: "my_store",
  });
  // client.connect();
  await client.connect();
  return client;
}

module.exports = getConection;
