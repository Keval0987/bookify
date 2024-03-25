import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2022-03-10',
  dataset: dataset,
  projectId: projectId ,
  useCdn: useCdn,
  token: token,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);