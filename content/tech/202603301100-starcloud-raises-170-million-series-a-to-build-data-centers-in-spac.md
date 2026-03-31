---
title: "Starcloud raises $170 million Series A to build data centers in space"
source: "Tim Fernholz"
url: "https://techcrunch.com/2026/03/30/starcloud-raises-170-million-series-ato-build-data-centers-in-space/"
published: "2026-03-30T11:00:00.000Z"
category: "tech"
summary: "Starcloud becomes the fastest Y Combinator startup to reach unicorn status, just 17 months after demo day."
---
Starcloud’s latest funding round values the space compute company at $1.1 billion, making it one of the fastest startups to reach unicorn status after graduating from Y Combinator.

The company’s Series A, which closed 17 months after its demo day presentation, was led by Benchmark and EQT Ventures. It’s another sign of the interest in outsourcing data centers to orbit as resource and political obstacles slow their development on Earth, but the business model [depends](https://techcrunch.com/2026/02/11/why-the-economics-of-orbital-ai-are-so-brutal/) on unproven technology and significant capital expenditure.

[Starcloud](https://www.starcloud.com/) has now raised a total of $200 million, and launched its first satellite with an Nvidia H100 GPU in November 2025. The company will launch a more powerful version, Starcloud 2, later this year with multiple GPUs, including an Nvidia Blackwell chip and an AWS server blade, as well as a bitcoin mining computer.

The company will also begin developing a data center spacecraft designed to launch from Starship, the reusable heavy lift rocket being built by Elon Musk’s SpaceX. Starcloud 3, as the spacecraft is named, will be a 200 kilowatt, three-ton spacecraft that fits the “PEZ dispenser” system SpaceX designed to deploy its Starlink satellites from Starship.

CEO and founder Philip Johnston said he expects that will be the first orbital data center that is cost-competitive with terrestrial data centers, with costs on the order of $.05 per kw/hour of power — if commercial launch costs land around $500 per kilogram.

The challenge is that Starship isn’t flying yet; Johnston says he expects commercial access to open up in 2028 and 2029. That’s the reality facing all the big space data center projects: Powerful space computers will be cost-prohibitive until a new generation of rockets starts launching at a high operational cadence, something that might not happen until the 2030s.

“If it ends up being delayed, we’ll just carry on launching the smaller versions on Falcon 9,” Johnston said. “We’re not going to be competitive on energy costs until Starship is flying frequently.”

Techcrunch event

San Francisco, CA | October 13-15, 2026

“There’s kind of two business models,” Johnston explains: One is selling processing power to other spacecraft on orbit; the company’s first satellite, for example, analyzes data collected by Capella Space’s radar spacecraft. Then, in the future when launch costs go down, more powerful distributed data centers could potentially pull work from their terrestrial counterparts.

That gets at how new this industry really is. When Nvidia CEO Jensen Huang unveiled the company’s Vera Rubin Space-1 chip modules at his company’s annual GPU Technology Conference last week, he didn’t note that none had been produced or shared with the company’s development partners. 

In fact, the number of advanced GPUs on orbit is numbered in the dozens, while Nvidia is estimated to have sold nearly 4 million to terrestrial hyperscalers in 2025. 

Or consider that SpaceX’s Starlink communications network, the largest satellite network in orbit with 10,000 spacecraft, produces something around 200 _megawatts_ of energy, while data centers with more than 25 _gigawatts_ of power are currently under construction in the U.S., [according](https://www.cushmanwakefield.com/en/insights/americas-data-center-update) to Cushman and Wakefield. 

Johnston argues that his company is well ahead of the competition, with the first terrestrial GPU deployed in orbit. It was used to train an AI model in orbit, a first, according to Starcloud, and run a version of Gemini. Beyond the performance, Johnston says Starcloud now has valuable data about what it takes to run a powerful chip in space.

“An H100 is probably not the best chip for space, to be honest, but the reason we did it is we wanted to prove that we could run state of the art terrestrial chips in space,” he told TechCrunch. That hard-won knowledge —another GPU, an Nvidia A6000, failed during launch — will influence future designs.

There is a laundry list of technical challenges to be solved, including efficient power generation and cooling the hot-running chips. Starcloud-2 will have the largest deployable radiator flown on a private satellite; he expects at least two additional versions of that spacecraft will head to orbit, Johnston said.

Then there is the challenge of synchronization. The largest data center workloads, often for training, require hundreds or thousands of GPUs to work in tandem. Doing that in space will either require fantastically large spacecraft, or powerful and reliable laser links between spacecraft flying in formation. Most companies working on this technology expect those workloads to come long after simpler inference tasks take place on orbit.

Besides Starcloud, [Aetherflux](https://techcrunch.com/2026/03/27/aetherflux-reportedly-raising-series-b-at-2-billion-valuation/), Google’s Project Suncatcher, and Aethero — which launched Nvidia’s first space-based Jetson GPU in 2025 — are all developing space data center businesses. 

The elephant in the room is SpaceX itself, which has asked the U.S. government for permission to build and operate a million satellites for distributed compute in space.

Going head-to-head with SpaceX is a daunting task for any entrepreneur, but Johnston sees room for coexistence.

“They are building for a slightly different use case than us,” he told TechCrunch. “They’re mainly planning on serving Grok and Tesla workloads. It may be at some point that they offer a third-party cloud service, but what I think they are unlikely to do is what we’re doing \[as\] an energy and infrastructure player.”
