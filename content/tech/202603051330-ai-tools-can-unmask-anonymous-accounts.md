---
title: "AI tools can unmask anonymous accounts"
source: "Robert Hart"
url: "https://www.theverge.com/ai-artificial-intelligence/889395/ai-agents-unmask-anonymous-online-accounts"
published: "2026-03-05T13:30:00.000Z"
category: "tech"
summary: "Do you have a Reddit alt, secret X, finsta, or Glassdoor account you trash your boss with? AI might have just made it a lot easier to unmask you. That's the conclusion of a recently published study, which hints at some uncomfortable consequences for staying private online - even if it's not quite time to hold a funeral for anonymity just yet. The finding, which has not been peer reviewed, comes from researchers at ETH Zurich, Anthropic, and the Machine Learning Alignment and Theory Scholars program. They built an automated system of AI agents using unspecified models - capable of searching the web and interacting with information much like … Read the full story at The Verge."
---
Do you have a Reddit alt, secret X, finsta, or Glassdoor account you trash your boss with? AI might have just made it a lot easier to unmask you. That’s the conclusion of a [recently published study](https://arxiv.org/pdf/2602.16800), which hints at some uncomfortable consequences for staying private online — even if it’s not quite time to hold a funeral for anonymity just yet.

The finding, which has not been peer reviewed, comes from researchers at ETH Zurich, Anthropic, and the Machine Learning Alignment and Theory Scholars program. They built an automated system of AI agents using unspecified models — capable of searching the web and interacting with information much like a human investigator — to test how effectively large language models can reidentify anonymized material. The system “substantially outperforms” traditional computational techniques for deanonymizing accounts, scouring text for personal details at a grand scale.

The system works by treating posts or other texts as a set of clues. It analyzes the text for patterns — writing quirks, stray biographical details, posting frequency and timing — that might hint at someone’s identity. It then scans other accounts, potentially millions of them, looking for the same mix of traits. Probable matches are flagged, compared in more detail, and winnowed down into a shortlist of likely identities.

Rather than targeting unsuspecting users, the team evaluated the system using datasets built from publicly available posts, including content from Hacker News and LinkedIn, transcripts of Anthropic’s interviews with scientists on how they use AI, and Reddit accounts that were deliberately split into two anonymized halves for testing. The paper reports that in each setting the LLM-based approach correctly identified up to 68 percent of matching accounts with 90 percent precision. By contrast, comparable non-LLM methods, like connecting scattered data points across large datasets, identified almost none.

The results weren’t uniform across every dataset, and, predictably, the model performed better when it had more structured information to work with. In one experiment examining Reddit users posting about films in the main r/movies subreddit and smaller film communities, the system was able to link accounts that mentioned just one movie about 3 percent of the time at 90 percent precision. When users mentioned 10 or more films, the success rate climbed to nearly half.

An experiment using Anthropic’s survey of scientists, meanwhile, identified nine of the 125 respondents, a recall rate of roughly 7 percent. In that test, the system built a profile of each respondent based on clues in their answers and then searched publicly available information on the web for likely matches. In an example match, the researchers highlight how references to a “supervisor” could suggest a PhD student and that the use of British English could hint at a UK affiliation. Combined with mentions of a background in the physical sciences and current work in biology research, the system was able to narrow the field to a particular candidate.

Still, the researchers argue that the ability to identify any respondents from unstructured text is noteworthy, replicating in minutes what would have taken a human investigator hours to do. Moreover, they told _The Verge_ that performance is likely to improve as AI systems grow more capable and gain access to larger pools of data. More broadly, they caution that it may no longer be safe to assume that posting pseudonymously will protect online identities, past or future.

“Every single thing the LLM found in principle could be found by a human investigator.”

“Information on the internet is there forever,” said Daniel Paleka, a researcher at ETH Zurich and one of the study’s authors. That persistence could translate into tangible, real-world risks for journalists, dissidents, and activists relying on pseudonyms, the researchers warn, while also enabling “hyper-targeted advertising” and “highly personalized” scams.

The risks of deanonymizing accounts aren’t novel, nor are they unique to AI. “Every single thing the LLM found in principle could be found by a human investigator,” Paleka told _The Verge_.

What is new, Paleka argues, is the end-to-end automation. Work that once required a diligent investigator willing to patiently sift through posts hunting for small nuggets of information can now be carried out far more easily and across a far larger number of targets.

It’s also cheap. The researchers said their experiment cost less than $2,000, a cost of between $1 and $4 for each profile they ran the AI agent on. “The economics are totally different now,” coauthor Simon Lermen told _The Verge_, warning that the lower barrier to entry could expand who has the ability — and incentive — to try and pierce online anonymity. Groups that have historically “flown under the radar” may find it hard to continue doing so, he said.

People “might misunderstand this important research and conclude that privacy is dead.” It isn’t.

It’s important not to overstate the findings. “While these algorithms are improving, they remain far from what humans can do,” Luc Rocher, an associate professor at the Oxford Internet Institute, told _The Verge_. The work does not neatly map onto the real world; experiments were done under laboratory conditions using datasets that had been carefully curated and anonymized for the purposes of testing. They said they worry people “might misunderstand this important research and conclude that privacy is dead.” It isn’t, they argued.

Despite years of incremental progress in techniques designed to unmask anonymous users, “the identity of Satoshi Nakamoto, the inventor of Bitcoin, remains a mystery after more than a decade,” Rocher said. Whistleblowers, they added, can still communicate with journalists without being exposed, and tools like Signal “have so far been successful in protecting our collective privacy.”

In the paper, the researchers said they avoided testing their system on actual pseudonymous users because of ethical concerns. For similar reasons, they did not publish the full technical details of their approach and declined to provide a demonstration when asked. The team also would not say whether they had tested the system outside the confines of the study, again citing ethical concerns, leaving open the question of how reliably it would perform against real-world accounts.

For people already deeply committed to anonymity, the practical impact may be limited. Basic precautions — keeping accounts separate, limiting personal details, avoiding identifiable patterns like posting only during waking hours in your time zone — are still critical.

For those treating pseudonyms more casually, Paleka and Lermen advised users to think carefully about what gets posted in public forums, even accounts that feel anonymous, and to keep in mind that what’s already out there can be pieced together more easily than many assume.

Responsibility shouldn’t rest entirely on users, the researchers argue. Lermen said AI labs should monitor how their tools are being used and build safeguards to stop them being used to deanonymize people. Social media platforms, he added, could clamp down on the scraping and mass data extraction that make such efforts possible.

Satoshi, in other words, is probably safe from AI sleuths. Your throwaway AITA post on Reddit? That might be another matter.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Robert Hart
