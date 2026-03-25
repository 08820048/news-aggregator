---
title: "Anthropic hands Claude Code more control, but keeps it on a leash"
source: "Rebecca Bellan"
url: "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/"
published: "2026-03-24T21:00:30.000Z"
category: "tech"
summary: "Anthropic’s new auto mode for Claude Code lets AI execute tasks with fewer approvals, reflecting a broader shift toward more autonomous tools that balance speed with safety through built-in safeguards."
---
![Anthropic](https://techcrunch.com/wp-content/uploads/2026/01/anthropic-image-jagmeet-singh-techcrunch.jpg?w=1024)

**Image Credits:**Jagmeet Singh / TechCrunch

2:00 PM PDT · March 24, 2026

For developers using AI, “vibe coding” right now comes down to babysitting every action or risking letting the model run unchecked. Anthropic [says](https://claude.com/blog/auto-mode) its latest update to Claude aims to eliminate that choice by letting the AI decide which actions are safe to take on its own — with some limits.  

The move reflects a broader shift across the industry, as AI tools are increasingly designed to act without waiting for human approval. The challenge is balancing speed with control: too many guardrails slows things down, while too few can make systems risky and unpredictable. Anthropic’s new “auto mode,” now in research preview — meaning it’s available for testing but not yet a finished product — is its latest attempt to thread that needle. 

Auto mode uses AI safeguards to review each action before it runs, checking for risky behavior the user didn’t request and for signs of prompt injection — a type of attack where malicious instructions are hidden in content that the AI is processing, causing it to take unintended actions. Any safe actions will proceed automatically, while the risky ones get blocked.

It’s essentially an extension of Claude Code’s existing “dangerously-skip-permissions” command, which hands all decision-making to the AI, but with a safety layer added on top.

The feature builds on a wave of autonomous coding tools from companies like GitHub and OpenAI, which can execute tasks on a developer’s behalf. But it takes it a step further by shifting the decision of when to ask for permission from the user to the AI itself. 

Anthropic hasn’t detailed the specific criteria its safety layer uses to distinguish safe actions from risky ones — something developers will likely want to understand better before adopting the feature widely. (TechCrunch has reached out to the company for more information on this front.)

Auto mode comes off the back of Anthropic’s launch of [Claude Code Review](https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/), its automatic code reviewer designed to catch bugs before they hit the codebase, and [Dispatch for Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork), which allows users to send tasks to AI agents to handle work on their behalf.  

Techcrunch event

San Francisco, CA | October 13-15, 2026

Auto mode will roll out to Enterprise and API users in the coming days. The company says it currently only works with Claude Sonnet 4.6 and Opus 4.6, and recommends using the new feature in “isolated environments” — sandboxed setups that are kept separate from production systems, limiting the potential damage if something goes wrong.

Topics

Rebecca Bellan is a senior reporter at TechCrunch where she covers the business, policy, and emerging trends shaping artificial intelligence. Her work has also appeared in Forbes, Bloomberg, The Atlantic, The Daily Beast, and other publications.

You can contact or verify outreach from Rebecca by emailing [rebecca.bellan@techcrunch.com](mailto:rebecca.bellan@techcrunch.com) or via encrypted message at rebeccabellan.491 on Signal.

[View Bio](https://techcrunch.com/author/rebecca-bellan/)
