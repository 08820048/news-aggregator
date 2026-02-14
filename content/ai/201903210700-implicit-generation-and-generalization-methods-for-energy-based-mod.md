---
title: "Implicit generation and generalization methods for energy-based models"
source: "Unknown"
url: "https://openai.com/index/energy-based-models"
published: "2019-03-21T07:00:00.000Z"
category: "ai"
summary: "We’ve made progress towards stable and scalable training of energy-based models (EBMs) resulting in better sample quality and generalization ability than existing models. Generation in EBMs spends more compute to continually refine its answers and doing so can generate samples competitive with GANs at low temperatures, while also having mode coverage guarantees of likelihood-based models. We hope these findings stimulate further research into this promising class of models."
---
[Generative modeling⁠(opens in a new window)](https://blog.openai.com/generative-models/) is the task of observing data, such as images or text, and learning to model the underlying data distribution. Accomplishing this task leads models to understand high level features in data and synthesize examples that look like real data. Generative models have many applications in natural language, robotics, and computer vision.

Energy-based models represent probability distributions over data by assigning an unnormalized probability scalar (or “energy”) to each input data point. This provides useful modeling flexibility—any arbitrary model that outputs a real number given an input can be used as an energy model. The difficulty however, lies in sampling from these models.

To generate samples from EBMs, we use an iterative refinement process based on [Langevin dynamics⁠(opens in a new window)](https://en.wikipedia.org/wiki/Langevin_dynamics). Informally, this involves performing noisy gradient descent on the energy function to arrive at low-energy configurations ([see paper for more details⁠(opens in a new window)](http://arxiv.org/abs/1903.08689)). Unlike [GANs⁠(opens in a new window)](https://arxiv.org/abs/1406.2661), [VAEs⁠(opens in a new window)](https://www.ics.uci.edu/~welling/publications/papers/AEVB_ICLR14.pdf), and [Flow-based models⁠(opens in a new window)](https://arxiv.org/abs/1902.00275), this approach does not require an explicit neural network to generate samples - samples are generated implicitly. The combination of EBMs and iterative refinement have the following benefits:

-   **Adaptive computation time**. We can run sequential refinement for long amount of time to generate sharp, diverse samples or a short amount of time for coarse less diverse samples. In the limit of infinite time, this procedure is [known to⁠(opens in a new window)](https://www.ics.uci.edu/~welling/publications/papers/stoclangevin_v6.pdf) generate true samples from the energy model.
-   **Not restricted by generator network**. In both VAEs and Flow based models, the generator must learn a map from a continuous space to a possibly disconnected space containing different data modes, which requires large capacity and may not be possible to learn. In EBMs, by contrast, can easily learn to assign low energies at disjoint regions.
-   **Built-in compositionality**. Since each model represents an unnormalized probability distribution, models can be naturally combined through [product of experts⁠(opens in a new window)](http://www.cs.toronto.edu/~fritz/absps/icann-99.pdf) or other hierarchical models.

-   [Generative Models](https://openai.com/research/index/?tags=generative-models)
-   [Learning Paradigms](https://openai.com/research/index/?tags=learning-paradigms)

## Acknowledgments

Thanks to Ilya Sutskever, Greg Brockman, Bob McGrew, Johannes Otterbach, Jacob Steinhardt, Harri Edwards, Yura Burda, Jack Clark and Ashley Pilipiszyn for feedback on this blog post and manuscript.
