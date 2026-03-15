export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" })
}

const data = req.body

const WEBHOOK = "https://discord.com/api/webhooks/1455084311698214934/KvZgFXn0S-jdon25qGwbayS3JXwFexW70nKpgvSe6jCUCIMcpIBuy30CI5C2oLpxZf90"

const payload = {
embeds: [
{
title: data.title || "🌟 BRAINROT DETECTADO",
description: data.description || "",
color: 65280,
image: data.image ? { url: data.image } : undefined
}
]
}

await fetch(WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
})

res.status(200).json({status:"sent"})

}
