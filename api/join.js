export default async function handler(req,res){

const { placeId, jobId } = req.query

if(!placeId || !jobId){
return res.status(400).send("Missing parameters")
}

const link = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`

res.writeHead(302,{
Location:link
})

res.end()

}
