---
title: "Spotify seeks $300M from Anna's Archive, which ignores all court proceedings"
source: "
                    Jon Brodkin
                "
url: "https://arstechnica.com/tech-policy/2026/03/spotify-lawsuit-tries-to-kick-annas-archive-off-the-web-without-much-success/"
published: "2026-03-26T21:27:16.000Z"
category: "tech"
summary: "Even with court orders, music firms struggle to eliminate notorious shadow library."
---
Whac-a-website

Even with court orders, music firms struggle to eliminate notorious shadow library.

Credit: Getty Images | Anadolu

Spotify and major record labels are seeking a $322 million default judgment from Anna’s Archive, which hasn’t responded to court proceedings over its scraping of millions of music files from Spotify’s streaming service.

The music companies are also seeking a permanent injunction in an attempt to eject the Anna’s Archive website from the Internet by cutting off its access to domain and hosting providers. But the plaintiffs previously obtained a similar injunction that proved to be little more than an inconvenience for the shadow library, which has changed providers and said it’s working on bolstering its ability to remain online in the face of court orders.

The music companies sued Anna’s Archive in late December and quickly [obtained a court order](https://arstechnica.com/tech-policy/2026/01/annas-archive-said-spotify-scrape-didnt-cause-domain-suspension-it-was-wrong/) that [shut down](https://arstechnica.com/tech-policy/2026/01/annas-archive-loses-org-domain-says-suspension-likely-unrelated-to-spotify-piracy/) the shadow library’s .org domain, though Anna’s Archive has remained online elsewhere. Anna’s Archive has filed no response to the lawsuit in US District Court for the Southern District of New York, and the clerk of court last month [certified](https://storage.courtlistener.com/recap/gov.uscourts.nysd.655608/gov.uscourts.nysd.655608.35.1.pdf) that the defendant is in default.

The plaintiffs yesterday asked for a [default judgment](https://storage.courtlistener.com/recap/gov.uscourts.nysd.655608/gov.uscourts.nysd.655608.33.1.pdf) ordering Anna’s Archive to pay $300 million to Spotify, $7.5 million to Sony, another $7.5 million to Universal Music Group (UMG), and $7.2 million to Warner. In addition to money, they seek a permanent injunction requiring domain and hosting companies to disable access to Anna’s Archive websites.

“Defendant’s blatant and willful disregard for Plaintiffs’ rights and the Court’s authority warrants imposition of statutory damages against Defendant for copyright infringement in the amount of $22,200,000, and for violation of the Digital Millenium Copyright Act (DMCA) in the amount of $300,000,000, as well as permanent injunctive relief,” Spotify and the record labels said in a [memorandum of law](https://storage.courtlistener.com/recap/gov.uscourts.nysd.655608/gov.uscourts.nysd.655608.34.0.pdf).

## “Blatant” violation of preliminary injunction

Anna’s Archive posted torrents with 2.8 million music files and said it had scrapped 86 million in all, but the plaintiffs seek damages only for 120,000 files they downloaded as part of their investigation into the leak. Spotify’s requested DMCA damages are based on statutory damages of $2,500 for each act of circumventing Spotify’s technological measures for protecting copyrighted works.

Plaintiffs said the DMCA damages of $2,500 would exceed $7 billion if applied to all 2.8 million released music files. The record labels’ requested copyright infringement damages that total $22.2 million are based on statutory damages of $150,000 per work, for a small subset of the files. As some people have pointed out, applying the $150,000 figure to 86 million songs would result in $13 trillion in damages.

The plaintiffs’ proposed order would tell Anna’s Archive to destroy all copies of music “downloaded, copied, or otherwise extracted from Spotify” and forbid Anna’s Archive from making the files available to anyone else. Anna’s Archive was primarily focused on books before it branched out to scraping Spotify. It asks individual users for donations in exchange for faster downloads, and “[enterprise-level donations](https://annas-archive.gl/blog/llms-txt.html)” from AI companies that want to use Anna’s Archive data to train large language models.

Of course, Anna’s Archive isn’t likely to pay the proposed financial penalty or delete the Spotify data, just as it was never likely to comply with a [January 2026 court order](https://arstechnica.com/tech-policy/2026/01/judge-orders-annas-archive-to-delete-scraped-data-no-one-thinks-it-will-comply/) in a different lawsuit demanding that it delete data scraped from the WorldCat library catalog. Ordering network companies to cut off Anna’s Archive is potentially a problem for the shadow library, but not one that has crippled it so far.

Spotify and record labels said the release of 2.8 million files on or around February 9 was a “blatant” violation of a preliminary injunction. “Defendant’s disregard of this Court’s authority is not limited to its noncompliance with the preliminary injunction,” they said. “Notwithstanding having been duly served with the summons and Complaint, the temporary restraining order, and the preliminary injunction, Defendant never timely answered or otherwise responded to the Complaint, and has never appeared or defended itself in this action.”

## Anna’s Archive: Avoiding trouble “until we shore up our resilience”

But the operator of Anna’s Archive seems to have partially changed course in response to the lawsuit. As [TorrentFreak reports](https://torrentfreak.com/spotify-and-labels-seek-322-million-default-judgment-against-annas-archive/), Anna’s Archive removed Spotify torrents from its website, though that doesn’t stop others from sharing them through the peer-to-peer network.

“AnnaArchivist” [wrote](https://www.reddit.com/r/Annas_Archive/comments/1rj50kg/goodbye_li_welcome_new_domains/) on Reddit last month, “We’ve temporarily embargoed our Spotify file release, after accidentally releasing some file torrents. It’s not worth the additional trouble the music industry’s lawyers are bringing, until we shore up our resilience.”

The permanent injunction proposed by Spotify and record labels would have similar terms as the preliminary order that Anna’s Archive was able to sidestep by moving to new domains. A permanent injunction thus may not be any more effective at eliminating Anna’s Archive from the web.

The plaintiffs’ memorandum of law notes that after the temporary restraining order was issued, the “Public Interest Registry disabled access to annasarchive.org, and Cloudflare disabled access to annas-archive.li and annas-archive.se. Shortly thereafter, however, Defendant retained a different Internet service provider to restore access to the ‘.se’ and ‘.li’ domains. Moreover, Defendant activated additional ‘mirror’ websites to host the infringed content.”

The annas-archive.li and annas-archive.se domains have since gone offline again, but Anna’s Archive still has a few active URLs. An official at Cloudflare, which was required to disable the authoritative nameservers used by the .li and .se domains, said it’s not hard for website operators to find replacements.

## Blocked sites pop “right back up somewhere else”

“The reality is that authoritative DNS doesn’t actually do very much, it’s very easy to replace,” Cloudflare Chief Legal Officer Alissa Starzak told Ars in an interview earlier this week, before the record labels’ latest request. “So if we terminate services to a particular site that’s using us for authoritative DNS, typically the site is right back up somewhere else very shortly thereafter… We generally make the point that it’s just not a very effective solution because it’s not removing content, it’s just removing a set of services about how you can potentially access it.”

Starzak explained that “it’s called authoritative because it’s the side that’s giving the information. It’s then taken by the \[DNS\] resolver and brought back to you as a user, which enables you to then connect to that content. It’s not part of the underlying content… the resolver comes and asks for directions and they get an answer of how to get there by the authoritative DNS server.”

Under the proposed permanent injunction, domain companies would have to disable Anna’s Archive domain names and nameservers. Hosting companies would have to “cease any hosting services for Defendant’s Websites or any other websites that host the infringing content or directly facilitate its distribution.”

The proposed restrictions would also apply to “Internet service providers for Defendant’s Websites.” This would apparently prevent ISPs from providing services that help Anna’s Archive stay online, but the proposed order does not instruct ISPs to block broadband subscribers from accessing any Anna’s Archive URL that manages to stay on the web.

Spotify and record labels asked the court to apply the requested permanent injunction to the Public Interest Registry, Cloudflare, the Switch Foundation, the Swedish Internet Foundation, the National Internet Exchange of India, Njalla SRL, IQWeb FZ-LLC, Immaterialism Ltd., Hosting Concepts B.V., Tucows Domains, and OwnRegistrar, Inc. It would additionally apply to all other domain, hosting, or Internet companies that have previously or could potentially provide services to the Anna’s Archive websites.

While Anna’s Archive lives on for now, Spotify and record labels point out that the founder has acknowledged being at risk of arrest and criminal charges that could ultimately sink the enterprise.

“Defendant has admitted that its shadow library business model is illegal and that it ‘deliberately violate\[s\] the copyright law in most countries,’” Spotify and record labels wrote. “Defendant also admits that it is intentionally ‘very careful’ to remain anonymous and ‘not leave any trace,’ because those who operate pirate libraries (like Defendant) are ‘at high risk of being arrested’ and ‘could face decades of prison time.’”

[![Photo of Jon Brodkin](https://cdn.arstechnica.net/wp-content/uploads/2016/05/j.brodkin-11_2.jpg)](https://arstechnica.com/author/jon-brodkin/)

Jon is a Senior IT Reporter for Ars Technica. He covers the telecom industry, Federal Communications Commission rulemakings, broadband consumer affairs, court cases, and government regulation of the tech industry.

[36 Comments](https://arstechnica.com/tech-policy/2026/03/spotify-lawsuit-tries-to-kick-annas-archive-off-the-web-without-much-success/#comments "36 comments")

1.  [![Listing image for first story in Most Read: Archaeologists may have found the grave of the legendary "fourth musketeer"](https://cdn.arstechnica.net/wp-content/uploads/2026/03/dartagnan-768x432.png)](https://arstechnica.com/science/2026/03/archaeologists-may-have-found-the-grave-of-the-legendary-fourth-musketeer/)
