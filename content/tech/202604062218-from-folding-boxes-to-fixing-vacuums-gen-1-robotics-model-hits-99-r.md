---
title: "From folding boxes to fixing vacuums, GEN-1 robotics model hits 99% reliability"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/ai/2026/04/generalists-new-physical-robotics-ai-brings-production-level-success-rates/"
published: "2026-04-06T22:18:33.000Z"
category: "tech"
summary: "New model can respond to disruptions and figure out moves it wasn't trained for."
---
Robotic machine learning company Generalist has [announced GEN-1](https://generalistai.com/blog/apr-02-2026-GEN-1), a new physical AI system that it says “crosses into production-level success rates” on “a broad range of physical skills” that used to require the dexterity and muscle memory of human hands. Generalist is also touting the new model’s ability to respond to disruptions by improvising new moves and “connect\[ing\] ideas from different places in order to solve new problems.”

GEN-1 builds on Generalist’s previous GEN-0 model, which the company [touted in November](https://generalistai.com/blog/nov-04-2025-GEN-0) as a proof of concept for the applicability of scaling laws in robotics training, showing how more pre-training data and compute time improve post-training performance. But while large language models have been able to [effectively process trillions of words](https://medium.com/nlplanet/two-minutes-generative-ai-when-will-llms-run-out-of-training-data-ff151dfb8410) collectively written on the Internet as part of their training, robotic models don’t have a similar, readily accessible source of quality data about how humans manipulate objects.

To help solve this problem, Generalist has relied on [“data hands”](https://boldstart.vc/news/generalistai-when-robots-start-to-improvise-welcome-to-boldstart/), a set of wearable pincers that capture micro-movements and visual information as humans perform manual tasks. Generalist now claims it has collected over half a million hours and “petabytes of physical interaction data” to help train its physical model.

Shut up and take my money (out of my wallet) (then put it back in).

The result is an autonomous system that is precise enough to [put money into a wallet](https://www.youtube.com/watch?v=WkFIrB2dI50) and adaptable enough to [fold laundry](https://www.youtube.com/watch?v=EP_8DAHyqMM) or [sort auto parts](https://www.youtube.com/watch?v=WgIdj9c4pA8). The model now reaches 99 percent success rates on repetitive but delicate mechanical tasks such as folding boxes, packing phones, and [servicing robot vacuums](https://www.youtube.com/watch?v=iFdMXFHw0hU), according to Generalist, and at roughly three times the speed of the previous GEN-0 model. GEN-1 can hit these marks after only about an hour spent adapting its pretraining to “robot data” that applies to its specific robotic embodiment, according to the company.

## Recovering from mistakes

In the past, complex robotic systems have usually relied on carefully pre-programmed motions or been trained to focus exclusively on a single task with little variation. What sets GEN-1 apart, Generalist says, is the ability for a single model to improvise based on its previous experience and respond to disruptions naturally, even when they are “well outside the training distribution.”
