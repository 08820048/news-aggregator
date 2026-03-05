---
title: "OpenAI launches GPT-5.4 with Pro and Thinking versions"
source: "Russell Brandom"
url: "https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/"
published: "2026-03-05T18:00:15.000Z"
category: "tech"
summary: "GPT-5.4 is billed as \"our most capable and efficient frontier model for professional work.\""
---
On Thursday, [OpenAI released GPT-5.4](https://openai.com/index/introducing-gpt-5-4/), a new foundation model billed as “our most capable and efficient frontier model for professional work.” In addition to the standard version, GPT-5.4 is also available as a reasoning model (GPT-5.4 Thinking) or optimized for high performance (GPT-5.4 Pro).

The API version of the model will be available with context windows as large as 1 million tokens, by far the largest context window available from OpenAI.

OpenAI also emphasized improved token efficiency, saying GPT-5.4 was able to solve the same problems with significantly fewer tokens than its predecessor.

The new model comes with significantly improved benchmark results, including record scores in computer use benchmarks OSWorld-Verified and WebArena Verified. The new model also scored a record 83% on OpenAI’s GDPval test for knowledge work tasks.

GPT-5.4 also took the lead on [Mercor’s APEX-Agents benchmark](https://techcrunch.com/2026/01/22/are-ai-agents-ready-for-the-workplace-a-new-benchmark-raises-doubts/), designed to test professional skills in law and finance, according to a statement from Mercor CEO Brendan Foody.

“\[GPT-5.4\] excels at creating long-horizon deliverables such as slide decks, financial models, and legal analysis,” Foody said in the statement, “delivering top performance while running faster and at a lower cost than competitive frontier models.”

GPT-5.4 continues the company’s efforts to limit hallucinations and factual errors. OpenAI said the new model was 33% less likely to make errors in individual claims when compared to GPT 5.2, and overall responses were 18% less likely to contain errors.

Techcrunch event

San Francisco, CA | October 13-15, 2026

As part of the launch, OpenAI has reworked how the API version of GPT-5.4 manages tool calling, introducing a new system called Tool Search. Previously, system prompts would lay out definitions for all available tools when calling the model — a process that could consume a lot of tokens as the number of available tools grew. The new system allows models to look up tool definitions as needed, resulting in faster and cheaper requests in systems with many available tools.

OpenAI has also included [a new safety evaluation](https://openai.com/index/reasoning-models-chain-of-thought-controllability/) to test its models’ chain-of-thought, the running commentary given by the models to show thought process through multi-step tasks. AI safety researchers have long worried that reasoning models could misrepresent their chain-of-thought, and [testing shows](https://www.anthropic.com/research/reasoning-models-dont-say-think) it can happen under the right circumstances.

OpenAI’s new evaluation shows that deception is less likely to happen in the Thinking version of GPT-5.4, “suggesting that the model lacks the ability to hide its reasoning and that CoT monitoring remains an effective safety tool.”

Russell Brandom has been covering the tech industry since 2012, with a focus on platform policy and emerging technologies. He previously worked at The Verge and Rest of World, and has written for Wired, The Awl and MIT’s Technology Review. He can be reached at russell.brandom@techcrunch.com or on Signal at 412-401-5489.

[View Bio](https://techcrunch.com/author/russell-brandom/)
