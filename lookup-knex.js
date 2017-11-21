const settings = require("./settings");
const knex = require("knex")({
  client: 'pg',
  connection: {
     user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});

knex.select('last_name').from('famous_people')
.where('last_name', '=', `${process.argv.slice(2)}`).asCallback(function(err, rows) {
  if (err) return console.error(err);
      if (err) return console.error(err);
      console.log(rows[0].last_name);
});

// function inputQuery() {
//   return `SELECT last_name FROM famous_people WHERE last_name LIKE ('${process.argv.slice(2)}');`
// }
// function output() {
//   console.log(result.rows[0].last_name);
// }
// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query(inputQuery(), (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].last_name);
//     client.end();
//   });

// });