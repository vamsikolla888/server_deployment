import { Hono } from "hono";
import { getPM2Processes } from "../controllers/pm2.controller";

const app = new Hono()
          .get("/", ...getPM2Processes)

export default app;