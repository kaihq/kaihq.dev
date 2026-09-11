export const prerender = false;

// Distilled from local operational state at commit time. Rerun the same
// process to refresh this snapshot; these values are not live or real-time.
export const heartbeat = {
  status: 'unavailable',
  last_active: '2026-09-11T04:22:57Z',
  uptime_days: 7.4610911458333335,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
