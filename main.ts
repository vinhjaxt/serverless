#!/usr/bin/env deno --no-prompt --allow-env --allow-net=[::]:8000,0.0.0.0:8000,us-west-2.sql.xata.sh,aws-0-ap-southeast-1.pooler.supabase.com:5432
import postgres from 'https://deno.land/x/postgresjs@v3.4.5/mod.js'

let PGSQL_URL = 'postgresql://postgres.xxx:xxx@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=disable'
// PGSQL_URL = 'postgresql://xxx:xxx@us-west-2.sql.xata.sh/app-ore:main?sslmode=require'

const sql = postgres(PGSQL_URL, {
  // max: 6, // xata: https://xata.io/docs/concepts/pricing#concurrency-limit
  max: 30, // https://supabase.com/docs/guides/platform/compute-and-disk#postgres-replication-slots-wal-senders-and-connections
  idle_timeout: 15000,
  connect_timeout: 7000,
})

const handler = async (req: Request) => {
  const result = await sql`select 1 as ret`

  return Response.json(result)
}

if (typeof Deno != 'undefined') Deno.serve(handler)
else console.error('Expect Deno runtime')
