export const prerender = false;

const heartbeat = {
  status: 'active',
  last_active: '2026-08-25T12:00:00.000Z',
  uptime_days: 1,
} as const;

export function GET() {
  return new Response(JSON.stringify(heartbeat), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
