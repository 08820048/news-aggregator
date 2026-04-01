---
title: "Here's what that Claude Code source leak reveals about Anthropic's plans"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/ai/2026/04/heres-what-that-claude-code-source-leak-reveals-about-anthropics-plans/"
published: "2026-04-01T20:04:04.000Z"
category: "tech"
summary: "A persistent agent, stealth \"Undercover\" mode, and... a virtual assistant named Buddy?"
---
Yesterday’s [surprise leak of the source code for Anthropic’s Claude Code](https://arstechnica.com/ai/2026/03/entire-claude-code-cli-source-code-leaks-thanks-to-exposed-map-file/) revealed a lot about the vibe-coding scaffolding the company has built around its proprietary Claude model. But observers digging through over 512,000 lines of code across more than 2,000 files have also discovered references to disabled, hidden, or inactive features that provide a peek into the potential roadmap for future features.

Chief among these features is [Kairos](https://github.com/zackautocracy/claude-code/blob/4b9d30f7953273e567a18eb819f4eddd45fcc877/src/memdir/memdir.ts#L319), a persistent daemon that can operate in the background even when the Claude Code terminal window is closed. The system would use periodic “<tick>” prompts to regularly review whether new actions are needed and [a “PROACTIVE” flag](https://github.com/zackautocracy/claude-code/blob/4b9d30f7953273e567a18eb819f4eddd45fcc877/src/tools/BriefTool/BriefTool.ts#L34) for “surfacing something the user hasn’t asked for and needs to see now.”

Kairos makes use of a file-based “memory system” designed to allow for persistent operation across user sessions. [A prompt](https://github.com/zackautocracy/claude-code/blob/main/src/memdir/teamMemPrompts.ts) hidden behind a disabled “KAIROS” flag in the code explains that the system is designed to “have a complete picture of who the user is, how they’d like to collaborate with you, what behaviors to avoid or repeat, and the context behind the work the user gives you.”

To organize and consolidate this memory system across sessions, the Claude Code source code includes references to [an evocatively named AutoDream system](https://github.com/zackautocracy/claude-code/tree/main/src/services/autoDream). When a user goes idle or [manually tells Anthropic to sleep](https://github.com/zackautocracy/claude-code/blob/main/src/tools/SleepTool/prompt.ts) at the end of a session, the AutoDream system would [tell Claude Code](https://github.com/zackautocracy/claude-code/blob/main/src/services/autoDream/consolidationPrompt.ts) that “you are performing a dream—a reflective pass over your memory files.”

This prompt describing this AI “dream” process asks Claude Code to scan the day’s transcripts for “new information worth persisting,” consolidate that new information in a way that avoids “near-duplicates” and “contradictions,” and prune existing memories that are overly verbose or newly outdated. Claude Code would also be instructed to watch out for “existing memories that drifted,” an issue we’ve seen previously [when Claude users have tried to graft memory systems onto their harnesses](https://arstechnica.com/ai/2025/03/why-anthropics-claude-still-hasnt-beaten-pokemon/). The overall goal would be to “synthesize what you’ve learned recently into durable, well-organized memories so that future sessions can orient quickly,” according to the prompt.
