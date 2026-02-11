---
title: "Why the economics of orbital AI are so brutal"
source: "Tim Fernholz"
url: "https://techcrunch.com/2026/02/11/why-the-economics-of-orbital-ai-are-so-brutal/"
published: "2026-02-11T18:15:21.000Z"
category: "tech"
summary: "A 1 Gw orbital data center would cost roughly $42.4B—almost three times its ground-bound equivalent."
---
In a sense, this whole thing was inevitable. Elon Musk and his coterie have been talking about AI in space for years—mainly in the context of Iain Banks’ science fiction series about a far-future universe where sentient spaceships roam and control the galaxy. 

Now, Musk sees an opportunity to realize a version of this vision. His company SpaceX has requested regulatory permission to build solar-powered orbital data centers, distributed across as many as a million satellites, that could shift as much as 100 GW of compute power off the planet. He has [reportedly](https://www.nytimes.com/2026/02/10/technology/elon-musk-lunar-factory.html) suggested some of his AI satellites will be built on the Moon.

“By far the cheapest place to put AI will be space in 36 months or less,” Musk said last week on a podcast hosted by Stripe cofounder John Collison. 

He’s not alone. xAI’s head of compute has reportedly bet his counterpart at Anthropic that 1% of global compute will be in orbit by 2028. Google (which has a significant ownership stake in SpaceX) has announced a space AI effort called Project Suncatcher, which will launch prototype vehicles in 2027. Starcloud, a start-up that has raised $34 million backed by Google and Andreessen Horowitz, filed its own plans for an 80,000 satellite constellation last week. Even Jeff Bezos has said this is the future.

But behind the hype, what will it actually take to get data centers into space? 

In a first analysis, today’s terrestrial data centers remain cheaper than those in orbit. Andrew McCalip, a space engineer, has built a [helpful calculator](https://andrewmccalip.com/space-datacenters) comparing the two models. His baseline results show that a 1 Gw orbital data center might cost $42.4B—almost three times its ground-bound equivalent, thanks to the up-front costs of building the satellites and launching them to orbit. 

Changing that equation, experts say, will require technology development across several fields, massive capital expenditure, and a lot of work on the supply chain for space-grade components. It also depends on costs on the ground rising as resources and supply chains are strained by growing demand.

Techcrunch event

Boston, MA | June 23, 2026

## Designing and launching the satellites

The key driver for any space business model is how much it costs to get anything up there. Musk’s SpaceX is already pushing down on the cost of getting to orbit, but analysts looking at what it will take to make orbital data centers a reality need even lower prices to close their business case. In other words, while AI data centers may seem to be a story about a new business line ahead of the SpaceX IPO, the plan depends on completing the company’s longest-running unfinished project—Starship. 

Consider that the reusable Falcon 9 delivers, today, a cost to orbit of roughly $3,600/kg. Making space data centers doable, per Project Suncatcher’s white paper, will require prices closer to $200/kg, an 18-fold improvement which it expects to be available in the 2030s. At that price, however, the energy delivered by a Starlink satellite today would be cost competitive with a terrestrial datacenter. 

The expectation is that SpaceX’s next-generation Starship rocket will deliver those improvements—no other vehicle in development promises equivalent savings. However, that vehicle has yet to become operational or even reach orbit; a third iteration of Starship is expected to make its maiden launch sometime in the months ahead. 

Even if Starship is completely successful, however, assumptions that it will immediately deliver lower prices to customers may not pass the smell test. Economists at the consultancy Rational Futures make a compelling case that, as with the Falcon 9, SpaceX will not want to charge much less than its best competitor—otherwise the company is leaving money on the table. If Blue Origin’s New Glenn rocket, for example, retails at $70 million, SpaceX won’t take on Starship missions for external customers at much less than that, which would leave it above the numbers publicly assumed by space data center builders.

“There are not enough rockets to launch a million satellites yet, so we’re pretty far from that,” Matt Gorman, the CEO of Amazon Web Services, said at a recent event. “If you think about the cost of getting a payload in space today, it’s massive. It is just not economical.”

Still, if launch is the bane of all space businesses, the second challenge is production cost. 

“We always take for granted, at this point, that Starship’s cost is going to be hundreds of dollars per kilo,” McCalip told TechCrunch. “People are not taking into account the satellites are almost $1,000 a kilo right now.”

Satellite manufacturing costs are the largest chunk of that price tag, but if high-powered satellites can be made at about half the cost of current Starlink satellites, the numbers start to make sense. SpaceX has made great advances in satellite economics while building Starlink, its record-setting communications network, and the company hopes to achieve more through scale. Part of the reasoning behind a million satellites is undoubtedly the cost savings that come from mass production. 

Still, the satellites that will be used for these missions must be large enough to satisfy the complex requirements for operating powerful GPUs, including large solar arrays, thermal management systems, and laser-based communications links to receive and deliver data.

A [2025 white paper](https://arxiv.org/pdf/2511.19468) from Project Suncatcher offers one way to compare terrestrial and space data centers by the cost of power, the basic input needed to run chips. On the ground, data centers spend roughly $570–3,000 for a Kw of power over a year, depend on local power costs and the efficiency of their systems. SpaceX’s Starlink satellites get their power from on-board solar panels instead, but the cost of acquiring, launching, and maintaining those spacecraft delivers energy at $14,700 per Kw over a year. Put simply, satellites and their components will have to get a lot cheaper before they’re cost-competitive with metered power.

## The space environment is not fooling around

Orbital data center proponents often say that thermal management is “free” in space, but that’s an oversimplification. Without an atmosphere, it’s actually more difficult to disperse heat.

“You’re relying on very large radiators to just be able to dissipate that heat into the blackness of space, and so that’s a lot of surface area and mass that you have to manage,” said Mike Safyan, an executive at Planet Labs, which is building prototype satellites for Google Suncatcher that are expected to launch in 2027. “It is recognized as one of the key challenges, especially long term.”

Besides the vacuum of space, AI satellites will need to deal with cosmic radiation as well. Cosmic rays degrade chips over time, and they can also cause “bit flip” errors that can corrupt data. Chips can be protected with shielding, use rad-hardened components, or work in series with redundant error checks, but all these options involve expensive trades for mass. Still, Google used a particle beam to test the effects of radiation on its Tensor Processing Units (chips designed explicitly for machine learning applications). SpaceX executives said on social media that the company has acquired a particle accelerator for just that purpose.

Another challenge comes from the solar panels themselves. The logic of the project is energy arbitrage: Putting solar panels in space makes them anywhere from five to eight times more efficient than on Earth, and if they’re in the right orbit, they can be in sight of the sun for 90% of the day or more, increasing their efficiency. Electricity is the main fuel for chips, so more energy = cheaper data centers. But even solar panels are more complicated in space.

Space-rated solar panels made of rare earth elements are hardy, but too expensive. Solar panels made from silicon are cheap and increasingly prevalent in space—Starlink and Amazon Kuiper use them—but they degrade much faster due to space radiation. That will limit the lifetime of AI satellites to around five years, which means they will have to generate return on investment faster. 

Still, some analysts think that’s not such a big deal, based on how quickly new generations of chips arrive on the scene. “After five or six years, the dollars per kilowatt hour doesn’t produce a return, and that’s because they’re not state of the art,” Philip Johnston, the CEO of Starcloud, told TechCrunch.

Danny Field, an executive at Solestial, a start-up building space-rated silicon solar panels, says the industry sees orbital data centers as a key driver of growth. He’s speaking with several companies about potential data center projects, and says “any player who is big enough to dream is at least thinking about it.” As a long-time spacecraft design engineer, however, he doesn’t discount the challenges in these models.

“You can always extrapolate physics out to a bigger size,” Field said. “I’m excited to see how some of these companies get to a point where the economics make sense and the business case closes.”

## How do space data centers fit in?

One outstanding question about these data centers: What will we do with them? Are they general purpose, or for inference, or for training? Based on existing use cases, they may not be entirely interchangeable with data centers on the ground. 

A key challenge for training new models is operating thousands of GPUs together _en masse._ Most model training is not distributed, but done in individual data centers. The hyperscalers are working to change this in order to increase the power of their models, but it still hasn’t been achieved. Similarly, training in space will require coherence between GPUs on multiple satellites.

The team at Google’s Project Suncatcher notes that the company’s terrestrial data centers connect their TPU networks with throughput in the hundreds of gigabpits per second. The fastest off-the-shelf inter-satellite comms links today, which use lasers, can only get up to about 100 Gbps. 

That led to an intriguing architecture for Suncatcher: It involves flying 81 satellites in formation so they are close enough to use the kind of transceivers relied on by terrestrial data centers. That, of course, presents its own challenges: The autonomy required to ensure each spacecraft remains in its correct station, even if maneuvers are required to avoid orbital debris or another spacecraft.

Still, the Google study offers a caveat: The work of inference can tolerate the orbital radiation environment, but more research is needed to understand the potential impact of bit-flips and other errors on training workloads. 

Inference tasks don’t have the same need for thousands of GPUs working in unison. The job can be done with dozens of GPUs, perhaps on a single satellite, an architecture that represents a kind of minimum viable product and the likely starting point for the orbital data center business. 

“Training is not the ideal thing to do in space,” Johnston said. “I think almost all inference workloads will be done in space,” imagining everything from customer service voice agents to ChatGPT queries being computed in orbit. He says his company’s first AI satellite is already earning revenue performing inference in orbit.

While details are scarce even in the company’s FCC filing, SpaceX’s orbital data center constellation seems to anticipate about 100 kw of compute power per ton28, roughly twice the power of current Starlink satellites. The spacecraft will operate in connection with each other and using the Starlink network to share information; the filing claims that Starlink’s laser links can achieve petabit-level throughput. 

For SpaceX, the company’s recent acquisition of xAI (which is building its own terrestrial data centers) will let the company stake out positions in both terrestrial and orbital data centers, seeing which supply chain adapts faster.

That’s the benefit of having fungible Floating Point Operations Per Second – if you can make it work. “A FLOP is a FLOP, it doesn’t matter where it lives,” McCalip said. “\[SpaceX\] can just scale until \[it\] hits permitting or capex bottlenecks on the ground, and then fall back to \[their\] space deployments.”

_Got a sensitive tip or confidential documents about SpaceX? Reach out to Tim Fernholz at [tim.fernholz@techcrunch](mailto:tim.fernholz@techcrunch.com/)_[.c](mailto:tim.fernholz@techcrunch.com/)_[om](mailto:tim.fernholz@techcrunch.com/). For secure communication, you can contact him via Signal at tim\_fernholz.21_.
