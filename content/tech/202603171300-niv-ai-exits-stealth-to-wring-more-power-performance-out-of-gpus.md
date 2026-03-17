---
title: "Niv-AI exits stealth to wring more power performance out of GPUs"
source: "Tim Fernholz"
url: "https://techcrunch.com/2026/03/17/niv-ai-exits-stealth-to-wring-more-power-performance-out-of-gpus/"
published: "2026-03-17T13:00:00.000Z"
category: "tech"
summary: "The company raised $12 million in seed funding to measure and manage GPU power surges."
---
Electricity is a key raw material for artificial intelligence, but new processing techniques outstrip the ability of data center operators to manage their relationship with the power grid, forcing them to throttle down by as much as 30%.

“There is so much power squandered in these AI factories,” Nvidia CEO Jensen Huang said during a keynote speech at the company’s annual GTC customer conference. “Every unused watt is revenue lost,” the company proclaimed during the annual presentation.

Today, start-up Niv-AI has emerged from stealth with $12 million in seed funding to solve this problem by precisely measuring GPU power use with new sensors and developing tools to manage it more efficiently.

The Tel Aviv-based start-up was founded last year by CEO Tomer Timor and CTO Edward Kizis, and is backed by Glilot Capital, Grove Ventures, Arc VC, Encoded VC, Leap Forward, and Aurora Capital Partners. The company declined to share its valuation.

As frontier labs operate thousands of GPUs in concert to train and run advanced models, there are frequent, millisecond-scale power demand surges as the processors switch between computation tasks and communicating with other GPUs.

These surges make it difficult for data centers to manage the power they draw from the grid. To avoid being left without sufficient electricity, data centers pay for temporary energy storage to cover surges, or throttle their GPU usage. Both cases reduce the return on investments in expensive chips.

“We just can’t continue building data centers the way we build them now,” Lior Handlesman, a partner at Grove Ventures who sits on Niv’s board.

Techcrunch event

San Francisco, CA | October 13-15, 2026

The first step in Niv’s roadmap understanding what’s going on; the company is now deploying rack-level sensors that detect power usage at the millisecond level on GPUs that it owns and alongside design partners. The goal is to understand the specific power profiles of different deep learning tasks, and develop mitigation techniques that allow data centers to unlock more of their existing capacity.

Naturally, the engineers expect to build an AI model on the data they collect, with the goal of training it to predict and synchronize power loads across the data center—a “copilot” for data center engineers.

Niv expects to have an operational system in a handful of US data centers in the next six to eight months. It’s an attractive idea as hyperscalers trying to build new data centers face difficult land-use and supply chain hiccups. The founders see their ultimate product as a missing “intelligence layer” between data centers and the electrical grid.

“The grid is actually afraid of the data center consuming too much power at a specific time,” Timor told TechCrunch. “The problem we’re looking at is a problem with two sides of the rope. One is to try to help the data centers utilize more GPUs, and hopefully make more of the power that they’re already paying for. On the other hand, you can also create much more responsible power profiles in between the data centers and the grid.”

Tim Fernholz is a journalist who writes about technology, finance and public policy. He has closely covered the rise of the private space industry and is the author of _Rocket Billionaires: Elon Musk, Jeff Bezos and the New Space Race._ Formerly, he was a senior reporter at Quartz, the global business news site, for more than a decade, and began his career as a political reporter in Washington, D.C. You can contact or verify outreach from Tim by emailing tim.fernholz@techcrunch.com or via an encrypted message to tim\_fernholz.21 on Signal.

[View Bio](https://techcrunch.com/author/tim-fernholz/)
