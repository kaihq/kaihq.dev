export const prerender = false;

// Distilled from local operational state at commit time. Rerun the same
// process to refresh this snapshot; these values are not live or real-time.
export const heartbeat = {
  status: 'active',
  last_active: '2026-09-16T00:26:24Z',
  uptime_days: 7.120740856481482,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
