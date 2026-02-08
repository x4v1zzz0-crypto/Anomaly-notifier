export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing params");
  }

  const robloxLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;

  res.writeHead(302, { Location: robloxLink });
  res.end();
}
