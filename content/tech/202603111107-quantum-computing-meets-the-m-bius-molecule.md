---
title: "Quantum computing meets the Möbius molecule"
source: "
                    John Timmer
                "
url: "https://arstechnica.com/science/2026/03/quantum-computing-meets-the-mobius-molecule/"
published: "2026-03-11T11:07:54.000Z"
category: "tech"
summary: "A complex structure with multiple electrons is within reach of today's hardware."
---
Computing with a twist

A complex structure with multiple electrons is within reach of today’s hardware.

Credit: IBM Research and the University of Manchester

Last week, IBM trumpeted its contributions to a rather unusual paper: the production of a molecule with a half-Möbius topology, assisted by an algorithm run in part on a quantum computer. There was, to put it mildly, a lot going on in this paper, and it took a little while to digest. But it’s interesting in what it says about the sorts of chemistry that we can construct with tools developed over the past several decades, as well as how quantum computation is inching toward utility.

But getting the full picture requires about three different stories, so we’ll go through each of them separately before bringing the big picture together.

## Orbitals with a twist

Those of you who can still dredge up your high school chemistry lessons probably remember benzene, a six-carbon ring with alternating single and double bonds that kept all the carbons locked into a single plane, creating a flat molecule. What you are a bit less likely to remember is that the double bonding is mediated by orbitals that extend vertically above and below the nucleus of the carbon atoms. Thanks to the alternating single-double nature of the bonds, electrons in these orbitals end up delocalized; the differences between the bonds become a bit irrelevant, and the molecule is best viewed as having some of its electrons floating around in a cloud. The same would hold true for even larger molecules with the same sort of bonding arrangement.

The way the orbitals are arranged in benzene, any electrons that circulate around the molecule will end up back where they started. By linking other atoms to the carbon ring, it’s possible to place orbitals at different angles from the vertical. With the right combination of additional orbitals, it’s possible to twist things so that an electron starts out on top of the molecule (assuming the ring is laid flat on a surface) but ends up at the bottom by the time it completes a full circuit around the ring. It would have to do a second loop around the ring to end up back where it started.

This has a direct analog in tracing a path along the surface of a Möbius strip, where you also need to perform two circuits to end up back where you started. In fact, some simple Möbius molecules have been synthesized in the past.

What sets the new research apart is its use of the fact that there are far more options for orbitals and bonds than we see in simple benzene derivatives. The large international team (which includes both academics and IBM researchers) found a way to create a half-Möbius arrangement, in which the orbitals of a ring-shaped molecule are arranged such that, after a single loop around the molecule, an electron would be neither on the top nor bottom of the molecule, but somewhere around the periphery.

It would need to perform two loops just to end up on the bottom and then two more loops to end up back where it started.

This isn’t a stable configuration; left on its own, the molecule would collapse into a far more mundane configuration in short order. And there’s no obvious use to it, even assuming we could keep it stable for long enough to test for applications. But it’s an interesting exploration of our ability to manipulate orbital configurations on the molecular level, and there’s no telling how that ability might ultimately pay off.

## Like quantum computing, it’s weird and complicated

If you wanted to make something this odd, it’s not necessarily obvious how you would go about it. If tweaking orbital configurations were easy, someone probably would have done it already. And, as the authors of the paper that describes this work note, there are a lot of potential orbital shapes that are allowed by quantum mechanics, but the exact configuration that gets used in a molecule can depend on which of those orbitals are occupied and by how many electrons.

But as you deal with larger molecules—the team here worked with a 13-carbon ring studded with two chlorine atoms—the number of electrons involved gets complicated, and calculating what they would end up doing to the orbitals becomes increasingly intractable. In this situation, you’re looking at a series of orbitals that would be occupied by 24 electrons from the carbon atoms, plus another eight from the two chlorine atoms. This is beyond our ability to perform exact classical simulations of what the orbitals should look like.

But the orbitals are a quantum system, and it’s possible to map their nature to the sort of quantum system we can manipulate: a quantum computer. While an exact solution is likely beyond the capabilities of existing quantum computers, they proved useful for the execution of a mixed classical-quantum algorithm called [Sample-based quantum diagonalization](https://quantum.cloud.ibm.com/learning/en/courses/quantum-diagonalization-algorithms/sqd-overview).

A sampling algorithm means just what it says: you gather a lot of samples of the behavior of a system and use those to extract general rules about its behavior. In this case, the classical part of the algorithm helps set up multiple operations on the quantum hardware, each of them providing an individual sample. Each of these samples can be executed faster than it would take classical hardware and is short enough that it doesn’t typically run up against the quantum hardware’s error limits. Because of the speed of the quantum hardware, lots of samples could be run, so any individual errors should get swamped by regular results.

The end result is that the team validated that certain manipulations could help them create the half-Möbius molecule with the right starting chemical.

## How do you make this stuff?

The molecule they chose to make is, to put it mildly, an odd one. It’s a 13-carbon ring with chlorines linked to opposite sides of the ring. Because there is an odd number of carbons, this means that chlorines flank five carbons on one side of the ring and six on the other (see the structures below). Left on its own, the molecule would form alternating single and triple bonds. But the presence of the chlorines and an odd number of atoms mean that this alternation gets disrupted, leading to a double bond and some unpaired electrons floating around.

[![](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Screenshot-2026-03-10-at-5.30.18-PM.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Screenshot-2026-03-10-at-5.30.18-PM.png)

With the right processing, the starting molecule (top) would form the center structure. Directed application of voltages could convert it among the three forms on the bottom row.

With the right processing, the starting molecule (top) would form the center structure. Directed application of voltages could convert it among the three forms on the bottom row.

One consequence of all of this is that the molecule isn’t really stable. The researchers made it in isolation, and it was kept at an extremely low temperature and isolated, sitting on the surface of a salt crystal. The second is that it’s probably impossible to design a series of chemical reactions that could synthesize it. Instead, the researchers started with a three-ring molecule with lots of chlorines attached and used a scanning tunneling microscope to apply precise voltages to specific atoms, breaking a few carbon-carbon bonds and popping off most of the chlorine atoms.

Once the correct molecule was formed, the same microscope was used to apply voltages to specific positions relative to the molecule, guided by earlier simulations. This shifted the configuration of the molecule, popping the two chlorines out of the flat plane defined by the carbon ring. Electrons shifted so that the side of the molecule with five carbons between the chlorines formed a series of double bonds; on the other side, single and triple bonds predominated.

This, in turn, altered the configuration of the orbitals to achieve the half-Möbius configuration that the researchers were aiming for. This was confirmed by atomic force microscopy, which registered the orbital configurations and showed that they largely matched the predictions derived from the computational sampling.

## What to make of this

For starters, it’s worth stepping back to appreciate what was done here, since there are multiple aspects of this that could be considered science fiction just a couple of decades ago. Faced with a molecule that would be impossible to synthesize through chemical reactions, we applied precise voltages to individual atoms to tailor a single molecule to our precise needs. And then we manipulated its precise bonding configuration with additional carefully applied voltages.

All of that was made possible by our remarkable understanding of the quantum mechanical behavior of molecular orbitals.

By contrast, the use of quantum computing may seem relatively mundane. It involved a mixed quantum/classical algorithm, which was specifically tuned to work around the limits in error rates and qubit counts (it used over half of the 150 or so qubits on IBM’s Heron processor). But this is likely to be what quantum computing looks like for the next few years, as our gradually expanding capabilities start to bring a handful of slightly more sophisticated algorithms into reach with each bit of progress. And that’s pretty exciting in its own way.

Science, 2026. DOI: [10.1126/science.aea3321](http://dx.doi.org/10.1126/science.aea3321) ([About DOIs](http://arstechnica.com/science/news/2010/03/dois-and-their-discontents-1/)).

[![Photo of John Timmer](https://cdn.arstechnica.net/wp-content/uploads/2026/02/john-timmer-300x300.jpg)](https://arstechnica.com/author/john-timmer/)

John is Ars Technica's science editor. He has a Bachelor of Arts in Biochemistry from Columbia University, and a Ph.D. in Molecular and Cell Biology from the University of California, Berkeley. When physically separated from his keyboard, he tends to seek out a bicycle, or a scenic location for communing with his hiking boots.

[33 Comments](https://arstechnica.com/science/2026/03/quantum-computing-meets-the-mobius-molecule/#comments "33 comments")

1.  [![Listing image for first story in Most Read: NASA and SpaceX disagree about manual controls for lunar lander](https://cdn.arstechnica.net/wp-content/uploads/2025/10/07_24_25_HLS_on_surface_elevator_down_4d48994673-768x432.jpg)](https://arstechnica.com/space/2026/03/nasa-and-spacex-disagree-about-manual-controls-for-lunar-lander/)
