---
title: "How I streamed my off-road Miata race using Starlink and StarStream"
source: "
                    Emme Hall
                "
url: "https://arstechnica.com/cars/2026/03/how-i-streamed-my-off-road-miata-race-using-starlink-and-starstream/"
published: "2026-03-12T11:00:33.000Z"
category: "tech"
summary: "This satellite streaming technology transforms off-road racing for fans and teams."
---
also contains percussive maintenance

This satellite streaming technology transforms off-road racing for fans and teams.

[![An off-road modified Miata gets some air as it drives off-road.](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Buddy-fly.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Buddy-fly.jpg)

This is Buddy, an off-road Miata. Credit: Dusty Summit

This is Buddy, an off-road Miata. Credit: Dusty Summit

Regardless of your interest in motorsport, you’ve almost certainly heard of the [Monaco Grand Prix](https://arstechnica.com/cars/2025/05/f1-in-monaco-no-one-has-ever-gone-faster-than-that/), [Daytona 500](https://arstechnica.com/cars/2019/02/winning-in-nascar-meticulous-preparation-or-just-good-luck/), and [Indianapolis 500](https://arstechnica.com/features/2025/05/how-to-try-to-win-the-indianapolis-500/). These iconic races are easy to spectate, with grandstands lining the course and a camera or two at every turn. Video feeds from the race can be transmitted live thanks to the infrastructure of the populated areas surrounding the tracks.

But what if your course is 100 miles (161 km) from nowhere? It’s 1,000 miles (1,610 km) long, and the only way to access it is on bumpy, dirty access roads that require four-wheel drive and plenty of clearance. If you want to watch the whole race with your own eyes, you’ll need to hire a helicopter. And broadcasting it live on TV? Good luck.

All that is changing with the advent of StarStream, a video and content streaming service that can be used with Starlink, the low-Earth-orbit satellite Internet system that has changed the way off-road race teams communicate. But George Hammel, a former motocross and UTV racer, saw even more potential: a way to bring fans into the cockpit, live.

[![](https://cdn.arstechnica.net/wp-content/uploads/2026/03/BUDDY_MIATA_JV-08553.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/BUDDY_MIATA_JV-08553.jpg)

Until now, it has been hard to share this kind of racing with anyone but your co-driver.

Credit: Dusty Summit

Until now, it has been hard to share this kind of racing with anyone but your co-driver. Credit: Dusty Summit

Hammel was always drawn to storytelling. As a factory-backed athlete, he quickly realized that the real value he brought to sponsors was not race results but how well he connected with fans. What better way to do that than by bringing them on board a vehicle during a race?

His first attempt at livestreaming was a disaster. His team outfitted his race car, chase vehicles, and a helicopter with GoPro cameras, but the Starlink connection they used was slow and couldn’t process the video sufficiently to transmit it over the Internet.

So Hammel wrote some code that breaks down the video data into small enough packets that can fit through the Starlink’s data points, and StarStream was born.

I decided to try it out.

## What the heck is StarStream?

Hammel lent me a StarStream kit for a race in Laughlin, Nevada, last December, and I was pretty amazed by its simplicity. It consists of two GoPros tethered to a small box about 8 inches square and 2 inches thick (20 cm x 5 cm). One GoPro is configured to capture audio from a race car’s intercom system, recording conversations between the co-driver and driver, plus pit crew chatter. There’s also a port for a Starlink mini and a power cord.

[![Three cars line up for the start of an off-road race](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Screenshot-2026-02-14-at-8.46.53-PM.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/Screenshot-2026-02-14-at-8.46.53-PM.png)

Note the Starlink antenna (temporarily) mounted to the roof. The StarStream box was safely secured in a padded bag in my co-driver’s footwell.

Credit: Turn2 TV

Note the Starlink antenna (temporarily) mounted to the roof. The StarStream box was safely secured in a padded bag in my co-driver’s footwell. Credit: Turn2 TV

(The system draws 1.1 A or less at 12 V; I could have hardwired it to my battery, but since I was using a loaner unit for a relatively short race, Hammel gave me a power cord that works with a Milwaukee battery.)

We lined up for the race at 6:15 am in the dark. Flaherty simply had to turn the StarStream box on, and the cameras instantly powered up, one facing inward and the other set to record the desert outside.

## Buddy the off-road Miata

[I race a lifted Miata](https://arstechnica.com/cars/2025/11/i-drove-for-over-2000-kilometers-off-road-without-gps-in-the-rebelle-rally/) named “Buddy.” Since my setup is unique, I was placed in the sportsman class and took the green flag alongside two giant off-road rigs with V8 engines and 35-inch tires. Also sharing the track were UTVs with 20 inches of wheel travel, Trophy Trucks with even more, and everything in between. To say I was outclassed is an understatement.

StarStream let me share exactly what that experience was like. Each user gets a link to a webpage displaying the live feed, but I went one step further and hired someone to run the stream on my YouTube page. Using the free Open Broadcaster Software, Samuel Nyandwi from Live Stream Tricks and Tips made the broadcast look polished—adding a background, switching camera views, and even setting things up so sponsor logos could have been included if I’d had the time to organize them. Heck, with enough viewers, I could have even sold ads against the stream. And he did all of this from Quebec, Canada.

We sat in staging for a while, so the [racing action](https://www.youtube.com/watch?v=WktZCK8A8nY&t=1545s) doesn’t start until 20 minutes into the stream. Tune in to see Flaherty and me sing songs, panic at the glare of the sun, and catch more air than we intended to. Unfortunately, it ends in… well, let’s just say it involves smoke.

## How the pros StarStream

Of course, my race was small potatoes compared to one of the largest off-road events in the world, King of the Hammers. While I used my StarStream as a lark—showing 400 people or so how dumb it is to race a Miata in the desert—[Paul Wolff’s stream](https://www.youtube.com/watch?v=CYeMUgt-dH8) brought 73,000 fans along in a 13-hour race so difficult that only two of the 82 cars finished.

It’s hard to overstate just how difficult King of the Hammers is. Race trucks need to speed across a desert section filled with whoops and deep silt, and they then have to clamber over rocks [twice their size](https://www.youtube.com/live/CYeMUgt-dH8?si=PrhpLP_QcEyNX8Cb&t=11112). Sometimes the obstacles are so large that teams use winches just to get past them. The rigs themselves are monsters, with huge V8s, rear steering, beefy axles, and 42-inch tires. Most teams run a driver and co-driver, but Wolff prefers to do things the hard way, piloting a single-seat car all alone.

Paul Wolff at this year’s King of the Hammers. Matthew Molter

Wolff led much of the race, but 10 hours in, just as the sun was setting, the course turned into something rarely seen in competition. The route pushed through sections of Johnson Valley, California, long thought too gnarly to race on. Fans watched Wolff in real time as his steering system suffered a catastrophic failure, leaving him stranded in the dark with an abandoned, broken vehicle just ahead. With limited tools and the race clock clicking down to the 14-hour limit, he had to figure out a fix on the spot.

[The livestream](https://www.facebook.com/reel/1616846989631651) showed Wolff saying, “Come on, wifey—I need you, babe. Call me up.”

Using the Starlink connection onboard the car, he was able to contact his wife, Christie, as thousands of fans listened in. At one point, Wolff tells her, “I think I broke my foot,” as the video shows him limping among the large rocks at the front of the car. When he explained that he didn’t have the parts to fix the steering problem, she replied, “Do you want me to Google something?”

[![A man adjusts an antenna on the roof of an off-road racing car](https://cdn.arstechnica.net/wp-content/uploads/2026/03/WOLFFRACINGKOH2026-5673.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/WOLFFRACINGKOH2026-5673.jpeg)

Technology brought home the human side of this sport.

Credit: Matthew Molter

Technology brought home the human side of this sport. Credit: Matthew Molter

Wolff assured his wife that he wouldn’t quit, but he wanted to FaceTime with his kids. He collapsed onto the rear of the broken truck in front of him, exhausted but clearly still thinking about how to fix his broken steering.

## Sometimes the oldest tech works, too

The whole situation was wild. Just two years ago, a call to a loved one in the middle of a race in the desert would have required a spotty, expensive satellite phone, and fans would have had to wait until the next day to hear what happened. Here, we watched Wolffe’s struggle unfold in real time.

What’s even cooler is what was happening back at race ops. There, organizers ran a live show using remote cameras and Starlink to broadcast the race from a few select points on the course to the nearly 200,000 people watching on YouTube. The live show hosts were able to display the live feed from Wolff’s car on their video feed, so even those who didn’t know how to find Wolff’s feed could see it happening. Again, all this happened in real time thanks to StarStream and Starlink.

[![A man fixes a wheel on his off-road racing car](https://cdn.arstechnica.net/wp-content/uploads/2026/03/WOLFFRACINGKOH2026-5653.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/WOLFFRACINGKOH2026-5653.jpeg)

A rock counts as a tool.

Credit: Matthew Molter

A rock counts as a tool. Credit: Matthew Molter

In the end, Wolff was able to get his car drivable by hitting the steering components with a rock and using a ratchet strap to hold it in place. He then manhandled the heavy car to his pit, where his team worked to get his rig back on course.

## Benefiting the fans and the sponsors

Unfortunately, Wolff timed out of the race and was officially DNF–Did Not Finish–but he won the hearts of many fans. The team’s merchandise purchases increased tenfold, he’s the talk of the off-road Facebook pages, and Wolff’s sponsors, especially Warn winches, couldn’t be happier.

“King of the Hammers is a huge deal for us,” said Jake Petersen, VP of marketing for Warn. “It’s the hardest race in the world where competitors have to winch around obstacles. Paul is by himself, and he had our new Zeon XC winch that we launched the week before. StarStream makes the Warn platform that much bigger. Fans can see the brand and watch the winch in action.”

The system isn’t perfect, though, especially when the Starlink antenna is obstructed. Wolff’s stream had plenty of unclear sections thanks to the narrow rock canyons the course goes in and out of. Without a clear view of the sky, the Starlink struggles.

[![An off-road race car drives up a 45-degree slope](https://cdn.arstechnica.net/wp-content/uploads/2026/03/PB1_6696-2.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/03/PB1_6696-2.jpg)

After the canyons of King of the Hammers (seen here), Wolff is off next to Moab, Utah.

Credit: Paolo Baraldi

After the canyons of King of the Hammers (seen here), Wolff is off next to Moab, Utah. Credit: Paolo Baraldi

StarStream doesn’t come cheaply, either, although when factored into a pro race team’s overall budget, it’s fairly reasonable. The box, cameras, and cords are [$3,600](https://starstream.pro/?srsltid=AfmBOoqdxiPStq1HDUo4mmeDnX7Tt9KYFFS-DNbNJidtxUoZ-Hp-NQ7-). You’ll need a Starlink Mini antenna for about [$300](http://www.starlink.com/), and you need the $250 per month Global Priority service plan. I bought my rooftop mount for [$220](https://www.savageutv.com/collections/starlink-mini-products?gad_source=1&gad_campaignid=17889317909&gbraid=0AAAAAC0k8Cvxsrmgj1EiSA-sRFAd2QEqG&gclid=CjwKCAiAtLvMBhB_EiwA1u6_PmtuKa0sYDPOD_Aczxpv4NYFAdVR4v33ssWDYk3KvtvUWUiZFCGrDxoC5X0QAvD_BwE) from Savage UTV. You’ll also need sturdy mounts for the cameras and a mount for the StarStream box.

[Paul Wolff](https://paulwolffracing.com/) is back home now, no doubt resting his foot and tearing down his car in preparation for the next crazy rock crawling event on the red slabs of Moab, Utah, on March 31. He’ll be far from civilization, but his livestream will be right on your computer.

[5 Comments](https://arstechnica.com/cars/2026/03/how-i-streamed-my-off-road-miata-race-using-starlink-and-starstream/#comments "5 comments")

1.  [![Listing image for first story in Most Read: NASA and SpaceX disagree about manual controls for lunar lander](https://cdn.arstechnica.net/wp-content/uploads/2025/10/07_24_25_HLS_on_surface_elevator_down_4d48994673-768x432.jpg)](https://arstechnica.com/space/2026/03/nasa-and-spacex-disagree-about-manual-controls-for-lunar-lander/)
