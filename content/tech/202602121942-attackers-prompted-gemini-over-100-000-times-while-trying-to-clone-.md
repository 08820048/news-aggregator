---
title: "Attackers prompted Gemini over 100,000 times while trying to clone it, Google says"
source: "
                    Benj Edwards
                "
url: "https://arstechnica.com/ai/2026/02/attackers-prompted-gemini-over-100000-times-while-trying-to-clone-it-google-says/"
published: "2026-02-12T19:42:08.000Z"
category: "tech"
summary: "Distillation technique lets copycats mimic Gemini at a fraction of the development cost."
---
[Skip to content](#main)

Adventures in copy protection

Distillation technique lets copycats mimic Gemini at a fraction of the development cost.

The Google Gemini logo. Credit: Google

On Thursday, Google [announced](https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use) that “commercially motivated” actors have attempted to clone knowledge from its Gemini AI chatbot by simply prompting it. One adversarial session reportedly prompted the model more than 100,000 times across various non-English languages, collecting responses ostensibly to train a cheaper copycat.

Google published the findings in what amounts to a quarterly self-assessment of threats to its own products that frames the company as the victim and the hero, which is not unusual in these self-authored assessments. Google calls the illicit activity “model extraction” and considers it intellectual property theft, which is a somewhat loaded position, [given](https://www.theverge.com/2023/7/5/23784257/google-ai-bard-privacy-policy-train-web-scraping) that Google’s LLM was built from materials scraped from the Internet without permission.

Google is also no stranger to the copycat practice. In 2023, The Information [reported](https://9to5google.com/2023/03/30/google-bard-chatgpt-training-report/) that Google’s Bard team had been accused of using ChatGPT outputs from ShareGPT, a public site where users share chatbot conversations, to help train its own chatbot. Senior Google AI researcher Jacob Devlin, who created the influential BERT language model, [warned](https://finance.yahoo.com/news/top-ai-researcher-reportedly-left-190003999.html) leadership that this violated OpenAI’s terms of service, then resigned and joined OpenAI. Google denied the claim but reportedly stopped using the data.

Even so, Google’s terms of service forbid people from extracting data from its AI models this way, and the report is a window into the world of somewhat shady AI model-cloning tactics. The company believes the culprits are mostly private companies and researchers looking for a competitive edge, and said the attacks have come from around the world. Google declined to name suspects.

## The deal with distillation

Typically, the industry calls this practice of training a new model on a previous model’s outputs “[distillation](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/distillation-turning-smaller-models-into-high-performance-cost-effective-solutio/4355029),” and it works like this: If you want to build your own large language model (LLM) but lack the billions of dollars and years of work that Google spent training Gemini, you can use a previously trained LLM as a shortcut.

To do so, you need to feed the existing AI model thousands of carefully chosen prompts, collect all the responses, and then use those input-output pairs to train a smaller, cheaper model. The result will closely mimic the parent model’s output behavior but will typically be smaller overall. It’s not perfect, but it can be a far more efficient training technique than hoping to build a useful model on random Internet data that includes a lot of noise.

The copycat model never sees Gemini’s code or training data, but by studying enough of its outputs, it can learn to [replicate](https://arstechnica.com/ai/2025/03/ai-firms-follow-deepseeks-lead-create-cheaper-models-with-distillation/) many of its capabilities. You can think of it as reverse-engineering a chef’s recipes by ordering every dish on the menu and working backward from taste and appearance alone.

In the report published by Google, its threat intelligence group [describes](https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use) a growing wave of these distillation attacks against Gemini. Many of the campaigns specifically targeted the algorithms that help the model perform [simulated reasoning](https://arstechnica.com/ai/2025/06/with-the-launch-of-o3-pro-lets-talk-about-what-ai-reasoning-actually-does/) tasks, or decide how to process information step by step.

Google [said](https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use) it identified the 100,000-prompt campaign and adjusted Gemini’s defenses, but it did not detail what those countermeasures involve.

## A clone of a clone

Google is not the only company worried about distillation. OpenAI [accused](https://arstechnica.com/ai/2025/01/china-is-catching-up-with-americas-best-reasoning-ai-models/) Chinese rival DeepSeek last year of using distillation to improve its own models, and the technique has since [spread](https://arstechnica.com/ai/2025/03/ai-firms-follow-deepseeks-lead-create-cheaper-models-with-distillation/) across the industry as a standard for building cheaper, smaller AI models from larger ones.

The line between standard distillation and theft depends on whose model you’re distilling and whether you have permission, a distinction that tech companies have spent billions of dollars trying to protect but that no court has tested.

Competitors have been using distillation to clone AI language model capabilities since at least the GPT-3 era, with ChatGPT a popular target after its launch.

In March 2023, shortly after Meta’s LLaMA model weights [leaked](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/) online, Stanford University researchers [built](https://crfm.stanford.edu/2023/03/13/alpaca.html) a model called Alpaca by fine-tuning LLaMA on 52,000 outputs generated by OpenAI’s GPT-3.5. The total cost was about $600. The result behaved so much like ChatGPT that it raised immediate questions about whether any AI model’s capabilities could be protected once it was accessible through an API.

Later that year, Elon Musk’s xAI [launched](https://arstechnica.com/information-technology/2023/12/elon-musks-ai-bot-grok-speaks-as-if-made-by-openai-in-some-tests-causing-a-stir/) its Grok chatbot, which promptly cited “OpenAI’s use case policy” when refusing certain requests. An xAI engineer blamed accidental ingestion of ChatGPT outputs during web scraping, but the specificity of the behavior, down to ChatGPT’s characteristic refusal phrasing and habit of wrapping responses with “Overall…” summaries, left many in the AI community unconvinced.

As long as an LLM is accessible to the public, no foolproof technical barrier prevents a determined actor from doing the same thing to someone else’s model over time (though rate-limiting helps), which is exactly what Google says happened to Gemini.

Distillation also occurs within companies, and it’s frequently used to create smaller, faster-to-run versions of older, larger AI models. OpenAI created GPT-4o Mini as a distillation of GPT-4o, for example, and Microsoft [built](https://arstechnica.com/information-technology/2024/04/microsofts-phi-3-shows-the-surprising-power-of-small-locally-run-ai-language-models/) its compact Phi-3 model family using carefully filtered synthetic data generated by larger models.

DeepSeek has also officially [published](https://arstechnica.com/ai/2025/01/china-is-catching-up-with-americas-best-reasoning-ai-models/) six distilled versions of its R1 reasoning model, the smallest of which can run on a laptop.

[![Photo of Benj Edwards](https://cdn.arstechnica.net/wp-content/uploads/2022/08/benj_ega.png)](https://arstechnica.com/author/benjedwards/)

Benj Edwards is Ars Technica's Senior AI Reporter and founder of the site's dedicated AI beat in 2022. He's also a tech historian with two decades of experience. In his free time, he writes and records music, collects vintage computers, and enjoys nature. He lives in Raleigh, NC.

[11 Comments](https://arstechnica.com/ai/2026/02/attackers-prompted-gemini-over-100000-times-while-trying-to-clone-it-google-says/#comments "11 comments")

1.  [![Listing image for first story in Most Read: US decides SpaceX is like an airline, exempting it from Labor Relations Act](https://cdn.arstechnica.net/wp-content/uploads/2026/02/musk-and-trump-768x432-1770838070.jpg)](https://arstechnica.com/tech-policy/2026/02/victory-for-elon-musk-us-labor-board-abandons-authority-over-spacex/)
