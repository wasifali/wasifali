"""Render the README's YAML blocks as theme-coloured SVG cards.

GitHub applies its own syntax-highlighting colours to fenced code blocks and offers no way to
theme them. These cards reproduce the YAML with the README palette instead: keys in orange,
strings in peach, comments muted, plus a terminal-style title bar.

Run:  python scripts/build-yaml-cards.py
Outputs assets/about.svg and assets/focus.svg.
"""
from __future__ import annotations
import re
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets"

# ---- palette (matches badges / hero) ----
BG = "#0a0a0a"
BAR = "#141414"
BORDER = "#7C2D12"
KEY = "#F97316"
STRING = "#FDBA74"
PLAIN = "#f5f5f5"
DASH = "#C2410C"
COMMENT = "#8B8B8B"
FONT = "'JetBrains Mono', 'Cascadia Code', 'SF Mono', Consolas, 'Liberation Mono', monospace"

FONT_SIZE = 14
LINE_H = 23
PAD_X = 28
PAD_TOP = 62          # below the title bar
PAD_BOTTOM = 26
WIDTH = 880

CARDS = {
    "about": ("about.yaml", '''name: Wasif Ali
handle: "@wasifali"
location: "Lahore, Pakistan 🇵🇰 (Open to Remote 🌍)"
role: Senior Full Stack Developer
experience: 10 years

companies:
  - Ibanera                # 2025 – 2026 (remote)
  - Big Immersive          # 2021 – 2026
  - CreativeMorph          # 2019 – 2021
  - Novatore Solutions     # 2016 – 2019

focus:
  - "Production Node.js / TypeScript Backends"
  - "Microservices & Scalable REST APIs"
  - "React & Angular Front-End Architecture"
  - "Blockchain / Web3 Integrations"
  - "Performance Engineering & Caching"

highlights:
  - "🚗 ERP microservices for BMW Mini & Motorrad — 200K req/day across 52 services"
  - "🛒 Consumer marketplace — 50K+ users, 1M+ transactions"
  - "⚡️ API response time cut 60% (1500ms → 600ms) via Redis caching"
  - "🧑‍🏫 Mentored 15+ engineers across US & Europe client teams"

open_to:
  - "🔭 Full-Stack / Backend / Senior / Lead / Staff Engineer roles"
  - "🛜 Distributed product teams"
  - "⚡️ Enterprise platform work"
  - "⏱️ US / EU timezone overlap"
  - "🚗 Remote-first or relocation for the right team"
'''),
    "focus": ("focus.yaml", '''building:
  - High-throughput Node.js microservices with predictable p95 latency
  - Redis caching strategies that survive cold starts and cache stampedes
  - Wallet and smart-contract flows legible to non-crypto users

refining:
  - NestJS + TypeScript service architecture as a reusable baseline
  - Observability with Datadog and Coralogix across distributed services
  - Gas-efficient Solidity patterns for ERC-721 / ERC-1155

leading:
  - Peer code review programs that measurably cut post-release defects
  - Mentorship for engineers joining distributed, cross-timezone teams

open_to:
  - Senior / Lead / Staff Full-Stack and Backend roles
  - Distributed product teams with US / EU timezone overlap
  - Enterprise platform and high-throughput backend work
  - Fully remote or relocation for the right team
'''),
}


def span(text: str, color: str, bold: bool = False) -> str:
    w = ' font-weight="600"' if bold else ""
    return f'<tspan fill="{color}"{w}>{escape(text)}</tspan>'


def colour_line(line: str) -> str:
    """Minimal YAML tokeniser: indent, key:, - item, "string", # comment."""
    if not line.strip():
        return ""
    out = []
    code, comment = line, ""
    # comments (outside quotes)
    m = re.search(r'\s+#.*$', line)
    if m and line[:m.start()].count('"') % 2 == 0:
        code, comment = line[:m.start()], line[m.start():]
    indent = len(code) - len(code.lstrip(" "))
    out.append(span(" " * indent, PLAIN))
    body = code.lstrip(" ")
    if body.startswith("- "):
        out.append(span("- ", DASH, True))
        body = body[2:]
    km = re.match(r'^([A-Za-z_][\w ]*):(\s*)(.*)$', body)
    if km:
        out.append(span(km.group(1), KEY, True))
        out.append(span(":" + km.group(2), PLAIN))
        body = km.group(3)
    if body:
        out.append(span(body, STRING if body.startswith('"') else PLAIN))
    if comment:
        out.append(span(comment, COMMENT))
    return "".join(out)


def card(title: str, yaml: str) -> str:
    lines = yaml.rstrip("\n").split("\n")
    height = PAD_TOP + LINE_H * len(lines) + PAD_BOTTOM
    text_lines = "\n".join(
        f'    <text x="{PAD_X}" y="{PAD_TOP + LINE_H * i + FONT_SIZE}" xml:space="preserve">{colour_line(l) or " "}</text>'
        for i, l in enumerate(lines)
    )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{height}" viewBox="0 0 {WIDTH} {height}" role="img" aria-label="{escape(title)}">
  <title>{escape(title)}</title>
  <style>text {{ font-family: {FONT}; font-size: {FONT_SIZE}px; white-space: pre; }}</style>
  <rect x="0.5" y="0.5" width="{WIDTH - 1}" height="{height - 1}" rx="12" fill="{BG}" stroke="{BORDER}"/>
  <path d="M0.5 12.5 a12 12 0 0 1 12 -12 h{WIDTH - 25} a12 12 0 0 1 12 12 v27.5 h-{WIDTH - 1} z" fill="{BAR}"/>
  <line x1="0.5" y1="40" x2="{WIDTH - 0.5}" y2="40" stroke="{BORDER}" stroke-opacity="0.6"/>
  <circle cx="22" cy="20.5" r="5.5" fill="{KEY}" opacity="0.9"/>
  <circle cx="40" cy="20.5" r="5.5" fill="{KEY}" opacity="0.55"/>
  <circle cx="58" cy="20.5" r="5.5" fill="{KEY}" opacity="0.3"/>
  <text x="{WIDTH / 2}" y="25" text-anchor="middle" fill="{COMMENT}" style="font-size:12.5px">{escape(title)}</text>
  <g>
{text_lines}
  </g>
</svg>
'''


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (title, yaml) in CARDS.items():
        (OUT / f"{slug}.svg").write_text(card(title, yaml), encoding="utf-8", newline="\n")
        print(f"wrote assets/{slug}.svg ({yaml.count(chr(10))} lines)")


if __name__ == "__main__":
    main()
