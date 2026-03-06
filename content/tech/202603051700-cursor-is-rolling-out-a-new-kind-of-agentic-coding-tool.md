---
title: "Cursor is rolling out a new kind of agentic coding tool"
source: "Russell Brandom"
url: "https://techcrunch.com/2026/03/05/cursor-is-rolling-out-a-new-system-for-agentic-coding/"
published: "2026-03-05T17:00:00.000Z"
category: "tech"
summary: "Called Automations, the new system gives users a way to automatically launch agents within their coding environment, triggered by a new addition to the codebase, a Slack message, or a simple timer."
---
As agentic coding spreads, the working life of a software engineer has become dazzlingly complex. A single engineer might oversee dozens of coding agents at once, launching and guiding different processes as necessary.

It’s a lot to keep track of, and human engineers’ attention has quickly become the limiting resource.

Cursor launched a new tool Thursday aimed at keeping that chaos in check. Called Automations, the new system gives users a way to automatically launch agents within their coding environment, triggered by a new addition to the codebase, a Slack message, or a simple timer. As Cursor describes it, it’s a way to review and maintain all the new code created by agentic tools — without tracking dozens of agents at once.

At the most basic level, Automations are a way for engineers to break out of the “prompt-and-monitor” dynamic that defines most agent-based engineering. Instead of launching agents with a human prompt, Cursor’s Automation framework lets you launch agents automatically — and loop humans in whenever they’re needed.

“It’s not that humans are completely out of the picture,” Jonas Nelle, Cursor’s engineering chief for asynchronous agents, told TechCrunch in an interview. ”It’s that they aren’t always initiating. They’re called in at the right points in this conveyor belt.”

One early example is [Bugbot](https://cursor.com/docs/bugbot), a long-standing Cursor feature that the team sees as a predecessor to the broader Automation system. The Bugbot system is triggered every time an engineer makes an addition to the codebase and reviews the new code for bugs and other issues. Using Automations, Cursor has been able to expand that system to more involved security audits and more thorough reviews.

“This idea of thinking harder, spending more tokens to find harder issues, has been really valuable,” said  engineering lead Josh Ma.

Techcrunch event

San Francisco, CA | October 13-15, 2026

Cursor estimates that it runs hundreds of automations per hour, reaching far beyond simple code review. The system is also used for incident response, with PagerDuty incidents initiating an agent that can immediately query server logs through an MCP connection. A separate automation offers weekly summaries of changes to the codebase on Cursor’s company Slack.

“In the abstract, anything that an automation kicks off, a human could have also kicked off,” said Nelle. “But by making it automatic, you change the types of tasks that models can usefully do in a codebase.”

The new system comes amid intense competition in the agentic coding space, with both [OpenAI](https://techcrunch.com/2026/02/12/a-new-version-of-openais-codex-is-powered-by-a-new-dedicated-chip/) and [Anthropic](https://techcrunch.com/2026/03/03/claude-code-rolls-out-a-voice-mode-capability/) having made significant updates to their agentic coding tools in the past month. 

[Ramp data](https://ramp.com/vendors/cursor) shows Cursor’s market share holding steady since May, with roughly 25% of generative AI clients subscribing to Cursor in some capacity.

Still, the overall growth of the agentic coding space has kept the company’s revenue increasing at a stunning pace. [Earlier this week](https://www.bloomberg.com/news/articles/2026-03-02/cursor-recurring-revenue-doubles-in-three-months-to-2-billion), Bloomberg reported that Cursor’s annual revenue had grown to more than $2 billion, doubling over the past three months.

Russell Brandom has been covering the tech industry since 2012, with a focus on platform policy and emerging technologies. He previously worked at The Verge and Rest of World, and has written for Wired, The Awl and MIT’s Technology Review. He can be reached at russell.brandom@techcrunch.com or on Signal at 412-401-5489.

[View Bio](https://techcrunch.com/author/russell-brandom/)
