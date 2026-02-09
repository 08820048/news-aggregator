---
title: "Sixteen Claude AI agents working together created a new C compiler"
source: "
                    Benj Edwards
                "
url: "https://arstechnica.com/ai/2026/02/sixteen-claude-ai-agents-working-together-created-a-new-c-compiler/"
published: "2026-02-06T23:40:58.000Z"
category: "tech"
summary: "这项耗资2万美元的实验编译了一个Linux内核，但需要深入的人力管理。"
---
随着Anthropic和OpenAI本周推出多智能体工具，在推动人工智能代理的过程中，Anthropic已经准备好展示一些更大胆的人工智能编码实验。但与往常一样，与人工智能相关的成就，你会发现一些关键的警告。上周四，Anthropic研究员Nicholas Carlini发表了一篇博客文章，描述了他如何在最小监督的情况下将公司的Claude Opus 4.6 AI模型的16个实例放在共享代码库上，并要求他们从头开始构建C编译器。据报道，人工智能模型代理在两周内进行了近2000次Claude Code会议，花费了大约2万美元的API费用，产生了一个10万行基于rust的编译器，能够在x86、ARM和RISC-V架构上构建可启动的Linux 6.9内核。Carlini是Anthropic保障团队的一名研究科学家，曾在b谷歌Brain和DeepMind工作了7年，他使用了Claude Opus 4.6推出的一个新功能，名为“代理团队”。实际上，每个Claude实例都在自己的Docker容器中运行，克隆一个共享的Git存储库，通过写锁文件来申请任务，然后将完成的代码推送回上游。没有业务流程代理引导流量。每个实例都独立地确定了下一步最明显的问题，并开始解决它。当合并冲突出现时，AI模型实例自行解决它们。Anthropic在GitHub上发布的编译器可以编译一系列主要的开源项目，包括PostgreSQL、SQLite、Redis、FFmpeg和QEMU。它在GCC酷刑测试套件中获得了99%的通过率，并且在Carlini所谓的“开发人员的终极石蕊测试”中编译并运行了Doom。值得注意的是，对于半自主的AI模型编码来说，C编译器是一个近乎理想的任务：该规范已有几十年的历史，并且定义良好，已经存在全面的测试套件，并且有一个已知的好的参考编译器来检查。大多数现实世界的软件项目都没有这些优势。大多数开发中最困难的部分不是编写通过测试的代码；首先要弄清楚测试应该是什么。
