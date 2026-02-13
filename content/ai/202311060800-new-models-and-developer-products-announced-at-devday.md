---
title: "New models and developer products announced at DevDay"
source: "Unknown"
url: "https://openai.com/index/new-models-and-developer-products-announced-at-devday"
published: "2023-11-06T08:00:00.000Z"
category: "ai"
summary: "GPT-4 Turbo with 128K context and lower prices, the new Assistants API, GPT-4 Turbo with Vision, DALL·E 3 API, and more."
---
Today, we’re releasing the [Assistants API⁠(opens in a new window)](https://platform.openai.com/docs/assistants/overview), our first step towards helping developers build agent-like experiences within their own applications. An assistant is a purpose-built AI that has specific instructions, leverages extra knowledge, and can call models and tools to perform tasks. The new Assistants API provides new capabilities such as Code Interpreter and Retrieval as well as function calling to handle a lot of the heavy lifting that you previously had to do yourself and enable you to build high-quality AI apps.

This API is designed for flexibility; use cases range from a natural language-based data analysis app, a coding assistant, an AI-powered vacation planner, a voice-controlled DJ, a smart visual canvas—the list goes on. The Assistants API is built on the same capabilities that enable [our new GPTs product⁠](https://openai.com/index/introducing-gpts/): custom instructions and tools such as Code interpreter, Retrieval, and function calling.

A key change introduced by this API is **persistent and infinitely long threads**, which allow developers to hand off thread state management to OpenAI and work around context window constraints. With the Assistants API, you simply add each new message to an existing `thread`.

Assistants also have access to call new tools as needed, including:

-   **Code Interpreter**: writes and runs Python code in a sandboxed execution environment, and can generate graphs and charts, and process files with diverse data and formatting. It allows your assistants to run code iteratively to solve challenging code and math problems, and more.
-   **Retrieval**: augments the assistant with knowledge from outside our models, such as proprietary domain data, product information or documents provided by your users. This means you don’t need to compute and store embeddings for your documents, or implement chunking and search algorithms. The Assistants API optimizes what retrieval technique to use based on our experience building knowledge retrieval in ChatGPT.
-   **Function calling**: enables assistants to invoke functions you define and incorporate the function response in their messages.

As with the rest of the platform, data and files passed to the OpenAI API are [never used to train our models⁠](https://openai.com/enterprise-privacy/) and developers can delete the data when they see fit.

You can try the Assistants API beta without writing any code by heading to the [Assistants playground⁠(opens in a new window)](https://platform.openai.com/playground?mode=assistant).

For organizations that need even more customization than fine-tuning can provide (particularly applicable to domains with extremely large proprietary datasets—billions of tokens at minimum), we’re also launching a **Custom Models program**, giving selected organizations an opportunity to work with a dedicated group of OpenAI researchers to train custom GPT‑4 to their specific domain. This includes modifying every step of the model training process, from doing additional domain specific pre-training, to running a custom RL post-training process tailored for the specific domain. Organizations will have exclusive access to their custom models. In keeping with our existing enterprise privacy policies, custom models will not be served to or shared with other customers or used to train other models. Also, proprietary data provided to OpenAI to train custom models will not be reused in any other context. This will be a very limited (and expensive) program to start—interested orgs can [apply here⁠](https://openai.com/form/custom-models/).
