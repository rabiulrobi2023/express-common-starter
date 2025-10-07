import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewires/globalerrorhandler";
import notFoundRoute from "./middlewires/notFoundRoute";
import { router } from "./app/config/routes";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});
app.use(globalErrorHandler);
app.use(notFoundRoute);

export default app;
