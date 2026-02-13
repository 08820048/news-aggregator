---
title: "OpenAI sidesteps Nvidia with unusually fast coding model on plate-sized chips"
source: "
                    Benj Edwards
                "
url: "https://arstechnica.com/ai/2026/02/openai-sidesteps-nvidia-with-unusually-fast-coding-model-on-plate-sized-chips/"
published: "2026-02-12T22:56:02.000Z"
category: "tech"
summary: "OpenAI's new GPT‑5.3‑Codex‑Spark is 15 times faster at coding than its predecessor."
---
But 1,000 tokens per second is actually modest by Cerebras standards. The company has [measured](https://www.cerebras.ai/blog/cerebras-inference-3x-faster) 2,100 tokens per second on Llama 3.1 70B and [reported](https://insidehpc.com/2025/08/cerebras-reports-3000-tokens-per-second-inference-on-openai-gpt-oss-120b-model/) 3,000 tokens per second on OpenAI’s own open-weight gpt-oss-120B model, suggesting that Codex-Spark’s comparatively lower speed reflects the overhead of a larger or more complex model.

AI coding agents have had a [breakout year](https://arstechnica.com/information-technology/2026/01/10-things-i-learned-from-burning-myself-out-with-ai-coding-agents/), with tools like [OpenAI’s Codex](https://arstechnica.com/ai/2026/01/openai-spills-technical-details-about-how-its-ai-coding-agent-works/) and Anthropic’s [Claude Code](https://arstechnica.com/ai/2026/02/sixteen-claude-ai-agents-working-together-created-a-new-c-compiler/) reaching a new level of usefulness for rapidly building prototypes, interfaces, and boilerplate code. OpenAI, Google, and Anthropic have all been racing to ship more capable coding agents, and latency has become what separates the winners; a model that codes faster lets a developer iterate faster.

With fierce competition from Anthropic, OpenAI has been iterating on its Codex line at a rapid rate, [releasing](https://arstechnica.com/information-technology/2025/12/openai-releases-gpt-5-2-after-code-red-google-threat-alert/) GPT-5.2 in December after CEO Sam Altman issued an internal “code red” memo about competitive pressure from Google, then shipping GPT-5.3-Codex just days ago.

## Diversifying away from Nvidia

Spark’s deeper hardware story may be more consequential than its benchmark scores. The model runs on Cerebras’ Wafer Scale Engine 3, a chip the size of a dinner plate that Cerebras has [built](https://arstechnica.com/information-technology/2022/11/hungry-for-ai-new-supercomputer-contains-16-dinner-plate-size-chips/) its business around since at least 2022. OpenAI and Cerebras [announced](https://techcrunch.com/2026/02/12/a-new-version-of-openais-codex-is-powered-by-a-new-dedicated-chip/) their partnership in January, and Codex-Spark is the first product to come out of it.

OpenAI has spent the past year systematically reducing its dependence on Nvidia. The company [signed](https://arstechnica.com/ai/2025/10/amd-wins-massive-ai-chip-deal-from-openai-with-stock-sweetener/) a massive multi-year deal with AMD in October 2025, [struck](https://arstechnica.com/ai/2025/11/openai-signs-massive-ai-compute-deal-with-amazon/) a $38 billion cloud computing agreement with Amazon in November, and has been [designing](https://arstechnica.com/ai/2025/02/openais-secret-weapon-against-nvidia-dependence-takes-shape/) its own custom AI chip for eventual fabrication by TSMC.

Meanwhile, a planned $100 billion infrastructure deal with Nvidia has [fizzled](https://arstechnica.com/information-technology/2026/02/five-months-later-nvidias-100-billion-openai-investment-plan-has-fizzled-out/) so far, though Nvidia has since committed to a $20 billion investment. Reuters [reported](https://arstechnica.com/information-technology/2026/02/five-months-later-nvidias-100-billion-openai-investment-plan-has-fizzled-out/) that OpenAI grew unsatisfied with the speed of some Nvidia chips for inference tasks, which is exactly the kind of workload that OpenAI designed Codex-Spark for.

Regardless of which chip is under the hood, speed matters, though it may come at the cost of accuracy. For developers who spend their days inside a code editor waiting for AI suggestions, 1,000 tokens per second may feel less like carefully piloting a jigsaw and more like running a rip saw. Just watch what you’re cutting.
