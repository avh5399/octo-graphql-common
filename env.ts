import * as dotenv from "dotenv";
import { cleanEnv, str, url } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  GITHUB_ACCESS_TOKEN: str({
    desc: 'Github access token',
    example: 'personal access token'
  }),
});

export default env;
