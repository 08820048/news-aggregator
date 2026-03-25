---
title: "Talat’s AI meeting notes stay on your machine, not in the cloud"
source: "Sarah Perez"
url: "https://techcrunch.com/2026/03/24/talats-ai-meeting-notes-stay-on-your-machine-not-in-the-cloud/"
published: "2026-03-24T18:41:33.000Z"
category: "tech"
summary: "The subscription-free AI meeting notes app is a local-first twist on notetaking tools like Granola."
---
The AI-powered notetaking app Granola, valued at [$250 million](https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m-at-250m-valuation-launches-collaborative-features/), has become a popular tool among tech industry founders [and VCs](https://techcrunch.com/2024/10/23/vcs-love-using-the-ai-meeting-notepad-granola-so-they-gave-it-20m/). But one developer believes there’s demand for a more private, local-only alternative that’s available for a one-time fee and without a subscription. That’s led to the creation of a new Mac app called [Talat](https://talat.app/).

Yorkshire, England-based developer [Nick Payne](https://stronglytyped.uk/), a self-described computer nerd, says the idea to build a local AI notetaker came about mostly because of a series of happy accidents.

“I think Granola is awesome; it’s a shining example of what you can do with an Electron app \[a framework for building desktop applications\] given enough love and care,” he told TechCrunch. “When I first tried it, I was fascinated that it managed to record system audio on my Mac without recording video, which was the standard workaround at the time. That led to a ton of research, discovering a relatively new and poorly documented Apple API.”

To make it easier to work with that API (Core Audio Taps, which lets developers tap into a Mac’s audio streams), Payne decided to create an open source audio library, [AudioTee](https://url.usb.m.mimecastprotect.com/s/pm6jCXYGMGt30n5gFmtYSW5-RO?domain=github.com).

“During that time, I was slowly piecing together a toolkit, but I never found anything that felt like it could stand on its own as a product rather than just a cool tech demo,” Payne said. “The state-of-the-art hosted transcription models — the same providers folks like Granola use — are incredible, and it’s viscerally cool to see your speech unfurled onscreen in near real time. But it always nagged me that the trade-off required providing not just my data, but my audio data; my actual voice,” he added.

He then stumbled upon a software toolkit called [FluidAudio](https://url.usb.m.mimecastprotect.com/s/dJIkCYVJMJcPO31vsZuvSxiNR-?domain=github.com), a Swift framework that enables fully local, low-latency audio AI on Apple devices. It lets you run small, fast transcription models directly on the Mac’s Neural Engine — Apple’s dedicated hardware for AI processing.

That was the piece that made Payne realize he could turn his research into an actual product — one where your audio never leaves your Mac and your transcripts aren’t stored on another company’s servers.

[Talat](https://talat.app/), which was [built alongside](https://talat.app/about) Payne’s longtime friend and former colleague Mike Franklin, is the result of Payne’s interest in the audio space. The result is a 20MB, one-time purchase that doesn’t require you to create an account or even share analytics data back with the developers. There are no ongoing fees, either.

While some AI notetakers may have more bells and whistles, Talat offers a streamlined set of features. It captures audio from your computer’s microphone when you’re in meeting apps like Zoom, Teams, Meet, and others, and transcribes it in real time. The app tries to assign speakers in real time, but you can reassign them as needed. You can also take notes, plus edit, delete, or split transcript segments. When the meeting finishes, a local LLM generates a summary with key points, decisions, and action items.

The notes, transcripts, and summaries are all searchable in Talat, too.

In addition to the privacy angle, Payne said the goal is to give users more options.

“We’re leaning into configurability and letting users control where their data goes: pick your own LLM, auto-export to \[notetaking app\] Obsidian, webhooks that push data out when a meeting finishes, an [MCP](https://en.wikipedia.org/wiki/Model_Context_Protocol) server,” which is a standardized way for AI tools to connect to outside data sources, “to pull it on demand,” he explained.

Under the hood, the AI is a mixture — “mostly stitched together and abstracted behind FluidAudio,” Payne noted, which he credits with doing a lot of the heavy lifting. For the summarization piece, the app defaults to an Al model called Qwen3-4B-4bit, which can run on even fairly modest hardware.

However, users can opt to switch that out to any cloud LLM provider of their choice, or they can choose between two Parakeet variants — speech-recognition models developed by Nvidia — or point it at Ollama (a tool for running AI models locally), giving them more control over the experience. In time, Talat will add support for more built-in choices and will have integrations for other apps, like Google Calendar and Notion.

At launch, users with M-series Mac computers (those running Apple’s own processors, starting with the M1) can download the app and try it out for free with 10 hours of recordings before deciding to purchase.

[Talat](https://talat.app/) is [available for $49](https://talat.app/#download) while in this pre-release version, which is still under active development.

When the app hits a 1.0 release, the price will increase to $99.

Payne and Franklin are bootstrapping Talat and plan to keep the core product a one-time purchase going forward.
