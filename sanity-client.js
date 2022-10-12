import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2021-10-21'
});