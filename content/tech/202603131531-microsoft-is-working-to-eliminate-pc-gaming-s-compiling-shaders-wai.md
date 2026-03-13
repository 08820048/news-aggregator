---
title: "Microsoft is working to eliminate PC gaming's \"compiling shaders\" wait times"
source: "
                    Kyle Orland
                "
url: "https://arstechnica.com/gaming/2026/03/microsoft-is-working-to-eliminate-pc-gamings-compiling-shaders-wait-times/"
published: "2026-03-13T15:31:38.000Z"
category: "tech"
summary: "Advanced Shader Delivery uses precompiled shaders for \"console-like load times\" across PC hardware."
---
## Getting everyone on board

Microsoft first rolled out Advanced Shader Delivery in its SDK [last September](https://devblogs.microsoft.com/directx/agility-sdk-1-618/) and added support to the ROG Xbox Ally as a proof of concept by October. Microsoft said that the addition reduced launch times in games like _Avowed_ by “as much as 85 percent,” which is a big deal on battery-limited handhelds.

Getting Advanced Shader Delivery adopted across the wider PC gaming ecosystem has been a slower process. Nvidia [says](https://developer.nvidia.com/blog/nvidia-rtx-innovations-are-powering-the-next-era-of-game-development/#shader_compilation_for_the_gaming_ecosystem) it is “working closely with Microsoft” to add Advanced Shader Delivery support to its GeForce RTX line “later this year,” and Intel [says](https://www.intel.com/content/www/us/en/developer/articles/news/microsoft-collaboration-powers-future-of-pc-gaming.html) it’s “looking forward to releasing a driver supporting ASD in the near future.” Qualcomm also said it plans to “debut this feature soon on Qualcomm Adreno X2 GPUs,” for what it’s worth.

Even with hardware support, game engine makers will have to integrate Microsoft’s SODB APIs to streamline the setup process for game developers. Epic Games says it is “doing early testing and explorations on SODB and PSDB generation and will have more details coming soon,” which is probably not the full-throated commitment Microsoft would like at this point.

For now, Microsoft has [updated its APIs](https://devblogs.microsoft.com/directx/advanced-shader-delivery-whats-new-at-gdc-2026/) to let developers more easily create and test PSDBs and more easily compile shaders in larger games. The company is also urging developers to “integrate SODB collection into your game engine” now so they’ll be ready to upload those precompiled shaders through the Xbox Partner Center starting in May.

At that point, some PC games downloaded through the Xbox app will finally be able to skip that annoying “compiling shaders” loading step. But this isn’t a feature Microsoft wants to keep for its own PC game platform; the company says that “in the future, any storefront can compile the SODBs to… PSDBs and distribute them.”
