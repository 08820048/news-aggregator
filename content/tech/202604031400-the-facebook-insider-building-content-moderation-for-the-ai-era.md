---
title: "The Facebook insider building content moderation for the AI era"
source: "Rebecca Bellan"
url: "https://techcrunch.com/2026/04/03/moonbounce-fundraise-content-moderation-for-the-ai-era/"
published: "2026-04-03T14:00:15.000Z"
category: "tech"
summary: "Moonbounce has raised $12 million to grow its AI control engine that converts content moderation policies into consistent, predictable AI behavior."
---
When Brett Levenson left Apple in 2019 to lead business integrity at Facebook, the social media giant was in the thick of the [Cambridge Analytica](https://techcrunch.com/2019/07/25/facebook-ignored-staff-warnings-about-sketchy-cambridge-analytica-in-september-2015/) fallout. At the time, he thought he could simply fix Facebook’s content moderation problem with better technology. 

The problem, he quickly learned, ran deeper than technology. Human reviewers were expected to memorize a 40-page policy document that had been machine-translated into their language, he said. Then they had about 30 seconds per piece of flagged content to decide not just whether that  content violated the rules, but what to do about it: block it, ban the user, limit the spread. Those quick calls were only “slightly better than 50% accurate,” according to Levenson.

“It was kind of like flipping a coin, whether the human reviewers could actually address policies correctly, and this was many days after the harm had already occurred anyway,” Levenson told TechCrunch.

That sort of delayed, reactive approach is not sustainable in a world of nimble and well-funded adversarial actors. The rise of AI chatbots has only compounded the problem, as content moderation failures have resulted in a string of high-profile incidents, like chatbots providing teens with [self-harm guidance](https://techcrunch.com/2025/11/23/chatgpt-told-them-they-were-special-their-families-say-it-led-to-tragedy/) or [AI-generated imagery](https://techcrunch.com/2026/01/16/california-ag-sends-musks-xai-a-cease-and-desist-order-over-sexual-deepfakes/) evading safety filters.

Levenson’s frustration led to the idea of “policy as code” — a way to turn static policy documents into executable, updatable logic tightly coupled to enforcement. That insight led to the founding of [Moonbounce](https://moonbounce.io/), which announced on Friday it has raised $12 million in funding, TechCrunch has exclusively learned. The round was co-led by Amplify Partners and StepStone Group.

Moonbounce works with companies to provide an additional safety layer wherever content is generated, whether by a user or by AI. The company has trained its own large language model to look at a customer’s policy documents, evaluate content at runtime, provide a response in 300 milliseconds or less, and take action. Depending on customer preference, that action could look like Moonbounce’s system slowing down distribution while the content awaits a human review later, or it might block high-risk content in the moment. 

Today, Moonbounce serves three main verticals: Platforms dealing with user-generated content like dating apps; AI companies building characters or companions; and AI image generators. 

Techcrunch event

San Francisco, CA | October 13-15, 2026

Moonbounce is supporting more than 40 million daily reviews and serving over 100 million daily active users on the platform, Levenson said. Customers include AI companion startup Channel AI, image and video generation company Civitai, and character roleplay platforms Dippy AI and Moescape. 

“Safety can actually be a product benefit,” Levenson told TechCrunch. “It just never has been because it’s always a thing that happens later, not a thing you can actually build into your product. And we see our customers are finding really interesting and innovative ways to use our technology to make safety a differentiator, and part of their product story.”

Tinder’s head of trust and safety [recently explained](https://www.youtube.com/watch?v=ViWAHYFjb90) how the dating platform uses these types of LLM-powered services to reach a 10x improvement in accuracy of detections.

“Content moderation has always been a problem that plagued large online platforms, but now with LLMs at the heart of every application, this challenge is even more daunting,” Lenny Pruss, general partner at Amplify Partners, said in a statement. “We invested in Moonbounce because we envision a world where objective, real-time guardrails become the enabling backbone of every AI-mediated application.”

AI companies are facing mounting legal and reputational pressure after chatbots have been accused of pushing teenagers and vulnerable users toward [suicide](https://www.npr.org/sections/shots-health-news/2025/09/19/nx-s1-5545749/ai-chatbots-safety-openai-meta-characterai-teens-suicide) and image generators like xAI’s Grok have been used to create [nonconsensual](https://www.nytimes.com/2026/01/22/technology/grok-x-ai-elon-musk-deepfakes.html) nude imagery. Clearly, safety guardrails internally are failing, and it’s becoming a liability question. Levenson said AI companies are increasingly looking outside their own walls for help beefing out safety infrastructure. 

“We’re a third party sitting between the user and the chatbot, so our system isn’t inundated with context the way the chat itself is,” Levenson said. “The chatbot itself has to remember, potentially, tens of thousands of tokens that have come before…We’re solely worried about enforcing rules at runtime.”

Levenson runs the 12-person company with his former Apple colleague Ash Bhardwaj, who previously built large-scale cloud and AI infrastructure across the iPhone-maker’s core offerings. Their next focus is a capability called “iterative steering,” developed in response to cases like the [2024 suicide of a 14-year-old Florida boy](https://techcrunch.com/2024/10/23/lawsuit-blames-character-ai-in-death-of-14-year-old-boy/) who became obsessed with a Character AI chatbot. Rather than a blunt refusal when harmful topics arise, the system would intercept the conversation and redirect it, modifying prompts in real time to push the chatbot toward a more actively supportive response.

“We hope to be able to add to our actions toolkit the ability to steer the chatbot in a better direction to, essentially, take the user’s prompt and modify it to force the chatbot to be not just an empathetic listener, but a helpful listener in those situations,” Levenson said. 

When asked whether his exit strategy involved an acquisition by a company like Meta, bringing his work on content moderation full circle, Levenson said he recognizes how well Moonbounce would fit into his old employer’s stack, as well as his own fiduciary duties as a CEO. 

“My investors would kill me for saying this, but I would hate to see someone buy us and then restrict the technology,” he said. “Like, ‘Okay, this is ours now, and nobody else can benefit from it.’”
