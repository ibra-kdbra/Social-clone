import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'rlxg4qtr',
  dataset: 'production',
  apiVersion: '2023-04-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
