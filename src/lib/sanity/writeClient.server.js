import { createClient } from '@sanity/client'
import { env } from '$env/dynamic/private'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public'

const token = env.SANITY_LOCAL || env.SANITY_TOKEN;

export const sanityWrite = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false
})
