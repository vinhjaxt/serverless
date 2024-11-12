import postgres from 'postgres'

let PGSQL_URL = 'postgresql://postgres.xxx:xxx@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=disable'
// PGSQL_URL = 'postgresql://xxx:xxx@us-west-2.sql.xata.sh/app-ore:main?sslmode=require'

/**
 * @param {Request} req
 * */
async function handler(req, env, ctx) {
  try {
    const sql = postgres(PGSQL_URL, {
      // max: 6, // xata: https://xata.io/docs/concepts/pricing#concurrency-limit
      max: 30, // supbabase: https://supabase.com/docs/guides/platform/compute-and-disk#postgres-replication-slots-wal-senders-and-connections
      idle_timeout: 15000,
      connect_timeout: 7000,
    })
    const result = await sql`select 1 as ret`

    return Response.json(result)
  } catch (e) {
    return Response.json(String(e))
  }
}

export default {
  fetch: handler
}
