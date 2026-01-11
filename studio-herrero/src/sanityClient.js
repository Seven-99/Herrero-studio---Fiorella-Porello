// src/sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'awx11oju', // Tu ID de proyecto
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-10',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);