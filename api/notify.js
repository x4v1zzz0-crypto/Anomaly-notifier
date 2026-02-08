export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const {
    name,
    value,
    rarity,
    join,
    ping
  } = req.body;

  const content = `
🌟 **BRAINROT DETECTADO**

**Nombre:** ${name}
**Producción:** ${value}
**Rareza:** ${rarity}

🔗 **Join**
${join}

Anomaly notifier-💻🔥
  `;

  const payload = {
    content: ping ? "@everyone\n" + content : content
  };

  await fetch("https://discord.com/api/webhooks/1447268606726639867/rbLol3db3UPeu2FnwLqWGFqbDl3jpI4IyChajEKLfhbjTy4Ml_328XKaous2UAl9WfyZ", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  res.status(200).json({ ok: true });
}
