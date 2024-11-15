import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);