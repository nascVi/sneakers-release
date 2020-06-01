const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.APP_API_SPACE,
  accessToken: process.env.APP_ACCESS_TOKEN
});
