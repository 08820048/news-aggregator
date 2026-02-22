---
title: "This magazine plays Tetris — here’s how"
source: "Andrew Liszewski"
url: "https://www.theverge.com/tech/881175/red-bull-media-house-game-pop-bulletin-magazine-playable-tetris-flexible-display"
published: "2026-02-22T14:03:24.000Z"
category: "tech"
summary: "The world’s first playable gaming magazine? Tetris has been immortalized in a playable McDonald's plastic chicken nugget, a playable fake 7-Eleven Slurpee cup, and a playable wristwatch. But the most intriguing way to play Tetris yet is encased in paper. Last year the Tetris Company partnered with Red Bull for a gaming tournament that culminated in the 150-meter-tall Dubai Frame landmark being turned into the world's largest playable Tetris installation using over 2,000 drones that functioned as pixels. Although the timing was a coincidence, Red Bull also published a 180-page gaming edition of its The Red Bulletin lifestyle magazine around the same time as the event, with a limite … Read the full story at The Verge."
---
_Tetris_ has been immortalized in a playable McDonald’s [plastic chicken nugget](https://retrododo.com/mcdonalds-tetris-handheld/), a playable [fake 7-Eleven Slurpee cup](https://www.7-eleven.com/lp/tetris), and a [playable wristwatch](https://www.theverge.com/gadgets/842702/tetris-my-play-watch-smartwatch-hands-on). But the most intriguing way to play _Tetris_ yet is encased in paper.

Last year the [Tetris Company partnered with Red Bull](https://tetris.com/news/tetris-r-and-red-bull-take-competitive-gaming-to-new-heights) for a gaming tournament that culminated in the 150-meter-tall Dubai Frame landmark being turned into the [world’s largest playable _Tetris_ installation](https://www.redbullcontentpool.com/international/CP-S-20356) using over [2,000 drones that functioned as pixels](https://www.theverge.com/news/845269/who-needs-bricks-when-you-have-drones). Although the timing was a coincidence, Red Bull also published a 180-page gaming edition of its _The Red Bulletin_ lifestyle magazine around the same time as the event, with a limited number of copies wrapped in a less grandiose, but no less technically impressive, version of Alexey Pajitnov’s iconic puzzle game.

To create a playable gaming magazine, Red Bull Media House (the company’s media wing) enlisted the help of Kevin Bates, who in 2014 wowed the internet by creating an [ultra-thin _Tetris_\-playing business card](https://gizmodo.com/make-an-awesome-first-impression-with-a-tetris-playing-1535287877). In 2015, he launched the $39 [Arduboy](https://www.arduboy.com/), a credit card-sized, open-source handheld that attracted a [thriving community of developers](https://community.arduboy.com/). Over the course of a decade, Bates also created a pair of equally pocketable [_Tetris_\-playing handhelds](https://www.youtube.com/watch?v=HtbneOFNvfw) that cost less than $30, and [the shrunken-down USB-C Arduboy Mini](https://www.arduboy.com/mini).

The GamePop GP-1 Playable Magazine System (as it’s officially called) is the latest evolution of Bates’ mission to use existing, accessible, and affordable technologies to reimagine what a portable gaming device can be. It took “most of last year” to develop, Bates revealed during a call with _The Verge_. He wouldn’t divulge the exact details of how his collaboration with Red Bull came to be. But if you’re looking to make an officially licensed version of _Tetris_ that’s thin enough to flex, Bates has the experience, and he shared with us some of the technical details that make this creation work.

[![A close-up of the LED matrix screen on the front of the Red Bull GamePop magazine.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris5.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris5.jpg?quality=90&strip=all&crop=0,0,100,100)

_The game’s screen is made up of 180 tiny RGB LEDs on a custom circuit board that can flex and bend._

While OLED display technology has given us [tablet-sized devices that fold into smartphones](https://www.theverge.com/tech/854352/samsung-galaxy-z-trifold-hands-on), they’re still expensive and fragile. To make a display that can survive being embedded in a flexible magazine cover without reinforcement, Bates created a custom matrix of 180 2mm RGB LEDs mounted to a flexible circuit board just 0.1mm thick. While the display and coin-cell batteries make it thicker in a few places — nearly 5mm at its thickest point — you genuinely feel like you’re playing a handheld made of paper. The flexible circuits are bonded between two sheets of paper to create the sleeve that wraps around the book-sized magazine, and it feels satisfyingly thin and flexible.

Flexible circuits aren’t a new idea. They’ve been used in electronics for decades. You can find them in [flip phones old enough they now feel like antiques](https://www.theverge.com/2021/12/29/22857413/motorola-razr-internet-button-flip-phone-data-cellular-charges), and nearly every laptop. They’re also frequently used to miniaturize devices that don’t fold or flex at all, connecting internal components where space is extremely limited. But it’s only in the past five or six years that the technology has become available to smaller makers, and Bates says he’s been “messing around with the flexible circuits for about as much time.” This collaboration was an opportunity to use what he’s learned to create a device that would live outside his workshop.

The GamePop GP-1’s display resolution pales in comparison to the OLED screens used in folding phones, but Bates’ creation is far more durable. The game has not only undergone the typical safety tests, but Bates even “hit it with a hammer a few times” to test its durability. His display survived, but don’t try that with a folding phone. They’re [still far less durable](https://www.theverge.com/news/714552/how-tough-is-samsungs-galaxy-z-fold-7).

[![The front cover of the Red Bull GamePop magazine.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris3.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris3.jpg?quality=90&strip=all&crop=0,0,100,100)

_To keep it as thin as possible, the_ Tetris _game uses embedded touch sensors instead of physical buttons._

Instead of buttons, the game uses seven capacitive touch sensors that are directly “printed in the copper layer of the board,” Bates says. There’s no true mechanical feedback when pressed, but the paper’s flex helps them feel a bit like a button when you press down. Bates says the responsiveness of the sensors was specifically tuned to account for the thickness of the paper stock and the glues used in the final print run. You’re not going to be chasing _Tetris_ world records on the cover of a magazine, but the controls are satisfyingly responsive and the game is surprisingly much easier to play than [other _Tetris_ devices](https://www.theverge.com/gadgets/842702/tetris-my-play-watch-smartwatch-hands-on) I’ve tested.

[![The Red Bull magazine’s cover illuminated from behind revealing some of its internal components.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris4.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris4.jpg?quality=90&strip=all&crop=0,0,100,100)

_Most of the game is made using flexible electronics, but there is a thin rigid PCB housing its processor and rechargeable batteries._

How much does a flexible _Tetris_ game cost to manufacture? Neither Bates nor Red Bull would divulge the total price tag for all the off-the-shelf and custom components you’ll find sandwiched inside the magazine’s cover. But to help keep costs down, not all components are flexible. Inside the edge of the cover, next to the magazine’s spine, you’ll find a long but thin rigid PCB where an ARM-based 32-bit microprocessor is located, along with four rechargeable LIR2016 3V coin cell batteries.

[![A close-up of a USB-C cable plugged into a charging port on the bottom of a magazine cover.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris1.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/redbull_tetris1.jpg?quality=90&strip=all&crop=0,0,100,100)

_The magazine features a deconstructed USB-C charging port along the bottom edge of its cover._

Like most devices now, the game can be recharged using a USB-C cable, but it’s not immediately obvious where. Hidden along the bottom edge of the magazine’s cover is a deconstructed USB-C port. Instead of a metal ring, its socket is a small paper pocket containing a pin-covered head inside. It doesn’t feel quite as durable as the charging port on your phone, but it’s a welcome alternative to making the game disposable when the batteries die.

Bates did have to cut some corners. The GamePop GP-1 saves high scores, but modern _Tetris_ gameplay features, like previews of upcoming pieces and being able to save tetrominoes for later, aren’t included. There’s sound effects, but when starting a game you only hear a small snippet of the iconic _Tetris_ theme. The game’s piezo speaker “uses about as much energy as it does to run the rest of the system,” Bates says, so this helps prolong the life of the small rechargeable batteries. He tells us you can play for an hour or two that way, and the battery should last many months when not in use.

Red Bull made around 1,000 copies of the magazine. [It’s only available online in Europe](https://www.redbullshop.com/en-int/p/GAME-POP-The-Culture-of-Play/M-RBM25006/?preselectedVariant=M-RBM25006001), but can also be found in some stores and newsstands, including [Iconic Magazines](https://www.iconicmagazines.com/product/gamepop-magazine/) in New York and [Rare Mags](https://raremags.co.uk/products/gamepop-issue-3) outside Manchester in the UK. However, only 150 copies with the playable cover were produced, and none were made available to the public. They were distributed to _Tetris_ competitors, those featured in the magazine, influencers, and select media.

The playable cover isn’t going to revolutionize the print industry, or pave the way for smartphones we can roll up and stick in our back pockets. The goal was to use existing tech in a way that gamers haven’t seen before.

_Photography by Andrew Liszewski / The Verge_

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Andrew Liszewski
