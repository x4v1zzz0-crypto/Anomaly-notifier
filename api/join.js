// api/join.js
export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).json({ error: "Missing params: placeId & jobId" });
  }

  const joinUrl = `https://www.roblox.com/games/${placeId}?gameInstanceId=${jobId}`;

  // Opcional: reenviar a Discord como mensaje simple
  const webhook = "https://discord.com/api/webhooks/1455084311698214934/KvZgFXn0S-jdon25qGwbayS3JXwFexW70nKpgvSe6jCUCIMcpIBuy30CI5C2oLpxZf90";

  fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `Nuevo server detectado! Join: ${joinUrl}`
    })
  }).catch(console.error);

  res.status(200).json({ success: true, join: joinUrl });
}
