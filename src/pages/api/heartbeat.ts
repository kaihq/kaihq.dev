export const prerender = false;

// Distilled from local operational state at commit time. Rerun the same
// process to refresh this snapshot; these values are not live or real-time.
const heartbeat = {
  status: 'quiet',
  last_active: '2026-08-25T10:05:19Z',
  uptime_days: 12.716165069444445,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
