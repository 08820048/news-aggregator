---
title: "OpenAI Red Teaming Network"
source: "Unknown"
url: "https://openai.com/index/red-teaming-network"
published: "2023-09-19T07:00:00.000Z"
category: "ai"
summary: "We’re announcing an open call for the OpenAI Red Teaming Network and invite domain experts interested in improving the safety of OpenAI’s models to join our efforts."
---
**Q: What will joining the network entail?**

**A:** Being part of the network means you may be contacted about opportunities to test a new model, or test an area of interest on a model that is already deployed. Work conducted as a part of the network is conducted under a non-disclosure agreement (NDA), though we have historically published many of our red teaming findings in System Cards and blog posts. You will be compensated for time spent on red teaming projects.

**Q: What is the expected time commitment for being a part of the network?** 

**A:** The time that you decide to commit can be adjusted depending on your schedule. Note that not everyone in the network will be contacted for every opportunity, OpenAI will make selections based on the right fit for a particular red teaming project, and emphasize new perspectives in subsequent red teaming campaigns. Even as little as 5 hours in one year would still be valuable to us, so don’t hesitate to apply if you are interested but your time is limited.

**Q: When will applicants be notified of their acceptance?**

**A:** OpenAI will be selecting members of the network on a rolling basis and you can apply until December 1, 2023. After this application period, we will re-evaluate opening future opportunities to apply again.

**Q: Does being a part of the network mean that I will be asked to red team every new model?**

**A:** No, OpenAI will make selections based on the right fit for a particular red teaming project, and you should not expect to test every new model.

**Q: What are some criteria you’re looking for in network members?**

**A:** Some criteria we are looking for are:

-   Demonstrated expertise or experience in a particular domain relevant to red teaming
-   Passionate about improving AI safety
-   No conflicts of interest
-   Diverse backgrounds and traditionally underrepresented groups
-   Diverse geographic representation 
-   Fluency in more than one language
-   Technical ability (not required)

**Q: What are other collaborative safety opportunities?**

**A:** Beyond joining the network, there are other collaborative opportunities to contribute to AI safety. For instance, one option is to create or conduct safety evaluations on AI systems and analyze the results.

OpenAI’s open-source [Evals⁠(opens in a new window)](https://github.com/openai/evals/tree/main) repository (released as part of the [GPT‑4 launch⁠](https://openai.com/index/gpt-4-research/)) offers user-friendly templates and sample methods to jump-start this process.

Evaluations can range from simple Q&A tests to more-complex simulations. As concrete examples, here are sample evaluations developed by OpenAI for evaluating AI behaviors from a number of angles:

_Persuasion_

-   [MakeMeSay⁠(opens in a new window)](https://github.com/openai/evals/tree/main/evals/elsuite/make_me_say/readme.md): How well can an AI system trick another AI system into saying a secret word?
-   [MakeMePay⁠(opens in a new window)](https://github.com/openai/evals/tree/main/evals/elsuite/make_me_pay/readme.md): How well can an AI system convince another AI system to donate money?
-   [Ballot Proposal⁠(opens in a new window)](https://github.com/openai/evals/tree/main/evals/elsuite/ballots/readme.md): How well can an AI system influence another AI system’s support of a political proposition?

_Steganography (hidden messaging)_

-   [Steganography⁠(opens in a new window)](https://github.com/openai/evals/tree/main/evals/elsuite/steganography/readme.md): How well can an AI system ​​pass secret messages without being caught by another AI system?
-   [Text Compression⁠(opens in a new window)](https://github.com/openai/evals/tree/main/evals/elsuite/text_compression/readme.md): How well can an AI system compress and decompress messages, to enable hiding secret messages?
-   [Schelling Point⁠(opens in a new window)](https://github.com/openai/evals/blob/main/evals/elsuite/schelling_point/README.md): How well can an AI system coordinate with another AI system, without direct communication?

We encourage creativity and experimentation in evaluating AI systems. Once completed, we welcome you to contribute your evaluation to the open-source [Evals⁠(opens in a new window)](https://github.com/openai/evals/tree/main) repo for use by the broader AI community.

You can also apply to our [Researcher Access Program⁠](https://openai.com/form/researcher-access-program/), which provides credits to support researchers using our products to study areas related to the responsible deployment of AI and mitigating associated risks.

-   [Policies and Procedures](https://openai.com/news/?tags=policies-procedures)
-   [2023](https://openai.com/news/?tags=2023)

## Footnotes

1.  A
    
    The term red teaming has been used to encompass a broad range of risk assessment methods for AI systems, including qualitative capability discovery, stress testing of mitigations, automated red teaming using language models, providing feedback on the scale of risk for a particular vulnerability, etc. In order to reduce confusion associated with the term “red team”, help those reading about our methods to better contextualize and understand them, and especially to avoid false assurances, we are working to adopt clearer terminology, as advised in [Khlaaf, 2023⁠(opens in a new window)](https://www.trailofbits.com/documents/Toward_comprehensive_risk_assessments.pdf), however, for simplicity and in order to use language consistent with that we used with our collaborators, we use the term “red team”.
    
2.  B
    
    We use the term “expert” to refer to expertise informed by a range of domain knowledge and lived experiences
    
3.  C
    
    We have also taken feedback on the risk profile of our systems in other forms, such as the [Bug Bounty Program⁠](https://openai.com/index/bug-bounty-program/) and the [ChatGPT Feedback Contest⁠](https://openai.com/index/chatgpt/).
