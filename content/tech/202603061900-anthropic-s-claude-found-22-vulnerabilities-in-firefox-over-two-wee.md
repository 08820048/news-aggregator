---
title: "Anthropic’s Claude found 22 vulnerabilities in Firefox over two weeks"
source: "Russell Brandom"
url: "https://techcrunch.com/2026/03/06/anthropics-claude-found-22-vulnerabilities-in-firefox-over-two-weeks/"
published: "2026-03-06T19:00:22.000Z"
category: "tech"
summary: "In a recent security partnership with Mozilla, Anthropic found 22 separate vulnerabilities in Firefox — 14 of them classified as \"high-severity.\""
---
In a recent security partnership with Mozilla, Anthropic found [22 separate vulnerabilities](https://www.anthropic.com/news/mozilla-firefox-security) in Firefox — 14 of them classified as “high-severity.” Most of the bugs have been fixed in [Firefox 148](https://www.firefox.com/en-US/firefox/148.0/releasenotes/) (the version released this February), although a few fixes will have to wait for the next release.

Anthropic’s team used Claude Opus 4.6 over the span of two weeks, starting in the JavaScript engine and then expanding to other portions of the codebase. According to the post, the team focused on Firefox because “it’s both a complex codebase and one of the most well-tested and secure open-source projects in the world.”

Notably, Claude Opus was much better at finding vulnerabilities than writing software to exploit them. The team ended up spending $4,000 in API credits trying to concoct proof-of-concept exploits, but only succeeded in two cases.

Still, it’s a reminder of how powerful AI tools can be for open source projects — even if they bring [a flood of bad merge requests](https://techcrunch.com/2026/02/19/for-open-source-programs-ai-coding-tools-are-a-mixed-blessing/) alongside the useful ones.
