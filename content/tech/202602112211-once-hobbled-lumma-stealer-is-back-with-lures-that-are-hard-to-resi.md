---
title: "Once-hobbled Lumma Stealer is back with lures that are hard to resist"
source: "
                    Dan Goodin
                "
url: "https://arstechnica.com/security/2026/02/once-hobbled-lumma-stealer-is-back-with-lures-that-are-hard-to-resist/"
published: "2026-02-11T22:11:40.000Z"
category: "tech"
summary: "ClickFix bait, combined with advanced Castleloader malware, is installing Lumma \"at scale.\""
---
Last May, law enforcement authorities around the world scored a key win when they hobbled the infrastructure of Lumma, an infostealer that infected nearly 395,000 Windows computers over just a two-month span leading up to the international operation. Researchers said Wednesday that Lumma is once again “back at scale” in hard-to-detect attacks that pilfer credentials and sensitive files.

Lumma, also known as Lumma Stealer, first appeared in Russian-speaking cybercrime forums in 2022. Its cloud-based malware-as-a-service model provided a sprawling infrastructure of domains for hosting lure sites offering free cracked software, games, and pirated movies, as well as command-and-control channels and everything else a threat actor needed to run their infostealing enterprise. Within a year, Lumma was selling for as much as $2,500 for premium versions. By the spring of 2024, the FBI counted more than 21,000 listings on crime forums. Last year, Microsoft said Lumma had become the “go-to tool” for multiple crime groups, including Scattered Spider, one of the most prolific groups.

## Takedowns are hard

The FBI and an international coalition of its counterparts [took action](https://arstechnica.com/security/2025/05/authorities-carry-out-global-takedown-of-infostealer-used-by-cybercriminals/) early last year. In May, they said they seized 2,300 domains, command-and-control infrastructure, and crime marketplaces that had enabled the infostealer to thrive. Recently, however, the malware has made a comeback, allowing it to infect a significant number of machines again.

“LummaStealer is back at scale, despite a major 2025 law-enforcement takedown that disrupted thousands of its command-and-control domains,” researchers from security firm Bitdefender [wrote](https://www.bitdefender.com/en-us/blog/labs/lummastealer-second-life-castleloader). “The operation has rapidly rebuilt its infrastructure and continues to spread worldwide.”

As with Lumma before, the recent surge leans heavily on “ClickFix,” a form of social engineering lure that’s proving to be vexingly effective in causing end users to infect their own machines. Typically, these types of bait come in the form of fake CAPTCHAs that—rather requiring users to click a box or identify objects or letters in a jumbled image—instruct them to copy text and paste it into an interface, a process that takes just seconds. The text comes in the form of malicious commands provided by the fake CAPTCHA. The interface is the Windows terminal. Targets who comply then install loader malware, which in turn installs Lumma.
