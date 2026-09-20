// Regenerates public/resume/Wasif-Ali-Resume.pdf from the /resume page using headless Chrome.
// Usage: start the site (npm run dev or npm start), then: npm run resume:pdf
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const url = process.env.RESUME_URL ?? "http://127.0.0.1:3000/resume";
const out = resolve("public/resume/Wasif-Ali-Resume.pdf");
const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const chrome = candidates.find((c) => existsSync(c));
if (!chrome) throw new Error("No Chrome/Chromium found. Set CHROME_PATH.");

execFileSync(chrome, [
  "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
  `--print-to-pdf=${out}`, "--virtual-time-budget=5000", url,
], { stdio: "inherit" });
console.log(`Wrote ${out} from ${url}`);
