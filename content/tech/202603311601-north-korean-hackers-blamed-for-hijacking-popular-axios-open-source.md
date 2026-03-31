---
title: "North Korean hackers blamed for hijacking popular Axios open-source project to spread malware"
source: "Lorenzo Franceschi-Bicchierai"
url: "https://techcrunch.com/2026/03/31/hacker-hijacks-axios-open-source-project-used-by-millions-to-push-malware/"
published: "2026-03-31T16:01:11.000Z"
category: "tech"
summary: "A hacker inserted malware in Axios, an open-source web tool downloaded tens of millions of times weekly, in a widespread hack."
---
A suspected North Korean hacker has hijacked and modified a popular open source software development tool to deliver malware that could put millions of developers at risk of being compromised.

On Monday, a hacker pushed malicious versions of the widely used JavaScript library called Axios, which developers rely on to allow their software to connect to the internet. The affected library was [hosted on npm](https://www.npmjs.com/package/axios), a software repository that stores code for open-source projects. Axios is downloaded [tens of millions of times](https://security.snyk.io/package/npm/axios#:~:text=WEEKLY%20DOWNLOADS%20\(100.3M\)) every week. 

The hijack was spotted and stopped in around three hours overnight on Monday into Tuesday, according to security firm StepSecurity, [which analyzed the attack](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan#:~:text=had%20been%20live%20for%20approximately%202%20hours%2053%20minutes). 

Hackers are increasingly targeting developers of popular open-source projects in an effort to mass-hack anyone who relies on the compromised code, potentially granting the hackers access to vast numbers of affected devices. These kinds of widespread breaches are called [supply chain attacks](http://techcrunch.com/2022/11/29/software-supply-chain-security-is-broader-than-solarwinds-and-log4j/) because they target software that allows hackers to then hack whoever downloaded the compromised software. In recent years, hackers have targeted companies like [3CX](https://techcrunch.com/2023/03/30/theres-a-new-supply-chain-attack-targeting-customers-of-a-phone-system-with-12-million-users/), [Kaseya](https://techcrunch.com/2021/07/05/kaseya-hack-flood-ransomware/), and [SolarWinds](https://techcrunch.com/2020/12/21/after-the-fireeye-and-solarwinds-breaches-whats-your-failsafe/), as well as open source tools such as [Log4j](https://techcrunch.com/2021/12/10/apple-icloud-twitter-and-minecraft-vulnerable-to-ubiquitous-zero-day-exploit/) and [Polyfill.io](http://techcrunch.com/2024/10/22/researchers-link-polyfill-supply-chain-attack-to-huge-network-of-copycat-gambling-sites/), to target large numbers of their users.

It’s unclear at this point how many people downloaded the malicious version of Axios during that timespan. Security company Aikido, which [also investigated the incident](https://www.aikido.dev/blog/axios-npm-compromised-maintainer-hijacked-rat), said anyone who downloaded the code “should assume their system is compromised.”

Google told TechCrunch that its security researchers are linking the Axios compromise to North Korean hackers.

“We have attributed the attack to a suspected North Korean threat actor we track as [UNC1069](https://cloud.google.com/blog/topics/threat-intelligence/unc1069-targets-cryptocurrency-ai-social-engineering),” said John Hultquist, the chief analyst for Google’s Threat Intelligence Group. “North Korean hackers have deep experience with supply chain attacks, which they’ve historically used to steal cryptocurrency. The full breadth of this incident is still unclear, but given the popularity of the compromised package, we expect it will have far reaching impacts.”

Techcrunch event

San Francisco, CA | October 13-15, 2026

#### Contact Us

Do you have more information about this hack? Or other supply chain attacks? From a non-work device, you can contact Lorenzo Franceschi-Bicchierai securely on Signal at +1 917 257 1382, or via Telegram, Keybase and Wire @lorenzofb, or [by email](mailto:lorenzo@techcrunch.com/)[.](mailto:lorenzo@techcrunch.com/)

The hacker was able to slip malicious code inside Axios by compromising the account of one of the project’s primary developers, who was authorized to push out updates. The hacker replaced the legitimate developer’s email address on the account with their own, making it more difficult for the developer to regain access.

Once in control of the account, the hacker inserted malicious code designed to deliver a remote access trojan, or RAT — essentially malware that can give hackers full, remote control of a victim’s computer. The hacker then pushed out new versions of Axios in a legitimate-looking update for Windows, macOS, and Linux users. 

The hackers also designed the malware, as well as some of the code used to deliver it, to automatically delete itself after installation in an attempt to hide from anti-malware engines and investigators, according to security researchers.

_Updated to include information from Google about the attribution to North Korea._

Lorenzo Franceschi-Bicchierai is a Senior Writer at TechCrunch, where he covers hacking, cybersecurity, surveillance, and privacy.

You can contact or verify outreach from Lorenzo by emailing [lorenzo@techcrunch.com](mailto:lorenzo@techcrunch.com), via encrypted message at +1 917 257 1382 on Signal, and @lorenzofb on Keybase/Telegram.

[View Bio](https://techcrunch.com/author/lorenzo-franceschi-bicchierai/)
