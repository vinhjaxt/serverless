#!/usr/bin/env deno --no-prompt --allow-env --allow-net=[::]:8000,0.0.0.0:8000,us-west-2.sql.xata.sh,aws-0-ap-southeast-1.pooler.supabase.com:5432
import postgres from 'https://deno.land/x/postgresjs@v3.4.5/mod.js'

let PGSQL_URL = 'postgresql://postgres.xxx:xxx@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=disable'
// PGSQL_URL = 'postgresql://xxx:xxx@us-west-2.sql.xata.sh/app-ore:main?sslmode=require'

const sql = postgres(PGSQL_URL, {
  // max: 6, // xata: https://xata.io/docs/concepts/pricing#concurrency-limit
  max: 30, // supabase: https://supabase.com/docs/guides/platform/compute-and-disk#postgres-replication-slots-wal-senders-and-connections
  idle_timeout: 15000,
  connect_timeout: 7000,
  /* Aiven custom CA, must remove ?sslmode=require in DSN
    ssl: {
        caCerts: [`-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUQIi5+rjPukyUemd/4daTLOHSb5MwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvY2MyOWYzNDItYjgwNC00MWYzLThjYTUtNTY2Nzk4MWJk
YzIwIFByb2plY3QgQ0EwHhcNMjQxMTE4MDM1MjQ1WhcNMzQxMTE2MDM1MjQ1WjA6
MTgwNgYDVQQDDC9jYzI5ZjM0Mi1iODA0LTQxZjMtOGNhNS01NjY3OTgxYmRjMjAg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAL+LxJaK
X652kOwvF+T1d/qeR1Kuy4NhAlIrOdCtYZhbJy8tPH31qXiKvX6Kmv1SOQ9Rwsap
RPtLAbto9uJDHmOksDuV03/ji05615e6qOKFX40gL70zifHcEpzmGial2NhOZFvI
/hj6a6Ajiz10J8948nqvLHGGKDjyfoZJjBlemg59nphharU+gdZvVLersrogntkQ
yEECWRR8gX7u4VRB5CbQR/9dU9cHAjDpZQL96HFjtQzS0MoWqARaOlvJVvp04xM1
F06//mVMo7j8rZI1Soqfr4a3Aq5eBk75Z+/x5B0o4QU/BpXMgh84H84hbB3YO+vB
Gfc+c3bRumZ+a/VlocU1s9GwKRyt0yknRn4dx6w7+fpVuih86IASw4BYHUGdlArt
RPjnvXMcjDOEmqrT20ypKwMeyjJvjTQuj4zldzWHleCJKWyJcLOmX0gHq2RaR33E
auAqMOP4fCWfl/3Zqb4uSn5SAXdFYqtH8ZsoHLCcLvH8A72vQpotC3AciwIDAQAB
oz8wPTAdBgNVHQ4EFgQUsNVr6fbh8sUiNwOkrlcQ+S8k0+MwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBADCqqIlkrYvuT7lS
F3xiMtCjMf+jKmP55PNC1ZotFe1wPAud6Lm5XGqbevPbR4d4cLwgOQgWy8lR+H+O
LB74bEjBsnZDD5A8OgMQAq5a3O7D5h1Z3u15x65CCYrYE9KHiTSWWisML0QEJzWW
eogJ9lHUPlQUG0Ne0QMB/Zt3nd3e7vcQClqz0DVVn+o3ludf/1P3IZNIT/ioAb+g
A4e1vaVB34J8EJZuA+8KA7Fdayy2jd9RukpWgJksenV2xMiKTA9Eoh/DTjTwOvGs
XjyaQDBRDXC/aTTQ9QjMlgEnApdUN5icyZa319PdUFeoTGnXYBPJuGRXjYxQGfgv
/bioegKZA1J+OSc9OBLl7heq6vpKYikPYV5xVqrmy4AwUUhQa6x8aSzfgK0nPZ/Z
u/5fOcsqX1qkrte9sr/KMckB/2e//5JF8qdiHZlu9J7t904gKKH1/NKPNXWaVtny
oqdu2OA6clPjvqj0bm5zca5MP2OlIPtiKE76KrV78WCWKn8Bcg==
-----END CERTIFICATE-----`],
    },
  // */
})

const handler = async (req: Request) => {
  const result = await sql`select 1 as ret`

  return Response.json(result)
}

if (typeof Deno != 'undefined') Deno.serve(handler)
else console.error('Expect Deno runtime')
