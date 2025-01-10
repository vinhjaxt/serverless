# Serverless
[Serverless] Deno/Cloudflare backend, Postgres Database

# Postgres database SaaS
- **Supabase**: https://supabase.com/dashboard - `30 max_connections` - [link](https://supabase.com/docs/guides/platform/compute-and-disk#postgres-replication-slots-wal-senders-and-connections)
- **Xata**: https://app.xata.io/ - `6 max_connections` - [link](https://xata.io/docs/concepts/pricing#concurrency-limit)
- **Neon**: https://console.neon.tech/ - `112 max_connections` - [link](https://neon.tech/docs/connect/connection-pooling#connection-limits-without-connection-pooling)
- **Aiven**: https://console.aiven.io/ - `20 max_connections` - [link](https://aiven.io/docs/products/postgresql/reference/pg-connection-limits)

# Backend/Deno runtime SaaS
- **Deno deploy**: https://dash.deno.com - `1M/month, 50ms CPU` - [link](https://deno.com/deploy/pricing)
- **Supabase**: https://supabase.com/dashboard - `Unlimited API requests, 2s CPU` - [link](https://supabase.com/docs/guides/functions/limits#runtime-limits)
- **Cloudflare Workers**: https://dash.cloudflare.com - `100,000 reqs/d, 1000 reqs/m, 10 ms CPU` - [link](https://developers.cloudflare.com/workers/platform/limits/#worker-limits)

# Optimize
https://hub.docker.com/r/bitnami/pgbouncer/
