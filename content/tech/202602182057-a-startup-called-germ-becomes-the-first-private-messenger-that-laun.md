---
title: "A startup called Germ becomes the first private messenger that launches directly from Bluesky’s app"
source: "Sarah Perez"
url: "https://techcrunch.com/2026/02/18/a-startup-called-germ-becomes-the-first-private-messenger-that-launches-directly-from-blueskys-app/"
published: "2026-02-18T20:57:48.000Z"
category: "tech"
summary: "Social network Bluesky now offers private messaging by integrating the startup Germ's E2E encrypted messenger natively in its app."
---
Here’s something that you’ve never seen on Big Tech social platforms: the decentralized open social network Bluesky has integrated new technology from a startup called [Germ Network](https://www.germnetwork.com/) in order to bring end-to-end encrypted (E2E) messaging to the Bluesky app. The move makes Germ DM the first private messenger that can be launched natively within the Bluesky app.

Alongside the launch, Germ is also releasing [new guidance](https://mark-germ.leaflet.pub/3mem22lhe222t) that would allow other apps built on the underlying AT Protocol that powers Bluesky to do the same thing.

![](https://techcrunch.com/wp-content/uploads/2026/02/bluesky-germ.jpeg?w=680)

**Image Credits:**Germ Network

The move is a notable example of how open social networking ecosystems work differently from the Big Tech platforms that dominate the space today, as new functionality and features can be developed by the community, not just by the company itself.

Bluesky [announced](https://bsky.app/profile/alexbenzer.com/post/3meoppj6lsk2n) the integration with Germ earlier this month, noting that the experimental integration will allow Germ users to add a button to their profile so others can message them on Bluesky in an E2E encrypted environment.

![](https://techcrunch.com/wp-content/uploads/2026/02/germ-bsky.png?w=680)

**Image Credits:**Germ Network

Meanwhile, Germ’s standalone app is also available in a public beta on iOS in North America and Europe. That app had seen thousands of downloads so far, but after the official integration announcement, daily active users jumped by 5x, the team said.

California-based Germ is a startup founded by [Tessa Brown](https://www.linkedin.com/in/tessa-r-brown/), a communications scholar who previously taught at Stanford, and [Mark Xue](https://www.linkedin.com/in/markmxue/), who worked as a privacy engineer at Apple on technologies like FaceTime and iMessage. The idea, the company previously explained to TechCrunch, was to offer an alternative to other E2E encrypted platforms like iMessage, Signal, and WhatsApp that’s built on newer technologies.

Today, Germ takes advantage of Messaging Layer Security (MLS), a new standard approved by the [Internet Engineering Task Force](https://www.ietf.org/) (IETF), and the [AT Protocol](https://atproto.com/) (or ATProto), which powers Bluesky, Skylight, and a growing number of other social apps.

Techcrunch event

Boston, MA | June 23, 2026

Instead of requiring a user’s phone number, Germ integrates with ATProto to enable its encrypted chats. That means Germ’s messages cannot be decrypted by another service, including itself or Bluesky.

To use the new messenger, you’ll simply click on the badge on a friend’s profile on Bluesky, which opens an iOS App Clip — a lightweight, temporary app. You click “open” on this app experience and then authenticate by logging in with your ATProto handle. You can then send a message to a friend immediately. You’ll also be nudged to download the full Germ DM app, but this is optional.

If you want to add the badge to your own profile, you’ll download the Germ DM app on iOS and authenticate your Bluesky credentials there. (Note: we had to force quit the Bluesky iOS app and restart it before the Germ badge appeared.)

![](https://techcrunch.com/wp-content/uploads/2026/02/Me-screen_mockup.png?w=315)

**Image Credits:**Germ Network

The company has been building up to the official Bluesky integration for many months, starting with a private beta in August, which was launched using “magic links” shared in users’ bios. Now, users who set up Germ to work within Bluesky will receive a new badge that’s displayed on their profiles, allowing them to remove the link-in-bio option they were using before. (The links will still work, but the badge is easier and more noticeable, of course.)

Germ told TechCrunch their startup has been in conversation with the ATProto developer community, including Bluesky’s app and protocol teams, since the [ATmosphere Conference in Seattle](https://atprotocol.dev/atmosphereconf-seattle-2025/) last year.

“We’ve been transparent about our planning and roadmap, and shipping our private beta in August generated valuable feedback from users and developers about the desire to replace our links in bios with native UI,” said Xue, who serves as CTO at Germ Network. “Both our team and Bluesky’s saw value in better AppView support for the Germ link.”

The changes to Bluesky’s app were led by head of product Alex Benzer, as the company was [looked to experiment](https://docs.bsky.app/blog/protocol-checkin-fall-2025) with implementing third-party services within Bluesky.

“Working directly with the Bluesky team has been a treat,” Brown, Germ’s CEO, told TechCrunch. “They ship fast, prioritize the user experience, and care about their users’ access to end-to-end encrypted messaging. We’re thrilled to be the first secure messenger they’ve brought natively into their app.”

While it’s true that the AT Protocol could eventually implement E2E encryption, that is not a focus today. As Bluesky protocol engineer Daniel Holms recently explained, the company has several reasons not to design a system itself.

“The reality is that E2EE is hard,” he [wrote in a blog post](https://dholms.leaflet.pub/3meluqcwky22a). “And this inherent complexity isn’t something that the protocol team at Bluesky can just handle – it gets pushed out to every dev trying to build a client that works with encrypted data,” Holms said.

Xue agreed, adding, “We align with the ATProto ethos that people should be able to communicate using the apps and tools they choose. We believe that by solving the hard problems for ATProto users in safe, transparent, and user-friendly ways, they’ll continue to choose us,” he said.

Shortly after Bluesky added support for the Germ badge, another [AT Protocol-based client, Blacksky](https://bsky.app/profile/blackskyweb.xyz/post/3meoxfu7ap22m), did as well.

Brown noted the team is currently focused on shipping more everyday messaging features, not on monetization. But further down the road, Germ may test paid features.

“We expect that our first paid features will be centered on the needs of prosumer power users like creators, journalists, and politicians—for example, support for multiple handles and private AI-powered screening for first messages from new connections,” she said.
