---
title: "Guide Labs debuts a new kind of interpretable LLM"
source: "Tim Fernholz"
url: "https://techcrunch.com/2026/02/23/guide-labs-debuts-a-new-kind-of-interpretable-llm/"
published: "2026-02-23T17:53:28.000Z"
category: "tech"
summary: "The company open-sourced an 8 billion parameter LLM, Steerling-8B, trained with a new architecture designed to make its actions easily interpretable."
---
The challenge of wrangling a deep learning model is often understanding why it does what it does: Whether it’s xAI’s repeated struggle sessions to fine-tune Grok’s odd politics, ChatGPT’s struggles with sycophancy, or run-of-the-mill hallucinations, plumbing through a neural network with billions of parameters isn’t easy.

Guide Labs, a San Francisco start-up founded by CEO Julius Adebayo and chief science officer Aya Abdelsalam Ismail, is offering an answer to that problem today. On Monday, the company open-sourced an 8 billion parameter LLM, [Steerling-8B](https://github.com/guidelabs/steerling), trained with a new architecture designed to make its actions easily interpretable: Every token produced by the model can be traced back to its origins in the LLM’s training data.

That can as a simple as determining the reference materials for facts cited by the model, or as complex as understanding the model’s understanding of humor or gender.

“If I have a trillion ways to encode gender, and I encode it in 1 billion of the 1 trillion things that I have, you have to make sure you find all those 1 billion things that I’ve encoded, and then you have to be able to reliably turn that on, turn them off,” Adebayo told TechCrunch. “You can do it with current models, but it’s very fragile … It’s sort of one of the holy grail questions.”

Adebayo began this work while earning his PhD at MIT, co-authoring a widely cited [2018 paper](https://arxiv.org/abs/1810.03292) that showed existing methods of understanding deep learning models were not reliable. That work ultimately led to the creation of a new way of building LLMs: Developers insert a concept layer in the model that buckets data into traceable categories. This requires more up front data annotation, but by using other AI models to help, they were able to train this model as their largest proof of concept yet.

“The kind of interpretability people do is…neuroscience on a model, and we flip that,” Adebayo said. “What we do is actually engineer the model from the ground up so that you don’t need to do neuroscience.”

![](https://techcrunch.com/wp-content/uploads/2026/02/Guide-Labs-Architecture.png?w=680)

**Image Credits:**Guide Labs

One concern with this approach is that it might eliminate some of the emergent behaviors that make LLMs so intriguing: Their ability to generalize in new ways about things they haven’t been trained on yet. Adebayo says that still happens in his company’s model: His team tracks what they call “discovered concepts” that the model discovered on its own, like quantum computing.

Techcrunch event

Boston, MA | June 9, 2026

Adebayo argues this interpretable architecture will be something everyone needs. For consumer-facing LLMs, these techniques should allow model builders to do things like block the use of copyrighted materials, or better control outputs around subjects like violence or drug abuse. Regulated industries will require more controllable LLMs, for example in finance, where a model evaluating loan applicants needs to consider things like financial records but not race. There’s also a need for interpretability in scientific work, another area where Guide Labs has developed technology. Protein folding has been a big success for deep learning models, but scientists need more insight into why their software figured out promising combinations.

“This model demonstrates is that training interpretable models is no longer a sort of science; it’s now an engineering problem,” Adebayo said. “We figured out the science and we can scale them, and there is no reason why this kind of model wouldn’t match the performance of the frontier level models,” which have many more parameters.

Guide Labs says that Steerling-8B can achieved 90% of the capability of existing models, but uses less training data, thanks to its novel architecture. The next step for the company, which emerged from Y Combinator and raised a $9 million seed round from Initialized Capital in November 2024, is to build a larger model and begin offering API and agentic access to users.

“The way we’re current training models is super primitive, and so democratizing inherent interpretability is actually going to be a long term good thing for our role within the human race,” Adebayo told TechCrunch. “As we’re going after these models that are going to be super intelligent, you don’t want something to be making decisions on your behalf that’s sort of mysterious to you.”

Tim Fernholz is a journalist who writes about technology, finance and public policy. He has closely covered the rise of the private space industry and is the author of _Rocket Billionaires: Elon Musk, Jeff Bezos and the New Space Race._ Formerly, he was a senior reporter at Quartz, the global business news site, for more than a decade, and began his career as a political reporter in Washington, D.C. You can contact or verify outreach from Tim by emailing tim.fernholz@techcrunch.com or via an encrypted message to tim\_fernholz.21 on Signal.

[View Bio](https://techcrunch.com/author/tim-fernholz/)
