---
title: "OpenAI Five Benchmark: Results"
source: "Unknown"
url: "https://openai.com/index/openai-five-benchmark-results"
published: "2018-08-06T07:00:00.000Z"
category: "ai"
summary: "Yesterday, OpenAI Five won a best-of-three against a team of 99.95th percentile Dota players: Blitz, Cap, Fogged, Merlini, and MoonMeander—four of whom have played Dota professionally—in front of a live audience and 100,000 concurrent livestream viewers."
---
Our usual development cycle is to train each major revision of the system from scratch. However, this version of OpenAI Five contains parameters that have been training since June 9th across six major system revisions. Each revision was initialized with parameters from the previous one.

We invested heavily in “surgery” tooling which allows us to map old parameters to a new network architecture. For example, when we first trained warding, we shared a single action head for determining where to move and where to place a ward. But Five would often drop wards seemingly in the direction it was trying to go, and we hypothesized it was allocating its capacity primarily to movement. Our tooling let us split the head into two clones initialized with the same parameters.

We estimate that we used the following amounts of [compute⁠](https://openai.com/index/ai-and-compute/) to train our various Dota systems:

-   1v1 model: 8 petaflop/s-days
-   June 6th model: 11 petaflop/s-days[A](#citation-bottom-A)
-   Aug 5th model: 35 petaflop/s-days[A](#citation-bottom-A)

We are also releasing our latest [network architecture⁠(opens in a new window)](https://cdn.openai.com/dota_benchmark_results/network_diagram_08_06_2018.pdf).
