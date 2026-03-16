---
title: "The science of how fireflies stay in sync"
source: "
                    Jennifer Ouellette
                "
url: "https://arstechnica.com/science/2026/03/the-science-of-how-fireflies-stay-in-sync/"
published: "2026-03-16T12:25:31.000Z"
category: "tech"
summary: "Engineers have uncovered the mathematical rules fireflies follow to sync up their flashes."
---
[Skip to content](#main)

swamp things

Engineers have uncovered the mathematical rules fireflies follow to sync up their flashes.

Credit: Nolan Bonnie

Scientists have discovered that male fireflies in a South Carolina swamp follow local interaction rules to synchronize their flashing mating displays. The research is being presented at [a meeting](https://summit.aps.org/events/VIR-A06/1) of the American Physical Society in Denver. ([A preprint](https://www.biorxiv.org/content/10.64898/2026.01.19.700439v1.abstract) is also available on the biorxiv.) Such work could one day lead to insights into how the body’s cells sync to its internal circadian rhythm, or how neurons fire together in the brain, as well as the design of drone swarms communicating through synchronized flashes.

As [previously reported](https://arstechnica.com/science/2021/01/birds-of-a-feather-flock-together-but-patterns-change-with-the-mission/), research into swarming and flocking was largely relegated to observational biologists for decades. But in the 1980s, a computer graphics specialist named Craig Reynolds developed the so-called [“boids” program](https://en.wikipedia.org/wiki/Boids), an agent-based computational model that has dominated collective behavior studies ever since. In such a model, each individual unit in a swarm is a dot moving in a straight line at a constant speed. By introducing a few simple rules regarding interactions between dots, a flocking pattern will emerge once the dots get dense enough. Another set of rules will produce a swarming pattern, and so forth.

Fire ants provide [a textbook example](https://arstechnica.com/science/2022/03/study-ids-simple-rules-for-how-floating-fire-ant-rafts-change-shape-over-time/) of this kind of collective behavior. A few ants spaced well apart behave like individual ants. But pack enough of them closely together, and they behave more like a single unit, exhibiting both solid and liquid properties. You can pour them from a teapot like ants, or they can link together to build towers or floating rafts—a handy survival skill when, say, a hurricane floods Houston. They [also excel](https://arstechnica.com/science/2018/08/we-can-learn-the-secrets-of-smooth-traffic-flow-by-watching-fire-ants/) at regulating their own traffic flow. You almost never see an ant traffic jam.

Despite the ubiquity of flocking and swarming in nature, each species flocks or swarms a little bit differently in terms of the underlying mechanisms at work. In 2019, [scientists found](https://arstechnica.com/science/2021/01/birds-of-a-feather-flock-together-but-patterns-change-with-the-mission/) that flocks of wild jackdaws [will change](https://arstechnica.com/science/2021/01/birds-of-a-feather-flock-together-but-patterns-change-with-the-mission/) their flying patterns depending on whether they are returning to roost or banding together to drive away predators.

Bacteria or _E. Coli_ [can also](https://arstechnica.com/science/2022/09/these-beetles-tuck-symbiotic-bacteria-in-back-pockets-during-metamorphosis/) exhibit collective behavior. For instance, the [Hawaiian bobtail squid](https://en.wikipedia.org/wiki/Euprymna_scolopes) has a [built-in flashlight](https://twistedphysics.typepad.com/cocktail_party_physics/2006/06/the_little_sea_.html) to help the creature navigate those murky nighttime waters, hunt for prey, and hide from predators in turn. It’s a special organ on the underside, a convenient little cavity that houses colonies of bacteria, _Vibrio fischeri_. Once that bacterial colony reaches a critical threshold, they all begin to glow, serving as a light source for the squid—a phenomenon known as “quorum sensing.”

As for fireflies, [we already know](https://arstechnica.com/science/2024/03/how-did-evolution-produce-a-firefly/) quite a bit about how they emit light. We know the enzyme they use to make light (called luciferase), as well as the chemicals they use in the light-generating reaction. Yet swarms of fireflies clearly exercise a level of control over when they light up, and they do so only in specialized organs, and those are aspects scientists are still keen to understand better.

## Feeling the beat

[![Fireflies twinkle against a backdrop of stars in Congaree National Park.](https://cdn.arstechnica.net/wp-content/uploads/2026/03/firefly2-640x427.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/firefly2.jpg)

Fireflies twinkle against a backdrop of stars in Congaree National Park.

Credit: Nolan Bonnie

Fireflies twinkle against a backdrop of stars in Congaree National Park. Credit: Nolan Bonnie

Orit Peleg of the University of Colorado at Boulder has been fascinated for several years by how fireflies synchronize their flashes. [Prior research](https://royalsocietypublishing.org/rsif/article/17/170/20200179/36166/Spatio-temporal-reconstruction-of-emergent-flash) involved field work in Great Smoky Mountains National Park to monitor thousands of male fireflies known for their fleeting flashes of mating displays (_Photinus carolinus_). The fireflies flash in rhythm: usually a few quick flashes, then a pause lasting several seconds, then another round of quick flashes. Peleg wanted to learn more about how this synchronization worked.

While a lot of work has been done to develop mathematical models for how the patterns emerge from local interactions, there has been very little experimental data. So Peleg’s lab developed a stereoscopic method for 3D tracking of the firefly flashes, enabling them to reconstruct the swarms and the flashing patterns. They monitored the bugs flashing near their location but also pitched a tent on site to capture some of the fireflies and isolate them in a darkened environment.

The team found that even a small number of interacting males can synchronize their flashes, but the periodic bursts only happen in groups larger than 15. And the flashes are correlated over several meters, evidence of long-range interactions typical of emergent collective behavior. But Peleg et al. also noted some individual trajectories, suggesting that there could be other competitive mechanisms at play, too—e.g., early flashing fireflies seemed to be more mobile and flashed longer than later ones.

Collective display of _Photinus carolinus_ fireflies recorded in Great Smoky Mountains National Park in early June 2019.

Peleg’s lab has since built on that earlier research. The latest findings are the result of field work conducted each May for four years (2021–2025) at Congaree National Park in South Carolina. Once again, they pitched a pop-up tent isolated from external light sources. Then they exposed captured fireflies to a dim LED light that mimicked a firefly flash, blinking between once every second to once every 300 milliseconds.

The results: The fireflies were most likely to change their own flashing rhythm in response when the LED blinked almost, but not quite, at the same time as the fireflies. The males would speed up their next flash if the LED blinked just before and waited a bit longer for their next flash when the LED blinked right after. The authors compared it to one audience member in a crowded concert hall trying to clap along with the beat in synchronization with everyone else.

“For a whole season, I spent pretty much every night in the dark watching lights blink at a fixed frequency,” former graduate student (and co-author on the preprint) [Owen Martin said](https://www.colorado.edu/today/2026/03/12/south-carolina-swamp-researchers-uncover-secrets-firefly-synchrony) of the field observations. “Then, occasionally, I’d get this magical experience where I’d see the firefly just start syncing with the light. I would wonder if I was just seeing things.” But the ensuing mathematical analysis confirmed the patterns: the individual flash dynamics were essentially following a phase-response curve, which the authors then used to develop an “integrate and fire” model that accurately reproduced the observed synchronized flashing patterns.

DOI: bioRxiv, 2026. [10.64898/2026.01.19.700439](http://dx.doi.org/10.64898/2026.01.19.700439)  ([About DOIs](http://arstechnica.com/science/news/2010/03/dois-and-their-discontents-1.ars)).

[![Photo of Jennifer Ouellette](https://cdn.arstechnica.net/wp-content/uploads/2018/08/arspic300.jpg)](https://arstechnica.com/author/jenniferouellette/)

Jennifer is a senior writer at Ars Technica with a particular focus on where science meets culture, covering everything from physics and related interdisciplinary topics to her favorite films and TV series. Jennifer lives in Baltimore with her spouse, physicist Sean M. Carroll, and their two cats, Ariel and Caliban.

[9 Comments](https://arstechnica.com/science/2026/03/the-science-of-how-fireflies-stay-in-sync/#comments "9 comments")

1.  [![Listing image for first story in Most Read: An engineering thesis disguised as a coupe: A history of the Honda Prelude](https://cdn.arstechnica.net/wp-content/uploads/2026/03/honda-prelude-ad-768x432.jpg)](https://arstechnica.com/cars/2026/03/an-engineering-thesis-disguised-as-a-coupe-a-history-of-the-honda-prelude/)
