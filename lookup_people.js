const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function inputQuery() {
  return `SELECT last_name FROM famous_people WHERE last_name LIKE ('${process.argv.slice(2)}');`
}
function output() {
  console.log(result.rows[0].last_name);
}
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(inputQuery(), (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].last_name);
    client.end();
  });

});