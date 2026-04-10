---
title: "Dad stuck in support nightmare after teen lied about age on Discord"
source: "
                    Ashley Belanger
                "
url: "https://arstechnica.com/tech-policy/2026/04/dad-stuck-in-support-nightmare-after-teen-lied-about-age-on-discord/"
published: "2026-04-10T11:30:45.000Z"
category: "tech"
summary: "Data dump confirms dad's suspicions that Discord knew teen's age prior to hack."
---
Minor gripes

Data dump confirms dad’s suspicions that Discord knew teen’s age prior to hack.

Brady Frey did not realize that his daughter lied about her age when she set up her Discord account. He only found out after her account got hacked and he got trapped in a spiraling support nightmare while trying to stop the hacker from targeting dozens of her young friends with financial extortion scams.

When Frey’s daughter signed up for Discord, she was 12 and technically not old enough to have an account. But like many kids who, regulators have found, commonly lie about their age to access social media platforms, she didn’t want to wait another year to join her friends on the messaging app. Hiding her age, she created an account that listed her as over 18 years old.

Now 13, the teen had been happily using the app for months when she suddenly got locked out of her account after clicking on a link from an attacker posing as Discord support. Since she didn’t enable two-factor authentication, the attacker was able to commandeer the account. Frey only found out what was happening when the attacker asked the teen to share her parents’ banking information if she wanted to get her account back.

Once Frey realized his daughter had been hacked, he assumed that Discord would promptly intervene, recognizing that many minor victims on her friends list could be harmed the longer the attacker kept control. Instead, Discord’s chatbot, Clyde, and a seeming human support member, Nelly, automatically closed her support tickets after telling her it would be best to report the issue from inside the app, which she could not access.

Frey told Ars he was shocked to see a platform as big as Discord relying on such poor support infrastructure.

“There’s no pathway for a parent to step in and advocate for a minor whose account has been compromised,” Frey told Ars.

## Discord won’t update age setting

Eight days passed, as Frey attempted to evade the support forum’s irrelevant auto-responses and abrupt ticket closures by clearly explaining that “we’re requesting priority handling given this involves a minor, and this account is actively communicating with other minors who may also be targeted by the same social engineering tactics.” But the ticket was ignored, and the hacker wasn’t booted until Ars intervened.

Logging back into the account and surveying the damage, Frey told Ars that 38 of his daughter’s friends were targeted with a social engineering scam that Bitdefender [reported](https://www.bitdefender.com/en-us/blog/hotforsecurity/discord-scam-accidentally-reported) in February is “widespread” on Discord.

Posing as the teen, the attacker claimed that she had accidentally reported her friends’ accounts as hackers and urged them to click links to verify their authenticity. Most of the friends seemingly did not fall for the scam, but two users appeared to have taken the bait, Frey told Ars.

While his daughter tried to contact her friends in the real world, Frey’s top priority once access was restored was to update the age setting. Hoping to help his daughter avoid future safety risks, he wanted to link her account to a Family Center that gave him parental controls. But the support nightmare continued, as Discord informed him that there is currently no way to “change the status of a Discord account if it was created as 18+.”

In the future, Discord [plans to roll out global age checks](https://arstechnica.com/tech-policy/2026/02/discord-faces-backlash-over-age-checks-after-data-breach-exposed-70000-ids/) that would [rely on AI and other methods](https://arstechnica.com/tech-policy/2026/03/after-discord-fiasco-age-check-tech-promises-privacy-by-running-locally-does-it-work/) to detect and verify users like Frey’s daughter, who should be marked as a teen. But in the meantime, Frey’s experience shows “what happens after a minor in real life is compromised and a parent tries to get help,” Frey said.

On top of repeated issues with the support forum, “Discord’s in-app reporting tools failed repeatedly,” he told Ars. “I couldn’t successfully submit reports through the platform’s own safety infrastructure.” And “when I pointed out that the attack was actively spreading to multiple children at the same school, it didn’t change the response,” Frey said.

Eventually, Discord reviewed the support tickets and banned the account, telling the teen that she had violated community guidelines by starting an account when she was 12. The only way to restore the account with age-appropriate settings would be to share a photo of the teen with identifying documents, like a birth certificate or passport.

Asked for comment, a Discord spokesperson told Ars that the platform “takes situations like this seriously, especially when they involve teens and account security.”

“We have clear policies on account takeovers and when we’re able to restore access,” Discord’s spokesperson said. “In this case, we validated account ownership, restored access, and provided a path for the user to confirm their age.”

Commenting on the scam, Discord said that “users should avoid suspicious links and enable two-factor authentication, and we encourage teens to have open conversations with a parent or guardian about their experiences online, with families using tools like Family Center to stay informed and engaged.”

Although Frey was hesitant to share his daughter’s sensitive documents due to privacy concerns following a [Discord breach that exposed 70,000 IDs](https://arstechnica.com/security/2025/10/discord-says-hackers-stole-government-ids-of-70000-users/) last fall, he “decided to go ahead with the age verification” so that she wouldn’t lose access to her account entirely. That process also proved difficult, with two support tickets ignored before Ars intervened again.

For Frey and his daughter, the ordeal stretched for more than four weeks of back-and-forth to reach this resolution. But for Frey, Discord’s unwillingness to update his daughter’s age setting sparked additional concerns that the platform might be hiding what it knew about his daughter’s account and when.

“Regardless of what age the account was set to at creation, my daughter is 13,” Frey said. “She was hacked. The attacker locked her out via 2FA, used her account to propagate the same attack to other children at her school, and attempted to solicit financial information from her and her peers.”

Seeking answers he couldn’t get from Discord’s support forum, he requested her data from Discord and soon confirmed his suspicions: The platform had labeled his daughter as a teen internally days before the hack occurred.

## Data reveals Discord knew teen’s age

Frey has a background in digital art and technology, and his daughter dreams of becoming an animator. He told Ars that as his daughter developed interests in various online tools, including apps like Discord and Roblox, his family openly discussed the risks of using these platforms and apps.

“We’re not rookies on technology,” he said.

After receiving the data dump on his daughter’s Discord account, a couple of things stuck out immediately as odd to Frey.

“There’s no age recorded at signup, but there’s something worth flagging: her data includes an age\_group field set to ’13–17,’ confirming Discord’s system knows she’s a teen,” Frey told Ars.

According to the data, Discord updated this field on March 9, about nine days before the account was hacked on March 18.

“They changed the age on their side, even though we can’t change the age on ours,” Frey said.

Additionally, Frey noticed that a separate field, “is\_underage,” was set to “false.” He told Ars that he thinks that “discrepancy matters because the underage flag likely controls whether stricter ad protections” for kids are “applied.”

Since his daughter set up the account with an 18+ setting, it’s possible that the field corresponded to her self-reported age. But Frey could see that Discord updated the setting twice: once two days after the hack, and again after her account was restored. Each time, she was marked as not underage, despite support forum messages that repeatedly informed Discord she was 13.

Seemingly, that meant that the platform could create “a detailed behavioral ad profile” on the teen, even though its internal system had categorized her in the 13–17 age group, Frey said.

Samantha Baldwin, a policy and research staff technologist for the Electronic Frontier Foundation (EFF), told Ars that Discord’s hesitancy to formally update the age setting is telling. Frey’s case shows why privacy advocates believe that age verification laws aren’t about “protecting children” but about “surveillance and censorship,” she said.

“That they would not recategorize a minor’s account demonstrates this clearly,” Baldwin said. “Discord is in the business of making money by selling their users’ personal data. They are implementing ‘age verification’ to meet regulatory compliance and to collect more data about their customers, not protect children.”

EFF has long [warned](https://www.eff.org/issues/age-verification) against age-gating the Internet, opposing the mass collection of IDs that might block users from accessing platforms and viewing age estimation technology as ineffective and privacy-invasive.

Ultimately, Frey let his daughter share her passport with Discord to end the issues with her account. That could put the teen’s sensitive identifying information at risk of a future breach, but Frey said he weighed his options and decided that the passport seemed to risk less exposure for a minor than sharing her birth certificate.

To avoid such risks, Discord plans to stop collecting as many IDs and rely on new technology, [like on-device face scans and age signals](https://arstechnica.com/tech-policy/2026/03/after-discord-fiasco-age-check-tech-promises-privacy-by-running-locally-does-it-work/), to detect when users are lying about their ages as global age checks roll out later this year. But any time a user appeals their age estimation, Discord would still require an ID. And for minors who may not be as skilled at explaining their issues to a chatbot, Frey’s experience shows how easily they could end up in the support loop that he got stuck in while attempting to free his teen’s account from a hacker.

For his daughter, getting the OK to share her passport meant she could finally chat with her Discord pals again. After weeks of begging for support, the teen was clearly exasperated when she tried to share her passport, and Discord support did not accept it and instead asked for a face scan. The chatbot Clyde seemingly messed up when prompting her to verify her age with k-ID, which Discord uses in some regions but not in the US currently.

“Please reopen the ticket, it is not about the Face Scan,” the teen said.

But the ticket wasn’t reopened until Ars poked Discord one last time. Her chat with Clyde ended instead with a plea from the teen that fell on deaf ears: “Hi Discord, we have a history of this problem. Please reopen the ticket. The automatic close is incorrect, just like it was wrong on the other tickets over the past month.”

[![Photo of Ashley Belanger](https://cdn.arstechnica.net/wp-content/uploads/2022/06/Ashley-Belanger-400x400.jpg)](https://arstechnica.com/author/ashleybelanger/)

Ashley is a senior policy reporter for Ars Technica, dedicated to tracking social impacts of emerging policies and new technologies. She is a Chicago-based journalist with 20 years of experience.

[157 Comments](https://arstechnica.com/tech-policy/2026/04/dad-stuck-in-support-nightmare-after-teen-lied-about-age-on-discord/#comments "157 comments")

1.  [![Listing image for first story in Most Read: Orion helium leak no threat to Artemis II reentry but will require redesign](https://cdn.arstechnica.net/wp-content/uploads/2026/04/55194459003_3bae619a73_o-768x432-1775781074.jpg)](https://arstechnica.com/space/2026/04/nasa-homes-in-on-likely-redesign-to-fix-orion-spacecrafts-leaky-valves/)
