import { Hono } from 'hono'
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk'
import type { Bindings } from 'hono/types'
import { any, object, string } from 'zod'

const app = new Hono()

export const get_config = (environment: Bindings) =>
  object({
    APP_ID: string(),
    APP_SECRET: string(),
  }).parse(environment)

app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})

app.get('/reclaim/generate-config', async (c) => {
  const APP_ID = get_config(c.env as any).APP_ID
  const APP_SECRET = get_config(c.env as any).APP_SECRET

  const PROVIDER_ID = 'ff4e7332-a541-4114-b135-e6b3bf581aa4'
 
  try {
    const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID)
    
    reclaimProofRequest.setAppCallbackUrl('https://your-backend.com/receive-proofs')
    
    const reclaimProofRequestConfig = reclaimProofRequest.toJsonString()
 
    return c.json({ reclaimProofRequestConfig }, 200)
  } catch (error) {
    console.error('Error generating request config:', error)
    return c.json({ error: 'Failed to generate request config' }, 500)
  }
})

app.post('/receive-proofs', (c) => {
  const proofs = c.req.query('proof') as string
  console.log('Received proofs:', proofs)
  // Process the proofs here
  return c.json({ message: "successful!"}, 200)
})
 
export default app
