---
title: "Silicon Valley’s two biggest dramas have intersected: LiteLLM and Delve"
source: "Julie Bort"
url: "https://techcrunch.com/2026/03/26/delve-did-the-security-compliance-on-litellm-an-ai-project-hit-by-malware/"
published: "2026-03-26T16:06:33.000Z"
category: "tech"
summary: "LiteLLM offers an AI open source project used by millions that was infected by credential harvesting malware."
---
This is one of those Silicon Valley real-life episodes that seems pulled from the HBO satire show. This week, some really atrocious malware was discovered in an open source project developed by [Y Combinator graduate](https://www.ycombinator.com/companies/litellm) LiteLLM.

LiteLLM gives developers easy access to hundreds of AI models and provides features like spend management. It’s a breakout hit, downloaded as often as 3.4 million times per day, [according to Snyk](https://snyk.io/articles/poisoned-security-scanner-backdooring-litellm/), one of the many security researchers monitoring the incident. The project had [40K stars on GitHub](https://github.com/BerriAI/litellm) and thousands of forks (those who used it as a base to alter and make it their own).

The malware was discovered, [documented, and disclosed](https://futuresearch.ai/blog/no-prompt-injection-required/) by research scientist Callum McMahon of FutureSearch, a company offering AI agents for web research. The malware slipped in through a “dependency,” meaning other open source software that LiteLLM relied upon. It then stole the log-in credentials of everything it touched. With those credentials, the malware gained access to more open source packages and accounts to harvest more credentials, and so on.

The malware caused McMahon’s machine to shut down after he downloaded LiteLLM. That event prompted him to investigate and discover it. Ironically, a bug in the malware caused his machine to blow up. Because that bit of nasty code was so sloppily designed, he (as well as [famed AI researcher Andrej Karpathy](https://x.com/karpathy/status/2036487306585268612)) concluded it must have been vibe coded.

The LiteLLM developers have been working non-stop this week [to rectify the situation](https://docs.litellm.ai/blog) and the good news is that it was caught relatively fast, likely within hours.

There’s another part to this saga that [folks on X](https://x.com/IceSolst/status/2036516682810667280) can’t stop talking about. LiteLLM, as of March 25 when we looked, still proudly displays on its website that it has passed two major security compliance certifications, SOC2 and ISO 27001.

But it used a startup called Delve for those certifications.

Techcrunch event

San Francisco, CA | October 13-15, 2026

Delve is the Y-Combinator AI-powered compliance startup that’s been [accused of misleading its customers about their true compliance](https://techcrunch.com/?p=3106318&preview=true&_thumbnail_id=2129087) conformity by allegedly generating fake data, and using auditors that rubber stamp reports. Delve has denied these allegations.

![LiteLLM website features security cert by Delve](https://techcrunch.com/wp-content/uploads/2026/03/LiteLLM-Delve.png?w=680)

LiteLLM website features security cert by Delve**Image Credits:**LiteLLM

There is one point of nuance here worth understanding. Such certifications are intended to show that a company has strong security policies in place to limit the possibility of incidents like this one. Certifications don’t automatically prevent a company, like LiteLLM, from being hit by malware. While SOC 2 is supposed to cover policies surrounding software dependencies, malware can still slip in.

Even so, as engineer Gergely Orosz pointed out [on X](http://v/) when he saw people snickering about it online, “Oh damn, I thought this WAS a joke. … but no, LiteLLM \*really\* was ‘Secured by Delve.’”

As for LiteLLM, CEO Krrish Dholakia had no comment on the use of Delve. He’s still busy cleaning up the unfortunate mess from being a victim of attack.

“Our current priority is the active investigation alongside Mandiant. We are committed to sharing the technical lessons learned with the developer community once our forensic review is complete,” he told TechCrunch.
