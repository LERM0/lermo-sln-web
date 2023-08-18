export default {
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:4000',
  WS_ENDPOINT: process.env.NEXT_PUBLIC_WS_ENDPOINT || 'http://localhost:5000',
  TRANSCODER_ENDPOINT: process.env.NEXT_PUBLIC_TRANSCODER_ENDPOINT || 'http://localhost:8080',
  WEB_ENDPOINT: process.env.NEXT_PUBLIC_WEB_ENDPOINT || 'http://localhost:3000',
  CONF_ENDPOINT: process.env.NEXT_PUBLIC_CONF_ENDPOINT || 'http://localhost:4001',
  GA: process.env.NEXT_PUBLIC_GA || '',
};
