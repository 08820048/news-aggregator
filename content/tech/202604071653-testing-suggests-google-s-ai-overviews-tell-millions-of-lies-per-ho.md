---
title: "Testing suggests Google's AI Overviews tell millions of lies per hour"
source: "
                    Ryan Whitwam
                "
url: "https://arstechnica.com/google/2026/04/analysis-finds-google-ai-overviews-is-wrong-10-percent-of-the-time/"
published: "2026-04-07T16:53:55.000Z"
category: "tech"
summary: "Is 90 percent accuracy good enough for a search robot?"
---
Looking up information on Google today means confronting AI Overviews, the Gemini-powered search robot that appears at the top of the results page. AI Overviews has had a rough time since its 2024 launch, attracting user ire over its [scattershot accuracy](https://arstechnica.com/information-technology/2024/05/googles-ai-overview-can-give-false-misleading-and-dangerous-answers/), but it’s getting better and usually provides the right answer. That’s a low bar, though. A [new analysis](https://www.nytimes.com/2026/04/07/technology/google-ai-overviews-accuracy.html) from The New York Times attempted to assess the accuracy of AI Overviews, finding it’s right 90 percent of the time. The flip side is that 1 in 10 AI answers is wrong, and for Google, that means hundreds of thousands of lies going out every minute of the day.

The Times conducted this analysis with the help of a startup called Oumi, which itself is deeply involved in developing AI models. The company used AI tools to probe AI Overviews with the SimpleQA evaluation, a common test to rank the factuality of generative models like Gemini. Released by OpenAI in 2024, SimpleQA is essentially a list of more than 4,000 questions with verifiable answers that can be fed into an AI.

Oumi began running its test last year when Gemini 2.5 was still the company’s best model. At the time, the benchmark showed an 85 percent accuracy rate. When the test was rerun following the [Gemini 3 update](https://arstechnica.com/google/2026/01/ai-overviews-gets-upgraded-to-gemini-3-with-a-dash-of-ai-mode/), AI Overviews answered 91 percent of the questions correctly. If you extrapolate this miss rate out to all Google searches, AI Overviews is generating tens of millions of incorrect answers per day.

The report includes several examples of where AI Overviews went wrong. When asked for the date on which Bob Marley’s former home became a museum, AI Overviews cited three pages, two of which didn’t discuss the date at all. The final one, Wikipedia, listed two contradictory years, and AI Overviews confidently chose the wrong one. The benchmark also prompts models to produce the date on which Yo Yo Ma was inducted into the classical music hall of fame. While AI Overviews cited the organization’s website that listed Ma’s induction, it claimed there’s no such thing as the Classical Music Hall of Fame.
