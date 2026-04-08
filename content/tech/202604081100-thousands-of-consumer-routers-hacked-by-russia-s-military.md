---
title: "Thousands of consumer routers hacked by Russia's military"
source: "
                    Dan Goodin
                "
url: "https://arstechnica.com/security/2026/04/russias-military-hacks-thousands-of-consumer-routers-to-steal-credentials/"
published: "2026-04-08T11:00:08.000Z"
category: "tech"
summary: "End-of-life routers in homes and small offices hacked in 120 countries."
---
The Russian military is once again hacking home and small office routers in widespread operations that send unwitting users to sites that harvest passwords and credential tokens for use in espionage campaigns, researchers said Tuesday.

An estimated 18,000 to 40,000 consumer routers, mostly those made by MikroTik and TP-Link, located in 120 countries were wrangled into infrastructure belonging to APT28, an advanced threat group that’s part of Russia’s military intelligence agency known as the GRU, researchers from Lumen Technologies’ Black Lotus Labs [said](https://www.lumen.com/blog-and-news/en-us/frostarmada-forest-blizzard-dns-hijacking). The threat group has operated for at least two decades and is behind dozens of high-profile hacks targeting governments worldwide. APT28 is also tracked under names including Pawn Storm, Sofacy Group, Sednit, Tsar Team, Forest Blizzard, and STRONTIUM.

## Technical sophistication, tried-and-true techniques

A small number of routers were used as proxies to connect to a much larger number of other routers belonging to foreign ministries, law enforcement, and government agencies that the APT wanted to spy on. The group then used its control of routers to change DNS lookups for select websites, including, Microsoft [said](https://www.microsoft.com/en-us/security/blog/2026/04/07/soho-router-compromise-leads-to-dns-hijacking-and-adversary-in-the-middle-attacks/), domains for the company’s 356 service.

“Known for blending cutting-edge tools such as the large language model (LLM) ‘LAMEHUG’ with proven, longstanding techniques, Forest Blizzard consistently evolves its tactics to stay ahead of defenders,” Black Lotus researchers wrote. “Their previous and current campaigns highlight both their technological sophistication and their willingness to revisit classic attack methods even after public exposure, underscoring the ongoing risk posed by this actor to organizations worldwide.”

To hijack the routers, the attackers exploited older models that hadn’t been patched against known security vulnerabilities. They then changed DNS settings for select domains and used the [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) to propagate them to router-connected workstations. When connected devices visited the selected domains, their connections were proxied through malicious servers before reaching their intended destination.
