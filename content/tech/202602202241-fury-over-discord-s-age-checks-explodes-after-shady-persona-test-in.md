---
title: "Fury over Discord’s age checks explodes after shady Persona test in UK"
source: "
                    Ashley Belanger
                "
url: "https://arstechnica.com/tech-policy/2026/02/discord-and-persona-end-partnership-after-shady-uk-age-test-sparks-outcry/"
published: "2026-02-20T22:41:02.000Z"
category: "tech"
summary: "Persona confirmed all age-check data from Discord's UK test was deleted."
---
Broken trust

Persona confirmed all age-check data from Discord’s UK test was deleted.

Shortly after Discord announced that all users will soon be defaulted to teen experiences until their ages are verified, the messaging platform faced [immediate backlash](https://arstechnica.com/tech-policy/2026/02/discord-faces-backlash-over-age-checks-after-data-breach-exposed-70000-ids/).

One of the major complaints was that Discord planned to collect more government IDs as part of its global age verification process. It shocked many that Discord would be so bold so soon after a third-party breach of a former age check partner’s services recently [exposed 70,000 Discord users’ government IDs](https://arstechnica.com/security/2025/10/discord-says-hackers-stole-government-ids-of-70000-users/).

Attempting to reassure users, Discord claimed that most users wouldn’t have to show ID, instead relying on video selfies using AI to estimate ages, which raised separate privacy concerns. In the future, perhaps behavioral signals would override the need for age checks for most users, Discord suggested, seemingly downplaying the risk that sensitive data would be improperly stored.

Discord didn’t hide that it planned to continue requesting IDs for any user appealing an incorrect age assessment, and users weren’t happy, since that is exactly how the prior breach happened. Responding to critics, Discord claimed that the majority of ID data was promptly deleted. Specifically, Savannah Badalich, Discord’s global head of product policy, [told The Verge](https://www.theverge.com/tech/875309/discord-age-verification-global-roll-out) that IDs shared during appeals “are deleted quickly—in most cases, immediately after age confirmation.”

It’s unsurprising then that backlash exploded after Discord posted, and then weirdly deleted, a disclaimer on an FAQ about Discord’s age assurance policies that contradicted Discord’s hyped short timeline for storing IDs. An [archived version](https://web.archive.org/web/20260214070331/https:/support.discord.com/hc/en-us/articles/30326565624343-How-to-Complete-Age-Assurance-on-Discord) of the page shows the note shared this warning:

> “Important: If you’re located in the UK, you may be part of an experiment where your information will be processed by an age-assurance vendor, Persona. The information you submit will be temporarily stored for up to 7 days, then deleted. For ID document verification, all details are blurred except your photo and date of birth, so only what’s truly needed for age verification is used.”

[Critics](https://www.therage.co/persona-age-verification/) [felt](https://www.rockpapershotgun.com/good-news-uk-discord-users-were-part-of-a-peter-thiel-linked-data-collection-experiment) that Discord was obscuring not just how long IDs may be stored, but also the entities collecting information. Discord did not provide details on what the experiment was testing or how many users were affected, and Persona was not listed as a partner on its platform.

Asked for comment, Discord told Ars that only a small number of users was included in the experiment, which ran for less than one month. That test has since concluded, Discord confirmed, and Persona is no longer an active vendor partnering with Discord. Moving forward, Discord promised to “keep our users informed as vendors are added or updated.”

While Discord seeks to distance itself from Persona, Rick Song, Persona’s CEO, has been stuck responding to the mounting backlash. Hoping to quell fears that any of the UK data collected during the experiment risked being breached, he told Ars that all the data of verified individuals involved in Discord’s test was deleted immediately upon verification.

## Persona draws fire amid Discord fury

This all seemingly started after Discord was forced to find age verification solutions when Australia’s under-16 social media ban and the United Kingdom’s Online Safety Act came into effect.

It seems that in the UK, Discord struggled to find partners, as the messaging service wasn’t just trying to stop minors from accessing adult content but also needed to block adults from messaging minors.

Setting aside known [issues with accuracy in today’s age estimation technology](https://arstechnica.com/tech-policy/2025/04/redditor-accidentally-reinvents-discarded-90s-tool-to-escape-todays-age-gates/), there’s an often-overlooked nuance to how age solutions work, particularly when the safety of children is involved in platforms’ decisions. Age checks that are good enough to block kids from accessing adult content may not work as well as age checks to stop tech-savvy adults with malicious intentions bent on contacting minors; the UK’s OSA required that Discord’s age checks block both.

It seems likely that Discord expected Persona to be a partner that the UK’s OSA enforcers would approve. OSA had previously approved Persona as an age verification service on Reddit, which shares similarly complex age verification goals with Discord.

For Persona, the partnership came at a time when many Discord users globally were closely monitoring the service, trying to decided whehter they trusted Discord with their age check data.

After Discord shocked users by abruptly retracting the disclaimer about the Persona experiment, mistrust swelled, and scrutiny of Persona intensified.

On X and other social media platforms, critics warned that Palantir co-founder Peter Thiel’s Founders Fund was a major investor in Persona. They worried Thiel might have influence over Persona or access to Persona’s data, or, worse, that Thiel’s ties to the Trump administration might mean the government had access to it. Fearing that Discord data may one day be fed into government facial recognition systems, conspiracies swirled, increasing heat on Persona and leaving Song with no choice but to cautiously confront allegations.

## Hackers probe Persona

Perhaps most problematic for Persona, the mass outrage prompted cybersecurity researchers to investigate. They quickly exposed a “workaround” to avoid Persona’s age checks on Discord, The Rage, an independent publication that covers financial surveillance, [reported](https://www.therage.co/persona-age-verification/). But more concerning for privacy advocates, researchers also found the uncompressed of Persona’s frontend code “exposed to the open Internet on a US government authorized server.”

“In 2,456 publicly accessible files, the code revealed the extensive surveillance Persona software performs on its users, bundled in an interface that pairs facial recognition with financial reporting—and a parallel implementation that appears designed to serve federal agencies,” The Rage reported.

As The Rage reported, and Song confirmed to Ars, Persona does not currently have any government contracts. Instead, the exposed service “appears to be powered by an OpenAI chatbot,” The Rage noted. In [correspondence](https://x.com/rickcsong/status/2024423711559102578?s=20) with one of the researchers, Song clarified that this product is based on publicly available records for sanctions and warnings, and the service does not store any user data sent to it. Song told Ars that the product does not leverage AI.

OpenAI is highlighted as an active partner on Persona’s website, which [claims](https://withpersona.com/customers/openai) Persona screens millions of users for OpenAI each month. According to The Rage, “the publicly exposed domain, titled ‘openai-watchlistdb.withpersona.com,’” appears to “query identity verification requests on an OpenAI database” that has a “FedRAMP-authorized parallel implementation of the software called ‘withpersona-gov.com.’”

Hackers warned “that OpenAI may have created an internal database for Persona identity checks that spans all OpenAI users via its internal watchlistdb,” seemingly exploiting the “opportunity to go from comparing users against a single federal watchlist, to creating the watchlist of all users themselves.”

OpenAI did not immediately respond to Ars’ request to comment.

## Persona denies government, ICE ties

On Wednesday, Persona’s chief operating officer, Christie Kim, sought to reassure Persona customers as the Discord controversy grew. In an email, Kim said that Persona invests “heavily in infrastructure, compliance, and internal training to ensure sensitive data is handled responsibly,” and not exposed.

“Over the past week, multiple social media posts and online articles have circulated repeating misleading claims about Persona, insinuating conspiracies around our work with Discord and our investors,” Kim wrote.

Noting that Persona does not “typically engage with online speculation,” Kim said that the scandal required a direct response “because we operate in a sensitive space and your trust in us is foundational to our partnership.”

As expected, Kim noted that Persona is not partnered with federal agencies, including the Department of Homeland Security or Immigration and Customs Enforcement (ICE).

“Transparently, we are actively working on a couple of potential contracts which would be publicly visible if we move forward,” Kim wrote. “However, these engagements are strictly for workforce account security of government employees and do not include ICE or any agency within the Department of Homeland Security.”

Kim acknowledged that Thiel’s Founders Fund is an investor but said that investors do not have access to Persona data and that Thiel was not involved in Persona’s operations.

“He is not on our board, does not advise us, has no role in our operations or decision-making, and is not directly involved with Persona in any way,” Kim wrote. “Persona and Palantir share no board members and have no business relationship with each other.”

In the email, Kim confirmed that Persona was planning a press campaign to go on the defensive, speaking with media to clarify the narrative. She apologized for any inconvenience that the heightened scrutiny on the company’s services may have caused.

That scrutiny has likely spooked partners that may have previously gravitated to Persona as a partner that seems savvy about government approvals.

## **Persona combats ongoing trust issues**

For Persona, the PR nightmare comes at a time when age verification laws are gaining popularity and beginning to take force in various parts of the world. Persona’s background in verifying identities for financial services to prevent fraud seems to make its services—which The Rage noted combine facial recognition with financial reporting—an appealing option for platforms seeking a solution that will appease regulators. Song has denied that Persona links facial biometrics to financial records or law enforcement databases in responses to [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7430290737021263872/) [threads](https://www.linkedin.com/feed/update/urn:li:activity:7429960436453666816/).

But because of Persona’s background in financial services and fraud protection, its data retention policies—which require some data be retained for legal and audit purposes—will likely leave anyone uncomfortable with a tech company gathering a massive database of government IDs. Such databases are viewed as hugely attractive targets for bad actors behind costly breaches, and Discord’s users have already been burned once.

On X, Song [responded](https://x.com/rickcsong/status/2024423711559102578/photo/4) to one of the hackers—a user named Celeste with the handle @vmfunc—aiming to provide more transparency into how Persona was addressing the flagged issues. In the thread, he shared screenshots of emails documenting his correspondence with Celeste over security concerns.

The correspondence showed that Celeste credited Persona for quickly fixing the front-end issue but also noted that it was hard to trust Persona’s story about government and Palantir ties, since the company wouldn’t put more information on the record. Additionally, Persona’s compliance team should be concerned that the company had not yet started an “in-depth security review,” Celeste said.

“Unfortunately, there is no way I can fully trust you here and you know this,” Celeste wrote, “but I’m trying to act in good faith” by explicitly stating that “we found zero references” to ICE or other entities concerning critics “in all source files we found.”

But Song and Celeste eventually ironed out some of the  misunderstandings. On Friday, Celeste posted on X that “I see a lot of misinformation going online about our recent post about Persona.” Later correspondence shared with Ars showed Celeste thanked Song for his honesty in responding to questions, noting that the CEO putting statements on the record countering the rumors carried weight in a situation where Persona’s claims couldn’t all necessarily be independently verified.

_This story has been updated to include additional insights from Persona._

[![Photo of Ashley Belanger](https://cdn.arstechnica.net/wp-content/uploads/2022/06/Ashley-Belanger-400x400.jpg)](https://arstechnica.com/author/ashleybelanger/)

Ashley is a senior policy reporter for Ars Technica, dedicated to tracking social impacts of emerging policies and new technologies. She is a Chicago-based journalist with 20 years of experience.

[23 Comments](https://arstechnica.com/tech-policy/2026/02/discord-and-persona-end-partnership-after-shady-uk-age-test-sparks-outcry/#comments "23 comments")

1.  [![Listing image for first story in Most Read: NASA chief classifies Starliner flight as "Type A" mishap, says agency made mistakes](https://cdn.arstechnica.net/wp-content/uploads/2024/09/GettyImages-2156180680-768x432.jpg)](https://arstechnica.com/space/2026/02/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes/)
