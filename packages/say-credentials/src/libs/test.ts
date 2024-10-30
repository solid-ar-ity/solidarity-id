import { agent } from "./id.js"

async function main () {
  const identifier = await agent.didManagerCreate({ alias: "default" })
  console.log(`New identifier created ${JSON.stringify(identifier, null, 2)}`)
}

main().catch(console.log)
