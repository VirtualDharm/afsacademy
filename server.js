import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream";

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
  const start = Date.now();
  const clientIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const method = req.method;
  const path = req.originalUrl;
  const targetURL = `${UPSTREAM}${path}`;

  console.log(`\n🟦 [${new Date().toISOString()}] Incoming ${method} request from ${clientIP}`);
  console.log(`➡️ Target URL: ${targetURL}`);

  try {
    const headersObject = req.headers;
    console.log("🧾 Request Headers:", headersObject);

    const fetchOptions = {
      method,
      headers: {
        ...headersObject,
        host: "www.afsacademy.co.in",
      },
      body: method === "GET" || method === "HEAD" ? undefined : req.body,
    };

    console.log("🚀 Fetch options ready:", {
      method: fetchOptions.method,
      hasBody: !!fetchOptions.body,
      headersCount: Object.keys(fetchOptions.headers).length,
    });

    // Perform the upstream request
    const response = await fetch(targetURL, fetchOptions);
    console.log(`✅ Upstream response: ${response.status} ${response.statusText}`);

    // Log some response headers
    console.log("📦 Response Headers:");
    response.headers.forEach((v, k) => console.log(`   ${k}: ${v}`));

    // Copy headers to our outgoing response
    response.headers.forEach((v, k) => res.setHeader(k, v));

    // Content type detection
    const contentType = response.headers.get("content-type") || "";
    console.log("🧩 Detected content type:", contentType);

    // Handle HTML response separately
    if (contentType.includes("text/html")) {
      let html = await response.text();
      console.log(`✏️ HTML length before replace: ${html.length}`);

      // Replace upstream domain with local hostname
      html = html.replace(/www\.afsacademy\.co\.in/g, req.hostname);

      console.log("✅ Replacement complete. Sending modified HTML.");
      res.status(response.status).send(html);
    } else {
      console.log("🔁 Non-HTML response, streaming directly...");
      res.status(response.status);
      pipeline(response.body, res, (err) => {
        if (err) {
          console.error("❌ Stream pipeline error:", err);
          res.status(500).send("Stream error");
        }
      });
    }

    const duration = Date.now() - start;
    console.log(`⏱️ Request processed in ${duration}ms`);
  } catch (err) {
    console.error("❌ Proxy error occurred:");
    console.error(err.stack || err.message);
    res.status(500).send("Proxy error: " + err.message);
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
