---
title: "The Halide app’s anti-algorithm camera mode looks better with a little processing"
source: "Allison Johnson"
url: "https://www.theverge.com/tech/875919/halide-mark-iii-process-zero-hands-on"
published: "2026-02-11T14:00:00.000Z"
category: "tech"
summary: "Backlit is back. | Photo: Allison Johnson / The Verge Something happens every time I try to use an iPhone camera like a real camera. Here's how it goes: I shoot RAW in addition to the default HEIC output, and since I have the RAW file I might as well edit it to my taste. And if I'm going to do that, I want to use Lightroom on my MacBook. You know, real software. Then I remember: iPhone photos hate real software. Moving image files between devices is mysterious. If I Airdrop them to my MacBook will the HDR gain map tag along? Why do my photos always come out of Lightroom looking different than my edit? Where did that gain map go? I lack the patience to find out, so I just live with what my phon … Read the full story at The Verge."
---
Something happens every time I try to use an iPhone camera like a real camera.

Here’s how it goes: I shoot RAW in addition to the default HEIC output, and since I have the RAW file I might as well edit it to my taste. And if I’m going to do that, I want to use Lightroom on my MacBook. You know, real software. Then I remember: iPhone photos hate real software. Moving image files between devices is mysterious. If I Airdrop them to my MacBook will the HDR gain map tag along? Why do my photos always come out of Lightroom looking different than my edit? Where _did_ that gain map go? I lack the patience to find out, so I just live with what my phone camera produces on its own and leave the heavy lifting to my “real” camera.

This has its pros and cons. On the plus side, it’s way easier to deal with iPhone photos if they never leave the native camera app. But it also means leaving processing up to the iPhone, which tends to [run amok with sharpening and raising shadows](https://www.theverge.com/2022/9/12/23345028/iphone-samsung-smartphone-camera-photographic-styles-hdr-contrast). I lean on the app’s built-in Photographic Styles (shout out to Rich Contrast, you’re a real one) to avoid this, but lots of people look to [third party options like Halide’s Process Zero](https://www.theverge.com/2024/8/14/24220178/halide-camera-app-process-zero-ai).

Halide introduced this mode to its popular iPhone camera app last year. Process Zero promises to strip away the excess processing the native camera pipeline applies to images, resulting in photos with deeper shadows and less aggressive sharpening. Sounds great if you’re sick of the processed-to-death phone camera look!

But I’ll admit to being a bit of a Process Zero skeptic. I lived through the pre-computational-photography era of crappy phone cameras, and I generally prefer the lower noise and usable low light photos you get with current camera tech. With a higher contrast photo style applied, it gets me close enough to the look I like, even if it feels like I’m taking pictures with a computer and not so much a _camera_. But [Halide just released the second version of Process Zero in beta](https://www.theverge.com/tech/869354/halide-mark-iii-process-zero-update), adding a couple of features that got me interested: HDR support, and the ability to shoot in Apple’s RAW format.

If those sound antithetical to Process Zero’s whole deal, well, maybe they are. And if we’re being technical about it, there was already _some_ processing going on in Process Zero — there’s no other way to turn a bunch of sensor data into a usable image. But here’s what I appreciate about version two’s upgrades. First of all, adding HDR support doesn’t mean it’s going to turn your photo into [a Thomas Kinkade painting](https://www.bbc.com/culture/article/20250326-why-the-quaint-paintings-of-thomas-kinkade-divided-the-us). It means that the brightest areas of your photo can be brighter, creating a greater contrast between light and dark areas of the image. It’s the exact opposite of the flat, HDR-ish look that phone cameras often produce to try and represent a wide range of tones for an SDR screen. Don’t take my word for it; [listen to Marc Levoy](https://www.theverge.com/podcast/768156/puzzle-games-sudoku-cracking-the-cryptic-project-indigo-marc-levoy), who pioneered computational photography on smartphones.

There’s also the option to shoot HEIC + RAW, meaning that in addition to the Process Zero image, you’ll have a DNG file that has been through _some_ of Apple’s computational pipeline. Apple’s ProRAW format combines multiple frames to reduce noise, but retains all of the extra data you’d expect a RAW file to contain so you can apply your preferred tone mapping. You can turn this additional RAW capture on or off, and it doesn’t affect the Process Zero output, so you can treat it like a failsafe if you don’t like the default image.

Whether or not you shoot RAW, you’ll have an option to adjust tone mapping within the Halide app through a new feature called Tone Fusion. It essentially boosts shadows, but it’s in your control and it’s not as intense as Apple’s tendencies. Even when I crank it all the way up, it doesn’t try to shift a blown-out sky blue the way the native iPhone processing does, and I appreciate that.

[![<em>Default Process Zero output</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_p0_default.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_p0_default.jpg?quality=90&strip=all)

[![<em>Process Zero with maximum tone fusion applied</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_p0_tonefusion.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_p0_tonefusion.jpg?quality=90&strip=all)

[![<em>Default iPhone camera app output, standard Photographic Style</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_iphone.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/hdr_ex_iphone.jpg?quality=90&strip=all)

**1/3**

_Default Process Zero output_

I think an underrated benefit of Process Zero, or [Adobe’s Project Indigo](https://www.theverge.com/tech/694014/adobe-project-indigo-camera-app-hands-on-hdr), is what it does for your mindset as you take photos. Sure, you could achieve the same kind of look by shooting with ProRAW in the native camera app, taking the photo into Lightroom, and adjusting contrast to your liking. But Process Zero provides appealing results straight out of the camera; it feels different knowing you’re going to get something you like right away, rather than a file you have to fight with first.

I also feel like it gives me permission to think of myself as a photographer for a little while, not just a person with a phone. I went on a little photo walk in Seattle’s Pioneer Square and International District neighborhoods, which I’ve done dozens of times over the past decade. Outside [Union Station](https://www.atlasobscura.com/places/union-station) — an old train station-turned-transit-agency-headquarters — I noticed a sign I’d never seen before, noting that the building’s great hall was open to the public. I’m not sure I would have bothered if I was just out wandering around, but with a specialized camera app on my phone I felt more like I was out _doing photography_, so I went in. It’s stunning, as it turns out, and I don’t know how I went over a decade living in this city without setting foot inside.

HDR is good, y’all

And you know what? I do like the photos I got in there with Process Zero. Shooting with a ProRAW file in my back pocket, I knew I’d have something to work with if I didn’t like the default. But I haven’t touched those files, because the JPEGs are great. There was some late afternoon sun illuminating the station’s massive windows; rather than trying to bring those highlights down and boost every shadow, Process Zero lets the bright spots clip and keeps the emphasis on the interior. The HDR gain map lets the brightest parts of the scene pop, creating contrast between the fully illuminated windows and the slightly-less-bright golden sunlight filtering in against the wall. HDR is good, y’all.

Process Zero v2 is part of a public preview of Halide’s larger Mark III update, so things might change before it’s finalized. But I like what I’m seeing, especially for Process Zero. The computational photography era has offered us a lot more than some over-processed JPEGs — the fact that we can take decent photos in basically any light conditions with the tiny sensors on our phones is nothing short of a technological triumph. Updating Process Zero to incorporate some of those benefits, if and when you want them, doesn’t detract from the minimalist experience; it’s an enhancement. And it’s enough to convert a skeptic like me.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Allison Johnson
