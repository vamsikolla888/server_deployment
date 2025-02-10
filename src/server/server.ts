import { Hono } from "hono";

/**@Routes */
import healthRoutes from "./routes/heartbeat.routes";
import pm2Routes from "./routes/pm2.routes";

const app = new Hono().basePath("/api")
          .route("/health", healthRoutes)
          .route("/pm2", pm2Routes)
export type AppType = typeof app;

export default app;