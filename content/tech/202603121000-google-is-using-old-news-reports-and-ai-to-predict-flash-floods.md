---
title: "Google is using old news reports and AI to predict flash floods"
source: "Tim Fernholz"
url: "https://techcrunch.com/2026/03/12/google-is-using-old-news-reports-and-ai-to-predict-flash-floods/"
published: "2026-03-12T10:00:00.000Z"
category: "tech"
summary: "A new way to solve data scarcity: Turning qualitative reports into quantitative data with an LLM."
---
Flash floods are among the deadliest weather events in the world, killing more than 5,000 people each year. They’re also among the most difficult to predict. But Google thinks it has cracked that problem in an unlikely way — by reading the news.

While humans have assembled a lot of weather data, flash floods are too short-lived and localized to be measured comprehensively, the way the temperature or even river flows are monitored over time. That data gap means that deep learning models, which are increasingly capable of forecasting the weather, aren’t able to predict flash floods.

To solve that problem, Google researchers used Gemini — Google’s large language model — to sort through 5 million news articles from around the world, isolating reports of 2.6 million different floods, and turning those reports into [a geo-tagged time series](https://eartharxiv.org/repository/view/12083/) dubbed “Groundsource.” It’s the first time that the company has used language models for this kind of work, according to Gila Loike, a Google Research product manager. The research and data set was [shared publicly](https://blog.google/innovation-and-ai/technology/research/gemini-help-communities-predict-crisis/) Thursday morning.

With Groundsource as a real-world baseline, the researchers [trained a model](https://eartharxiv.org/repository/view/12082/) built on a Long Short-Term Memory (LSTM) neural network to ingest weather global forecasts and generate the probability of flash floods in a given area.

Google’s flash flood forecasting model is now highlighting risks for urban areas in 150 countries on the company’s [Flood Hub](https://sites.research.google/floods/l/0/0/3) platform, and sharing its data with emergency response agencies around the world. António José Beleza, an emergency response official at the Southern African Development Community who trialed the forecasting model with Google, said it helped his organization respond to floods more quickly.

There are still limitations to the model. For one, it is fairly low resolution, identifying risk across 20-square-kilometer areas. And it is not as precise as the US National Weather Service’s flood alert system, in part because Google’s model doesn’t incorporate local radar data, which enables real-time tracking of precipitation.

Part of the point, though, is that the project was designed to work in places where local governments can’t afford to invest in expensive weather-sensing infrastructure or don’t have extensive records of meteorological data.

Techcrunch event

San Francisco, CA | October 13-15, 2026

“Because we’re aggregating millions of reports, the Groundsource data set actually helps rebalance the map,” Juliet Rothenberg, a program manager on Google’s Resilience team, told reporters this week. “It enables us to extrapolate to other regions where there isn’t as much information.”

Rothenberg said the team hopes that using LLMs to develop quantitative data sets from written, qualitative sources could be applied to efforts to building data sets about other ephemeral-but-important-to-forecast phenomena, like heat waves and mud slides.

Marshall Moutenot, the CEO of Upstream Tech, a company that uses similar deep learning models to forecast river flows for customers like hydropower companies, said Google’s contribution is part of a growing effort to assemble data for deep learning-based weather forecasting models. Moutenot co-founded [dynamical.org](https://dynamical.org/), a group curating a collection of machine learning-ready weather data for researchers and startups.

“Data scarcity is one of the most difficult challenges in geophysics,” Moutenot said. “Simultaneously, there’s too much Earth data, and then when you want to evaluate against truth, there’s not enough. This was a really creative approach to get that data.”

Tim Fernholz is a journalist who writes about technology, finance and public policy. He has closely covered the rise of the private space industry and is the author of _Rocket Billionaires: Elon Musk, Jeff Bezos and the New Space Race._ Formerly, he was a senior reporter at Quartz, the global business news site, for more than a decade, and began his career as a political reporter in Washington, D.C. You can contact or verify outreach from Tim by emailing tim.fernholz@techcrunch.com or via an encrypted message to tim\_fernholz.21 on Signal.

[View Bio](https://techcrunch.com/author/tim-fernholz/)
