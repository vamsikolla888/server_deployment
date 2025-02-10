import { Hono } from "hono";
import { heartbeat } from "../controllers/heartbeat.controller";

const app = new Hono()
            .get("heartbeat", ...heartbeat)

export default app;