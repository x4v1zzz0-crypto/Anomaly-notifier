// api/notify.js o app/api/notify/route.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body; // { title, name, value, rarity, join, image, ping }

  const discordWebhook = "https://discord.com/api/webhooks/1455084311698214934/KvZgFXn0S-jdon25qGwbayS3JXwFexW70nKpgvSe6jCUCIMcpIBuy30CI5C2oLpxZf90"; // TU WEBHOOK AQUÍ

  const embed = {
    title: data.title || "🌟 BRAINROT DETECTADO",
    color: 0xFF4500,
    fields: [
      { name: "Name", value: data.name || "Desconocido", inline: false },
      { name: "Value", value: data.value || "N/A", inline: false },
      { name: "Rarity", value: data.rarity || "Secret", inline: false },
      { name: "Join", value: `[Unirse](${data.join})`, inline: false }
    ],
    timestamp: new Date().toISOString()
  };

  if (data.image) embed.thumbnail = { url: data.image };

  const payload = { embeds: [embed] };
  if (data.ping) payload.content = "@everyone";

  try {
    await fetch(discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send to Discord' });
  }
}
