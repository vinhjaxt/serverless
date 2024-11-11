#!/usr/bin/env deno --no-prompt --allow-env --allow-net=[::]:8000,0.0.0.0:8000,us-west-2.sql.xata.sh,aws-0-ap-southeast-1.pooler.supabase.com:5432
import postgres from 'https://deno.land/x/postgresjs@v3.4.5/mod.js'

let PGSQL_URL = 'postgresql://postgres.xxx:xxx@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=disable'
// PGSQL_URL = 'postgresql://xxx:xxx@us-west-2.sql.xata.sh/app-ore:main?sslmode=require'

const sql = postgres(PGSQL_URL, {
  max: 30,
  idle_timeout: 15000,
  connect_timeout: 7000,
})

const handler = async (req: Request) => {
  const result = await sql`select 1 as ret`

  const resp = new Response(JSON.stringify(result[0]), {
    headers: {
      'Content-Type': 'text/html;charset=utf-8'
    }
  })

  return resp
}

if (typeof Deno != 'undefined') Deno.serve(handler)
else console.error('Expect Deno runtime')
