---
title: "An iPhone-hacking toolkit used by Russian spies likely came from U.S military contractor"
source: "Lorenzo Franceschi-Bicchierai"
url: "https://techcrunch.com/2026/03/09/an-iphone-hacking-toolkit-used-by-russian-spies-likely-came-from-u-s-military-contractor/"
published: "2026-03-10T01:56:01.000Z"
category: "tech"
summary: "Google found a series of hacking tools they said were used by a Russian espionage group and a cybercriminal group in China. Sources from a U.S. government defense contractor said some of those hacking tools were theirs."
---
A mass hacking campaign targeting iPhone users in Ukraine and China used tools that were likely designed by U.S. military contractor L3Harris, TechCrunch has learned. The tools, which were intended for Western spies, wound up in the hands of various hacking groups, including Russian government spooks and Chinese cybercriminals.

Last week, Google revealed that over the course of 2025 it discovered that [a sophisticated iPhone-hacking toolkit](https://techcrunch.com/2026/03/03/a-suite-of-government-hacking-tools-targeting-iphones-is-now-being-used-by-cybercriminals/) had been used in a series of global attacks. The toolkit, dubbed “Coruna” by its original developer, was made of 23 different components first used “in highly targeted operations” by an unnamed government customer of an unspecified “surveillance vendor.” It was then used by Russian government spies against a limited number of Ukrainians and finally by Chinese cybercriminals “in broad-scale” campaigns with the goal of stealing money and cryptocurrency. 

Researchers at mobile cybersecurity company iVerify, which [independently analyzed Coruna](https://iverify.io/blog/coruna-inside-the-nation-state-grade-ios-exploit-kit-we-ve-been-tracking), said they believed it may have been originally built by a company that sold it to the U.S. government.

Two former employees of government contractor L3Harris told TechCrunch that Coruna was, at least in part, developed by the company’s hacking and surveillance tech division, Trenchant. The two former employees both had knowledge of the company’s iPhone hacking tools. Both spoke on condition of anonymity because they weren’t authorized to talk about their work for the company.

“Coruna was definitely an internal name of a component,” said one former L3Harris employee, who was familiar with iPhone hacking tools as part of their work at Trenchant. 

“Looking at the technical details,” this person said, referring to some of the evidence Google published, “so many are familiar.” 

#### Contact Us

Do you have more information about Coruna, or other government hacking and spyware tools? From a non-work device, you can contact Lorenzo Franceschi-Bicchierai securely on Signal at +1 917 257 1382, or via Telegram, Keybase and Wire @lorenzofb, or [by email](mailto:lorenzo@techcrunch.com/)[.](mailto:lorenzo@techcrunch.com/)

The former employee said the overarching Trenchant toolkit housed several different components, including Coruna and related exploits. Another former employee confirmed that some of the details included in the published hacking toolkit came from Trenchant. 

L3Harris sells Trenchant’s hacking and surveillance tools exclusively to the U.S. government and its allies in the so-called Five Eyes intelligence alliance, which includes Australia, Canada, New Zealand, and the United Kingdom. Given Trenchant’s limited number of customers, it’s possible that Coruna was originally acquired and used by one of these governments’ intelligence agencies before falling into unintended hands, though it’s unclear how much of the published Coruna hacking toolkit were developed by L3Harris Trenchant.

An L3Harris spokesperson did not respond to a request for comment.

## **A globetrotting iPhone-hacking toolkit**

How Coruna went from the hands of a Five Eyes government contractor to a Russian government hacking group, and then to a Chinese cybercrime gang is unclear. 

But some of the circumstances appear similar to the case of [Peter Williams](https://techcrunch.com/2026/02/25/inside-the-story-of-the-us-defense-contractor-who-leaked-hacking-tools-to-russia/), a former general manager at Trenchant. From 2022 until he resigned in mid-2025, [Williams sold eight company hacking tools](https://techcrunch.com/2025/10/23/u-s-government-accuses-former-l3harris-cyber-boss-of-stealing-trade-secrets/) to [Operation Zero](https://techcrunch.com/tag/operation-zero/), a Russian company that [offers millions of dollars](https://techcrunch.com/2023/09/27/russian-zero-day-seller-offers-20m-for-hacking-android-and-iphones/) in exchange for [zero-day](https://techcrunch.com/2025/04/25/techcrunch-reference-guide-to-security-terminology/#zero-day) exploits, meaning vulnerabilities that are unknown to the affected vendor. 

Williams, a 39-year-old Australian citizen, [was sentenced to seven years in prison](https://techcrunch.com/2026/02/24/former-l3harris-trenchant-boss-jailed-for-selling-hacking-tools-to-russian-broker/) last month, after he admitted to stealing and selling the eight Trenchant hacking tools to Operation Zero for $1.3 million.  

The U.S. government said Williams, who [took advantage of having “full access”](https://techcrunch.com/2025/11/03/how-an-ex-l3-harris-trenchant-boss-stole-and-sold-cyber-exploits-to-russia/) to Trenchant’s networks, “betrayed” the United States and its allies. Prosecutors [accused him of leaking tools](https://techcrunch.com/2026/02/11/doj-says-trenchant-boss-sold-exploits-to-russian-broker-capable-of-accessing-millions-of-computers-and-devices/) that could have allowed whoever used them to “potentially access millions of computers and devices around the world,” suggesting the tools relied on vulnerabilities affecting widely used software like iOS.  

Operation Zero, which [was sanctioned by the U.S. government](https://techcrunch.com/2026/02/24/treasury-sanctions-russian-zero-day-broker-accused-of-buying-exploits-stolen-from-u-s-defense-contractor/) last month, claims to work exclusively with the Russian government and local companies. The U.S Treasury claimed that the Russian broker sold Williams’ “stolen tools to at least one unauthorized user.”

That would explain how the Russian espionage group, which Google has only identified as UNC6353, acquired Coruna and deployed it on compromised Ukrainian websites so that it would hack certain iPhone users from a specific geolocation who unwittingly visited the malicious site.

It is possible that once Operation Zero acquired Coruna and potentially sold it to the Russian government, the broker then resold the toolkit to someone else, perhaps another broker, another country, or even directly to cybercriminals. The Treasury alleged that a member of the Trickbot ransomware gang worked with Operation Zero, tying the broker to financially motivated hackers.

At that point, Coruna may have passed to other hands until it reached Chinese hackers. According to U.S. prosecutors, Williams recognized code that he wrote and sold to Operation Zero later being used by a South Korean broker.

![](https://techcrunch.com/wp-content/uploads/2026/03/operation-triangulation-kaspersky-l3harris-logo.png?w=680)

the logo Kaspersky made for Operation Triangulation next to the L3Harris logo. Image: Kaspersky and L3Harris

## **Operation Triangulation**

Google researchers wrote on Tuesday that two specific Coruna exploits and underlying vulnerabilities, called Photon and Gallium by their original developers, were used as zero-days in Operation Triangulation, a sophisticated hacking campaign allegedly used against Russian iPhone users. Operation Triangulation was [first revealed](https://techcrunch.com/2023/06/01/kaspersky-says-attackers-hacked-staff-iphones-with-unknown-malware/) by Kaspersky in 2023. 

Rocky Cole, the co-founder of iVerify, told TechCrunch that “the best explanation based on what’s known right now” points to Trenchant and the U.S. government being the original developers and customers of Coruna. Although, Cole added, he isn’t claiming this “definitively.”

That assessment, he said, is based on three factors. The timeline of Coruna’s use lines up with the Williams’ leaks, the structure of three modules — Plasma, Photon, and Gallium — found in Coruna bear strong similarities with Triangulation, and Coruna re-used some of the same exploits used in that operation, he said.

According to Cole, “people close to the defense community” claim Plasma was used in Operation Triangulation, “although there’s no public evidence of that.” (Cole previously worked at the U.S. National Security Agency.)

According to Google and iVerify, Coruna was designed to hack iPhone models running iOS 13 through 17.2.1, released between September 2019 and December 2023. Those dates line up with the timeline of some of Williams’s leaks, and the discovery of Operation Triangulation. 

One of the former Trenchant employees told TechCrunch that when Triangulation was first revealed in 2023, other employees at the company believed that at least one of the zero-days caught by Kaspersky “were from us, and potentially ‘ripped out’ of the” overarching project that included Coruna.

Another breadcrumb that points to Trenchant — [as security researcher Costin Raiu noted](http://x.com/craiu/status/2030019866963390962) — is the use of bird names for some of the 23 tools, such as Cassowary, Terrorbird, Bluebird, Jacurutu, and Sparrow. In 2021, [The Washington Post revealed](http://washingtonpost.com/technology/2021/04/14/azimuth-san-bernardino-apple-iphone-fbi/) that Azimuth, [one of the two startups](https://www.vice.com/en/article/iphone-zero-days-inside-azimuth-security/) later acquired by L3Harris and [merged into Trenchant](https://www.l3harris.com/all-capabilities/trenchant#:~:text=Trenchant%E2%80%99s%20expertise%20is%20the%20byproduct%20of%20the%20L3Harris%20acquisition%20of%20two%20highly%2Dregarded%20information%20security%20businesses%20%E2%80%93%20Azimuth%20Security%20and%20Linchpin%20Labs.), had sold a hacking tool called Condor to the FBI [in the infamous San Bernardino iPhone cracking case](https://www.vice.com/en/article/azimuth-security-san-bernardino-iphone/). 

After Kaspersky published its research on Operation Triangulation, Russia’s Federal Security Service (FSB) accused the NSA of hacking “thousands” of iPhones in Russia, targeting diplomats in particular. A Kaspersky spokesperson said at the time that the company did not have information on the FSB’s claims. The spokesperson did note that “indicators of compromise” — meaning evidence of a hack — identified by the Russian National Coordination Centre for Computer Incidents (NCCCI) were the same ones that Kaspersky had identified.

Boris Larin, a security researcher at Kaspersky, told TechCrunch in an email that “despite our extensive research, we are unable to attribute Operation Triangulation to any known \[[Advanced Persistent Threat](https://techcrunch.com/2025/04/25/techcrunch-reference-guide-to-security-terminology/#advanced-persistent-threat-apt)\] group or exploit development company.” 

Larin explained that Google linked Coruna to Operation Triangulation because they both exploit the same two vulnerabilities — Photon and Gallium. 

“Attribution cannot be based solely on the fact of exploitation of these vulnerabilities. All the details of both vulnerabilities have long been publicly available,” and thus anyone could have taken advantage of them, he said, adding that those two shared vulnerabilities “are just the tip of the iceberg.”  

Kaspersky never publicly accused the U.S. government of being behind Operation Triangulation. Curiously, the logo that the company created for the campaign — an apple logo [composed of several triangles](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2023/06/01112409/sl-operation-triangulation_featured-800x450.jpg) — is reminiscent of [the L3Harris logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH_ba_AFDAY4aNMBjDgp3RZgNrqiW0HjaQQ&s). It may not be a coincidence. Kaspersky has previously said it wouldn’t attribute a hacking campaign publicly while quietly signaling that it actually knew who was behind it, or who provided the tools for it.

In 2014, Kaspersky [announced](https://mashable.com/archive/kaspersky-lab-the-mask-careto) that it had caught a sophisticated and elusive government hacking group known as “Careto” (Spanish for “The Mask”). The company only said the hackers spoke Spanish. But the illustration of a mask that the company used in its report included the red and yellow colors of Spain’s flag, bull’s horns and nose ring, and castanets.

[As TechCrunch revealed last year](https://techcrunch.com/2025/05/23/mysterious-hacking-group-careto-was-run-by-the-spanish-government-sources-say/), Kaspersky researchers had privately concluded that “there was no doubt,” as one of them put it, that Careto was run by the Spanish government. 

On Wednesday, cybersecurity journalist Patrick Gray [said on an episode of his podcast Risky Business](http://youtube.com/watch?v=4MwR6dRixJo&t=840s) that he thought — based on “bits and pieces” he was confident about — that what Williams leaked to Operation Zero was the hacking kit used in the Triangulation campaign.   

Apple, Google, Kaspersky, and Operation Zero did not respond to requests for comment.
