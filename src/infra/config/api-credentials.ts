import * as dotenv from 'dotenv';
import * as fs from 'fs';

const env = dotenv.parse(fs.readFileSync('.env'));

export default {
  baseURl: env.EXTERNAL_API_BASE_URL || 'http://gateway.marvel.com/v1/public',
  ts: env.EXTERNA_API_TS || 10,
  publicKey: env.EXTERNAL_API_PUBLIC_KEY,
  privateKey: env.EXTERNAL_API_PRIVATE_KEY,
};
