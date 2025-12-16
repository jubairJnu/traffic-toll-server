import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  node_env: process.env.NODE_ENV,
  jwt: {
    access_token: process.env.ACCESS_TOKEN,
  },
  salt: process.env.SALT_ROUND,
};
