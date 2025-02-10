import { Context } from "hono";
import { createFactory } from "hono/factory";
import pm2 from "pm2";
const factory = createFactory();

export const getPM2Processes = factory.createHandlers(async (c: Context ) => {
  const processes = await new Promise((resolve) => {
    pm2.list((err, list) => {
      if(err) resolve({ error: err.message });
      resolve({ processes: list })
    })
  })
  return c.json({ processes });
})