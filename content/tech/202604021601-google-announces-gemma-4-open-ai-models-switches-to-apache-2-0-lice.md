---
title: "Google announces Gemma 4 open AI models, switches to Apache 2.0 license"
source: "
                    Ryan Whitwam
                "
url: "https://arstechnica.com/ai/2026/04/google-announces-gemma-4-open-ai-models-switches-to-apache-2-0-license/"
published: "2026-04-02T16:01:33.000Z"
category: "tech"
summary: "Gemma 4 brings the first major update to Google's open models in a year."
---
Google’s Gemini AI models have improved by leaps and bounds over the past year, but you can only use Gemini on Google’s terms. The company’s Gemma open-weight models have provided more freedom, but Gemma 3, which launched [over a year ago](https://arstechnica.com/gadgets/2025/03/googles-new-gemma-3-ai-model-is-optimized-to-run-on-a-single-gpu/), is getting a bit long in the tooth. Starting today, developers can start working with [Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/), which comes in four sizes optimized for local usage. Google has also acknowledged developer frustrations with AI licensing, so it’s dumping the custom Gemma license.

Like past versions of its open-weight models, Google has designed Gemma 4 to be usable on local machines. That can mean plenty of things, of course. The two large Gemma variants, 26B Mixture of Experts and 31B Dense, are designed to run unquantized in bfloat16 format on a single 80GB Nvidia H100 GPU. Granted, that’s a $20,000 AI accelerator, but it’s still local hardware. If quantized to run at lower precision, these big models will fit on consumer GPUs.

Google also claims it has focused on reducing latency to really take advantage of Gemma’s local processing. The 26B Mixture of Experts model activates only 3.8 billion of its 26 billion parameters in inference mode, giving it much higher tokens-per-second than similarly sized models. Meanwhile, 31B Dense is more about quality than speed, but Google expects developers to fine-tune it for specific uses.

What’s new in Gemma 4

The other two Gemma 4 models, Effective 2B (E2B) and Effective 4B (E4B), are aimed at mobile devices. These options were designed to maintain low memory usage during inference, running at an effective 2 billion or 4 billion parameters. Google says the Pixel team worked closely with Qualcomm and MediaTek to optimize these models for devices like smartphones, Raspberry Pi, and Jetson Nano. Not only do they use less memory and battery than Gemma 3, but Google also touts “near-zero latency” this time around.

## More powerful, more open

All the new Gemma 4 models will reportedly leave Gemma 3 in the dust—Google claims these are the most capable models you can run on your local hardware. Google says Gemma 31B will debut at number three on the [Arena list](https://arena.ai/leaderboard/text?license=open-source) of top open AI models, behind GLM-5 and Kimi 2.5. However, even the biggest Gemma 4 variant is a fraction of the size of those models, making it theoretically much cheaper to run.
