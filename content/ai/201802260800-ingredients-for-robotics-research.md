---
title: "Ingredients for robotics research"
source: "Unknown"
url: "https://openai.com/index/ingredients-for-robotics-research"
published: "2018-02-26T08:00:00.000Z"
category: "ai"
summary: "We’re releasing eight simulated robotics environments and a Baselines implementation of Hindsight Experience Replay, all developed for our research over the past year. We’ve used these environments to train models which work on physical robots. We’re also releasing a set of requests for robotics research."
---
To understand what HER does, let’s look at in the context of [FetchSlide⁠(opens in a new window)](https://gym.openai.com/envs/FetchSlide-v0), a task where we need to learn to slide a puck across the table and hit a target. Our first attempt very likely will not be a successful one. Unless we get very lucky, the next few attempts will also likely not succeed. Typical reinforcement learning algorithms would not learn anything from this experience since they just obtain a constant reward (in this case: `-1`) that does not contain any learning signal.

The key insight that HER formalizes is what humans do intuitively: Even though we have not succeeded at a specific goal, we have at least achieved a different one. So why not just pretend that we wanted to achieve this goal to begin with, instead of the one that we set out to achieve originally? By doing this substitution, the reinforcement learning algorithm can obtain a learning signal since it has achieved _some_ goal; even if it wasn’t the one that we meant to achieve originally. If we repeat this process, we will eventually learn how to achieve arbitrary goals, including the goals that we really want to achieve.

This approach lets us learn how to slide a puck across the table even though our reward is fully sparse and even though we may have never actually hit the desired goal early on. We call this technique Hindsight Experience Replay since it replays experience (a technique often used in off-policy RL algorithms like [DQN⁠](https://openai.com/index/openai-baselines-dqn/) and [DDPG⁠(opens in a new window)](https://arxiv.org/abs/1509.02971)) with goals which are chosen in hindsight, after the episode has finished. HER can therefore be combined with any off-policy RL algorithm (for example, HER can be combined with DDPG, which we write as “DDPG + HER”).
