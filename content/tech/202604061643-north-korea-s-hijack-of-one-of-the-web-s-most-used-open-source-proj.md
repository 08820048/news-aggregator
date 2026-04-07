---
title: "North Korea’s hijack of one of the web’s most used open source projects was likely weeks in the making"
source: "Zack Whittaker"
url: "https://techcrunch.com/2026/04/06/north-koreas-hijack-of-one-of-the-webs-most-used-open-source-projects-was-likely-weeks-in-the-making/"
published: "2026-04-06T16:43:25.000Z"
category: "tech"
summary: "North Korean hackers pushed out malicious updates to a popular open source project by hacking a top developer's computer in a long-running campaign."
---
A North Korean cyberattack that last Monday [briefly hijacked](https://techcrunch.com/2026/03/31/hacker-hijacks-axios-open-source-project-used-by-millions-to-push-malware/) one of the most widely used open source projects on the web took weeks to carry out as part of a long-running campaign to target the code’s top developers.

The hijacking of the Axios project on March 31 was in part successful because it relied on well-resourced hackers building rapport and trust with their intended target over a long period of time to increase their odds of a successful eventual compromise. This kind of hack highlights the security challenges that developers of popular open source projects can face, at a time when government hackers and cybercriminals alike are targeting widely used projects for their ability to access, in some cases, millions of devices worldwide.

Jason Saayman, who maintains the popular Axios project that developers use to connect their apps to the internet, provided [a postmortem](https://github.com/axios/axios/issues/10636) with a timeline of the hack. He shared that the hackers began their targeting campaign around two weeks before eventually gaining control of his computer to push out malicious code.

By posing as a real company, creating a realistic-looking Slack workspace, and using fake profiles of its employees to build credibility, Saayman [said](https://github.com/axios/axios/issues/10636#issuecomment-4180237789) the suspected North Korean hackers then invited him into a web meeting that prompted him to download malware masquerading as an update necessary to access the call. Saayman said the lure [mimicked a technique](https://techcrunch.com/2024/11/28/north-korean-hackers-have-stolen-billions-in-crypto-by-posing-as-vcs-recruiters-and-it-workers/) used by North Korean hackers that tricks would-be victims into granting the hackers remote access to their system, often to steal their cryptocurrency. 

This attack, Saayman said, mimicked earlier hacks [attributed to North Korea](https://cloud.google.com/blog/topics/threat-intelligence/unc1069-targets-cryptocurrency-ai-social-engineering) by security researchers at Google.

After compromising and gaining remote access to Saayman’s computer, the hackers then released the malicious updates to the Axios project.

The two malicious Axios packages, pulled some three hours after they were first published on March 31, may have still infected thousands of systems during that window, though the full breadth of the mass hack is not yet fully clear. Any computer that installed a malicious version of the software during this time may have allowed the hackers to steal their private keys, credentials, and passwords from that computer, which can lead to further breaches.

Saayman did not immediately respond to an email with questions about the incident.

North Korean hackers remain one of the most active cyber threats on the internet today, blamed for the theft of at least [$2 billion in cryptocurrency](https://techcrunch.com/2025/10/07/north-korean-hackers-stole-over-2-billion-in-crypto-so-far-in-2025-researchers-say/) in 2025 alone.

The Kim Jong Un regime remains under international sanctions and banned from the global financial network for violating a ban on its nuclear weapons development program, which the country funds in large part by launching cyberattacks and stealing cryptocurrency.

North Korea is [believed to have thousands](https://www.38north.org/2026/01/from-digital-kleptocracy-to-rogue-crypto-superpower/) of highly organized hackers — the majority of whom are working against their will under the repressive Kim regime. These hackers spend weeks or months carrying out complex social engineering attacks aimed at gaining trust and eventually access to steal cryptocurrency and data to extort their victims.

Zack Whittaker is the security editor at TechCrunch. He also authors the weekly cybersecurity newsletter, [this week in security](https://this.weekinsecurity.com/).

He can be reached via encrypted message at zackwhittaker.1337 on Signal. You can also contact him by email, or to verify outreach, at [zack.whittaker@techcrunch.com](mailto:zack.whittaker@techcrunch.com).

[View Bio](https://techcrunch.com/author/zack-whittaker/)
