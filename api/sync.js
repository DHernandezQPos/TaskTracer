/**
 * VERCEL SERVERLESS SYNC ENDPOINT
 * /api/sync
 * Manages shared state across all team members on Vercel deployments.
 */

let inMemoryState = null;

export default async function handler(req, res) {
  // CORS Headers for seamless client fetch
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    if (!inMemoryState) {
      // Return null or empty to signal client to use its seeded database
      return res.status(200).json({ status: 'EMPTY', data: null });
    }
    return res.status(200).json({
      status: 'OK',
      data: inMemoryState,
      updatedAt: inMemoryState.updatedAt || new Date().toISOString()
    });
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (payload) {
        inMemoryState = {
          ...payload,
          updatedAt: new Date().toISOString()
        };
        return res.status(200).json({
          status: 'SAVED',
          updatedAt: inMemoryState.updatedAt
        });
      }
      return res.status(400).json({ error: 'Payload empty' });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
