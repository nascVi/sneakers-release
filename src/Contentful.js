import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: process.env.APP_API_SPACE,
  accessToken: process.env.APP_ACCESS_TOKEN
});
