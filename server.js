import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Setup basic constants
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your static site root folder
const STATIC_ROOT = __dirname;

// Domain you want to proxy to (your live site)
const UPSTREAM = "https://www.afsacademy.co.in";

// Serve all static assets directly
app.use(express.static(STATIC_ROOT, {
  extensions: ["html"],
  maxAge: "1h"
}));

// Example of rewriting specific paths before proxy
app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(STATIC_ROOT, "robots.txt"));
});

// Generic proxy fallback (for routes not found locally)
app.use(async (req, res) => {
  try {
    const targetURL = `${UPSTREAM}${req.originalUrl}`;
    const response = await fetch(targetURL, {
      method: req.method,
      headers: {
        ...Object.fromEntries(req.headers),
        host: "www.afsacademy.co.in"
      },
      body: req.method === "GET" || req.method === "HEAD" ? undefined : req.body
    });

    // copy headers
    response.headers.forEach((v, k) => res.setHeader(k, v));

    // modify HTML content before sending (optional)
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      let html = await response.text();
      html = html.replace(/www\.afsacademy\.co\.in/g, req.hostname);
      res.send(html);
    } else {
      res.status(response.status);
      response.body.pipe(res);
    }
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).send("Proxy error: " + err.message);
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
