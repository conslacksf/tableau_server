const postgres = require('postgres');
const sql = postgres({
    host        : ,         // Postgres ip address or domain name
    port        : ,       // Postgres server port
    database    : ,         // Name of database to connect to
    username    : ,         // Username of database user
    password    : ,         // Password of database user
  });

const update_notes = (input_id, input_field, input_notes) => {
  const input_data = {
    id: input_id
  }

  input_data[input_field] = input_notes

  queryId(input_data)
}

const queryId = async (data) => {
  const idCheck = await sql`select id from public.bdm_notes WHERE id = ${ data.id }`

  if (idCheck.count == 0) {
    sql`insert into public.bdm_notes ${sql(data)}`
  } else {
    sql`update public.bdm_notes set ${sql(data)} where id = ${ data.id }`
  }
}

module.exports = update_notes;