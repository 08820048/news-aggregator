---
title: "From Iran to Ukraine, everyone's trying to hack security cameras"
source: "
                    Andy Greenberg, wired.com
                "
url: "https://arstechnica.com/security/2026/03/from-iran-to-ukraine-everyones-trying-to-hack-security-cameras/"
published: "2026-03-07T11:30:06.000Z"
category: "tech"
summary: "Research shows apparent Iranian state hackers trying to hijack consumer-grade cameras."
---
The camera’s eye

Research shows apparent Iranian state hackers trying to hijack consumer-grade cameras.

Cameras are placed in public areas in Tehran. Credit: Anadolu/Getty Images

For decades, satellites, [drones](https://www.wired.com/tag/drones), and human spotters have all been part of war’s [surveillance](https://www.wired.com/tag/surveillance) and reconnaissance tool kit. In an age of cheap, insecure, Internet-connected consumer devices, however, militaries have gained another powerful set of eyes on the ground: every [hackable security camera](https://www.wired.com/story/kalay-iot-bug-video-feeds/) installed outside a home or on a city street, pointed at potential bombing targets.

On Wednesday, Tel Aviv–based security firm Check Point released [new research](https://research.checkpoint.com/2026/interplay-between-iranian-targeting-of-ip-cameras-and-physical-warfare-in-the-middle-east/) describing hundreds of hacking attempts that targeted consumer-grade security cameras around the [Middle East](https://www.wired.com/tag/middle-east)—with many apparently timed to [Iran’s recent missile and drone strikes](https://www.wired.com/story/every-country-directly-impacted-by-the-war-on-iran/) on targets that included Israel, Qatar, and Cyprus. Those camera-hijacking efforts, some of which Check Point has attributed to a hacker group that’s been previously linked to Iranian intelligence, suggest that Iran’s military has tried to use civilian surveillance cameras as a means to spot targets, plan strikes, or assess damage from its attacks as it retaliates for the [US and Israeli bombings](https://www.wired.com/story/us-iran-strike-donald-trump/) that have sparked a widening war in the region.

Iran wouldn’t be the first to adopt that camera-hacking surveillance tactic. Earlier this week, the [Financial Times reported](https://www.ft.com/content/bf998c69-ab46-4fa3-aae4-8f18f7387836) that the Israeli military had accessed “nearly all” the traffic cameras in Iran’s capital of Tehran and, in partnership with the CIA, used them to target the air strike that killed Ayatollah Ali Khamenei, Iran’s supreme leader. In Ukraine, the country’s officials have warned for years that [Russia has hacked consumer surveillance cameras](https://www.theguardian.com/world/2025/may/21/russia-accused-trying-disrupt-aid-ukraine-hacking-border-crossings) to target strikes and spy on troop movements—while Ukrainian hackers have [hijacked Russian cameras](https://www.bbc.com/news/technology-68722542) to surveil Russian troops and perhaps even to [monitor its own attacks](https://www.militarytimes.com/global/europe/2025/12/16/ukraines-first-underwater-drone-strike-caught-on-hacked-cameras/).

Exploiting the insecurity of networked civilian cameras is, in other words, becoming part of the standard operating procedures of armed forces around the world: A relatively cheap and accessible means of getting eyes on a target hundreds of thousands of miles away. “Now hacking cameras has become part of the playbook of military activity,” says Sergey Shykevich, who leads threat intelligence research at Check Point. “You get direct visibility without using any expensive military means such as satellites, often with better resolution.”

“For any attacker who is planning military activity, it’s now a straightforward act to try it,” Shykevich adds, “because it’s easy and provides very good value for your effort.”

In the latest example of that recon technique, Check Point found that hackers had attempted to exploit five distinct vulnerabilities in Hikvision and Dahua security cameras that would have allowed their takeover. Shykevich describes dozens of attempts—which Check Point says it blocked—across Bahrain, Cyprus, Kuwait, Lebanon, Qatar, and the United Arab Emirates, as well as hundreds more in Israel itself. Check Point notes it could view attempted intrusions only on networks equipped with its firewall network appliances and that its findings are likely skewed by the company’s relatively larger customer base in Israel.

None of the five vulnerabilities are “complicated or sophisticated,” Shykevich says. All of them have been patched in previous software updates from Hikvision and Dahua and were discovered years ago—one as early as 2017. Yet as with hackable bugs in so many Internet-of-things devices, they persist in security cameras because owners rarely install updates or even become aware that they’re available. ([Hikvision and Dahua are both effectively banned](https://www.wired.com/story/surveillance-china-security-camera-giant-ipvm/) in the United States due to security concerns; neither company responded to WIRED’s request for comment on the hacking campaign.)

Check Point found that the camera-hacking attempts were largely timed to February 28 and March 1, just as the US and Israel were beginning their air strikes across Iran. Some of the attempted camera takeovers also occurred in mid-January, as protests spread across Iran and the US and Israel made preparations for their attacks. Check Point says it has tied the targeting of the cameras to three distinct groups it believes to be Iranian in origin, based on the servers and VPNs they used to carry out the campaign. Some of those servers, Shykevich notes, have been previously linked in particular to the Iranian hacker group known as Handala, which several cybersecurity companies have identified as working on behalf of Iran’s Ministry of Intelligence and Security.

In fact, Check Point says it tracked similar Iranian targeting of cameras as early as last June during Israel’s previous 12-day war with Iran. The head of Israel’s National Cybersecurity Directorate, Yossi Karadi, also [warned](https://www.jpost.com/israel-news/defense-news/article-879689) at the time that Iranian hackers were using civilian camera systems to target Israelis and had compromised a street camera across from the country’s Weizmann Institute of Science before hitting it with a missile.

The joint US and Israeli strikes on Iran and the assassination of Khamenei have revealed, however, just how thoroughly Israel’s own hackers—or those of its allies, including potentially the US—had penetrated Tehran’s camera systems, too. Israeli intelligence sources [speaking to the Financial Times](https://www.ft.com/content/bf998c69-ab46-4fa3-aae4-8f18f7387836) described assembling the patterns of life of Iranian security guards around Khamenei based on the real-time data that traffic cameras provided across the city. “We knew Tehran like we know Jerusalem,” one source told the FT.

Prior to the current escalating war in the Middle East, the powerful surveillance role of hacked civilian cameras first became apparent in the midst of Russia’s war in Ukraine. Ukrainian officials warned in January 2024, for instance, that Russian forces had hacked two security cameras in the capital of Kyiv to observe Ukrainian infrastructure targets and air defenses. “The aggressor used these cameras to collect data to prepare and adjust strikes on Kyiv,” reads a [post from Ukraine’s SSU intelligence service](https://ssu.gov.ua/en/novyny/sbu-zablokuvala-vebkamery-yaki-zasvityly-robotu-ppo-pid-chas-raketnoi-ataky-rf-na-kyiv-2-sichnia-video).

The SSU went so far, it writes, as to somehow disable 10,000 Internet-connected cameras—it didn’t reveal how—that could be used by Russia’s military. “The SSU is calling on the owners of street webcams to stop online broadcasts from their devices, and on citizens to report any streams from such cameras,” the post reads.

Even as Ukraine has attempted to block that spying technique, it seems also to have adopted it. When the Ukrainian military used its own underwater drone to blow up a Russian submarine in the bay of Sevastopol in Crimea, it published video that defense-focused news outlet [The Military Times](https://www.militarytimes.com/global/europe/2025/12/16/ukraines-first-underwater-drone-strike-caught-on-hacked-cameras/) noted looked very much like it had come from a hacked surveillance camera. A [BBC report](https://www.bbc.com/news/technology-68722542) about Ukrainian hacktivist group One Fist notes more explicitly that they were commended by the Ukrainian government for work that included hacking cameras to watch Russia’s movement of matériel across the Kerch Bridge between Russia and Crimea.

“The advantages of co-opting a civilian camera network are presence and expense,” says Peter W. Singer, a military-focused researcher at the New America Foundation and the author of the 2015 science fiction novel _Ghost Fleet_, which imagines future war scenarios. “The adversary’s already done the work for you. They’ve placed cameras all around a city.”

Singer notes that hacking those cameras is vastly cheaper and easier than relying on satellites or high-altitude drones. The trick is stealthier than drones, too, which are only viable when the enemy has few air defenses, and drones can often be detected by countersurveillance measures. Ground-level, hacked cameras also offer angles and perspectives that aren’t possible with the bird’s-eye view of a satellite or drone, he adds. All of that makes them powerful tools for reconnaissance, targeting, and what he calls “bomb damage assessment” after a strike.

Hacked cameras are a tough problem to solve, in part, because those who have the ability to secure them rarely suffer the consequences of that surveillance, says Beau Woods, a security researcher who formerly worked as an adviser to the US Cybersecurity and Infrastructure Security Agency. “The manufacturer of the device and the owner of the device are not the victim,” Woods says. “So the victim isn’t in a position to control the tool that’s used by the adversary.”

The difficulty of pinning down responsibility for Internet-connected consumer cameras means that their role in military surveillance is likely to persist for many years—and wars—to come.

“Who’s liable, who’s responsible, who’s accountable?” Woods asks. “The camera itself is not directly causing the harm. But it’s part of the kill chain.”

_This story originally appeared on [wired.com](https://www.wired.com/story/from-ukraine-to-iran-hacking-security-cameras-is-now-part-of-wars-playbook/)._

[![Photo of WIRED](https://cdn.arstechnica.net/wp-content/uploads/2023/09/wired-headshot.jpg)](https://arstechnica.com/author/wired-com/)

Wired.com is your essential daily guide to what's next, delivering the most original and complete take you'll find anywhere on innovation's impact on technology, science, business and culture.

[40 Comments](https://arstechnica.com/security/2026/03/from-iran-to-ukraine-everyones-trying-to-hack-security-cameras/#comments "40 comments")

1.  [![Listing image for first story in Most Read: Satellite firm pauses imagery after revealing Iran's attacks on US bases](https://cdn.arstechnica.net/wp-content/uploads/2026/03/GettyImages-2264019549-768x432.jpg)](https://arstechnica.com/space/2026/03/satellite-firm-pauses-imagery-after-revealing-irans-attacks-on-us-bases/)
