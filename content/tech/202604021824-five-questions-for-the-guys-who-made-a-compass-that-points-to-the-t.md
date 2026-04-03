---
title: "Five questions for the guys who made a compass that points to the Times Square Olive Garden"
source: "TC. Sottek"
url: "https://www.theverge.com/gadgets/905977/five-questions-for-the-guys-who-made-a-compass-that-points-to-the-times-square-olive-garden"
published: "2026-04-02T18:24:29.000Z"
category: "tech"
summary: "Here's a question almost nobody is asking: how do you get to the Times Square Olive Garden? Well, these beautiful weirdos are answering it - the team that made the Times Square Olive Garden compass. If that's not clear enough, let me explain. They're making a compass that points you exclusively in the direction of the Times Square Olive Garden. I thought this must have been an April Fools' joke when it came across my TikTok feed. Then I talked to the creators - Jason Goldberg and Steve Nasopoulos, who worked in collab with Glub Glub Labs - and learned it's, at least, not that kind of joke. Disclaimer: I can't say you should buy this, use i … Read the full story at The Verge."
---
Here’s a question almost nobody is asking: how do you get to the Times Square Olive Garden? Well, these beautiful weirdos are _answering it_ — the team that made [the Times Square Olive Garden compass](https://www.olivegardencompass.com/). If that’s not clear enough, let me explain. They’re making a compass that points you exclusively in the direction of the Times Square Olive Garden.

I thought this must have been an April Fools’ joke when it came across my TikTok feed. Then I talked to the creators — Jason Goldberg and Steve Nasopoulos, who worked in collab with [Glub Glub Labs](https://glubglublabs.com/) — and learned it’s, at least, not _that_ kind of joke.

Disclaimer: I can’t say you should buy this, use it, or ever go to Times Square. If you do, be prepared to to dodge sketchy Elmos and naked cowboys.

**Okay, obviously,** **_why?_** **And why now? And why not a compass pointing to the, say, Times Square Margaritaville?**

Why? Because we were tired of guessing which way to the Times Square Olive Garden. Sure we could have looked at our phones, but in a world where we’re all glued to them, creating a more analogue experience seemed appealing.

We chose Olive Garden because they offer lasagna as a side. Let’s see the M&M store do that!

**Our readers love specs. Tell me how it works. What kind of tech are you packing in here to make a compass point to the Olive Garden in Times Square in Manhattan?**

For this question we tapped in the great people over at Glub Glub Labs who did all the hard tech bits: We’re using an Arduino Nano microcontroller to manage the inputs and outputs for the compass. The Nano is connected to a GPS unit (SAM-M10Q) which is typically used for drone flight navigation, a gyro sensor to track rotation once the unit locks into a north reference, a stepper motor to turn the dial, and is powered by two batteries that we salvaged from some disposable vapes.

Since the Olive Garden in Time Square does not move (as far as we’re aware) this can all work offline, using hard coded coordinates, the user’s GPS coordinates, and some on-board trigonometry.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-1-rotated.jpeg?quality=90&strip=all&crop=0%2C25%2C100%2C50&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-1-rotated.jpeg?quality=90&strip=all&crop=0,25,100,50)

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-4.jpeg?quality=90&strip=all&crop=0%2C25%2C100%2C50&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-4.jpeg?quality=90&strip=all&crop=0,25,100,50)

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-3.jpeg?quality=90&strip=all&crop=0%2C5.5604785112982%2C100%2C88.879042977404&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-3.jpeg?quality=90&strip=all&crop=0,5.5604785112982,100,88.879042977404)

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-2.jpeg?quality=90&strip=all&crop=0%2C25%2C100%2C50&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Inner-Workings-2.jpeg?quality=90&strip=all&crop=0,25,100,50)

**We care a lot about terms of service at** **_The Verge_****. Your terms of service are very funny and very specific (eg. “don’t walk off a cliff or into the ocean”). How’d you come up with them?**

We’ve honestly never created terms and conditions before, so we were mostly just imagining scenarios we might want to not be liable for (we left out walking into an active volcano, for now).

**Limited supply. Waiting list. How many of these things do you plan on making? Can you tell me anything about the price and release date?**

We’re still exploring exact production numbers. But the response so far has been really strong, with over 2,000 people on the waitlist. Way more than we expected. Since we want to keep these high quality, we’ll still likely keep it very small batch, like fifty at a time. That is unless Olive Garden contacts us and wants to take this global…

Release date soon! Join the waitlist to be the first to know.

**Is there anything I’m missing about a compass that points you to the Times Square Olive Garden? Here’s your chance to tell me.**

We plan to IPO in 2038 with a market cap of fifteen billion.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   T.C. Sottek
