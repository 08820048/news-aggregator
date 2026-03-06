---
title: "Google's new command line tool can plug OpenClaw into your Workspace data"
source: "
                    Ryan Whitwam
                "
url: "https://arstechnica.com/ai/2026/03/googles-new-command-line-tool-can-plug-openclaw-into-your-workspace-data/"
published: "2026-03-06T19:56:20.000Z"
category: "tech"
summary: "This could make it easier to plug AI into Workspace APIs, but it's not yet an official Google product."
---
The command line is hot again. For some people, command lines were never _not_ hot, of course, but it’s becoming more common now in the age of AI. Google launched a Gemini command line tool last year, and now it has a new AI-centric command line option for cloud products. The new Google Workspace CLI bundles the company’s existing cloud APIs into a package that makes it easy to integrate with a variety of AI tools, including OpenClaw. How do you know this setup won’t blow up and delete all your data? That’s the fun part—you don’t.

There are some important caveats with the Workspace tool. While this [new GitHub project](https://github.com/googleworkspace/cli) is from Google, it’s “not an officially supported Google product.” So you’re on your own if you choose to use it. The company notes that functionality may change dramatically as Google Workspace CLI continues to evolve, and that could break workflows you’ve created in the meantime.

For people who are interested in tinkering with AI automations and don’t mind the inherent risks, Google Workspace CLI has a lot to offer even at this early stage. It includes the APIs for every Workspace product, including Gmail, Drive, and Calendar. It’s designed for use by humans and AI agents, but like everything else Google does now, there’s a clear emphasis on AI.

The tool supports structured JSON outputs, and there are more than 40 agent skills included, [says](https://x.com/addyosmani/status/2029372736267805081) Google Cloud director Addy Osmani. The focus of Workspace CLI seems to be on agentic systems that can create command line inputs and directly parse JSON outputs. The integrated tools can load and create Drive files, send emails, create and edit Calendar appointments, send chat messages, and much more.
