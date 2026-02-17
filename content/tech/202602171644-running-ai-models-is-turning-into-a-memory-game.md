---
title: "Running AI models is turning into a memory game"
source: "Russell Brandom"
url: "https://techcrunch.com/2026/02/17/running-ai-models-is-turning-into-a-memory-game/"
published: "2026-02-17T16:44:14.000Z"
category: "tech"
summary: "When we talk about the cost of AI infrastructure, the focus is usually on Nvidia and GPUs -- but memory is an increasingly important part of the picture."
---
When we talk about the cost of AI infrastructure, the focus is usually on Nvidia and GPUs — but memory is an increasingly important part of the picture. As hyperscalers prepare to build out billions of dollars worth of new data centers, the price for DRAM chips has jumped [roughly 7x in the last year](https://datatrack.trendforce.com/Chart/content/4694/mainstream-dram-spot-price).

At the same time, there’s a growing discipline in orchestrating all that memory to make sure the right data gets to the right agent at the right time. The companies that master it will be able to make the same queries with fewer tokens, which can be the difference between folding and staying in business.

[Semiconductor analyst Dan O’Laughlin](http://Doug O'Laughlin) has an interesting look at the importance of memory chips on his Substack, where he talks with Val Bercovici, chief AI officer at Weka. They’re both semiconductor guys, so the focus is more on the chips than the broader architecture; the implications for AI software are pretty significant too.

I was particularly struck by this passage, in which Bercovici looks at the growing complexity of [Anthropic’s prompt-caching documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching):

> The tell is if we go to Anthropic’s prompt caching pricing page. It started off as a very simple page six or seven months ago, especially as Claude Code was launching — just “use caching, it’s cheaper.” Now it’s an encyclopedia of advice on exactly how many cache writes to pre-buy. You’ve got 5-minute tiers, which are very common across the industry, or 1-hour tiers — and nothing above. That’s a really important tell. Then of course you’ve got all sorts of arbitrage opportunities around the pricing for cache reads based on how many cache writes you’ve pre-purchased.

The question here is how long Claude holds your prompt in cached memory: you can pay for a 5-minute window, or pay more for an hour-long window. It’s much cheaper to draw on data that’s still in the cache, so if you manage it right, you can save an awful lot. There is a catch though: every new bit of data you add to the query may bump something else out of the cache window.

This is complex stuff, but the upshot is simple enough: Managing memory in AI models is going to be a huge part of AI going forward. Companies that do it well are going to rise to the top.

And there is plenty of progress to be made in this new field. Back in October, I covered [a startup called TensorMesh](https://techcrunch.com/2025/10/23/tensormesh-raises-4-5m-to-squeeze-more-inference-out-of-ai-server-loads/) that was working on one layer in the stack known as cache-optimization.

Techcrunch event

Boston, MA | June 23, 2026

Opportunities exist in other parts of the stack. For instance, lower down the stack, there’s the question of how data centers are using the different types of memory they have. (The interview includes a nice discussion of when DRAM chips are used instead of HBM, although it’s pretty deep in the hardware weeds.) Higher up the stack, end users are figuring out how to structure their model swarms to take advantage of the shared cache.

As companies get better at memory orchestration, they’ll use fewer tokens and inference will get cheaper. Meanwhile, [models are getting more efficient at processing each token](https://ramp.com/velocity/ai-is-getting-cheaper), pushing the cost down still further. As server costs drop, a lot of applications that don’t seem viable now will start to edge into profitability.

Russell Brandom has been covering the tech industry since 2012, with a focus on platform policy and emerging technologies. He previously worked at The Verge and Rest of World, and has written for Wired, The Awl and MIT’s Technology Review. He can be reached at russell.brandom@techcrunch.com or on Signal at 412-401-5489.

[View Bio](https://techcrunch.com/author/russell-brandom/)
