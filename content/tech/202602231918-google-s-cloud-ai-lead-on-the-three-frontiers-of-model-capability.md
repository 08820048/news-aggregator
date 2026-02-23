---
title: "Google’s Cloud AI lead on the three frontiers of model capability"
source: "Russell Brandom"
url: "https://techcrunch.com/2026/02/23/googles-cloud-ai-lead-on-the-three-frontiers-of-model-capability/"
published: "2026-02-23T19:18:42.000Z"
category: "tech"
summary: "AI models are pushing against three frontiers at once: raw intelligence, response time, and a third quality you might call \"extensibility.\""
---
As a product VP at Google Cloud, Michael Gerstenhaber works mostly on Vertex, the company’s unified platform for deploying enterprise AI. It gives him a high-level view of how companies are actually using AI models, and what still needs to be done to unleash the potential of agentic AI.

When I spoke with Michael, I was particularly struck by one idea I hadn’t heard before. As he put it, AI models are pushing against three frontiers at once: raw intelligence, response time, and a third quality that has less to do with raw capability than with cost — whether a model can be deployed cheaply enough to run at massive, unpredictable scale. It’s a new way of thinking about model capabilities, and a particularly valuable one for anyone trying to push frontier models in a new direction.

_This interview has been edited for length and clarity._

**Why don’t you start by walking us through your experience in AI so far, and what you do at Google?**

I’ve been in AI for about two years now. I was at Anthropic for a year and a half, I’ve been at Google almost half a year now. I run Vertex, Google’s developer platform. Most of our customers are engineers building their own applications. They want access to agentic patterns. They want access to an agentic platform. They want access to the inference of the smartest models in the world. I provide them that, but I don’t provide the applications themselves. That’s for Shopify, Thomson Reuters, and our various customers to provide in their own domains.

**What drew you to Google?**

Google is I think unique in the world in that we have everything from the interface to the infrastructure layer. We can build data centers. We can buy electricity and build power plants. We have our own chips. We have our own model. We have the inference layer that we control. We have the agentic layer we control. We have APIs for memory, for interleaved code writing. We have agent engine on top of that that ensures compliance and governance. And then we even have the chat interface with Gemini enterprise and Gemini chat for consumers, right? So part of the reason I came here is because I saw Google as uniquely vertically integrated, and that being a strength for us.

Techcrunch event

Boston, MA | June 9, 2026

**It’s odd because, even with all the differences between companies, it feels like all three of the big labs are really** **close in capabilities. Is it just a race for more intelligence, or is it more complicated than that?**

I see three boundaries. Models like Gemini Pro are tuned for raw intelligence. Think about writing code. You just want the best code you can get, doesn’t matter if it takes 45 minutes, because I have to maintain it, I have to put it in production. I just want the best.

Then there’s this other boundary with latency. If I’m doing customer support and I need to know how to apply a policy, you need intelligence to apply that policy. Are you allowed to transact a return? Can I upgrade my seat on an airplane? But it doesn’t matter how right you are if it took 45 minutes to get the answer. So for those cases, you want the most intelligent product within that latency budget, because more intelligence no longer matters once that person gets bored and hangs up the phone. 

And then there’s this last bucket, where somebody like Reddit or Meta wants to moderate the entire internet. They have large budgets, but they can’t take an enterprise risk on something if they don’t know how it scales. They don’t know how many poisonous posts there will be today or tomorrow. So they have to restrict their budget to a model at the highest intelligence they can afford, but in a scalable way to an infinite number of subjects. And for that, cost becomes very, very important.

**One of the things I’ve been puzzling about is why agentic systems are taking so long to catch on. It feels like the models are there and I’ve seen incredible demos, but we’re not seeing the kind of major changes I would have expected a year ago. What do you think is holding it back?**

This technology is basically two years old, and there’s still a lot of missing infrastructure. We don’t have patterns for auditing what the agents are doing. We don’t have patterns for authorization of data to an agent. There are these patterns that are going to require work to put into production. And production is always a trailing indicator of what the technology is capable of. So two years isn’t long enough to see what the intelligence supports in production, and that’s where people are struggling.

I think it’s moved uniquely quickly in software engineering because it fits nicely in the software development lifecycle. We have a dev environment in which it’s safe to break things, and then we promote from the dev environment to the test environment. The process of writing code at Google requires two people to audit that code and both affirm that it’s good enough to put Google’s brand behind and give to our customers. So we have a lot of those human-in-the-loop processes that make the implementation exceptionally low-risk. But we need to produce those patterns in other places and for other professions.

Russell Brandom has been covering the tech industry since 2012, with a focus on platform policy and emerging technologies. He previously worked at The Verge and Rest of World, and has written for Wired, The Awl and MIT’s Technology Review. He can be reached at russell.brandom@techcrunch.com or on Signal at 412-401-5489.

[View Bio](https://techcrunch.com/author/russell-brandom/)
