const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Production Grade DevOps";
const VERSION = process.env.VERSION || "1.0.0";

let requestCount = 0;

app.get("/", (req, res) => {

requestCount++;

res.send(`
<h1>${APP_NAME}</h1>

<p><b>Version:</b> ${VERSION}</p>

<h2>Application Information</h2>

<p><b>Hostname:</b> ${os.hostname()}</p>

<p><b>Platform:</b> ${os.platform()}</p>

<p><b>Architecture:</b> ${os.arch()}</p>

<p><b>CPU Cores:</b> ${os.cpus().length}</p>

<p><b>Total Memory:</b> ${(os.totalmem()/1024/1024/1024).toFixed(2)} GB</p>

<p><b>Free Memory:</b> ${(os.freemem()/1024/1024/1024).toFixed(2)} GB</p>

<p><b>Uptime:</b> ${Math.floor(os.uptime())} Seconds</p>

<p><b>Requests Served:</b> ${requestCount}</p>

<p><b>Status:</b> Healthy</p>

`);
});

app.listen(PORT, () => {

console.log(`Server running on port ${PORT}`);

});
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: APP_NAME,
	version: VERSION,
        timestamp: new Date()
    });
});
