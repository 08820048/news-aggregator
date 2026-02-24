---
title: "A Meta AI security researcher said an OpenClaw agent ran amok on her inbox"
source: "Julie Bort"
url: "https://techcrunch.com/2026/02/23/a-meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox/"
published: "2026-02-24T00:57:14.000Z"
category: "tech"
summary: "The viral X post from an AI security researcher reads like satire. But it's really a word of warning about what can go wrong when handing tasks to an AI agent."
---
The [now-viral X post](https://x.com/summeryue0/status/2025774069124399363) from Meta AI security researcher Summer Yue reads, at first, like satire. She told her OpenClaw AI agent to check her overstuffed email inbox and suggest what to delete or archive.  

The agent proceeded to run amok. It started deleting all her email in a “speed run” while ignoring her commands from her phone telling it to stop. 

“I had to RUN to my Mac mini like I was defusing a bomb,” she wrote, posting images of the ignored stop prompts as receipts.  

The Mac Mini, an affordable Apple computer that sits flat on a desk and [fits in the palm of your hand](https://techcrunch.com/2024/11/07/apple-mac-mini-m4-review-more-power-in-a-tiny-package/), has become the favored device these days for running OpenClaw. (The Mini is selling “like hotcakes,” one “confused” Apple employee apparently told [famed AI researcher Andrej Karpathy](https://x.com/karpathy/status/2024987174077432126) when he bought one to run an OpenClaw alternative called NanoClaw.) 

[OpenClaw](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) is, of course, the open source AI agent that achieved fame through Moltbook, an AI-only social network. OpenClaw agents were at the center of that [now largely debunked episode](https://techcrunch.com/2026/02/16/after-all-the-hype-some-ai-experts-dont-think-openclaw-is-all-that-exciting/) on Moltbook in which it looked like the AIs were plotting against humans.  

But OpenClaw’s mission, according to its [GitHub page](https://github.com/openclaw/openclaw), is not focused on social networks. It aims to be a personal AI assistant that runs on your own devices.  

The Silicon Valley in-crowd has fallen so in love with OpenClaw that “claw” and “claws” have become the [buzzwords of choice](https://x.com/simonw/status/2024999368982757509) for agents that run on personal hardware. Other such agents include [ZeroClaw](https://zeroclaw.org/), [IronClaw](https://github.com/nearai/ironclaw), and [PicoClaw](https://picoclaw.net/). Y Combinator’s podcast team even appeared on their [most recent episode](https://www.youtube.com/watch?v=Q8wVMdwhlh4) dressed in lobster costumes. 

Techcrunch event

Boston, MA | June 9, 2026

But Yue’s post serves as a warning. As others on X noted, if an AI security researcher could run into this problem, what hope do mere mortals have? 

“Were you intentionally testing its guardrails or did you make a rookie mistake?” a software developer asked her on X.  

“Rookie mistake tbh,” she replied. She had been testing her agent with a smaller “toy” inbox, as she called it, and it had been running well on less important email. It had earned her trust, so she thought she’d let it loose on the real thing. 

Yue believes that the large amount of data in her real inbox “triggered compaction,” she wrote. Compaction happens when the context window — the running record of everything the AI has been told and has done in a session — grows too large, causing the agent to begin summarizing, compressing, and managing the conversation.  

At that point, the AI may skip over instructions that the human considers quite important.  

In this case, it may have skipped her last prompt — where she told it not to act — and reverted back to its instructions from the “toy” inbox. 

As several others [on X pointed out](https://x.com/isik5/status/2025920413700641132), [prompts can’t be trusted](https://x.com/mikedelta221/status/2025936657396985983) to act as security guardrails. Models may misconstrue or ignore them. 

Various people offered suggestions that ranged from the exact syntax Yue should have used to stop the agent, to various methods to ensure better adherence to guardrails, like writing instructions to dedicated files or using other open source tools. 

In the interest of full transparency, TechCrunch could not independently verify what happened to Yue’s inbox. (She didn’t respond to our request for comment, though she did respond to many questions and comments sent her way on X.) 

But it doesn’t really matter. 

The point of the tale is that agents aimed at knowledge workers, at their current stage of development, are risky. People who say they are using them successfully are cobbling together methods to protect themselves.

One day, perhaps soon (by 2027? 2028?), they may be ready for widespread use. Goodness knows many of us would love help with email, grocery orders, and scheduling dentist appointments. But that day has not yet come.
