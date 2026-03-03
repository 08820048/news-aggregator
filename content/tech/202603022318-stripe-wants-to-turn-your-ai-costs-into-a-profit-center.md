---
title: "Stripe wants to turn your AI costs into a profit center"
source: "Julie Bort"
url: "https://techcrunch.com/2026/03/02/stripe-wants-to-turn-your-ai-costs-into-a-profit-center/"
published: "2026-03-02T23:18:27.000Z"
category: "tech"
summary: "Stripe released a preview intended to allow AI companies to easily track, pass through, and make a profit on underlying AI model fees."
---
Stripe on Monday [released a preview of a new feature](https://docs.stripe.com/billing/token-billing) that could help AI startups (and other companies) solve the problem of passing through the underlying costs of AI model usage to their customers.

Stripe’s feature, however, goes even further than just passing through the costs of the tokens. It allows startups to charge a markup percentage on token usage. So a company can, for instance, charge an automatic 30% above the cost of the tokens that the startup will pay the model maker.

As Stripe described it, “Say you’re building an AI app: you want a consistent 30% margin over raw LLM token costs across providers. Billing automates the process.”

The billing feature lets the startup pick the AI models it uses. It tracks the API prices of those models. It then records the customers’ token usage and applies the profit-margin markup automatically.

As we’ve [previously reported](https://techcrunch.com/2026/03/01/saas-in-saas-out-heres-whats-driving-the-saaspocalypse/), there are a variety of ways that AI startups are charging for their wares. Many of them charge tiered monthly subscriptions that have usage-rate caps; once those are hit, the subscriber may be charged more for exceeding the limit.

For instance, Cursor last year changed the pricing on some of its tiers from [unlimited use to rate-limited](https://techcrunch.com/2025/07/07/cursor-apologizes-for-unclear-pricing-changes-that-upset-users/) usage, with fees for extra consumption on top.

Without a usage cap, users could run up big bills for a startup with the model makers, and force the startup to operate in the red. This is especially acute for agentic startups. The more their customers use their agents, the more tokens they consume from the underlying model provider, be that OpenAI, Google Gemini, Anthropic, or others — making pricing and business model decisions especially critical.

Techcrunch event

San Francisco, CA | October 13-15, 2026

Stripe has also introduced its own AI gateway, a tool that gives users access to multiple models, letting them choose the best one for the job. But the billing tool also works with third-party gateways that are already popular, like those offered by Vercel and OpenRouter, according to a [tweet](https://x.com/miles_matthias/status/2028515021022548181) by a Stripe product manager,

There are, of course, other startups offering AI model cost management features with their own gateways. [OpenRouter, for instance](https://openrouter.ai/pricing), which grants access to over 300 models, charges a flat 5.5% markup over the token fees for its first-tier plan, and offers budget controls, too.

Stripe is not currently charging its own markup on the gateway, its product manager said on X. The feature, however, is still in waitlist mode. Either way, if Stripe can help startups easily turn tracking and billing for this expense into a profit-maker, it could be a game-changer. Stripe did not immediately respond to a request for comment on when the feature may be generally available.
