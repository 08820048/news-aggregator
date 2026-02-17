---
title: "What happens to a car when the company behind its software goes under?"
source: "
                    Matthew MacConnell
                "
url: "https://arstechnica.com/cars/2026/02/what-happens-to-a-car-when-the-company-behind-its-software-goes-under/"
published: "2026-02-17T18:15:31.000Z"
category: "tech"
summary: "Connected car servers won't be online indefinitely, and startups often go bust."
---
who asked for this?

Connected car servers won’t be online indefinitely, and startups often go bust.

Fisker managed to deliver some Oceans before it sank. But are those owners beached now? Credit: Angel Garcia/Bloomberg via Getty Images

Imagine turning the key or pressing the start button of your car—and nothing happens. Not because the battery is dead or the engine is broken but because a server no longer answers. For a growing number of cars, that scenario isn’t hypothetical.

As vehicles become platforms for software and subscriptions, their longevity is increasingly tied to the survival of the companies behind their code. When those companies fail, the consequences ripple far beyond a bad app update and into the basic question of whether a car still functions as a car.

Over the years, automotive software has expanded from performing rudimentary engine management and onboard diagnostics to powering today’s interconnected, software-defined vehicles. Smartphone apps can now handle tasks like unlocking doors, flashing headlights, and preconditioning cabins—and some models won’t unlock at all unless a phone running the manufacturer’s app is within range.

However, for all the promised convenience of modern vehicle software, there’s a growing nostalgia for an era when a phone call to a mechanic could resolve most problems. Mechanical failures were often diagnosable and fixable, and cars typically returned to the road quickly. Software-defined vehicles complicate that model: When something goes wrong, a car can be rendered inoperable in a driveway—or stranded at the side of the road—waiting not for parts but a software technician.

## It’s already happening

Take the example of [Fisker](https://arstechnica.com/cars/2020/01/fisker-shows-off-its-new-37499-electric-crossover-due-in-2022/). In May 2023, the Californian auto brand arrived in Britain with its Ocean Sport before [filing for bankruptcy just one year later](https://arstechnica.com/cars/2024/06/ev-firm-fisker-files-for-bankruptcy-months-after-it-stopped-making-the-ocean/). Priced from £35,000 ($44,000)—although top-spec trims pushed the price to £60,000 ($75,000)—the all-electric Tesla Model Y rival featured tech including a partially retracting roof and a rotating BYD-like touchscreen. All cars also carried a six-year/62,000-mile (99779 km) warranty, with the battery and powertrain covered for 10 years or 100,000 miles (160,934 km).

Before Fisker’s 2024 bankruptcy, just 419 Fisker Oceans made it into British driveways. One unfortunate buyer, a marketing manager from Southampton, experienced the worst of the brand’s teething troubles. After taking delivery, her Ocean was plagued by persistent software glitches. Following a call to Fisker, engineers were dispatched to collect the vehicle for repairs, but when the car was due to be collected, it refused to start. Mere days later, Fisker declared insolvency, leaving the Ocean stranded as a 5,500 lb (2,500 kg) driveway ornament for the next ten months with no solution in sight.

Preceding Fisker, there was Better Place. Founded in 2007, Better Place wasn’t a car manufacturer but an EV infrastructure and software company that promised to solve range anxiety through battery-swap stations. Its entire model relied on centralized servers, subscriptions, and proprietary software to authenticate vehicles and manage battery exchanges. The flagship car for this system was the Renault Fluence Z.E., an electric sedan sold primarily in Israel and Denmark.

Better Place filed for bankruptcy in May 2013 after burning through $850 million, leading to Renault closing the Fluence Z.E’s Turkish assembly line. Servers were shut down, battery-swap stations stopped operating, and backend software used for authentication, charging, and fleet management disappeared, leaving many cars bricked.

[![A man stands next to a compact electric car, inside a white-painted facility](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-98666017.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-98666017.jpg)

Better Place founder and CEO Shai Agassi showing off a battery-swap station for electric taxis in Tokyo on April 26, 2010. Three years later, the company was done.

Credit: KAZUHIRO NOGI/AFP via Getty Images

Better Place founder and CEO Shai Agassi showing off a battery-swap station for electric taxis in Tokyo on April 26, 2010. Three years later, the company was done. Credit: KAZUHIRO NOGI/AFP via Getty Images

These cases highlight a broader shift in the auto industry, where long-term ownership is increasingly dependent not just on mechanical durability but on [continued access to proprietary software and manufacturer support](https://arstechnica.com/cars/2024/10/connected-car-failure-puts-kibosh-on-sale-of-3300-fisker-oceans/).

“When a modern car’s software misbehaves, you don’t fix it yourself—you call the manufacturer,” said Stuart Masson, founder and editor of The Car Expert. “They control the code. At that point, you’re not dealing with a traditional service department so much as an IT help desk.”

That dependence, Masson warned, becomes a critical failure mode when the manufacturer disappears. “Sooner or later, every owner risks a Fisker-style scenario, where the company is gone and there’s nothing you can do about it.”

While informal owner communities have begun attempting to reverse-engineer and distribute unofficial software updates, Masson is blunt about the risks. “You’re trusting that someone on the Internet actually knows what they’re doing,” he said. “If they don’t, the consequences might not be that Android Auto simply stops working but instead an airbag deploying at 70 mph.”

While buying a second-hand Fisker in the UK is a high-risk move, more established manufacturers generally have contingency plans if a critical software partner goes under. In practice, that usually means issuing recalls or pushing over-the-air fixes to affected vehicles. Warranty coverage should handle most issues for newer cars, but the story gets murkier on the used market.

## Out of warranty

Take a decade-old Tesla Model S, for example: You might snag one at a bargain price, but there’s no guarantee Tesla will continue supporting it indefinitely. When a manufacturer drops software support, the car isn’t just at risk of breaking down—it becomes a potential cybersecurity liability. In a world where vehicles are increasingly defined by their code, running unsupported software is akin to leaving your router exposed to the Internet. You may have a functioning car today, but there’s no telling when—or how—it could stop running.

“Many teams, such as McLaren, who have F1 cars from the 1990s, require a 1990s-era laptop running an old Windows operating system, along with specialized interface hardware, for maintenance and to start the car,” Masson said. “We are up against time here, but it could be that brands like Tesla release its code, allowing people to use it. Who knows?”

The problem isn’t solely on the consumer; manufacturers shoulder a significant portion of the risk as well. One potential mitigation is standardization. Enter Catena-X, a collaborative data network connecting OEMs, suppliers, and IT vendors. By creating traceable digital records for parts and software—and standardizing data models and APIs for interoperability—Catena-X aims to make supply chains more resilient and software dependencies less catastrophic when a critical partner disappears.

When asked how OEMs can map software dependencies and mitigate vendor insolvency, Catena-X Managing Director Hanno Focken told Ars that “Catena-X supports software bills of materials and standardizes certain components to make software replaceable, plus a marketplace and open-source reference implementation helps OEMs find alternative vendors.”

The industry also shares responsibility in defining minimum operational lifespans for vehicle software. “As an association, Catena-X can facilitate shared industry commitments and consensus (e.g., data retention policies like a 10-year battery passport requirement), but it does not act as a regulator setting mandatory lifespans,” added Focken.

The lesson is clear: In today’s cars, the engine or electric motor isn’t always what keeps you moving—the software does. When that software vanishes with a bankrupt company, your car can go from daily driver to expensive paperweight overnight. And in the age of software-defined vehicles, owning a car increasingly means betting on the survival of its code. When that code dies, the driveway or highway—not the repair shop—becomes the final stop.

[0 Comments](https://arstechnica.com/cars/2026/02/what-happens-to-a-car-when-the-company-behind-its-software-goes-under/#comments "0 comments")

1.  [![Listing image for first story in Most Read: A fluid can store solar energy and then release it as heat months later](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-1314152372-768x432.jpg)](https://arstechnica.com/science/2026/02/dna-inspired-molecule-breaks-records-for-storing-solar-heat/)
