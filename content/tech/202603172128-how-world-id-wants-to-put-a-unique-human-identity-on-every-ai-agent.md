---
title: "How World ID wants to put a unique human identity on every AI agent"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/ai/2026/03/world-id-wants-you-to-put-a-cryptographically-unique-human-identity-behind-your-ai-agents/"
published: "2026-03-17T21:28:27.000Z"
category: "tech"
summary: "Iris scan-backed tokens could help stop agent swarms from overwhelming online systems."
---
Over the last few months, tools like [OpenClaw](https://arstechnica.com/tag/openclaw/) have shown what tech-savvy AI users can do by setting a virtual cadre of automated agents on a task. But that individual convenience can be a DDOS-level pain for online service providers faced with a torrent of [Sybil attack-style](https://www.imperva.com/learn/application-security/sybil-attack/) requests from thousands of such agents at once.

Identity startup [World](https://world.org/) thinks its “proof of human” [World ID](https://world.org/world-id) technology can provide a potential solution to this problem. Today, the company launched a beta of [Agent Kit,](https://docs.world.org/agents/agent-kit/integrate) a new way for humans to prove they are directing their AI agents and for websites to limit access to AI agents working on behalf of an actual human.

If you recognize the name World, it’s probably as the organization behind [WorldCoin](https://arstechnica.com/tech-policy/2023/07/ready-for-your-eye-scan-worldcoin-launches-but-not-quite-worldwide/), the Sam Altman-founded cryptocurrency outfit that [launched in 2023](https://arstechnica.com/tech-policy/2023/07/ready-for-your-eye-scan-worldcoin-launches-but-not-quite-worldwide/) alongside an offer to give free WorldCoin to anyone who [scanned their iris in a physical “orb”](https://arstechnica.com/tech-policy/2021/10/more-than-100000-people-have-had-their-eyes-scanned-for-free-cryptocurrency/). While WorldCoin still exists (at a current value [well below its early 2024 peaks](https://www.coingecko.com/en/coins/worldcoin)), World has now pivoted to focus on [World ID](https://world.org/world-id), which uses the same iris-scanning technology as the basis for a cryptographically secure, unique online identity token stored on your phone.

World now claims nearly 18 million unique humans have verified their identities on one of nearly 1,000 physical orbs around the world. Now, with Agent Kit, World wants to let those users tie their confirmed identity to any AI agent, letting it work on their behalf across the Internet in a way other parties can trust.

## Who are you working for?

Rather than [blocking automated traffic outright](https://arstechnica.com/tech-policy/2025/07/cloudflare-wants-google-to-change-its-ai-search-crawling-google-likely-wont/) as a [safety](https://arstechnica.com/ai/2025/03/devs-say-ai-crawlers-dominate-traffic-forcing-blocks-on-entire-countries/) or [data-protection measure](https://arstechnica.com/tech-policy/2025/08/reddit-blocks-internet-archive-to-end-sneaky-ai-scraping/), World [suggests](https://world.org/blog/announcements/now-available-agentkit-proof-of-human-for-the-agentic-web) sites could instead require AI agents to present an associated World ID token to prove they represent an actual human who’s behind any request. In this way, the site could allow agents to access limited resources like restaurant reservations, ticket purchase opportunities, free trials, or even bandwidth without worrying about a single user flooding the process with thousands of anonymous bots. The same idea could apply to sensitive reputational systems like online forums and polls, where it’s important to prevent automated astroturfing or dogpiling.
