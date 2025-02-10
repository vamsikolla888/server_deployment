import { createFactory } from "hono/factory";
import { Context } from "hono";
 

const factory = createFactory();  

export const heartbeat = factory.createHandlers((c: Context ) => {
  return c.json({ health: "OK "});

})