---
title: "Learning dexterity"
source: "Unknown"
url: "https://openai.com/index/learning-dexterity"
published: "2018-07-30T07:00:00.000Z"
category: "ai"
summary: "We’ve trained a human-like robot hand to manipulate physical objects with unprecedented dexterity."
---
By building simulations that support transfer, we have reduced the problem of controlling a robot in the real world to accomplishing a task in simulation, which is a problem well-suited for reinforcement learning. While the task of manipulating an object in a simulated hand is already [somewhat difficult⁠](https://openai.com/index/ingredients-for-robotics-research/), learning to do so across all combinations of randomized physical parameters is substantially more difficult.

To generalize across environments, it is helpful for the policy to be able to take different actions in environments with different dynamics. Because most dynamics parameters cannot be inferred from a single observation, we used an [LSTM⁠(opens in a new window)](http://colah.github.io/posts/2015-08-Understanding-LSTMs/#lstm-networks)—a type of neural network with memory—to make it possible for the network to learn about the dynamics of the environment. The LSTM achieved about twice as many rotations in simulation as a policy without memory.

Dactyl learns using [Rapid⁠](https://openai.com/index/openai-five/#rapid), the massively scaled implementation of Proximal Policy Optimization developed to allow OpenAI Five to solve Dota 2. We use a different model architecture, environment, and hyperparameters than OpenAI Five does, but we use the same algorithms and training code. Rapid used 6144 CPU cores and 8 GPUs to train our policy, collecting about one hundred years of experience in 50 hours.

For development and testing, we validated our control policy against objects with embedded motion tracking sensors to isolate the performance of our control and vision networks.

-   [Dactyl](https://openai.com/research/index/?tags=dactyl)
-   [Learning Paradigms](https://openai.com/research/index/?tags=learning-paradigms)
-   [Simulated Environments](https://openai.com/research/index/?tags=simulated-environments)
-   [Robotics](https://openai.com/research/index/?tags=robotics)

## Authors

[Josh Tobin](https://openai.com/news/?author=josh-tobin#results), [Bob McGrew](https://openai.com/news/?author=bob-mcgrew#results), [Wojciech Zaremba](https://openai.com/news/?author=wojciech-zaremba#results), [Maciek Chociej](https://openai.com/news/?author=maciek-chociej#results), [Szymon Sidor](https://openai.com/news/?author=szymon-sidor#results), [Glenn Powell](https://openai.com/news/?author=glenn-powell#results), [Jakub Pachocki](https://openai.com/news/?author=jakub-pachocki#results), [Alex Ray](https://openai.com/news/?author=alex-ray#results), [Marcin Andrychowicz](https://openai.com/news/?author=marcin-andrychowicz#results), [Bowen Baker](https://openai.com/news/?author=bowen-baker#results), [Arthur Petron](https://openai.com/news/?author=arthur-petron#results), [Matthias Plappert](https://openai.com/news/?author=matthias-plappert#results), [Rafał Józefowicz](https://openai.com/news/?author=rafal-jozefowicz#results), [Jonas Schneider](https://openai.com/news/?author=jonas-schneider#results), [Peter Welinder](https://openai.com/news/?author=peter-welinder#results), [Lilian Weng](https://openai.com/news/?author=lilian-weng#results)

## Feedback

Thanks to the following for feedback on drafts of this post: Pieter Abbeel, Tamim Asfour, Marek Cygan, Ken Goldberg, Anna Goldie, Edward Mehr, Azalia Mirhoseini, Lerrel Pinto, Aditya Ramesh & Ian Rust.

## Cover Art

Ben Barry & Eric Haines
