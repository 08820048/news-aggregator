---
title: "Users hate it, but age-check tech is coming. Here's how it works."
source: "
                    Ashley Belanger
                "
url: "https://arstechnica.com/tech-policy/2026/03/after-discord-fiasco-age-check-tech-promises-privacy-by-running-locally-does-it-work/"
published: "2026-03-18T11:30:47.000Z"
category: "tech"
summary: "On-device face scans and cross-platform age keys decrease privacy risks, but trust issues abound."
---
Not trusting the process

On-device face scans and cross-platform age keys decrease privacy risks, but trust issues abound.

Credit: Aurich Lawson | Getty Images

Last month, Discord [quickly backpedaled](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing) after it announced that an age-verification system would roll out globally.

Discord’s reversal followed a widespread user backlash, which also [intensified scrutiny of the platform’s age-check](https://arstechnica.com/tech-policy/2026/02/discord-and-persona-end-partnership-after-shady-uk-age-test-sparks-outcry/) [partners](https://arstechnica.com/tech-policy/2026/02/discord-and-persona-end-partnership-after-shady-uk-age-test-sparks-outcry/). Suddenly, these often-overlooked players in the “age-assurance” ecosystem had to defend their tech or risk losing major contracts.

The whole saga shined a harsh spotlight on the current problems with age-verification tech—and on the technical solutions aiming to make the whole process both secure and private.

## Discordant

Discord users had reason for suspicion after a data breach last fall in which a [former age-check partner leaked the government IDs of 70,000 users](https://arstechnica.com/security/2025/10/discord-says-hackers-stole-government-ids-of-70000-users/). Though Discord claimed that, in the future, most users could verify their age without any data leaving their devices, trust had eroded.

Discord’s initial announcement also left questions unanswered, such as, “What companies will actually be handling the age check process?” Users had to dig to learn that the technology was built by Privately SA, which isn’t listed as a [partner on Discord’s site](https://support.discord.com/hc/en-us/articles/30326565624343-How-to-Complete-Age-Assurance-on-Discord) but does work with a Discord partner named k-ID. (Users had previously criticized Discord for removing a disclaimer about an undisclosed age-check vendor called Persona, which Discord quickly announced it had dropped amid backlash following a brief test in the United Kingdom.)

But the bigger concern was that IDs would still be collected whenever facial age estimation—an approach that can be unreliable—failed. Most IDs would be deleted immediately, Discord claimed, but skeptical users had heard that line before. Many worried that collecting more IDs could make the company’s partners a more attractive target for hackers.

As some users debated the likelihood of another breach, others began hacking away at some of the technology Discord was using, including attempting to breach systems built by Persona and Privately. Their attacks, which the companies told Ars were intense and spanned days, were largely unsuccessful, but they put Discord’s age-check partners on high alert.

Ultimately, Discord saw the chaos its announcement created and chose to delay the launch of the age-verification system until later this year, [acknowledging](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing) that the company “got it wrong.”

“Let me be upfront: we knew this rollout was going to be controversial,” Stanislav Vishnevskiy, Discord’s chief technology officer, wrote. “Any time you introduce something that touches identity and verification, people are going to have strong feelings. Rightfully so. In hindsight, we should have provided more detail about our intentions and how the process works.”

Vishnevskiy said that 90 percent of users will never have to complete an age check when the system rolls out. He also said Discord would publish a technical blog before launch explaining how its internal safety systems determine age for most users.

Discord also vowed to be more transparent about age-check partners, with Vishnevskiy agreeing that “you shouldn’t have to guess who’s handling your information.”

Finally, Vishnevskiy confirmed that Discord will only work with age-check partners, such as Privately, that offer on-device face scans.

“We’ve set a new bar for any partner offering facial age estimation, including that it must be performed entirely on-device, meaning your biometric data never leaves your phone,” Vishnevskiy said.

Discord declined Ars’ request for comment. But it’s not the only platform facing scrutiny as laws around the world increasingly mandate age checks. Critics worry that age restrictions will limit access to speech and make it harder to maintain anonymity. In the US, many laws require age checks for users to access adult content. And amid heightening fears of child social media addiction, more laws are requiring platforms to block minors under a certain age. Most recently, [California passed a law](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043) forcing operating system providers to block minors from downloading apps with adult content.

Tech companies are scrambling to build solutions. Ars confirmed with a National Institute of Standards and Technology (NIST) researcher that in the past two years, the number of developers submitting facial age-estimation prototypes for evaluation has increased four-fold, from six to 23.

Age-check providers told Ars that Discord’s recent controversy offers a glimpse of the privacy fights likely to play out across the broader age-verification ecosystem as new laws take effect and unfamilar technologies roll out. Some vendors now expect that any new product launch or a partnership will bring scrutiny—and attempts by disgruntled users and determined hackers to probe their systems.

## Privately

Every expert Ars spoke to agreed that users have good reason to distrust age checks, which require sharing sensitive information without always knowing who can access that data. Some skeptical users question whether an on-device approach is even technically feasible.

But [Privately claims on its website](https://www.privately.eu/solutions/multi-modal-age-estimation) that its facial age estimation technology’s “secret sauce is our ability to run very performant models on the user device or user browser to implement a privacy-centric solution.” Developers can also access guides that explain how the company’s FaceAssure system analyzes “patterns on faces” to estimate ages using “complex statistical rules derived via Deep Learning methods.”

However, several demos that might help the average Discord user learn more about the technology were recently taken down. Privately CEO Deepak Tewari told Ars that the demos were removed as a precaution when k-ID and Privately both “faced an attack by hackers on our age-estimation systems on the back of the Discord announcements planning to go global.”

“We had a couple of days of intense attempts to try and breach our systems, but these attempts were thwarted, and the attack lost momentum,” Tewari said.

Tewari told Ars that the hackers gave up after eventually realizing that any breach or bypass could be quickly patched because everything Privately does happens on-device.

With FaceAssure, the age check is initiated without requiring a download, instead relying on an age-aware camera that returns “a vector back to the relying party,” such as Discord, which signals “that this vector will be similar for people of similar ages.”

That’s the only kind of information that ever leaves the phone, Tewari said. In the past year, Privately has conducted more than 10 million checks using this tech, of which half were on big platforms, with no personal information ever being collected, Tewari said.

Privately’s tech is not perfect, but it was recently certified by NIST. NIST tested it on millions of images—but not videos—to assess the accuracy of its tool, and the agency found that the mean age it produced was accurate to within 1.94 years.

Ars could not reach the group behind the attacks for comment, but a GitHub [thread](https://github.com/xyzeva/k-id-age-verifier/commit/e43af7e6a0a8b343bd745f943005312f055a7cb4#commitcomment-178254654) documenting the attempts ends with a comment saying the thread should remain as “as a testament that Privately at least isn’t lying about it being on-device and private.”

Of course, it would be foolish to assume that just because these hacks failed, Privately’s tech is “unbreakable or that a future update won’t introduce exploitable vulnerabilities,” Samantha Baldwin, a policy and research staff technologist for the Electronic Frontier Foundation (EFF), told Ars.

In a recent [blog post](https://www.eff.org/deeplinks/2026/02/discord-voluntarily-pushes-mandatory-age-verification-despite-recent-data-breach) post discussing Discord’s controversy, Baldwin argued that age-check technology is “not ready for primetime” and inherently diminishes user privacy. For that reason, she told Ars that the EFF does not consider even Privately’s fully on-device tech to be privacy-advancing.

“From a harm-reductionist approach, data being kept on the device for age verification is less dangerous than data being sent over a network, but this isn’t a remedy for these technologies harming people’s right to constitutionally protected speech, their privacy, and their security,” Baldwin said.

“None of them are advancing privacy,” Baldwin said. “It’s a question of how deep the wound is.”

## K-ID

K-ID, a Discord partner, launched a public-interest effort in November 2025 called the [OpenAge Initiative](https://openageinitiative.org/), which aims to popularize a product called AgeKeys as a way to store and reuse “age signals.” These “age keys” wouldn’t resolve concerns about the underlying tech used to estimate a user’s age, but advocates say they would minimize the number of age checks across platforms.

That initiative, which has maintained a low profile until recently, has scored two big wins. First, Meta announced in December that it would launch AgeKeys on Instagram this year. The Free Speech Coalition, a nonprofit trade association for the adult entertainment industry, has also endorsed AgeKeys as a privacy-preserving way to access pornographic material without compromising identity or security.

Although Privately partners with k-ID on age checks for social and gaming platforms, Privately has not joined the OpenAge Initiative. However, other leading age-check providers have signed on, including Incode, Persona, Socure, and Veratad, as well as platform owners like Meta and game developers like Konami.

K-ID’s corporate affairs officer, Luc Delany, told Ars that AgeKeys are stored in a password manager and are built on FIDO passkey technology that’s “as secure as the login that I use for my bank.”

For users accustomed to storing passwords, letting their devices store an age key may feel natural, especially since it doesn’t require opening an account or sharing an email address. Julian Corbett, the head of the OpenAge Initiative and a co-founder of k-ID, told Ars that some platforms have seen higher adoption of the tech than expected. On one platform that recently launched AgeKeys, for example, about 80 percent of users chose to save them, he said.

For platforms, AgeKeys could become a cost-effective solution. Because the only cost to the OpenAge Initiative is an encrypted handshake when the age signal is shared, platforms could perform “a million age checks using age keys for $3,000,” Delany said.

Participating platforms can set limits on which types of age estimation are accepted and how recently the age check must have been completed. Any AgeKeys lacking the right signals will be rejected.

The OpenAge Initiative’s website provides more [details](https://openageinitiative.org/), including [developer guides](https://docs.agekey.org/) explaining how its double-blind system is designed to protect privacy. Essentially, when someone uses an AgeKey, the age-check service provider requests access to the platform without knowing who the user is. Meanwhile, the OpenAge Initiative knows who the user is but doesn’t know which platform is receiving the age signal. The age check provider ultimately decides “yes” or “no,” granting or denying platform access.

Building that double-blind system was essential because “every single time age assurance is brought up, people are fearful that this is the end of anonymity on the Internet,” Corbett said. The “entire structure of the OpenAge Initiative is to give and build that trust with users that you actually have a dedicated age credential that explicitly and structurally and technologically guarantees a separation between identity and age and yet satisfies the compliance burden that regulators require.”

But he acknowledged that the biggest barrier to age keys will be skepticism, while noting that age keys do nothing to address privacy concerns about the underlying age checks.

## Reverse-engineering Yoti

OpenAge isn’t the only group that wants control over the age-key landscape.

One of the most dominant age check providers in the US, Yoti, has offered Age Tokens since 2021 and Yoti Keys since 2025. Yoti’s CEO, Robin Tombs, told Ars that the company recently “invited other age verification providers to issue compatible Age Tokens or Yoti Keys.” Approved vendors will likely begin offering their versions of Yoti age keys by the end of the year.

“While we support the broader objective of interoperable, reusable age credentials, we believe that trusted reusable age tokens or passkeys must meet clearly defined minimum standards of assurance and performance,” Tombs said. “In our view, those assurance thresholds are essential to maintaining regulatory confidence and user trust.”

Yoti arguably helped pave the way for more US laws attempting to age-gate the Internet—according to a [March report](https://mikespecter.com/assets/pdf/AgeVerification.pdf) from security researchers at Georgia Tech’s [Security Privacy and Democracy Research Laboratory](https://spdr.cc.gatech.edu/), which was “the first large-scale exploration of age verification providers” in the US.

When the Supreme Court ruled last summer that [online age verification does not violate the First Amendment](https://arstechnica.com/tech-policy/2025/06/supreme-court-upholds-texas-porn-law-that-caused-pornhub-to-leave-the-state/), justices relied partly on technical information provided by Yoti.

However, little is known about how well age-check services work to protect privacy. To fill the gaps, the researchers analyzed the top 1 million websites in two states that require age checks and one state that doesn’t. This broad survey revealed Yoti as the dominant provider, “used in over 60 percent of compliant sites” in the two affected states.

Tombs said that Yoti runs a million age checks per day. That’s substantially more than Privately, which runs about 100,000 checks on a good day.

Curious to learn more about how Yoti works beyond what’s disclosed in its [latest whitepapers](https://www.yoti.com/blog/yoti-age-estimation-white-paper/), one of the researchers, PhD cybersecurity student Shreyas Minocha, reverse-engineered version 2.6.2 of Yoti’s age estimation method.

It took hours of work in a single session, Minocha said, “because every new session, they give you a newly randomized copy of their source code.” He eventually succeeded, though, and found that Yoti uses machine learning to perform an on-device facial age estimate.

However, unlike with Privately’s FaceAssure, Yoti sends the user’s photo to its servers, along with other device metadata. Users can encrypt that data, a setting Yoti enables by default, but they can also turn that privacy-protecting feature off. Researchers told Ars that the option is “purely performative” and does not stop Yoti from accessing the content of the data.

Conducting a broader privacy analysis of all of Yoti’s age check options, Minocha’s team, working under assistant professor Michael Specter, concluded that Yoti “collects significant private information beyond what is strictly necessary to verify age” and that it “relies on sharing sensitive user information with several less user-visible fourth parties.”

Asked for comment on these claims, Tombs said that Yoti has “purposefully designed an age product that only collects the minimum information necessary to verify age, and our processes are regularly audited to ensure they meet strict privacy standards.”

He also confirmed that Yoti plans to roll out fully on-device facial age estimation with complete liveness detection similar to Privately’s tech later this year.

## Users’ fears of age checks are justified, experts say

For Internet users surveying the age-check landscape, it can feel impossible to determine which options are safest.

Regarding on-device solutions like Privately’s, Specter told Ars that he thinks “doing things on device is always going to be less bad” than sending data to a platform or age-check vendor, or to any less-visible third or fourth parties that may intercept it along the way.

To Specter, however, it seems odd to expect a user of any age to allow their own device to police their Internet habits.

“Inherently, your device should work for you regardless of who you are,” Specter said.

Baldwin suggested that the biggest issue for users may be trusting these systems over time, as any update could introduce a vulnerability that undermines the age check’s security. Since age checks will be required continually—such as when younger users become adults or when a platform doubts a user’s age—there will be no end to the cycle.

A better solution, Baldwin said, would be to pass a comprehensive federal data privacy law that protects all users from invasive new technologies.

But Privately’s CEO Tewari told Ars that he thinks the future of age check tech is more such tech, including age-aware cameras and microphones. Imagine turning on your camera, which automatically detects if it’s seeing or hearing an 84-year-old woman or a 13-year-old boy. Accurate age signals could be logged without ever sharing identity, Tewari suggested.

Baldwin did not agree that this would be ideal.

“The more cameras and microphones there are, the more eyes and ears are available to adversaries, regardless of the original intention,” Baldwin said. “Creating a dystopian world full of computerised eyes and ears is not the solution, and there will be significant harm if this leads to laws requiring devices to have surveillance capabilities. This technology will always be circumventable and always open up users to more threats to their privacy.”

[![Photo of Ashley Belanger](https://cdn.arstechnica.net/wp-content/uploads/2022/06/Ashley-Belanger-400x400.jpg)](https://arstechnica.com/author/ashleybelanger/)

Ashley is a senior policy reporter for Ars Technica, dedicated to tracking social impacts of emerging policies and new technologies. She is a Chicago-based journalist with 20 years of experience.

[90 Comments](https://arstechnica.com/tech-policy/2026/03/after-discord-fiasco-age-check-tech-promises-privacy-by-running-locally-does-it-work/#comments "90 comments")

1.  [![Listing image for first story in Most Read: Gamers react with overwhelming disgust to DLSS 5's generative AI glow-ups](https://cdn.arstechnica.net/wp-content/uploads/2026/03/dlss5-768x432.png)](https://arstechnica.com/gaming/2026/03/gamers-react-with-overwhelming-disgust-to-dlss-5s-generative-ai-glow-ups/)
