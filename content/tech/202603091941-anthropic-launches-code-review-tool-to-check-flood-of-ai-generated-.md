---
title: "Anthropic launches code review tool to check flood of AI-generated code"
source: "Rebecca Bellan"
url: "https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/"
published: "2026-03-09T19:41:34.000Z"
category: "tech"
summary: "Anthropic launched Code Review in Claude Code, a multi-agent system that automatically analyzes AI-generated code, flags logic errors, and helps enterprise developers manage the growing volume of code produced with AI."
---
When it comes to coding, peer feedback is crucial for catching bugs early, maintaining consistency across a codebase, and improving overall software quality. 

The rise of “vibe coding” — using AI tools that take instructions given in plain language and quickly generate large amounts of code — has changed how developers work. While these tools have sped up development, they have also introduced new bugs, security risks, and poorly understood code. 

Anthropic’s solution is an AI reviewer designed to catch bugs before they make it into the software’s codebase. The new product, called Code Review, launched Monday in [Claude Code](https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/).

“We’ve seen a lot of growth in Claude Code, especially within the enterprise, and one of the questions that we keep getting from enterprise leaders is: Now that Claude Code is putting up a bunch of pull requests, how do I make sure that those get reviewed in an efficient manner?” Cat Wu, Anthropic’s head of product, told TechCrunch. 

Pull requests are a mechanism that developers use to submit code changes for review before those changes make it into the software. Wu said [Claude Code](https://techcrunch.com/2025/12/08/claude-code-is-coming-to-slack-and-thats-a-bigger-deal-than-it-sounds/) has dramatically increased code output, which has increased pull request reviews that have caused a bottleneck to shipping code.

“Code Review is our answer to that,” Wu said.

Anthropic’s launch of Code Review — arriving first to Claude for Teams and Claude for Enterprise customers in research preview — comes at a pivotal moment for the company. 

Techcrunch event

San Francisco, CA | October 13-15, 2026

On Monday, Anthropic [filed two lawsuits](https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/) against the Department of Defense in response to the agency’s designation of Anthropic as a supply chain risk. The dispute will likely see Anthropic leaning more heavily on its booming enterprise business, which has seen subscriptions quadruple since the start of the year. [Claude Code](https://techcrunch.com/2026/03/03/claude-code-rolls-out-a-voice-mode-capability/)’s run-rate revenue has surpassed $2.5 billion since launch, according to the company.

“This product is very much targeted towards our larger scale enterprise users, so companies like Uber, Salesforce, Accenture, who already use Claude Code and now want help with the sheer amount of \[pull requests\] that it’s helping produce,” Wu said.

She added that developer leads can turn on Code Review to run on default for every engineer on the team. Once enabled, it integrates with GitHub and automatically analyzes pull requests, leaving comments directly on the code explaining potential issues and suggested fixes. 

The focus is on fixing logical errors over style, Wu said. 

“This is really important because a lot of developers have seen AI automated feedback before, and they get annoyed when it’s not immediately actionable,” Wu said. “We decided we’re going to focus purely on logic errors. This way we’re catching the highest priority things to fix.”

The AI explains its reasoning step by step, outlining what it thinks the issue is, why it might be problematic, and how it can potentially be fixed. The system will label the severity of issues using colors: red for highest severity, yellow for potential problems worth reviewing, and purple for issues tied to preexisting code or historical bugs. 

Wu said it does this quickly and efficiently by relying on multiple agents working in parallel, with each agent examining the codebase from a different perspective or dimension. A final agent aggregates and ranks the findings, removing duplicates and prioritizing what’s most important. 

The tool provides a light [security analysis](https://techcrunch.com/2026/03/06/anthropics-claude-found-22-vulnerabilities-in-firefox-over-two-weeks/), and engineering leads can customize additional checks based on internal best practices. Wu said Anthropic’s more recently launched [Claude Code Security](https://www.anthropic.com/news/claude-code-security) provides a deeper security analysis. 

The multi-agent architecture means this can be a resource-intensive product, Wu said. Similar to other AI services, pricing is token-based, and the cost varies depending on code complexity — though Wu estimated each review would cost $15 to $25 on average. She added that it’s a premium experience, and a necessary one as AI tools generate more and more code. 

“\[Code Review\] is something that’s coming from an insane amount of market pull,” Wu said. “As engineers develop with Claude Code, they’re seeing the friction to creating a new feature \[decrease\], and they’re seeing a much higher demand for code review. So we’re hopeful that with this, we’ll enable enterprises to build faster than they ever could before, and with much fewer bugs than they ever had before.”

Rebecca Bellan is a senior reporter at TechCrunch where she covers the business, policy, and emerging trends shaping artificial intelligence. Her work has also appeared in Forbes, Bloomberg, The Atlantic, The Daily Beast, and other publications.

You can contact or verify outreach from Rebecca by emailing [rebecca.bellan@techcrunch.com](mailto:rebecca.bellan@techcrunch.com) or via encrypted message at rebeccabellan.491 on Signal.

[View Bio](https://techcrunch.com/author/rebecca-bellan/)
