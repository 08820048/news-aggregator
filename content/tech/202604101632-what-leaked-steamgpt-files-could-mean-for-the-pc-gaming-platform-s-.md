---
title: "What leaked \"SteamGPT\" files could mean for the PC gaming platform's use of AI"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/gaming/2026/04/what-is-steamgpt-leaked-files-point-to-ai-powered-valve-security-review-system/"
published: "2026-04-10T16:32:25.000Z"
category: "tech"
summary: "AI tools could help moderators sift through mountains of suspicious incidents"
---
These days, it seems like every tech company and their corporate parent is looking to squeeze AI tools and features into their products, whether they’re wanted or not. So when files with names and functions referencing a “SteamGPT” appeared in a recent Steam client update, Valve watchers [took quick notice](https://x.com/gabefollower/status/2041616788178256245#m).

From the outside, it’s hard to tell precisely what form any such “SteamGPT” would take. But looking through variable names and references in the files themselves suggests that Valve may be looking to use AI tools to streamline internal evaluations of in-game incidents and sift through potentially suspicious accounts.

## Looking at the variables

As tracked by [the automated SteamTracking GitHub project](https://github.com/SteamTracking/SteamTracking/tree/a376b60d49bdd00f18391c17ceb82a8a53c5276b), the term “SteamGPT” appears multiple times in [three](https://github.com/SteamTracking/SteamTracking/blob/a376b60d49bdd00f18391c17ceb82a8a53c5276b/ProtobufsWebui/service_steamgptrenderfarm.proto) [separate](https://github.com/SteamTracking/SteamTracking/blob/a376b60d49bdd00f18391c17ceb82a8a53c5276b/ProtobufsWebui/service_steamgptsummary.proto) [files](https://github.com/SteamTracking/SteamTracking/blob/a376b60d49bdd00f18391c17ceb82a8a53c5276b/ProtobufsWebui/service_steamgpt.proto) added in the April 7 Steam client update. In addition to the SteamGPT naming convention—a seemingly obvious reference to the [generative pre-trained transformers](https://www.ibm.com/think/topics/gpt) popularized by ChatGPT and its ilk—the files include mentions of terms like multi-category inference, fine-tuning, and “upstream models” that point to some sort of generative AI system.

What might that AI be used for? Well, the files contain multiple references to a labeler and “labeling tasks,” working with arguments identifying a “problem” and “subproblem” and looking at an “evaluation\_evidence\_log” related to a specific “matchid.” Together with mentions of a “logs\_to\_inference” metamodel, that sounds like it could be a hook into a system for automatically generating labels to categorize the [various incident reports](https://help.steampowered.com/en/faqs/view/2F3F-25EE-2AC6-30E7) made in Steam multiplayer games.

[![](https://cdn.arstechnica.net/wp-content/uploads/2026/04/steamgpt.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/04/steamgpt.png)

A SteamGPT function makes references to numerous security features.

A SteamGPT function makes references to numerous security features. Credit: [SteamTracking / Github](https://github.com/SteamTracking/SteamTracking/blob/a376b60d49bdd00f18391c17ceb82a8a53c5276b/ProtobufsWebui/service_steamgptsummary.proto#L3)

Another portion of the SteamGPT files hints that Valve might use AI tools to summarize suspicious activity history or patterns in potentially fraudulent Steam accounts. A number of “SteamGPTSummary” functions include references to [VAC bans](https://help.steampowered.com/en/faqs/view/571A-97DA-70E9-FF74), [Steam Guard](https://help.steampowered.com/en/faqs/view/06B0-26E6-2CF8-254C), and [account lockdowns](https://help.steampowered.com/en/faqs/view/01DE-9E83-B094-313B). These functions also seem to look at evidence such as email addresses (“high\_fraud\_email”), use of advanced security features (“two\_factor”), and where a linked phone number originates (“phone\_country”) to help determine whether an account is on the up-and-up. There are also a few references here to an account’s [trust score](https://help.steampowered.com/en/faqs/view/00EF-D679-C76A-C185), which is already used to help secure matchmaking in games like _Counter-Strike 2_.
