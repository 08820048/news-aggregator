---
title: "GPT-4 API general availability and deprecation of older models in the Completions API"
source: "Unknown"
url: "https://openai.com/index/gpt-4-api-general-availability"
published: "2024-04-24T00:00:00.000Z"
category: "ai"
summary: "GPT-3.5 Turbo, DALL·E and Whisper APIs are also generally available, and we are releasing a deprecation plan for older models of the Completions API, which will retire at the beginning of 2024."
---
Applications using the stable model names for base GPT‑3 models (`ada`, `babbage`, `curie`, `davinci`) will automatically be upgraded to the new models listed above on January 4, 2024. The new models will also be accessible in the coming weeks for early testing by specifying the following model names in API calls: `babbage-002`, `davinci-002`.

Developers using other older completion models (such as `text-davinci-003`) will need to manually upgrade their integration by January 4, 2024 by specifying `gpt-3.5-turbo-instruct` in the “model” parameter of their API requests. `gpt-3.5-turbo-instruct` is an InstructGPT‑style model, trained similarly to `text-davinci-003`. This new model is a drop-in replacement in the Completions API and will be available in the coming weeks for early testing.

Developers wishing to continue using their fine-tuned models beyond January 4, 2024 will need to fine-tune replacements atop the new base GPT‑3 models (`babbage-002`, `davinci-002`), or newer models (`gpt-3.5-turbo`, `gpt-4`). Once this feature is available later this year, we will give priority access to GPT‑3.5 Turbo and GPT‑4 fine-tuning to users who previously fine-tuned older models. We acknowledge that migrating off of models that are fine-tuned on your own data is challenging. We will be providing support to users who previously fine-tuned models to make this transition as smooth as possible.

In the coming weeks, we will reach out to developers who have recently used these older models, and will provide more information once the new completion models are ready for early testing.
