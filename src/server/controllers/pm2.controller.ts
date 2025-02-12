import { Context } from "hono";
import { createFactory } from "hono/factory";
import { execSync } from "child_process";
import { IPM2List } from "../types/pm2";
const factory = createFactory();

export const getPM2Processes = factory.createHandlers(async (c: Context ) => {
  const pm2list = execSync("pm2 jlist", { encoding: "utf-8"});
  if(pm2list)
  {
    const processes = JSON.parse(pm2list);
    return c.json<{ processes: IPM2List[]}>({ processes })
  }
  return c.json<{ processes: IPM2List[]}>({ processes: []})
})