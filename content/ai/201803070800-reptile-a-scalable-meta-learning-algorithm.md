---
title: "Reptile: A scalable meta-learning algorithm"
source: "Unknown"
url: "https://openai.com/index/reptile"
published: "2018-03-07T08:00:00.000Z"
category: "ai"
summary: "We’ve developed a simple meta-learning algorithm called Reptile which works by repeatedly sampling a task, performing stochastic gradient descent on it, and updating the initial parameters towards the final parameters learned on that task. Reptile is the application of the Shortest Descent algorithm to the meta-learning setting, and is mathematically similar to first-order MAML (which is a version of the well-known MAML algorithm) that only needs black-box access to an optimizer such as SGD or Adam, with similar computational efficiency and performance."
---
Meta-learning is the process of learning how to learn. A meta-learning algorithm takes in a distribution of tasks, where each task is a learning problem, and it produces a quick learner—a learner that can generalize from a small number of examples. One well-studied meta-learning problem is few-shot classification, where each task is a classification problem where the learner only sees 1–5 input-output examples from each class, and then it must classify new inputs. Below, you can try out our interactive demo of 1-shot classification, which uses Reptile.

As an alternative to the last step, we can treat Φ−W \\Phi - W as a gradient and plug it into a more sophisticated optimizer like [Adam⁠(opens in a new window)](https://arxiv.org/abs/1412.6980).

It is at first surprising that this method works at all. If k\=1 k=1 , this algorithm would correspond to “joint training”—performing SGD on the mixture of all tasks. While joint training can learn a useful initialization in some cases, it learns very little when zero-shot learning is not possible (e.g. when the output labels are randomly permuted). Reptile requires k\>1 k>1 , where the update depends on the higher-order derivatives of the loss function; as we show in the paper, this behaves very differently from k\=1 k=1  (joint training).

To analyze why Reptile works, we approximate the update using a [Taylor series⁠(opens in a new window)](https://en.wikipedia.org/wiki/Taylor_series). We show that the Reptile update maximizes the inner product between gradients of different minibatches from the same task, corresponding to improved generalization. This finding may have implications outside of the meta-learning setting for explaining the generalization properties of SGD. Our analysis suggests that Reptile and MAML perform a very similar update, including the same two terms with different weights.

In our experiments, we show that Reptile and MAML yield similar performance on the [Omniglot⁠(opens in a new window)](https://github.com/brendenlake/omniglot) and [Mini-ImageNet⁠(opens in a new window)](https://arxiv.org/abs/1606.04080) benchmarks for few-shot classification. Reptile also converges to the solution faster, since the update has lower variance.

Our analysis of Reptile suggests a plethora of different algorithms that we can obtain using different combinations of the SGD gradients. In the figure below, assume that we perform k steps of SGD on each task using different minibatches, yielding gradients  g1,g2,…,gk g\_1, g\_2, \\dots, g\_k . The figure below shows the learning curves on Omniglot obtained by using each sum as the meta-gradient.  g2 g\_2 ​ corresponds to first-order MAML, an algorithm proposed in the original MAML paper. Including more gradients yields faster learning, due to variance reduction. Note that simply using  g1 g\_1 ​ (which corresponds to k\=1 k=1 ) yields no progress as predicted for this task since zero-shot performance cannot be improved.
