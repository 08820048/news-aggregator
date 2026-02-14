---
title: "Deep double descent"
source: "Unknown"
url: "https://openai.com/index/deep-double-descent"
published: "2019-12-05T08:00:00.000Z"
category: "ai"
summary: "We show that the double descent phenomenon occurs in CNNs, ResNets, and transformers: performance first improves, then gets worse, and then improves again with increasing model size, data size, or training time. This effect is often avoided through careful regularization. While this behavior appears to be fairly universal, we don’t yet fully understand why it happens, and view further study of this phenomenon as an important research direction."
---
The charts above show test and train error as a function of both model size and number of optimization steps. For a given number of optimization steps (fixed y-coordinate), test and train error exhibit model-size double descent. For a given model size (fixed x-coordinate), as training proceeds, test and train error decreases, increases, and decreases again; we call this phenomenon epoch-wise double descent.

_In general, the peak of test error appears systematically when models are just barely able to fit the train set._

Our intuition is that, for models at the interpolation threshold, there is effectively only one model that fits the train data, and forcing it to fit even slightly noisy or misspecified labels will destroy its global structure. That is, there are no “good models” which both interpolate the train set and perform well on the test set. However, in the over-parameterized regime, there are many models that fit the train set and there exist such good models. Moreover, the implicit bias of stochastic gradient descent (SGD) leads it to such good models, for reasons we don’t yet understand.

We leave fully understanding the mechanisms behind double descent in deep neural networks as an important open question.
