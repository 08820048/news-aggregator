---
title: "Multiverse Computing pushes its compressed AI models into the mainstream"
source: "Anna Heim"
url: "https://techcrunch.com/2026/03/19/multiverse-computing-pushes-its-compressed-ai-models-into-the-mainstream/"
published: "2026-03-19T08:00:00.000Z"
category: "tech"
summary: "After compressing models from major AI labs including OpenAI, Meta, DeepSeek and Mistral AI, Multiverse Computing has launched both an app that showcases the capabilities of its compressed models and an API that makes them more widely available."
---
With private company defaults running at [upwards of 9.2%](https://www.reuters.com/business/us-private-credit-defaults-hit-record-92-2025-fitch-says-2026-03-06/) — the highest rate in years — VC firm Lux Capital recently advised companies relying on AI to get their compute capacity commitments [confirmed in writing](https://x.com/wolfejosh/status/2028891048462721040/photo/2). With financial instability rippling through the AI supply chain, Lux warned, a handshake agreement isn’t enough.

But there’s another option entirely, which is to stop relying on external compute infrastructure altogether. Smaller AI models that run directly on a user’s own device — no data center, no cloud provider, no counterparty risk — are getting good enough to be worth considering. And [Multiverse Computing](https://multiversecomputing.com/) is raising its hand.

The Spanish startup has so far kept a lower profile than some of its peers, but as demand for AI efficiency grows, this is changing. After compressing models from major AI labs including OpenAI, Meta, DeepSeek and Mistral AI, it has launched both an app that showcases the capabilities of its compressed models and an API portal — a gateway that lets developers access and build with those models — that makes them more widely available.

The [CompactifAI app](https://multiversecomputing.com/compactifai-app), which shares its name with Multiverse’s quantum-inspired compression technology, is an AI chat tool in the vein of ChatGPT or Mistral’s Le Chat. Ask a question, and the model answers. The difference is that Multiverse embedded Gilda, a model so small that it can run locally and offline, according to the company. 

![](https://techcrunch.com/wp-content/uploads/2026/03/CompactifAI-App-Multiverse-Computing.png?w=680)

For end users, this is a taste of AI on the edge, with data that doesn’t leave their devices and doesn’t require a connection. But there’s a caveat: their mobile devices must have enough RAM and storage. If they don’t — and many older iPhones won’t — the app switches back to cloud-based models via API. The routing between local and cloud processing is handled automatically by a system Multiverse has named Ash Nazg, whose name will ring a bell for Tolkien fans as it references the One Ring inscription in “The Lord of the Rings.” But when the app routes to the cloud, it loses its main privacy edge in the process.

These limitations mean that CompactifAI is not quite ready for mass customer adoption yet, although that may never have been the goal. According to data from Sensor Tower, the app had [fewer than 5,000 downloads](https://app.sensortower.com/overview/6749544702) in the past month.

The real target is businesses. Today, Multiverse is launching a [self-serve API portal](https://dashboard.compactif.ai/) that gives developers and enterprises direct access to its compressed models — no AWS Marketplace required.

Techcrunch event

San Francisco, CA | October 13-15, 2026

“The CompactifAI API portal \[now\] gives developers direct access to compressed models with the transparency and control needed to run them in production,” CEO Enrique Lizaso said in a statement.

Real-time usage monitoring is one of the key features of the API, and that’s no accident. Alongside the potential advantages of deploying on the edge, lower compute costs are one of the main reasons why enterprises are considering smaller models as an alternative to large language models (LLMs). 

It also helps that small models are less limited than they used to be. Earlier this week, Mistral updated its small model family with the [launch of Mistral Small 4](https://mistral.ai/fr/news/mistral-small-4), which it says is simultaneously optimized for general chat, coding, agentic tasks and reasoning. The French company also [released Forge](https://techcrunch.com/2026/03/17/mistral-forge-nvidia-gtc-build-your-own-ai-enterprise/), a system that lets enterprises build custom models, including small models for which they can pick the tradeoffs their use cases can best tolerate.

Multiverse’s recent results also suggest the gap with LLMs is narrowing. Its latest compressed model, [HyperNova 60B 2602](https://techcrunch.com/2026/02/24/spanish-soonicorn-multiverse-computing-releases-free-compressed-ai-model/), is built on gpt-oss-120b — an OpenAI model whose underlying code is publicly available. The company claims it now delivers [faster responses](https://multiversecomputing.com/papers/hypernova-60b-2602-same-intelligence-half-the-size-improved-tool-calling-capability) at lower cost than the original it was derived from, an advantage that matters particularly for agentic coding workflows, where AI autonomously completes complex, multi-step programming tasks.

Making models small enough to operate on mobile devices while still remaining useful is a big challenge. [Apple Intelligence](https://techcrunch.com/2025/09/09/apple-intelligence-everything-you-need-to-know-about-apples-ai-model-and-services/) sidestepped that issue by combining an on-device model and a cloud model. Multiverse’s CompactifAI app can also route requests to gpt-oss-120b via API, but its main goal is to showcase that local models like Gilda and its future replacements have advantages that go beyond cost savings.

For workers in critical fields, a model that can run locally and without connecting to the cloud offers more privacy and resilience. But the bigger value is in the business use cases this can unlock – for instance, embedding AI in drones, satellites, and other settings where connectivity can’t be taken for granted.

The company already serves more than 100 global customers including the Bank of Canada, Bosch and Iberdrola, but expanding its customer base could help it unlock more funding. After raising a [$215 million Series B](https://techcrunch.com/2025/06/12/multiverse-computing-raises-215m-for-tech-that-could-radically-slim-ai-costs/) last year, it is now [rumored to be raising a fresh €500 million funding round](https://www.bloomberg.com/news/articles/2026-02-10/ai-firm-multiverse-said-to-hit-1-5-billion-value-with-new-funds) at a valuation of more than €1.5 billion.

Anna Heim is a writer and editorial consultant.

You can contact or verify outreach from Anna by emailing annatechcrunch \[at\] gmail.com.

As a freelance reporter at TechCrunch since 2021, she has covered a large range of startup-related topics including AI, fintech & insurtech, SaaS & pricing, and global venture capital trends.

As of May 2025, her reporting for TechCrunch focuses on Europe’s most interesting startup stories.

Anna has moderated panels and conducted onstage interviews at industry events of all sizes, including major tech conferences such as TechCrunch Disrupt, 4YFN, South Summit, TNW Conference, VivaTech, and many more.

A former LATAM & Media Editor at The Next Web, startup founder and Sciences Po Paris alum, she’s fluent in multiple languages, including French, English, Spanish and Brazilian Portuguese.

[View Bio](https://techcrunch.com/author/anna-heim/)
