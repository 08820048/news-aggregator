---
title: "F1 moves a step closer to fixing its 2026 hybrid problem"
source: "
                    Jonathan M. Gitlin
                "
url: "https://arstechnica.com/cars/2026/04/f1-moves-a-step-closer-to-fixing-its-2026-hybrid-problem/"
published: "2026-04-10T19:07:46.000Z"
category: "tech"
summary: "Algorithms, not drivers, are deciding how hard to accelerate, and that's no good."
---
April 20

Algorithms, not drivers, are deciding how hard to accelerate, and that’s no good.

[![SUZUKA, JAPAN - MARCH 27: Sparks fly behind Nico Hulkenberg of Germany driving the (27) Audi F1 Team R26 on track during practice ahead of the F1 Grand Prix of Japan at Suzuka Circuit on March 27, 2026 in Suzuka, Japan. (Photo by Peter Fox/Getty Images)](https://cdn.arstechnica.net/wp-content/uploads/2026/04/GettyImages-2268546147.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/04/GettyImages-2268546147.jpg)

Nico Hulkenberg's Audi throws up sparks during practice for the Japanese Grand Prix at Suzuka. Credit: Peter Fox/Getty Images

Nico Hulkenberg's Audi throws up sparks during practice for the Japanese Grand Prix at Suzuka. Credit: Peter Fox/Getty Images

Formula 1 is enjoying something of an unexpected break right now. The war in the Middle East saw the cancellation of F1 races that were due to be held this month in Bahrain and Saudi Arabia. Instead, the teams will use this time to further develop their cars. For teams like [Aston Martin](https://arstechnica.com/cars/2026/03/nerve-damage-energy-management-and-apple-tv-f1-in-2026-starts-today/), Cadillac, and Williams, it will be a welcome respite and a chance to catch up to the midfield. Even Mercedes, clear and away the championship favorite this year, has things to work on if it wants to stop [losing](https://arstechnica.com/cars/2026/03/2026-australian-grand-prix-formula-1-debuts-a-new-style-of-racing/) so many [positions](https://arstechnica.com/cars/2026/03/f1-in-china-ive-never-seen-so-many-people-in-those-grandstands/) at the start of each race or have an easier time passing cars in traffic.

That should keep the mechanics and engineers quite busy, but in case not, technical representatives from each team as well as the FIA (the sport’s governing body) are sitting down throughout the month to try to fix some problems that are a consequence of F1’s new technical rules.

## This is about hybrids, you say?

From the [start](https://arstechnica.com/cars/2026/02/f1-preseason-tests-shows-how-different-2026-will-be/) of this year, F1 cars have new hybrid power units. There’s a 1.6 L turbocharged V6 engine that runs on [carbon-neutral gasoline](https://arstechnica.com/cars/2022/11/formula-1-talks-to-ars-about-sustainability-and-synthetic-fuels/), which generates 400 kW (536 hp). And there’s an electric motor-generator unit (or MGU) that outputs up to 350 kW (469 hp) as long as there’s charge in the 4 MJ (1.1 kWh) battery pack. As batteries go, that’s about the right size for something like a Prius, but in an F1 car at full deployment, it goes from full to empty in little more than 11 seconds.

Actually, the rules say the hybrid system can use more than a single charge per lap—at the last race in Japan that was set at 8 MJ—so like in Formula E the drivers need to regenerate energy under braking to recharge the battery. But most F1 tracks lack enough braking zones for this to suffice entirely; in Japan the cars could recover about 3.7 MJ as the rear wheels decelerate.

Because the MGU sits in between the V6 and the transmission, it can also use power from the engine to charge the battery, just like most plug-in hybrid road cars. This can happen in a couple of ways. The first is when the driver is doing something called “lift and coast”; instead of going full throttle right up to the point where you brake for a corner, you lift off the gas earlier along the straight and coast into the brake zone. It’s a common practice in endurance racing and IndyCar, where saving time by making fewer or shorter refueling stops can win races.

While lifting and coasting, the car’s brain tells the V6 to keep revving, and it siphons off 350 kW to the battery. But there’s another way the engine can recharge the battery that happens when the driver’s foot is still flat on the throttle. F1 calls this “super clipping,” and while it’s happening, the car’s power output at the rear wheels is significantly curtailed—any power going to the battery can’t go to the rear wheels, and the V6 only has 400 kW to offer. So super clipping has been capped at 200 kW, leaving the other 200 kW (268 hp) to push the car.

So sometimes an F1 car has 750 kW (1,005 hp), sometimes it has 400 kW, and sometimes it might just have 200 kW.

As will the other 21 cars on track, but not in any coordinated way. The software that governs the hybrid systems is capricious, and it decides when to initiate super clipping, and when to ramp up or ramp down power from the MGU based on how much it has already expended on the lap and how much it thinks it will need.

## What’s the problem?

The new engine regs were created to get automakers more enthused about the sport, back before so many of them started pulling back on electric vehicles. It worked: [Audi](https://arstechnica.com/cars/2025/11/audi-goes-full-minimalism-for-its-first-ever-formula-1-livery/) and [Cadillac](https://arstechnica.com/cars/2025/05/ai-strategists-formula-1-even-an-electric-nascar-we-talk-racing-with-gm/) and [Honda](https://arstechnica.com/cars/2025/02/perfecting-hondas-2026-f1-powertrain-is-not-so-easy-says-racing-boss/) signed on to join Ferrari and Mercedes. But as I’ve described above, the new formula means that the cars are energy-starved during a lap, particularly during qualifying when the aim is to drive the car right at its very limit.

As [we saw](https://arstechnica.com/cars/2026/03/f1-in-japan-oh-no-what-have-they-done-to-all-the-fast-corners/) in Japan, this has effectively neutered all of F1’s fast corners, because you can reach a shorter overall lap time by using that energy elsewhere. There’s no real problem with lift and coast during a race—as said before, it’s already common practice in IndyCar and endurance racing. But in qualifying, that’s another matter, and watching the cars lifting and coasting through the 130R corner at Suzuka in Japan was something that demoralized virtually every race fan this author knows. Driving it seems to be worse: McLaren’s Lando Norris described it as “soul destroying.”

During the races, the bigger issue is the new formula’s recipe for dangerous speed differentials. If one car has battery charge and somewhere between 500–750 kW, they’re going to be going a lot faster than another driver that has depleted their battery (and so has just 400 kW), creating speed differentials of up to 70 km/h (43 mph). We saw this when Franco Colapinto’s slowing Alpine caused Oliver Bearman to heavily crash his Haas in Japan.

But it can also create accidental overtakes, when the car gives the driver more power than they were expecting or wanted; Norris called out this behavior to his engineer while in the midst of the race at Suzuka.

A core tenet of F1, enshrined in the rules for many years, is that the driver alone should control the car. That’s why there’s no traction control, no stability control, and no anti-lock brakes. So you can see why many have an issue with the car’s software now being the thing that decides how much throttle translates to how much power.

## Just make the battery bigger, right?

Even the most optimistic among us could see by Suzuka that the sport needs to do something, and the FIA scheduled a meeting with the teams that took place yesterday. “It was generally agreed that although the events to date have provided exciting racing, there was a commitment to making tweaks to some aspects of the regulations in the area of energy management. There was constructive dialogue on difficult topics especially when considering the competitive nature of the stakeholders,” the FIA said in a statement.

Over the next two weeks, various parts of the FIA will meet to discuss which technical and sporting regulations need to be tweaked, followed by another meeting on April 20, “where it is anticipated that preferred options jointly proposed by the technical teams will be considered and a consensus sought on the way forward. The 2026 regulations were developed and agreed in close partnership with teams, OEMs, Power Unit Manufacturers, the commercial rights holder and the FIA all at the table. It is in this spirit of collaboration that potential changes are being discussed,” it said.

While a larger-capacity battery would indeed solve the problem, there’s simply no room in those tightly packed chassis to squeeze in any more lithium-ion, at least without significant redesign work. One possible fix is to limit the amount of power that the MGU can deploy in qualifying to 200 kW. This would allow for more time on full throttle to actually get maximum power, although it also means an F1 car would have the same 600 kW (804 hp) power output during qualifying [as next season’s Gen4 Formula E car](https://arstechnica.com/cars/2025/11/formula-e-gets-2x-the-power-and-awd-with-new-gen4-car/) when it’s in its qualifying. For some of the time, anyway…

(F1 fans can rest easy. Even if the Gen4 car [does have all-wheel drive](https://arstechnica.com/cars/2025/06/all-wheel-drive-evs-at-210-mph-formula-es-next-car-gets-massive-upgrade/), it’s also more than 30 percent heavier, has less aerodynamic downforce, and still has to race on treaded tires, so F1 cars _should_ remain faster across a single lap of the same circuit. Which is unlikely to happen; the FIA even tweaks the Monaco layout between F1 and Formula E to prevent a direct lap time comparison.)

During the races, the FIA might increase the amount of energy that the MGU can harvest from the engine while super clipping. Increasing this from 200 kW to 350 kW would give the car even less power for propulsion while it was occurring, but it would also be able to charge the battery much more rapidly, so you wouldn’t have to super clip for as long, or start so early.

Other changes that have been mooted in the past few weeks include allowing drivers to use the more streamlined “straight mode” aero configuration anywhere on track rather than in a handful of defined zones, and even giving the drivers some greater degree of control over the power units from inside the cockpit.

F1 gets back to racing May 1–3 in Miami.

[![Photo of Jonathan M. Gitlin](https://cdn.arstechnica.net/wp-content/uploads/2020/09/jonathan-300x450.jpg)](https://arstechnica.com/author/jonathan-m-gitlin/)

Jonathan is the Automotive Editor at Ars Technica. He has a BSc and PhD in Pharmacology. In 2014 he decided to indulge his lifelong passion for the car by leaving the National Human Genome Research Institute and launching Ars Technica's automotive coverage. He lives in Washington, DC.

[9 Comments](https://arstechnica.com/cars/2026/04/f1-moves-a-step-closer-to-fixing-its-2026-hybrid-problem/#comments "9 comments")

1.  [![Listing image for first story in Most Read: Orion helium leak no threat to Artemis II reentry but will require redesign](https://cdn.arstechnica.net/wp-content/uploads/2026/04/55194459003_3bae619a73_o-768x432-1775781074.jpg)](https://arstechnica.com/space/2026/04/nasa-homes-in-on-likely-redesign-to-fix-orion-spacecrafts-leaky-valves/)
