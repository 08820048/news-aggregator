---
title: "A new app alerts you if someone nearby is wearing smart glasses"
source: "Zack Whittaker"
url: "https://techcrunch.com/2026/03/02/nearby-glasses-new-app-alerts-you-wearing-smart-glasses-surveillance-meta-snap-bluetooth/"
published: "2026-03-02T22:40:00.000Z"
category: "tech"
summary: "A hobbyist developer's new app, which can detect nearby smart glasses, comes amid resistance to always-on recording and listening devices that invade people's privacy."
---
One of the chief problems with “luxury surveillance” devices, like smart glasses with baked-in video recording cameras, is that they often look indistinguishable from regular eyewear, meaning you might be recorded without knowing it.

But now there is an app that can detect and alert you when someone nearby is wearing smart glasses, or potentially other always-recording tech.

The Android app, aptly named [Nearby Glasses](https://play.google.com/store/apps/details?id=ch.pocketpc.nearbyglasses), constantly scans for nearby signals that emit from Bluetooth-enabled tech, such as wearable devices made by Meta (and Oakley) and Snap.

The app launches at a time as there is an increasing resistance against always-recording or listening devices, which critics say process information about nearby people who do not give their consent. 

Yves Jeanrenaud, who made the app, first spoke to [404 Media](https://www.404media.co/this-app-warns-you-if-someone-is-wearing-smart-glasses-nearby/) about the project and said he was in part inspired to make Nearby Glasses after reading the independent publication’s reporting into wearable surveillance devices, including how [Meta’s Ray-Ban smart glasses](https://techcrunch.com/2025/04/30/if-you-own-ray-ban-meta-glasses-you-should-double-check-your-privacy-settings/) have been [used in immigration raids](https://www.404media.co/a-cbp-agent-wore-meta-smart-glasses-to-an-immigration-raid-in-los-angeles/) and to [film and harass sex workers](https://www.404media.co/metas-ray-ban-glasses-users-film-and-harass-massage-parlor-workers/).

On the app’s project page, Jeanrenaud [described](https://github.com/yjeanrenaud/yj_nearbyglasses) smart glasses as an “intolerable intrusion, consent neglecting, horrible piece of tech.”

Jeanrenaud told TechCrunch in an email that his motivation came from “witnessing the sheer scale and inhumane nature of the abuse these smart glasses are involved in.” Jeanrenaud also cited Meta’s decision to [implement face recognition as a default feature](https://techcrunch.com/2026/02/13/meta-plans-to-add-facial-recognition-to-its-smart-glasses-report-claims/) in its smart glasses, “which I consider to be a huge floodgate pushed open for all kinds of privacy-invasive behaviour.”

The app works by listening for nearby Bluetooth signals that contain a [publicly assigned identifier](https://www.bluetooth.com/specifications/assigned-numbers/) unique to the Bluetooth device’s manufacturer. If the app detects a Bluetooth signal from a nearby hardware device made by Meta or Snap, the app will send the user an alert. (The app also allows users to add their own specific Bluetooth identifiers, allowing the user to detect a broader range of wearable surveillance gadgetry.)

![side-by-side screenshots showing the Nearby Glasses app working, with a phone notification alerting the user that there's a nearby glasses wearer.](https://techcrunch.com/wp-content/uploads/2026/02/glasses-android-app.jpg)

Screenshot**Image Credits:**Yves Jeanrenaud

Jeanrenaud said that the app may be prone to false positives. This means the app may detect a nearby virtual reality headset made by Meta and alert the user thinking it is a pair of smart glasses made from the same device maker. That said, virtual reality headsets are usually larger and more obvious to someone that they’re wearing the device.

To try this out, I loaded the app on an Android phone and walked around my city’s neighborhood, and found (to my surprise) no smart glasses wearers, and did not receive an alert.

But since the app allows it, I added a specific Bluetooth identifier (0x004C), which allowed me to search for nearby devices made by Apple — and my test device immediately flooded with alerts (as you might expect), likely picking up every Apple-made device in my near proximity. 

This showed that the app works as designed.

Jeanrenaud is still adding new features, and said that there is demand for an iPhone app, but that it depends on spare time and availability.

Speaking of the app, Jeanrenaud said: “Of course, it’s a technical solution to a social problem (which is amplified by technology), and it won’t go away anytime soon,” and described the app as a “desperate act of resistance, hoping it would help at least someone.”

Spokespeople for Meta and Snap did not respond to TechCrunch’s requests for comment.

Zack Whittaker is the security editor at TechCrunch. He also authors the weekly cybersecurity newsletter, [this week in security](https://this.weekinsecurity.com/).

He can be reached via encrypted message at zackwhittaker.1337 on Signal. You can also contact him by email, or to verify outreach, at [zack.whittaker@techcrunch.com](mailto:zack.whittaker@techcrunch.com).

[View Bio](https://techcrunch.com/author/zack-whittaker/)
