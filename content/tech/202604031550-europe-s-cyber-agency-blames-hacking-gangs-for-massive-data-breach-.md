---
title: "Europe’s cyber agency blames hacking gangs for massive data breach and leak"
source: "Lorenzo Franceschi-Bicchierai"
url: "https://techcrunch.com/2026/04/03/europes-cyber-agency-blames-hacking-gangs-for-massive-data-breach-and-leak/"
published: "2026-04-03T15:50:43.000Z"
category: "tech"
summary: "CERT-EU blamed the cybercrime group TeamPCP for the recent hack on the European Commission, and said the notorious ShinyHunters gang was responsible for leaking the stolen data online."
---
The European Union’s cybersecurity agency said Thursday that [a recent hack and data breach at the EU’s executive body](https://techcrunch.com/2026/03/27/european-commission-confirms-cyberattack-after-hackers-claim-data-breach/) was the work of a cybercriminal group known as TeamPCP. 

In a [new report](https://cert.europa.eu/blog/european-commission-cloud-breach-trivy-supply-chain), CERT-EU also reported that the hackers stole around 92 gigabytes of compressed data from a compromised Amazon Web Services (AWS) account used by the bloc’s executive, the European Commission, which included personal data containing names, email addresses, and the contents of emails. 

The breach affected the cloud infrastructure of the Commission’s Europa.eu platform, which member states use to host websites and publications of the bloc’s institutions and agencies.

CERT-EU wrote that the data of at least 29 other EU entities may be affected, and that dozens of internal European Commission clients could have had data stolen as well. 

The stolen data was then posted online by another hacking group, the notorious ShinyHunters. 

While the size of the data breach is itself notable, the cyber agency’s attribution blaming two separate hacking groups for the same incident is unusual. A member of ShinyHunters told TechCrunch in an online chat that they had stolen some of the data that TeamPCP had previously taken in earlier attacks, and then leaked it.

TeamPCP could not be reached for comment.

CERT-EU said that the breach originated on March 19 when hackers acquired a secret API key associated with the European Commission’s AWS account, following an earlier hack targeting the [open source security tool Trivy](https://unit42.paloaltonetworks.com/teampcp-supply-chain-attacks/). The Commission inadvertently downloaded a copy of the compromised Trivy tool following the project’s recent breach, allowing the hackers to steal its secret API key and use that access to pivot to obtain data stored in the Commission’s AWS account.

While the service said it’s still analyzing the data published online, close to 52,000 files contain sent email messages. CERT-EU said the majority of these emails are automated with little to no content, but emails that bounced back with an error “may contain the original user-submitted content, posing a risk of personal data exposure.”

CERT-EU said it is already in contact with affected organizations. 

#### Contact Us

Do you have more information about this breach? Or other cyberattacks? From a non-work device, you can contact Lorenzo Franceschi-Bicchierai securely on Signal at +1 917 257 1382, or via Telegram and Keybase @lorenzofb, or [email](mailto:lorenzo@techcrunch.com/)[.](mailto:lorenzo@techcrunch.com/)

A spokesperson for the European Commission told TechCrunch that the body is closed until next week, and would respond to a request for comment then. 

Besides the Trivy breach, TeamPCP has been linked to ransomware attacks and crypto-mining campaigns, [says Aqua Security](https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/), which develops Trivy. The hackers have more recently been behind a systematic campaign of supply chain attacks compromising other open source security projects, [according to Palo Alto Networks Unit 42](https://unit42.paloaltonetworks.com/teampcp-supply-chain-attacks/).

By targeting developers with keys to access sensitive systems, the hackers “then have the ability to hold compromised organizations for ransom, demanding extortion payments,” Unit 42 wrote.

_This story was updated to include comments from a member of ShinyHunters._

Lorenzo Franceschi-Bicchierai is a Senior Writer at TechCrunch, where he covers hacking, cybersecurity, surveillance, and privacy.

You can contact or verify outreach from Lorenzo by emailing [lorenzo@techcrunch.com](mailto:lorenzo@techcrunch.com), via encrypted message at +1 917 257 1382 on Signal, and @lorenzofb on Keybase/Telegram.

[View Bio](https://techcrunch.com/author/lorenzo-franceschi-bicchierai/)
