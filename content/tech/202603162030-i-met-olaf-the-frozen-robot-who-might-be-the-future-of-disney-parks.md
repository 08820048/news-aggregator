---
title: "I met Olaf — the Frozen robot who might be the future of Disney Parks"
source: "Sean Hollister"
url: "https://www.theverge.com/tech/895369/olaf-disney-imagineering-frozen-robot-up-close"
published: "2026-03-16T20:30:00.000Z"
category: "tech"
summary: "Olaf, a Disney Imagineering robot that will greet guests at Disney parks. | Photo by Sean Hollister / The Verge You know Olaf. Before KPop Demon Hunters, before the Wicked movies, it was Disney's Frozen that blasted show tunes like \"Let It Go\" and \"Into the Unknown\" into our lives. My little girls loved belting those tunes. So when I met Olaf, the Disney Imagineering robot, I kept thinking: I can't wait for my kids to meet him too. It's a weird thought, really, because this Olaf isn't a \"he\" and can't carry on a conversation. Why do I keep thinking \"I met him\" when he's largely a remote-controlled puppet teleoperated by a Steam Deck gaming handheld? @verge Is this the best robot Disney's ever made? Frozen's snowman Olaf will soon greet guests … Read the full story at The Verge."
---
You know Olaf. Before _KPop Demon Hunters_, before the _Wicked_ movies, it was Disney’s _Frozen_ that blasted show tunes like “Let It Go” and “Into the Unknown” into our lives. My little girls loved belting those tunes.

So when I met Olaf, the Disney Imagineering robot, I kept thinking: _I can’t wait for my kids to meet him too._

It’s a weird thought, really, because this Olaf isn’t a “he” and can’t carry on a conversation. Why do I keep thinking “I met him” when he’s largely a remote-controlled puppet teleoperated by a Steam Deck gaming handheld?

I think the answer is that Olaf — coming to Disneyland Paris on March 26th and Hong Kong Disneyland this summer — is the rare robot that crosses the [uncanny valley](https://en.wikipedia.org/wiki/Uncanny_valley) as long as he keeps moving. And that’s because Disney animators helped him _train himself_, sticking 100,000 virtual copies of the physical Olaf robot into a Nvidia-powered simulation and rewarding him for screen-accurate moves. It took just two days to train Olaf with an Nvidia RTX 4090 GPU.

“This absolutely is the future of how we’re building robot characters,” Disney Imagineering SVP of R&D Kyle Laughlin tells _The Verge_. He says reinforcement learning is the “true unlock” that could let Disney populate entire lands full of interactive characters, now that entire robots can be built in months instead of years.

And while Disney Imagineering has done some of this [with its _Star Wars_ droids before](https://www.theverge.com/2024/9/6/24237658/watch-disneys-adorable-droids-waddle-on-its-omnidirectional-treadmill-floor), those were “robots being robots,” says Laughlin. “This is our first animated character that we brought to life.”

[![Disney Imagineering’s Kyle Laughlin and Moritz Bächer tell The Verge about their robots.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/disney-olaf-sean-hollister-verge-002.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/disney-olaf-sean-hollister-verge-002.jpg?quality=90&strip=all&crop=0,0,100,100)

To be crystal-clear, Olaf is not artificially intelligent. The 35-inch-tall, 33-pound robot may have 25 actuators and three computers including an Nvidia Jetson Orin NX and a Raspberry Pi, but it’s not speaking for itself. It plays prerecorded lines from what sounds like Olaf’s voice actor Josh Gad while it performs animated moves.

While Olaf blinks autonomously, it can’t “see” you to look at you — that requires the operator to flick a joystick. The Steam Deck’s other joystick tells Olaf where to walk, and the operator can swipe across a touchpad to quickly access page after page of conversation options. In my early demo, it wasn’t yet enough to carry on a conversation; a quick “Of course!” or “Sure!” was often all I got.

[![Olaf appeared on stage for a live demo at the end of Nvidia’s GTC 2026 keynote.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/chrome_eUKV60N1pp.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/chrome_eUKV60N1pp.jpg?quality=90&strip=all&crop=0,0,100,100)

But whenever Olaf is moving, I can’t take my eyes off him, and I automatically find myself writing “him” again and again. He waddles around so convincingly! When I can’t quite put my finger on _why_, Disney Research lab director Moritz Bächer explains a big part of it in eight words: “The eyes go first, and the body follows.” We automatically assume we’re looking at a living being, because the eyes are mentally controlled.

(It also doesn’t hurt that Olaf’s four-way-stretch costume, built atop foam “snowballs,” sparkles like fresh snow as the light shines through. Olaf’s carrot, sticks, and buttons are all magnetic, so they can be easily reattached or even intentionally detached as a gag.)

While Disney is notorious for protecting its intellectual property, it sees its robot research differently. Last March, it partnered with Nvidia and Google DeepMind to release [the Newton Physics Engine](https://developer.nvidia.com/newton-physics) as an open-source project managed by the Linux Foundation; now, Disney Research is also contributing Kamino, the simulation tool it developed to train “extremely complex mechanical assemblies” like Olaf and other robots to come, including a simple thermal dynamics model to keep joints from overheating prematurely.

Olaf was a challenge, the team says, because robots traditionally don’t have big weighty heads that rest on a small neck. It puts a lot of strain on that joint, making it prone to overheating. Olaf’s clomp-clomp-clomp walking was a noisy challenge to solve, too. But in the reinforcement learning simulation, Disney was simply able to reward the 100,000 virtual Olafs who move without overheating that joint or making too much noise. “It’s like telling my six-year-old to stop running through the house: _Can you just be a little bit quieter?_ That’s pretty much what we had to do for Olaf,” says Laughlin.

Bächer tells me these tools are designed to interface with the ones that animators already use, including Maya, so animators can create motions that target emotions, letting the physics simulation do the work of figuring out what the bots can actually do.

[![A screenshot of Disney’s Kamino simulator from Nvidia GTC 2026.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/chrome_CoNVHqY9sn.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/chrome_CoNVHqY9sn.jpg?quality=90&strip=all&crop=0,0,100,100)

I have to admit the illusion breaks down a lot when Olaf stops moving, and Disney Research isn’t saying when it might make these robots truly autonomous. It sounds like that technology isn’t up to Disney’s standards yet. Bächer says “believable autonomy” is the goal: “It needs to be something that you believe is real.”

But it won’t always be a human with a Steam Deck at the controls, either. Olaf can be part of time-coded performances, tied directly into Disney’s live entertainment choreography systems, Laughlin says, and that’s one of the first ways he’ll appear at Disneyland Paris. He’ll be performing on a boat in a lagoon in front of the castle. “We built a mock boat in our R&D lab to simulate the considerable amount of rocking back and forth in this boat, and Olaf does an incredible job staying afloat,” says Laughlin. “He’s got his sea legs.”

Those performances may get even more intriguing, Laughlin suggests, as Disney creates more robots. “You can expect to see more robots from franchises together so that they can interact.”

“The real power is going to come from Olaf interacting with characters that he knows and loves. Not only performers, but also other characters that we haven’t been able to bring to life without robotics,” he hints.

Disney Research has published an eight-page white paper on how it created Olaf, including some of the exact components and formulas it used. You can read it below.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Sean Hollister
