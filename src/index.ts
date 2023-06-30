import express, { Request, Response } from "express";
import "colors";

const app = express();
const subdomain = process.env.SUB_DOMAIN;

if (!subdomain) throw new Error("No subdomain provided!!");

app.get("*", (_req: Request, res: Response) => {
  res.redirect(subdomain);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.bgGreen));
