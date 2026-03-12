---
title: "Building a strong data infrastructure for AI agent success"
source: "MIT Technology Review Insights"
url: "https://www.technologyreview.com/2026/03/10/1134083/building-a-strong-data-infrastructure-for-ai-agent-success/"
published: "2026-03-10T14:00:00.000Z"
category: "ai"
summary: "In the race to adopt and show value from AI, enterprises are moving faster than ever to deploy agentic AI as copilots, assistants, and autonomous task-runners. In late 2025, nearly two-thirds of companies were experimenting with AI agents, while 88% were using AI in at least one business function, up from 78% in 2024, according…"
---
In the race to adopt and show value from AI, enterprises are moving faster than ever to deploy agentic AI as copilots, assistants, and autonomous task-runners. In late 2025, nearly two-thirds of companies were experimenting with AI agents, while 88% were using AI in at least one business function, up from 78% in 2024, [according to McKinsey's annual AI report](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai). Yet, while early pilots often succeed, only one in 10 companies actually scaled their AI agents.

![](https://wp.technologyreview.com/wp-content/uploads/2026/03/SAP-article-iStock-933220212.jpg)

One major issue: AI agents are only as effective as the data foundation supporting them. Experts argue that most companies are seeing delays in implementing AI, not because of shortcomings in the models, but because they lack data architectures that deliver business context to be reliably used by humans and agents.

Companies need to be ready with the right data architecture, and the next few months — years, at most — will be critical, says Irfan Khan, president and chief product officer of SAP Data & Analytics.

"The only prediction anybody can reliably make is that we don't know what's going to happen in the years, months — or even weeks — ahead with AI," he says. "To be able to get quick wins right now, you need to adopt an AI mindset and ... ground your AI models with reliable data."

While data has always been important for business, it will be even more so in the age of AI. The capabilities of agentic AI will be set more by the soundness of enterprise data architecture and governance, and less by the evolution of the models. To scale the technology, businesses need to adopt a modern data infrastructure that delivers context along with the data.

### More business context, not necessarily more data

Traditional views often conflate structured data with high value, and unstructured data with less value. However, AI complicates that distinction. High-value data for agents is defined less by format and more by business context. Data for critical business functions — such as supply-chain operations and financial planning — is context dependent. While fine-grained, high-volume data, such as IoT, logs, and telemetry, can yield value, but only when delivered with business context.

For that reason, the real risk for agentic AI is not lack of data, but lack of grounding, says Khan.

“Anything that is business contextual will, by definition, give you greater value and greater levels of reliability of the business outcome,” he says. "It’s not as simple as saying high-value data is structured data and low-value data is where you have lots of repetition — both can have huge value in the right hands, and that’s what’s different about AI."

Context can be derived through integration with software, on-site analysis and enrichment, or through the governance pipeline. Data lacking those qualities will likely be untrusted — one reason why two-thirds of business leaders do not fully trust their data, [according to the Institute for Data and Enterprise AI (IDEA)](https://www.ideainstitute.ai/wp-content/uploads/2026/01/IDEA-Research-Brief-RB3-121725-1.pdf). The resulting "trust debt" has held back businesses in their quest for AI readiness. Overcoming that lack of trust requires shared definitions, semantic consistency, and reliable operational context to align data with business meaning.

### Data sprawl demands a semantic, business-aware layer

Over the past decade, the most important shift in enterprise data architecture has been the separation of compute and storage, cloud-scale flexibility, says Khan. Yet, that separation and move to cloud also created sprawl, with data housed in multiple clouds, data lakes, warehouses, and a multitude of SaaS applications.

As companies move to AI, that sprawl does not go away. In fact, the problem is growing with more than two-thirds of companies citing data siloes as a top challenge in adopting AI, with more than half of enterprises [struggling with 1,000 data sources or more](https://www.dataversity.net/articles/data-strategy-trends-in-2025-from-silos-to-unified-enterprise-value/). While the last era was about laying the foundation on which to build software-as-a-service — separating compute and storage and building lakes — the next era is about delivering the right data to autonomous AI agents tasked with various business functions.

“Probably the biggest innovation that occurred in data management was the separation of compute and store," Khan says. "But what’s really making a distinction now is the way that we harmonize the data and harvest the value of the data across multiple sources of content.”

To do that requires a semantic or knowledge layer that supports multiple platforms, encodes business rules and relationships, provides a business-contextual and governed view of data, and allows humans and agents to access the data in the appropriate ways. But legacy data architectures cannot power the autonomous AI systems of the future, consultancy Deloitte [stated in its State of AI in the Enterprise report](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html). Only four in 10 companies believe their data management process is ready for AI, and that's down from 43% the previous year, suggesting that as companies explore AI deployment, they are realizing their infrastructure's shortcomings.

### Agentic AI does not replace SaaS

Some investors and technologists speculate that AI agents will make SaaS applications obsolete. Khan strongly disagrees. Over the past 15 years, value has steadily moved up the stack, from on-premises infrastructure to infrastructure as a service (IaaS) to platform as a service (PaaS) to SaaS. Agentic AI is simply the next layer. Agentic AI will have its own layer to access the data and interact with the business logic. The value rises up the stack, but nothing below disappears, he says.

"SaaS doesn’t go away," he says. "It just means SaaS and these agents will cooperate with one another. Companies are not going to throw away their entire general ledger and replace it with an agent. What’s the agent going to do? It doesn’t know anything without business context and business processing.”

In this emerging model, the software stack is being reshaped so that applications and data provide governed context within which AI can act effectively. SaaS applications remain the systems of record, while the semantic layer becomes the business-context source of truth. AI agents become a new engagement layer, orchestrating across systems, and both humans and agents become "first-class citizens" in how they access business logic, he says.

Critically, agents cannot directly connect to every operational system. “If we’re saying agents are going to take over the world … you can’t have an agent talking to every operational backend system,” Khan warns. “It just doesn’t work that way.”

This further elevates the importance of a semantic or business-fabric layer.

### Where to start

Most enterprises need to begin where their data already lives — in platforms like Snowflake, Databricks, Google BigQuery, or an existing SAP environment. Khan says that’s normal, but warns against rebuilding old patterns of vendor lock-in.

He suggests that companies prioritize the data that matters most by focusing on preserving and providing business context to operational and application data. Companies should also invest early in governance and semantics by defining shared policies, access rules, and semantic models before scaling pilots. Finally, businesses should prioritize openness and fabric-style interoperability rather than forcing all data into one stack.

Khan cautions against aiming for full automation too early. “There is a new brave opportunity to really engage in the agentic and AI world,” Khan says, "Fully automating \[critical business processes\] is maybe a stretch, because there’s going to be a lot of extra oversight necessary." Early wins will likely come from less-critical processes and from agents that work off fresh, stateful data rather than stale dashboards, he adds. As AI begins to deliver value and adoption increases, leaders must decide how to reinvest those gains to drive top-line efficiency or enter new markets.

_[Register](https://events.sap.com/fabric-of-data-and-ai/en_us/home.html?url_id=banner-glo-bdc-hero) for "The Fabric of Data & AI" virtual event on March 24, 2026. Hear insights from executives and thought leaders who are shaping the future of data and AI._

_This content was produced by Insights, the custom content arm of MIT Technology Review. It was not written by MIT Technology Review’s editorial staff. It was researched, designed, and written by human writers, editors, analysts, and illustrators. This includes the writing of surveys and collection of data for surveys. AI tools that may have been used were limited to secondary production processes that passed thorough human review._
