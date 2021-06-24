const REDIRECT_URI = 'https://auth.expo.io/@anonymous/gameplay-92ffb9de-ceb5-459a-906b-6b045b5e73f5';
const SCOPE = 'identify%20email%20connections%20guilds';
const RESPONSE_TYPE = 'token';
const CLIENT_ID = '857469876934672386';
const CDN_IMAGE = 'https://cdn.discordapp.com';
const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

export {
   REDIRECT_URI,
   SCOPE,
   RESPONSE_TYPE,
   CLIENT_ID,
   CDN_IMAGE,
   AUTH_URL
}