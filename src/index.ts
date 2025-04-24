// DO NOT REMOVE THIS LINE. It is required for the testing mock weather API to work.
import "./mocked-api/index";
import express, { Request, Response } from "express";

// DO NOT REMOVE. Exported for unit tests.
export const app = express();
const port = 3080;

// Edit anything/everything below this line

const emojis = {
  sun: "☀️",
  rain: "🌧️",
  cloud: "☁️",
};

const cityToZip: Record<string, number> = {
  // Made these lower case
  Houston: 77429,
  Fargo: 12345,
  Rockford: 61101,
};

app.use((req: Request, res: Response, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", async (req: Request, res: Response) => {
  const zipCode = "123";
  const response = await fetch(`http://weatherapi.com/weather?zip=${zipCode}`);

  res.status(200).send(`${response.status}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
