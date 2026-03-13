---
title: "The wild six weeks for NanoClaw’s creator that led to a deal with Docker"
source: "Julie Bort"
url: "https://techcrunch.com/2026/03/13/the-wild-six-weeks-for-nanoclaws-creator-that-led-to-a-deal-with-docker/"
published: "2026-03-13T17:09:59.000Z"
category: "tech"
summary: "Gavriel Cohen is living an open source developer's dream as his project has achieved acclaim and a partnership with Docker in a matter of weeks."
---
It’s been a whirlwind for [NanoClaw](https://nanoclaw.dev/) creator Gavriel Cohen. 

About six weeks ago, he introduced NanoClaw on Hacker News as a tiny, open source, secure alternative to the AI agent-building sensation OpenClaw, after he built it in a weekend coding binge. That [post went viral.](https://news.ycombinator.com/item?id=46850205)  

“I sat down on the couch in my sweatpants,” Cohen told TechCrunch, “and just basically melted into \[it\] the whole weekend, probably almost 48 hours straight.”  

About three weeks ago, an X post praising NanoClaw from famed AI researcher [Andrej Karpathy went viral](https://x.com/karpathy/status/2024987174077432126).  

About a week ago, Cohen closed down his AI marketing startup to focus full-time on NanoClaw and launch a company around it called NanoCo. The attention from Hacker News and Karpathy had translated into 22,000 stars on GitHub, 4,600 forks (people building new versions off the project), and over 50 contributors. He’s already added hundreds of updates to his project with hundreds more in the queue. 

Now, on Friday, Cohen [announced a deal with Docker](https://nanoclaw.dev/blog/nanoclaw-docker-sandboxes) — the company that essentially invented the container technology NanoClaw is built on, and counts millions of developers and nearly 80,000 enterprise customers — to integrate Docker Sandboxes into NanoClaw. 

## Scary security of OpenClaw 

It all started when Cohen launched an AI marketing startup with his brother, Lazer Cohen, a few months ago. The startup offered marketing services like market research, go-to-market analysis, and blog posts through a small team of people using AI agents.  

Techcrunch event

San Francisco, CA | October 13-15, 2026

The agency started booking customers, and was on track to hit $1 million in annual recurring revenue, the brothers told TechCrunch. 

“It was going really well, great traction. I’m a huge believer in that business model of AI-native service companies that have margins and operate like a software company but are actually providing services,” said Cohen, a computer programmer who previously worked for website hosting company Wix.

He had built the agents the startup was using, largely using Claude Code, each designed to do specific tasks. But there was “a piece” missing, he said. The agent could do work when prompted, but the humans couldn’t pre-schedule work, or connect agents to team communication tools like WhatsApp and assign tasks that way. (WhatsApp is to most of the world what Slack is to corporate America.) 

Cohen heard about OpenClaw, the popular AI agent tool [whose creator now works for OpenAI.](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) Cohen used it to build out those final interfaces, and loved it. 

“There was this big aha moment of: This is the piece that connects all of these separate workflows that I’ve been building,” he said and immediately decided, “I want more of them: on R& D, on product, on client management,” one for every task the startup had to handle. 

But then OpenClaw scared the bejesus out of him. 

In researching a hiccup with performance, he stumbled across a file where the OpenClaw agent had downloaded all of his WhatsApp messages and stored them in plain, unencrypted text on his computer. Not just the work-related messages it was given explicit access to, but all of them, his personal messages too.  

OpenClaw has been widely panned [as a “security nightmare”](https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare) because of the way it accesses memory and account permissions. It is difficult to limit its access to data on a machine once it has been installed.  

That issue will likely improve over time, given the project’s popularity, but Cohen had another concern: the sheer size of OpenClaw. As he researched security options for it, he saw all the packages that had been bundled into it. It included an “obscure” open source project he himself had written a few months earlier for editing PDFs using a Google image editing model. He had no idea it was there — he wasn’t even actively maintaining that project.  

He realized there was no way for him to validate all OpenClaw’s code and its dependencies, which, by some estimates, [sprawled across 800,000](https://news.ycombinator.com/item?id=47195074) lines of code. 

So he built his own in just 500 lines of code, intended to be used for his company, and shared it. He based it on [Apple’s new container tech](https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/), which creates isolated environments that prevent software from accessing any data on a machine beyond what it is explicitly authorized to use.

## Going viral

At 4 a.m., a couple of weeks after sharing it on Hacker News, his phone started ringing non-stop. A friend had seen Karpathy’s post and was urging Cohen to wake up and start tweeting, which he did, setting off a [public discussion](https://x.com/Gavriel_Cohen/status/2025047085838454973) with the well-known AI researcher.  

Attention to NanoClaw followed like a landslide. More [tweets](https://x.com/search?q=nanoclaw&src=typed_query), [YouTube reviews from programmers](https://www.youtube.com/@NanoClaw), and [news stories](https://venturebeat.com/orchestration/nanoclaw-solves-one-of-openclaws-biggest-security-issues-and-its-already). A domain squatter even snagged a NanoClaw website URL. The correct one is [nanoclaw.dev.](https://nanoclaw.dev/) 

Then Oleg Šelajev, a developer who works for Docker reached out. Šelajev saw the buzz and modified NanoClaw to replace Apple’s container technology with Docker’s competing alternative, Sandboxes.

Cohen had no hesitation about pushing out support for Sandboxes as part of the main NanoClaw project. “This is no longer my own personal agent that I’m running on my Mac Mini,” he recalled thinking. “This now has a community around it. There are thousands of people using it. Yeah, I said, I’m going to move over to the standard.” 

For all the changes these weeks have brought Cohen and his brother Lazer, now CEO and president of NanoCo, respectively, one area still needs to be figured out: how NanoCo will make money. 

NanoClaw is free and open source and, as these things go, the Cohens vow it always will be. They know they would be strung up as villains if they ever betrayed the open source community by changing that. Currently the Cohens are living on a friends-and-family fundraising round, they said.  

While they are cautious about announcing their commercial plans — in large part because they haven’t had a chance to fully formulate them — VCs are already calling, they say. 

The game plan is to build a fully supported commercial product with services including so-called forward-deployed engineers — specialists embedded directly with client companies to help them build and manage their systems. This will likely focus on assisting companies in building and maintaining secure agents. That is, however, a crowded field growing more crowded by the hour. 

But given the giant community of developers that NanoClaw just unlocked with Docker, we’re sure to hear more about this soon.

_Pictured above from left to right, Lazer and Gavriel Cohen._
