---
title: "Running local models on Macs gets faster with Ollama's MLX support"
source: "
                    Samuel Axon
                "
url: "https://arstechnica.com/apple/2026/03/running-local-models-on-macs-gets-faster-with-ollamas-mlx-support/"
published: "2026-03-31T23:00:23.000Z"
category: "tech"
summary: "Apple Silicon Macs get a performance boost thanks to better unified memory usage."
---
Ollama, a runtime system for operating large language models on a local computer, has introduced support for Apple’s open source [MLX](https://opensource.apple.com/projects/mlx/) framework for machine learning. Additionally, Ollama says it has improved caching performance and now supports Nvidia’s [NVFP4](https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/) format for model compression, making for much more efficient memory usage in certain models.

Combined, these developments promise significantly improved performance on Macs with Apple Silicon chips (M1 or later)—and the timing couldn’t be better, as local models are starting to gain steam in ways they haven’t before outside researcher and hobbyist communities.

The recent runaway success of OpenClaw—which raced its way to over 300,000 stars [on GitHub](https://github.com/openclaw/openclaw), made headlines with experiments like [Moltbook](https://arstechnica.com/ai/2026/03/meta-acquires-moltbook-the-ai-agent-social-network/) and became an obsession in China [in particular](https://www.bloomberg.com/news/newsletters/2026-03-13/gripped-by-openclaw-china-runs-massive-risky-ai-experiment)—has many people experimenting with running models on their machines.

As developers get frustrated with rate limits and the high cost of top-tier subscriptions to tools like Claude Code or ChatGPT Codex, experimentation with local coding models has heated up. (Ollama also expanded Visual Studio Code integration recently.)

The new support is available in preview (in Ollama 0.19) and currently supports only one model—the [35 billion-parameter variant of Alibaba’s Qwen3.5](https://huggingface.co/Qwen/Qwen3.5-35B-A3B). Hardware requirements are intense by normal users’ standards. Users need an Apple Silicon-equipped Mac, sure, but they also need at least 32GB of RAM, according to [Ollama’s](https://ollama.com/blog/mlx) [announcement](https://ollama.com/blog/mlx).
