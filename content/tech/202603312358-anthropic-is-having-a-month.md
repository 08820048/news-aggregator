---
title: "Anthropic is having a month"
source: "Connie Loizos"
url: "https://techcrunch.com/2026/03/31/anthropic-is-having-a-month/"
published: "2026-03-31T23:58:26.000Z"
category: "tech"
summary: "A human really borks things at Anthropic for the second time this week."
---
Anthropic has built its public identity around the winning idea that it’s the careful AI company. It publishes detailed work on AI risk, employs some of the best researchers in the field, and has been vocal about the responsibilities that come with building such powerful technology — so vocal, of course, that it’s right now [battling it out](https://techcrunch.com/2026/03/26/anthropic-wins-injunction-against-trump-administration-over-defense-department-saga/) with the Department of Defense. On Tuesday, alas, someone there forgot to check a box.

It is, notably, the second time in a week. Last Thursday, Fortune [reported](https://fortune.com/2026/03/27/anthropic-leaked-ai-mythos-cybersecurity-risk/) that Anthropic had accidentally made nearly 3,000 internal files publicly available, including a draft blog post describing a powerful new model the company had not yet announced.

Here’s what happened on Tuesday: When Anthropic pushed out version 2.1.88 of its Claude Code software package, it accidentally included a file that exposed nearly 2,000 source code files and more than 512,000 lines of code — essentially the full architectural blueprint for one of its most important products. A security researcher named Chaofan Shou noticed almost immediately and [posted about it on X](https://x.com/Fried_rice/status/2038894956459290963). Anthropic’s statement to multiple outlets was nonchalant as these things go: “This was a release packaging issue caused by human error, not a security breach.” (Internally, we’d guess things were less measured.)

Claude Code isn’t a minor product. It’s a command-line tool that lets developers use Anthropic’s AI to write and edit code and has become formidable enough to unsettle rivals. According to the WSJ, OpenAI [pulled the plug](https://www.wsj.com/tech/ai/the-sudden-fall-of-openais-most-hyped-product-since-chatgpt-64c730c9?gaa_at=eafs&gaa_n=AWEtsqeMouhynEFJ_qlS-7hFpQ8zYzmu2bJubU4QBCQ1PKGt-R6PF0NLKMA4uKTwqgI%3D&gaa_ts=69cc5ff0&gaa_sig=-q8heG2wWcUHXSyKwT8ok-xZl-S06m_PVc7bPS6qHk5I_ZObm7bq-u-nyOcaZHGjZLpaeAhebgtAMuGR3Wk8Aw%3D%3D) on its video generation product Sora just six months after launching it to the public to refocus its efforts on developers and enterprises — partly in response to Claude Code’s growing momentum.

What leaked was not the AI model itself but the software scaffolding around it — the instructions that tell the model how to behave, what tools to use, and where its limits are. Developers began publishing detailed analyses almost immediately, with one describing the product as “a [production-grade developer experience](https://dev.to/gabrielanhaia/claude-codes-entire-source-code-was-just-leaked-via-npm-source-maps-heres-whats-inside-cjo), not just a wrapper around an API.”

Whether this turns out to matter in any lasting way is a question best left to developers. Competitors may find the architecture instructive; at the same time, the field moves fast.

Either way, somewhere at Anthropic, you can imagine that one very talented engineer has spent the rest of the day quietly wondering if they still have a job. One can only hope it’s not the same engineer, or engineering team, from late last week.

Techcrunch event

San Francisco, CA | October 13-15, 2026

Loizos has been reporting on Silicon Valley since the late ’90s, when she joined the original Red Herring magazine. Previously the Silicon Valley Editor of TechCrunch, she was named Editor in Chief and General Manager of TechCrunch in September 2023. She’s also the founder of StrictlyVC, a daily e-newsletter and lecture series acquired by Yahoo in August 2023 and now operated as a sub brand of TechCrunch.

You can contact or verify outreach from Connie by emailing [connie@strictlyvc.com](mailto:connie@strictlyvc.com) or [connie@techcrunch.com](mailto:connie@techcrunch.com), or via encrypted message at ConnieLoizos.53 on Signal.

[View Bio](https://techcrunch.com/author/connie-loizos/)
