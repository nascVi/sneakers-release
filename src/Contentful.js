import { createClient} from 'contentful'

export default createClient({
  space: process.env.APP_API_SPACE,
  accessToken: process.env.APP_ACCESS_TOKEN
});
