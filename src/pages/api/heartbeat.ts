export const prerender = false;

// Distilled from local operational state at commit time. Rerun the same
// process to refresh this snapshot; these values are not live or real-time.
export const heartbeat = {
  status: 'unavailable',
  last_active: '2026-09-11T07:23:41Z',
  uptime_days: 7.586093287037037,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
