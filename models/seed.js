const { Client } = require("pg");

const SQL = `
  CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
  );

  INSERT INTO usernames (username)
  VALUES
    ('Owen'),
    ('Sam'),
    ('Luke');
`;

async function main() {
  console.log("seeding...");

  const pass = encodeURIComponent(process.env.PSQL_PASS);

  const client = new Client({
    connectionString: `postgresql://${process.env.PSQL_USER}:${pass}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("Phew... done seeding boss!");
}

main();
