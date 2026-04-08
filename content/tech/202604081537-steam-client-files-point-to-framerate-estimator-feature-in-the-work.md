---
title: "Steam client files point to \"framerate estimator\" feature in the works"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/gaming/2026/04/steam-client-files-point-to-framerate-estimator-feature-in-the-works/"
published: "2026-04-08T15:37:04.000Z"
category: "tech"
summary: "JSON text strings suggest performance charts based on \"framerates of other Steam users.\""
---
Back in February, Valve gave Steam client beta users the option to [share anonymized framerate data and hardware information](https://store.steampowered.com/news/group/4397053?emclan=103582791433918461&emgid=505101717860253962) with the company to “help us learn about game compatibility and improve Steam.” Now, new text buried in a recent Steam client update suggests Valve is preparing to use this data to power a “framerate estimator” tool in the future.

As noted in [SteamTracking’s automated Steam client change notes](https://github.com/SteamTracking/SteamTracking/commit/5633dc3b5344269340a49b4b4f1e3a7b59c08c9a) (and picked up by some [forum](https://www.resetera.com/threads/apparently-soon-you-will-be-able-to-get-estimated-fps-for-games-on-steam-store-based-on-your-specs.1482319/) and [social media](https://x.com/LambdaGen/status/2040459980805914805) users), the April 3 Steam client update contains explicit references to a “Framerate Estimator” in a store UI JSON file. A subheader listed in that file describes the ability to “Select an App and a PC config to get a chart of estimated framerates, based on the framerates of other Steam users.”

Based on the inputs referenced in the JSON data, it looks like generated framerate estimates will be based on CPU, GPU, and system RAM levels selected by the user (or saved as a hardware configuration in the Steam client) rather than any sort of automated system scanning software. Users will be able to see per-game frame rate estimates as well as the “Number of matching training… entries” those estimates are based on for that game and/or the applicable CPU/GPU.
