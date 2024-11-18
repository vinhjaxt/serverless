# Serverless
[Serverless] Deno backend

# Postgres database SaaS
- Supabase: https://supabase.com/dashboard (`30 max_connections` - https://supabase.com/docs/guides/platform/compute-and-disk#postgres-replication-slots-wal-senders-and-connections)
- **Xata**: https://app.xata.io/ (`6 max_connections` - https://xata.io/docs/concepts/pricing#concurrency-limit)
- **Neon**: https://console.neon.tech/ (`112 max_connections` - https://neon.tech/docs/connect/connection-pooling#connection-limits-without-connection-pooling)
- **Aiven**: https://console.aiven.io/ (`20 max_connections` - https://aiven.io/docs/products/postgresql/reference/pg-connection-limits)

# Backend/Deno runtime SaaS
- **Deno deploy**: https://dash.deno.com - `1M/month, 50ms CPU` - https://deno.com/deploy/pricing
- **Supabase**: https://supabase.com/dashboard - `Unlimited API requests, 2s CPU` - https://supabase.com/docs/guides/functions/limits#runtime-limits
- **Cloudflare Workers**: https://developers.cloudflare.com/workers/platform/limits/ - `100,000 reqs/d, 1000 reqs/m, 10 ms CPU` - https://developers.cloudflare.com/workers/platform/limits/#worker-limits
