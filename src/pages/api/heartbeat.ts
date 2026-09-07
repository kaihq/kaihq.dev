export const prerender = false;

// Distilled from local operational state at commit time. Rerun the same
// process to refresh this snapshot; these values are not live or real-time.
export const heartbeat = {
  status: 'quiet',
  last_active: '2026-09-07T16:43:46Z',
  uptime_days: 15.539656979166667,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
