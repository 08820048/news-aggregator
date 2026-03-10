---
title: "Clair Obscur: Expedition 33 devs reveal the secret behind how the game was made"
source: "Giovanni Colantonio"
url: "https://www.polygon.com/clair-obscur-expedition-33-gdc-panel/"
published: "2026-03-10T09:59:54.000Z"
category: "gaming"
summary: "At GDC, Sandfall Interactive said that Clair Obscur: Expedition 33 features very little original programming thanks to Unreal Blueprints"
---
[![4](https://static0.polygonimages.com/wordpress%2Fwp-content%2Fauthors%2F6883d5e573131-120394346_3489689281100_2385701944609469881_n.jpg?fit=crop&w=90&h=90)](https://www.polygon.com/author/giovanni-colantonio/)

Published Mar 10, 2026, 5:59 AM EDT

95% of Clair Obscur's gameplay systems were built from Unreal Blueprints, says Sandfall Interactive

   ![Clair Obscur Expedition 33 Gustave and Sophie talking before a red and white tree](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/01/clair-obscur-expedition-33-prologue-screen-1.jpeg?&fit=crop&w=1600&h=900)Image: Sandfall Interactive/Kepler Interactive via Polygon

Sign in to your Polygon account

During this year’s [Game Developers Conference](https://www.polygon.com/gdc-2026-news-previews-interviews-demos/), Sandfall Interactive lifted the curtain on how it was able to create _[Clair Obscur: Expedition 33](https://www.polygon.com/game/clair-obscur-expedition-33/548832/)_ with a small team of programmers. The studio’s secret? The studio barely wrote any code of its own and heavily relied on pre-built Unreal Engine tools to create features.

Sandfall Interactive hosted a panel on _Clair Obscur_ at this year’s GDC titled “Delivering a Wide Scope of Features & Content When You Only Have Four Programmers.” During the hour-long talk, technical director Tom Guillermin and senior gameplay programmer Florian Torres gave a nerdy rundown of how the hit role-playing game was programmed. It was a _very_ technical talk that got into the nuances of bug reporting UI, but it did provide a lot of context on how everything from the turn-based combat to the overworld was built.

Early in the panel, the programmers revealed that 95% of _Clair Obscur_’s gameplay systems were made using Unreal Blueprints — a fact that elicited a collective gasp from a room full of developers. According to Guillermin and Torres, the team of four in-house programmers wrote very little C++ code of their own for the game.

What are Blueprints? In layman’s terms, it's an [Unreal Engine scripting tool](https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine) that lets programmers plug pre-built nodes together to craft gameplay systems. The handy feature allows those with limited programming experience or resources to create complex ideas easily, and that’s something Sandfall Interactive needed considering the game was prototyped by a single programmer.

Blueprints powered much of _Clair Obscur_; the team broke down how features like skills and “battle buffs” were derived from the tool. Guillerman and Torres explained that the approach came with some advantages and disadvantages. On the positive side, it made it much easier for designers to contribute ideas and made for a more stable game. On the flip side, it made the game harder to debug and created some bad memory practices. Some original code was still written during development to build out experimental features and help with optimization.

Aside from that detail, the programmers revealed one scandalous secret about the game: Esquie doesn’t actually swim when he’s in water. A big chunk of the panel was dedicated to explaining how the overworld was built around the character, and how that created some challenges when it came to swimming and flying. The team says that, from the technical side, Esquie is actually walking on a surface rather than swimming. (They later contradicted themselves by saying that Esquie is actually _always_ in a default swimming state, so it’s unclear what the guy’s deal is.)

The moral of the panel? Guillerman and Torres were very careful to tell the audience that there wasn’t one. An opening slide emphasized that they were just there to explain how they built the game, not to tell programmers that it was the right approach. Either way, the whole panel served as a pretty effective advertisement for Unreal Engine.
