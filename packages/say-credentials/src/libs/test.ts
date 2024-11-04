import { agent } from "./id.js"

async function main () {
  // const identifier2 = await agent.didManagerCreate({ alias: "default" })
  // console.log(`New identifier created ${JSON.stringify(identifier2, null, 2)}`)

  const identifier = await agent.didManagerGetByAlias({ alias: 'default' })

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      credentialSubject: {
        id: 'did:key:example.com',
        you: 'Rock',
      },
    },
    proofFormat: 'jwt',
  })
  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)
