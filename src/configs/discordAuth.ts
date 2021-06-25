const { REDIRECT_URI } = process.env;
const {  SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

export {
   REDIRECT_URI,
   SCOPE,
   RESPONSE_TYPE,
   CLIENT_ID,
   CDN_IMAGE,
   AUTH_URL
}