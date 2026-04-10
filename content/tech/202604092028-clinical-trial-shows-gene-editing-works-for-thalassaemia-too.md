---
title: "Clinical trial shows gene editing works for β-Thalassaemia, too"
source: "
                    John Timmer
                "
url: "https://arstechnica.com/science/2026/04/clinical-trial-shows-gene-editing-works-for-%ce%b2-thalassaemia-too/"
published: "2026-04-09T20:28:48.000Z"
category: "tech"
summary: "Improved gene editing process reactivates the fetal version of a hemoglobin gene."
---
Ready for edits

Improved gene editing process reactivates the fetal version of a hemoglobin gene.

Almost as soon as researchers started exploring the capabilities of the CRISPR/Cas9 system, they recognized its potential use in targeted gene editing. But the intervening decades have seen slow progress as people worked to determine how to do so in a way that would be safe for use in humans. It was only a little over two years ago, decades after CRISPR’s discovery, that the FDA [approved the first CRISPR-based therapy](https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease), for sickle-cell anemia.

Now, following up on that success, a large Chinese collaboration has followed up with a description of an improved gene editing system that produces more focused changes and fewer mistakes. And they’ve used it to produce a therapy that addresses a disease that’s closely related to sickle-cell anemia: β-Thalassaemia.

## Gene editing and its limits

The CRISPR/Cas-9 system provides bacteria with a form of immunity. It uses specially structured RNAs (called guide RNAs) that can base-pair with a targeted sequence. The Cas-9 protein then recognizes this structure and cuts the DNA nearby. This is quite effective when the guide RNA can base-pair with a DNA virus, as the resulting cut will inactivate the virus.

There are a couple of ways to use this for DNA editing in organisms such as ourselves. Both of these take advantage of the fact that the DNA repair systems in cells will often chew back the ends of these cuts before linking them back together again. This will frequently lead to small deletions at the site of the cut, which can be used to disable genes. The size of these deletions will vary, so you have to do some DNA sequencing to find one that disables the gene you’re interested in, but doesn’t do any additional damage.

Alternately, any deleted sequence can sometimes be repaired using a matching sequence, which is typically found on the other copy of the same chromosome. If the CRISPR-based cut is accompanied by lots of copies of a modified sequence, then it’s possible for repair systems to insert the modifications into the genome, providing a true editing capability. But again, this process is error-prone, so people typically need to edit a bunch of cells and sequence the DNA to make sure the right changes are made.

And lurking in the background is the risk that CRISPR/Cas9 will end up cutting at a similar-looking sequence somewhere else in the genome. These off-target cuts can have unpredictable effects, and most gene-editing experiments require additional screening to eliminate any cells that have them.

All of which is why the first CRISPR-based therapies are taking place in blood stem cells, since those can be grown in culture. The approach involves making edits in lots of cells, then screening for those cells that lack off-target edits and selecting those where the on-target edit has had the intended outcome. What we’re not seeing much of yet is the sort of edit that needs to take place in a large population of cells in the body, since if anything goes wrong there, we’re unlikely to be able to tell or do anything about it if we did find a problem.

## Like CRISPR, but better

All that said, a lot of work has been put into trying to make a more precise version of CRISPR, and the new study takes advantage of some of that. One of the approaches used here involves getting rid of Cas9, since the double-stranded breaks it makes are the source of a lot of the unpredictable outcomes. Instead, these methods generally involve one or more single base changes. And other methods have been used to limit the activity to only a single site in the genome, avoiding any off-target edits.

The system used here involves a protein that chemically lops off a nitrogen from the base cytosine (C), converting it to something that base-pairs more like thymidine (T). This is fused to a protein that can stick to the CRISPR-style guide RNA that targets the sequence of choice. It’s also present in an inactive form and requires a separate enzyme (a protease) to activate it. A key part of that enzyme is also tethered to the guide RNA complex, so the mutation-generating enzyme will only be activated when the full guide RNA complex is present.

One complication here is that the mutations this system creates—the C->T changes—are common enough that our cells have enzymes that specifically repair them. So, one other thing that’s linked in to the guide RNA complex is a bacterial protein that inhibits this DNA repair system. Essentially, this complex not only makes mutations in specific places, but also blocks them from being fixed at those locations.

So, while any one of these activities—the base editor, the enzyme that activates it, and the repair inhibitor—might get activated transiently in the wrong place, creating mutations requires all three of them to be around for a while. And that is thought to require specific targeting of a perfect sequence match to the guide RNA.

The research team spent a fair bit of time in the paper showing that this is the case. They find that mutations are generated at the intended site with lower efficiency than some competing systems (about 30 percent compared to over twice that frequency), but the benefit is a complete absence of off-target edits.

## Fixing the disease

A large range of mutations cause β-Thalassaemia, and it’s unrealistic to think that all of them could be fixed with a single editing system. So instead, the researchers took an approach that had been under consideration for decades: reactivating the fetal version of the gene. This version has a higher affinity for oxygen than normal hemoglobin, allowing it to grab oxygen from the hemoglobin in the mother’s bloodstream. This gene is normally shut down in adults.

We’ve identified a key protein that binds specifically to DNA near the gene and is essential for shutting it off. The gene edits here simply damage the site that this inhibitor binds, allowing the fetal gene to be active in adults. This edit was done in blood stem cells obtained from these patients, and only those cells that grew from successful edits with no off-target problems were transplanted back.

The [clinical trial](https://clinicaltrials.gov/study/NCT06024876?term=NCT06024876&viewType=Card&rank=1) here is just a basic safety test, involving only five ß-thalassaemia patients. After doing the editing on their stem cells, they were treated with a chemotherapy that wipes out their existing stem cell population. This procedure has some notable side effects, and those were all seen in these patients, but all five remained enrolled in the trial for at least a year after getting the transplant.

And it worked. After a few weeks, hemoglobin levels in the blood started rising, and all of the patients met the trial’s key success metric: over six months without needing a transfusion to control their β-Thalassaemia.

Overall, the biggest problem that the researchers see with this approach is the expense. All of the cell culture and DNA sequencing add up, and the transplant protocol involves some significant medical interventions. And none of these steps can really be skipped without compromising safety. Long term, given the health management required for people with β-Thalassaemia, it’s entirely possible that this balances out, though. We’ll have to wait a while to hear about quality-of-life changes, but those are likely to be significant as well.

While there may be questions regarding the cost, the results really highlight how gene editing is transitioning from a promising technology with some significant challenges to something we can use to produce multiple therapies. And, though there are still a lot of limits to how we can apply these initial next-generation approaches, it’s clear there are a lot of additional ideas that could produce generations beyond these.

Nature, 2026. DOI: [10.1038/s41586-026-10342-9](http://dx.doi.org/10.1038/s41586-026-10342-9)  ([About DOIs](http://arstechnica.com/science/news/2010/03/dois-and-their-discontents-1/)).

[![Photo of John Timmer](https://cdn.arstechnica.net/wp-content/uploads/2026/02/john-timmer-300x300.jpg)](https://arstechnica.com/author/john-timmer/)

John is Ars Technica's science editor. He has a Bachelor of Arts in Biochemistry from Columbia University, and a Ph.D. in Molecular and Cell Biology from the University of California, Berkeley. When physically separated from his keyboard, he tends to seek out a bicycle, or a scenic location for communing with his hiking boots.

[8 Comments](https://arstechnica.com/science/2026/04/clinical-trial-shows-gene-editing-works-for-%ce%b2-thalassaemia-too/#comments "8 comments")

1.  [![Listing image for first story in Most Read: Orion helium leak no threat to Artemis II reentry, but will require redesign](https://cdn.arstechnica.net/wp-content/uploads/2026/04/55194459003_3bae619a73_o-768x432-1775781074.jpg)](https://arstechnica.com/space/2026/04/nasa-homes-in-on-likely-redesign-to-fix-orion-spacecrafts-leaky-valves/)
