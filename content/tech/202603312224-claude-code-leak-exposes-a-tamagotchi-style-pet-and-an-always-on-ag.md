---
title: "Claude Code leak exposes a Tamagotchi-style ‘pet’ and an always-on agent"
source: "Emma Roth"
url: "https://www.theverge.com/ai-artificial-intelligence/904776/anthropic-claude-source-code-leak"
published: "2026-03-31T22:24:19.000Z"
category: "tech"
summary: "After Anthropic released Claude Code's 2.1.88 update, users quickly discovered that it contained a package with a source map file containing its TypeScript codebase, with one person on X calling attention to the leak and posting a file containing the code. The leaked data reportedly contains more than 512,000 lines of code and provides a look into the inner workings of the AI-powered coding tool, as reported earlier by Ars Technica and VentureBeat. Users who have dug into the code claim to have uncovered upcoming features, Anthropic's instructions for the AI bot, and insight into its \"memory\" architecture. Some things spotted by users inclu … Read the full story at The Verge."
---
[![Emma Roth](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/author_profile_images/195810/EMMA_ROTH.0.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=96)](https://www.theverge.com/authors/emma-roth)

Emma Roth

is a news writer who covers the streaming wars, consumer tech, crypto, social media, and much more. Previously, she was a writer and editor at MUO.

After Anthropic released Claude Code’s [2.1.88 update](https://x.com/ClaudeCodeLog/status/2038773096379748786?s=20), users quickly discovered that it contained a package with a source map file containing its TypeScript codebase, with one [person on X](https://x.com/Fried_rice/status/2038894956459290963?s=20) calling attention to the leak and posting a file containing the code. The leaked data reportedly contains more than 512,000 lines of code and provides a look into the inner workings of the AI-powered coding tool, as [reported earlier by _Ars Technica_](https://arstechnica.com/ai/2026/03/entire-claude-code-cli-source-code-leaks-thanks-to-exposed-map-file/) and [_VentureBeat_](https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know).

Users [who have dug into](https://x.com/vineetwts/status/2038911973975601275?s=20) the code claim to have uncovered upcoming features, Anthropic’s [instructions for the AI bot](https://x.com/vedolos/status/2038977464840630611?s=20), and insight into its [”memory” architecture](https://x.com/himanshustwts/status/2038924027411222533). Some things spotted by users include a Tamagotchi-like pet that “sits beside your input box and reacts to your coding,” according to [a post on Reddit](https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/), along [with a “KAIROS” feature](https://x.com/itsolelehmann/status/2039018963611627545?s=20) that could enable an always-on background agent. Users [also found](https://x.com/vedolos/status/2038948552592994528?s=20) a comment from one of Anthropic’s coders, who admits at one point that the “memoization here increases complexity by a lot, and im not sure it really improves performance.”

Though Anthropic later fixed the issue, that didn’t stop users from copying the code to a [repository on GitHub](https://github.com/instructkr/claw-code), which has since amassed more than 50,000 forks (or copies of the repository). Anthropic launched Claude Code in February of 2025, and the tool [picked up more steam](https://www.theverge.com/report/874308/anthropic-claude-code-opus-hype-moment) after [adding agentic capabilities](https://www.theverge.com/ai-artificial-intelligence/800868/anthropic-claude-skills-ai-agents) that perform tasks on a user’s behalf.

“Earlier today, a Claude Code release included some internal source code. No sensitive customer data or credentials were involved or exposed,” Anthropic spokesperson Christopher Nulty says in an emailed statement to _The Verge_. “This was a release packaging issue caused by human error, not a security breach. We’re rolling out measures to prevent this from happening again.”

Arun Chandrasekaran, an AI analyst at Gartner, tells _The Verge_ that while the Claude Code leak poses “risks such as providing bad actors with possible outlets to bypass guardrails,” its long-term impact could be limited to serving as a “call for action for Anthropic to invest more in processes and tools for better operational maturity.”

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Emma Roth
