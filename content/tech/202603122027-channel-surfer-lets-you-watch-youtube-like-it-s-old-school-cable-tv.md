---
title: "Channel Surfer lets you watch YouTube like it’s old-school cable TV"
source: "Sarah Perez"
url: "https://techcrunch.com/2026/03/12/channel-surfer-watch-youtube-retro-cable-tv-guide/"
published: "2026-03-12T20:27:17.000Z"
category: "tech"
summary: "The web app lets you turn on YouTube and surf channels like you're watching cable TV in the '90s."
---
There’s a fun new way to watch YouTube: by channel surfing like a boomer with cable TV. This creative idea comes from London-based developer [Steven Irby](https://www.linkedin.com/in/stevenirby1/), who has just launched a web app called [Channel Surfer](https://channelsurfer.tv/), which presents interesting YouTube videos in an interface resembling a retro-looking TV guide.

In the app, you can browse through different, topic-focused channels and click to tune in as if you were watching live TV.

At launch, there are 40 of these custom-built “channels” to choose from, including those focused on general topics like news, politics, sports, and lifestyle content, as well as a selection of music channels and others with a more tech focus.

The latter group includes channels like “AI & ML,” “Code & Dev,” “Space,” “Retro Tech,” “Tech & Gadgets,” and “Gaming.”

![](https://techcrunch.com/wp-content/uploads/2026/03/channel-surfer-1.jpg?w=680)

**Image Credits:**Channel Surfer

As you move between channels, you join the video being played mid-stream. Meanwhile, the guide informs you of the upcoming content on all the channels and what time of day it will play. You can also scroll ahead to look at programming planned for the next 24 hours.

This makes watching YouTube feel a lot like watching old-school live television — an experience that’s proven popular on free streaming services like Plex, Pluto TV, Tubi, and others, which offer lineups of live channels playing TV shows and movies. YouTube itself, meanwhile, [dominates TV streaming in the U.S](https://techcrunch.com/2024/02/20/youtube-dominates-tv-streaming-in-u-s-per-nielsens-latest-report/).

Plus, a small counter at the bottom of the screen tracks how many other people are currently watching YouTube with you.

![](https://techcrunch.com/wp-content/uploads/2026/03/channel-surfer-2.jpg?w=680)

**Image Credits:**Channel Surfer

Irby says he came up with the idea to build a similar experience at the streamers, but for YouTube videos, because finding something to watch can still be a struggle.

“I built Channel Surfer because I’m tired of the algorithms and indecision fatigue,” Irby told TechCrunch. “I miss channel surfing and not having to decide what to watch. I want to just sit and tune into what’s on and not think about what to watch next.”

“My boomer Mom watches cable TV. I want the same, but with my YouTube channels instead. Also, it’s weirdly comforting to know I’m watching with other people,” he said.

The project is one of many new experiments from Irby, a 40-year-old tech industry veteran who has spent the past decade-plus traveling the world.

“I have so much creativity from my long, weird journey. I can’t bear the thought of being a Jira ticket monkey anymore,” he said.

The app seems to be a hit, with Irby [noting](https://x.com/StevenIrby/status/2032045893164126227) that [Channel Surfer’s brand-new website](https://channelsurfer.tv/) saw more than 10,000 views on its first day.

Under the hood, Channel Surfer is, for now, a static [Next.js](https://nextjs.org/) site that uses [PartyKit](https://www.partykit.io/) and is hosted on [Cloudflare](https://www.cloudflare.com/). The channels and music it offers are from Ibry’s own hand-picked list. [GitHub Actions](https://github.com/features/actions) is used to run a script that refreshes the data daily. There’s no back end yet.

And while [Claude](https://claude.ai/) assisted in the coding process, the site is not “vibe-coded,” Irby says.

The channels themselves are essentially playing YouTube embeds, including YouTube’s ads, so the app should not be violating policy. Eventually, Irby says he’d love to bring the app to TV platforms, like Fire TV, Google TV, and others. (It also runs on mobile devices and tablets, but needs more work.)

At launch, Channel Surfer is a free service offering access to 175 YouTube channels and 25 music playlists. But if you subscribe to Irby’s [newsletter](https://randomdailyurls.com/), you’re given the option to import your own YouTube subscriptions into the app.

It’s a quick-and-dirty process to do so: You drag a “Channel Surfer” bookmarklet to your bookmarks bar, then open your YouTube subscriptions, and click the bookmarklet. The process begins, directing you back to the app where you paste the copied JSON text into a box and click an “import” button. This adds your own channels to Channel Surfer’s existing lineup, potentially giving you hundreds more channels to watch in this format.

The site’s existence harkens back to the web’s earlier days, filled with fun experiments and creativity. For Irby, that’s the point.

“I’m obsessed with showing the world that the old web is still alive and well,” he says. “It’s just buried under a mountain of slop.”
