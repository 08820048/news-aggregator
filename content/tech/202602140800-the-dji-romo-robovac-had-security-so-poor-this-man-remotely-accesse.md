---
title: "The DJI Romo robovac had security so poor, this man remotely accessed thousands of them"
source: "Sean Hollister"
url: "https://www.theverge.com/tech/879088/dji-romo-hack-vulnerability-remote-control-camera-access-mqtt"
published: "2026-02-14T08:00:00.000Z"
category: "tech"
summary: "The DJI Romo robot vacuum in its translucent dock. | Image: DJI Sammy Azdoufal claims he wasn't trying to hack every robot vacuum in the world. He just wanted to remote control his brand-new DJI Romo vacuum with a PS5 gamepad, he tells The Verge, because it sounded fun. But when his homegrown remote control app started talking to DJI's servers, it wasn't just one vacuum cleaner that replied. Roughly 7,000 of them, all around the world, began treating Azdoufal like their boss. He could remotely control them, and look and listen through their live camera feeds, he tells me, saying he tested that out with a friend. He could watch them map out each room of a house, generating a complete 2D floor plan. He … Read the full story at The Verge."
---
Sammy Azdoufal claims he wasn’t trying to hack every robot vacuum in the world. He just wanted to remote control his brand-new DJI Romo vacuum with a PS5 gamepad, he tells _The Verge_, because it sounded fun.

But when his homegrown remote control app started talking to DJI’s servers, it wasn’t just _one_ vacuum cleaner that replied. Roughly 7,000 of them, all around the world, began treating Azdoufal like their boss.

He could remotely control them, and look and listen through their live camera feeds, he tells me, saying he tested that out with a friend. He could watch them map out each room of a house, generating a complete 2D floor plan. He could use any robot’s IP address to find its rough location.

“I found my device was just one in an ocean of devices,” he says.

[![A map like the one I saw, with robots and packets trickling in.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-api-communications-reverse-engineered-v0-e3sgj2e3ewhg1-redacted.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-api-communications-reverse-engineered-v0-e3sgj2e3ewhg1-redacted.jpg?quality=90&strip=all&crop=0,0,100,100)

On Tuesday, when he showed me his level of access in a live demo, I couldn’t believe my eyes. Ten, hundreds, thousands of robots reporting for duty, each phoning home MQTT data packets every three seconds to say: their serial number, which rooms they’re cleaning, what they’ve seen, how far they’ve traveled, when they’re returning to the charger, and the obstacles they encountered along the way.

I watched each of these robots slowly pop into existence on a map of the world. Nine minutes after we began, Azdoufal’s laptop had already cataloged 6,700 DJI devices across 24 different countries and collected over 100,000 of their messages. If you add the company’s [DJI Power](https://www.theverge.com/news/691111/dji-power-2000-station-price-date) portable power stations, which also phone home to these same servers, Azdoufal had access to over 10,000 devices.

[![Azdoufal says he could remote-control robovacs and view live video over the internet.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/videoframe_5741.png?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/videoframe_5741.png?quality=90&strip=all&crop=0,0,100,100)

_Azdoufal says he could remote-control robovacs and view live video over the internet._

When I say I couldn’t believe my eyes at first, I mean that literally. Azdoufal leads AI strategy at [a vacation rental home company](https://emeraldstay.com/our-team); when he told me he reverse engineered DJI’s protocols using Claude Code, I had to wonder whether AI was hallucinating these robots. So I asked my colleague Thomas Ricker, [who just finished reviewing the DJI Romo](https://www.theverge.com/tech/877012/dji-romo-review-robot-vacuum-drone-mop), to pass us its serial number.

With nothing more than that 14-digit number, Azdoufal could not only pull up our robot, he could correctly see it was cleaning the living room and had 80 percent battery life remaining. Within minutes, I watched the robot generate and transmit an accurate floor plan of my colleague’s house, with the correct shape and size of each room, just by typing some digits into a laptop located in a different country.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/romo-2d-floor.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/romo-2d-floor.jpg?quality=90&strip=all&crop=0,0,100,100)

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/HAlxmLzXgAA57kq.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/HAlxmLzXgAA57kq.jpg?quality=90&strip=all&crop=0,0,100,100)

Separately, Azdoufal pulled up his own DJI Romo’s live video feed, completely bypassing its security PIN, then walked into his living room and waved to the camera while I watched. He also says he shared a limited read-only version of his app with Gonzague Dambricourt, CTO at an IT consulting firm in France; Dambricourt tells me the app let him remotely watch his own DJI Romo’s camera feed before he even paired it.

Azdoufal was able to enable all of this _without_ hacking into DJI’s servers, he claims. “I didn’t infringe any rules, I didn’t bypass, I didn’t crack, brute force, whatever.” He says he simply extracted his own DJI Romo’s private token — the key that tells DJI’s servers that you should have access to _your own_ data — and those servers gave him the data of thousands of other people as well. He shows me that he can access DJI’s pre-production server, as well as the live servers for the US, China, and the EU.

[![DJI has MQTT servers associated with the US, EU, and China. I’m not sure what VG stands for.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-access-1.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-access-1.jpg?quality=90&strip=all&crop=0,0,100,100)

Here’s the good news: On Tuesday, Azdoufal was _not_ able to take our DJI Romo on a joyride through my colleague’s house, see through its camera, or listen through its microphone. DJI had already restricted that form of access after both Azdoufal and I told the company about the vulnerabilities.

And by Wednesday morning, Azdoufal’s scanner no longer had access to any robots, not even his own. It appears that DJI has plugged the gaping hole.

But this incident raises serious questions about DJI’s security and data practices. It will no doubt be used to help retroactively justify fears that led to the Chinese dronemaker [getting largely forced out of the US](https://www.theverge.com/news/831241/dji-ban-us-trump-fcc-customs-import-ndaa). If Azdoufal could find these robots without even looking for them, will it protect them against people with intent to do harm? If Claude Code can spit out an app that lets you see into someone’s house, what keeps a DJI employee from doing so? And should a robot vacuum cleaner have a microphone? “It’s so weird to have a microphone on a freaking vacuum,” says Azdoufal.

It doesn’t help that when Azdoufal and _The Verge_ contacted DJI about the issue, the company claimed it had fixed the vulnerability when it was actually only partially resolved.

“DJI can confirm the issue was resolved last week and remediation was already underway prior to public disclosure,” reads part of the original statement provided by DJI spokesperson Daisy Kong. We received that statement on Tuesday morning at 12:28PM ET — about half an hour before Azdoufal showed me thousands of robots, including our review unit, reporting for duty.

[![Not just robovacs — DJI’s power stations also use this system.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-access-6.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/dji-romo-access-6.jpg?quality=90&strip=all&crop=0,0,100,100)

To be clear, it’s not surprising that a robot vacuum cleaner with a smartphone app would phone home to the cloud. For better or for worse, users currently expect those apps to work outside of their own homes. Unless you’ve built a tunnel into your own home network, that means relaying the data through cloud servers first.

But people who put a camera into their home expect that data to be protected, both in transit and once it reaches the server. Security professionals should know that — but as soon as Azdoufal connected to DJI’s MQTT servers, everything was visible in cleartext. If DJI has merely cut off one particular way into those servers, that may not be enough to protect them if hackers find another way in.

Unfortunately, DJI is far from the only smart home company that’s let people down on security. [Hackers took over Ecovacs robot vacuums](https://www.theverge.com/2024/10/12/24268508/hacked-ecovacs-deebot-x2-racial-slurs-chase-pets) to chase pets and yell racist slurs in 2024. In 2025, [South Korean government agencies reported](https://cm.asiae.co.kr/en/article/2025090208480104825) that Dreame’s X50 Ultra had a flaw that could let hackers view its camera feed in real time, and that another Ecovacs and a Narwal robovac could let hackers view and steal photos from the devices. (Korea’s own Samsung and LG vacuums received high marks, and a Roborock did fine.)

It’s not just vacuums, of course. [I still won’t buy a Wyze camera](https://www.theverge.com/23003418/wyze-cam-v1-vulnerability-no-patch-bitdefender-responsible-disclosure), despite its [new security ideas](https://www.theverge.com/news/688864/wyze-launches-verifiedview-protections-security-camera-footage), because that company tried to sweep a remote access vulnerability under the rug instead of warning its customers. I would find it hard to trust Anker’s Eufy [after it lied to us](https://www.theverge.com/2022/11/30/23486753/anker-eufy-security-camera-cloud-private-encryption-authentication-storage) about its security, too. But [Anker came clean](https://www.theverge.com/23573362/anker-eufy-security-camera-answers-encryption), and sunlight is a good disinfectant.

DJI is not being _exceptionally_ transparent about what happened here, but it did answer almost all our questions. In a new statement to _The Verge_ via spokesperson Daisy Kong, the company now admits “a backend permission validation issue” that could have theoretically let hackers see live video from its vacuums, and it admits that it didn’t fully patch that issue until after we confirmed that issues were still present.

Here’s that whole statement:

> DJI identified a vulnerability affecting DJI Home through internal review in late January and initiated remediation immediately. The issue was addressed through two updates, with an initial patch deployed on February 8 and a follow-up update completed on February 10. The fix was deployed automatically, and no user action is required.
> 
> The vulnerability involved a backend permission validation issue affecting MQTT-based communication between the device and the server. While this issue created a theoretical potential for unauthorized access to live video of ROMO device, our investigation confirms that actual occurrences were extremely rare. Nearly all identified activity was linked to independent security researchers testing their own devices for reporting purposes, with only a handful of potential exceptions.
> 
> The first patch addressed this vulnerability but had not been applied universally across all service nodes. The second patch re-enabled and restarted the remaining service nodes. This has now been fully resolved, and there is no evidence of broader impact. This was not a transmission encryption issue. ROMO device-to-server communication was not transmitted in cleartext and has always been encrypted using TLS. Data associated with ROMO devices, such as those in Europe, is stored on U.S.-based AWS cloud infrastructure.
> 
> DJI maintains strong standards for data privacy and security and has established processes for identifying and addressing potential vulnerabilities. The company has invested in industry-standard encryption and operates a longstanding bug bounty program. We have reviewed the findings and recommendations shared by the independent security researchers who contacted us through that program as part of our standard post-remediation process. DJI will continue to implement additional security enhancements as part of its ongoing efforts.

Azdoufal says that even now, DJI hasn’t fixed all the vulnerabilities he’s found. One of them is the ability to view your own DJI Romo video stream without needing its security pin. Another one is so bad I won’t describe it until DJI has more time to fix it. DJI did not immediately promise to do so.

And both Azdoufal and security researcher Kevin Finisterre tell me it’s not enough for the Romo to send encrypted data to a US server, if anyone inside that server can easily read it afterward. “A server being based in the US in no way, shape, or form prevents .cn DJI employees from access,” Finisterre tells me. That seems evident, as Azdoufal lives in Barcelona and was able to see devices in entirely different regions.

“Once you’re an authenticated client on the MQTT broker, if there are no proper topic-level access controls (ACLs), you can subscribe to wildcard topics (e.g., #) and see all messages from all devices in plaintext at the application layer,” says Azdoufal. “TLS does nothing to prevent this — it only protects the pipe, not what’s inside the pipe from other authorized participants.”

When I tell Azdoufal that some may judge him for not giving DJI much time to resolve the issues before going public, he notes that he didn’t hack anything, didn’t expose sensitive data, and isn’t a security professional. He says he was simply livetweeting everything that happened while trying to control his robot with a PS5 gamepad.

“Yes, I don’t follow the rules, but people stick to the bug bounty program for money. I fucking don’t care, I just want this fixed,” he says. “Following the rules to the end would probably make this breach happen for a way longer time, I think.”

He doesn’t believe that DJI truly discovered these issues by itself back in January, and he’s annoyed the company only ever responded to him robotically in DMs on X, instead of answering his emails.

But he is happy about one thing: [He can indeed](https://github.com/yamasammy/dji-romo-video-control) control his Romo with a PlayStation or Xbox gamepad.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Sean Hollister
