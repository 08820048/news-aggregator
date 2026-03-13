---
title: "The who, what, and why of the attack that has shut down Stryker's Windows network"
source: "
                    Dan Goodin
                "
url: "https://arstechnica.com/security/2026/03/whats-known-about-wiper-attack-on-stryker-a-major-supplier-of-lifesaving-devices/"
published: "2026-03-12T22:18:11.000Z"
category: "tech"
summary: "Company says it doesn't know how long it will take to restore its Microsoft environment."
---
[Skip to content](#main)

STRIKING STRYKER

Company says it doesn’t know how long it will take to restore its Microsoft environment.

Credit: Getty Images

Within hours of the US and Israel launching airstrikes on Iran two weeks ago, security professionals warned organizations around the world to be on heightened watch for destructive retaliatory hacks. On Wednesday, the predictions appeared to come true as Stryker, a multinational maker of medical devices, confirmed a cyberattack that took down much of its infrastructure, and a hacking group long known to be aligned with the Iranian government claimed responsibility.

## Where things stand

### **When and how did the attack come about?**

The first indications were social media posts and a report from a news organization in Ireland. Messages posted by purported Stryker employees or their family members on [social](https://www.reddit.com/r/cybersecurity/comments/1rqopq0/stryker_hit_by_handala_intune_managed_devices/) [media](https://www.facebook.com/pat.a.bowen/posts/pfbid0Nv4dFBM9MLjRaFN9k6m9HvpkcuaQ8wPHp3oMX4Mtumob4W6129gVk22JupDdGdMil) said workers’ phones and computers had been wiped. A [report](https://www.irishexaminer.com/news/munster/arid-41808308.html) the Irish Examiner published Wednesday morning, citing multiple anonymous sources, made the same claims and said some employees witnessed login pages on wiped devices displaying the logo of Handala Hack, a group that researchers who have followed it for years say is aligned with the Iranian government.

### **What is the status now?**

Stryker [said Thursday](https://www.stryker.com/us/en/about/news/2026/a-message-to-our-customers-03-2026.html) that it’s in the midst of responding to a “global network disruption to our Microsoft environment as a result of a cyber attack.” The update went on to say responders have no indication that ransomware or malware—the usual causes for such outages—were involved. The responders believe the incident is now contained and limited to the internal Microsoft environment.

The company did say that Lifepak, Lifenet, and Mako devices—which medical professionals use to monitor for and control heart attacks, manage and transmit patient information in real time, and perform surgeries—were all functioning normally. In a [Securities and Exchange Commission filing](https://d18rn0p25nwr6d.cloudfront.net/CIK-0000310764/7fd1068c-1cef-4fd3-8a20-8c086e15da56.pdf) on Wednesday, Stryker said it had no timeline for recovering normal day-to-day activities.

### **How was Stryker’s network breached in the first place?**

That information isn’t yet known publicly. That leaves outsiders to make educated guesses. Iran-sponsored hackers have a [long history](https://arstechnica.com/information-technology/2019/06/dhs-cyber-director-warns-of-surge-in-iranian-wiper-hack-attacks/) of using wiper malware to permanently destroy data and the hard drives that store it. Shamoon, a wiper that targeted Saudi Aramco, the world’s largest exporter of crude oil, [in 2012](http://arstechnica.com/security/2012/08/shamoon-malware-attack/) and [again struck](https://arstechnica.com/information-technology/2016/12/shamoon-wiper-malware-returns-with-a-vengeance/) Saudi Arabian organizations four years later, has been linked to Iran, although [not conclusively](https://arstechnica.com/information-technology/2012/08/mystery-malware-amateur-coding-error/). In 2019, researchers reported the discovery of a new wiper, [dubbed ZeroCleare](https://arstechnica.com/information-technology/2019/12/new-iranian-wiper-discovered-in-attacks-on-middle-eastern-companies/), that has also been linked to Iran.

There are reasons to believe that the attack against Stryker may not have fit this precise pattern. For one, Stryker has said that it has yet to find evidence of malware. And for another, some social media posts—and an unnamed source cited in [this report](https://krebsonsecurity.com/2026/03/iran-backed-hackers-claim-wiper-attack-on-medtech-firm-stryker/#more-73316) from KrebsOnSecurity—indicate the data wiping was carried out using InTune, a tool made by Microsoft that allows administrators to remotely control large fleets of machines from a single interface.

What’s more, security firm Check Point [said](https://research.checkpoint.com/2026/handala-hack-unveiling-groups-modus-operandi/) that “Void Manticore,” its internal tracking name for Handala Hack, has historically used both custom-built and publicly available tools and manual hands-on techniques for data wiping. Company researchers also said that the group often relies on underground criminal services to obtain initial access to targets, a means that may have been used against Stryker.

Taken together, these considerations may indicate that the threat actors accessed Stryker’s InTune interface through an access broker or other means and used the tool to issue deletion commands throughout the company’s Windows network.

### **What else is known about Handala Hack?**

The group has existed since [at least 2023](https://research.checkpoint.com/2024/bad-karma-no-justice-void-manticore-destructive-activities-in-israel/). It takes its name from a character in the political cartoons of Palestinian artist Naji al-Ali. The group’s logo depicts a small Palestinian boy who is a symbol associated with Palestinian resistance.

Check Point and other security firms have said Handala Hack is affiliated with Iran’s Ministry of Intelligence and Security and maintains multiple online personas. Compared to other nation-state-sponsored hacking groups, Handala Hack has kept a comparatively lower profile. Still, it has carried out a series of destructive wiping attacks and influence operations over the years.

Around the same time the Stryker attack came to light, posts to a [Telegram account](https://t.me/HANDALA_HPR2/30) and [website](https://handala-hack.to/) controlled by Handala Hack took credit for the takedown. Handala posts cited last week’s killing of 165 civilians at a girls’ school in Iran by an American Tomahawk missile and past hacking operations that the US and Israel have perpetuated on Iran.

### **What is the point of striking a corporation in retaliation for airstrikes carried out by the US and Israel?**

Such actions are taken for their psychological effects, which are often disproportionately larger than the resources required to bring them about. With limited means for Iran to strike back militarily, the Stryker disruption allows an alternative means for the country and its allies to retaliate. The success is intended to demonstrate that pro-Iranian forces can still exact a price that has a material effect on large populations in the US, Israel, and countries allied with them.

As a major supplier of lifesaving medical devices relied on throughout the US and its allies, Stryker plays a strategic and symbolic role in their security, researchers at Flash Point [said Thursday](https://flashpoint.io/blog/destructive-activity-targeting-stryker-highlights-emerging-supply-chain-risks/). “By operating behind a persona styled as a grassroots, pro-Palestinian resistance movement, Iranian state-nexus actors are able to conduct destructive cyber operations against Western organizations while maintaining a degree of plausible deniability.”

[![Photo of Dan Goodin](https://cdn.arstechnica.net/wp-content/uploads/2018/10/Dang.jpg)](https://arstechnica.com/author/dan-goodin/)

Dan Goodin is Senior Security Editor at Ars Technica, where he oversees coverage of malware, computer espionage, botnets, hardware hacking, encryption, and passwords. In his spare time, he enjoys gardening, cooking, and following the independent music scene. Dan is based in San Francisco. Follow him at [here](https://infosec.exchange/@dangoodin) on Mastodon and [here](https://bsky.app/profile/dangoodin.bsky.social) on Bluesky. Contact him on Signal at DanArs.82.

[25 Comments](https://arstechnica.com/security/2026/03/whats-known-about-wiper-attack-on-stryker-a-major-supplier-of-lifesaving-devices/#comments "25 comments")

1.  [![Listing image for first story in Most Read: Facing heavy losses, Honda cancels its three US-made electric vehicles](https://cdn.arstechnica.net/wp-content/uploads/2025/01/01-Honda-0-Saloon-Honda-0-SUV-copy-768x432.jpg)](https://arstechnica.com/cars/2026/03/facing-heavy-losses-honda-cancels-its-three-us-made-electric-vehicles/)
