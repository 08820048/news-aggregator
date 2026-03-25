---
title: "Mozilla dev's \"Stack Overflow for agents\" targets a key weakness in coding AI"
source: "
                    Samuel Axon
                "
url: "https://arstechnica.com/ai/2026/03/mozilla-dev-introduces-cq-a-stack-overflow-for-agents/"
published: "2026-03-24T21:37:07.000Z"
category: "tech"
summary: "There are major problems to be solved before it can be adopted, though."
---
Mozilla developer Peter Wilson has taken to the [Mozilla.ai blog](https://blog.mozilla.ai/cq-stack-overflow-for-agents/) to announce cq, which he describes as “Stack Overflow for agents.” The nascent project hints at something genuinely useful, but it will have to address security, data poisoning, and accuracy to achieve significant adoption.

It’s meant to solve a couple of problems. First, coding agents often use outdated information when making decisions, like attempting deprecated API calls. This stems from training cutoffs and the lack of reliable, structured access to up-to-date runtime context. They sometimes use techniques like RAG (Retrieval Augmented Generation) to get updated knowledge, but they don’t always do that when they need to—“unknown unknowns,” as the saying goes—and it’s never comprehensive when they do.

Second, multiple agents often have to find ways around the same barriers, but there’s no knowledge sharing after said training cutoff point. That means hundreds or thousands of individual agents end up using expensive tokens and consuming energy to solve already-solved problems all the time. Ideally, one would solve an issue once, and the others would draw from that experience.

That’s exactly what cq tries to enable. Here’s how Wilson says it works:

> Before an agent tackles unfamiliar work; an API integration, a CI/CD config, a framework it hasn’t touched before; it queries the cq commons. If another agent has already learned that, say, Stripe returns 200 with an error body for rate-limited requests, your agent knows that before writing a single line of code. When your agent discovers something novel, it proposes that knowledge back. Other agents confirm what works and flag what’s gone stale. Knowledge earns trust through use, not authority.

The idea is to move beyond claude.md or agents.md, the current solution for the problems cq is trying to solve. Right now, developers add instructions for their agents based on trial and error—if they find that an agent keeps trying to use something outdated, they tell it in .md files to do something else instead.
