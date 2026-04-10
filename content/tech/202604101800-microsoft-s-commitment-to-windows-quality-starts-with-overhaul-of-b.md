---
title: "Microsoft's \"commitment to Windows quality\" starts with overhaul of beta program"
source: "
                    Andrew Cunningham
                "
url: "https://arstechnica.com/gadgets/2026/04/microsoft-makes-it-easier-for-windows-insider-testers-to-actually-get-new-features/"
published: "2026-04-10T18:00:44.000Z"
category: "tech"
summary: "Windows Insider builds remain confusing, but they should be more predictable."
---
[Skip to content](#main)

an inside job

Windows Insider builds remain confusing, but they should be more predictable.

[![](https://cdn.arstechnica.net/wp-content/uploads/2022/05/win11-dark-wallpaper.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2022/05/win11-dark-wallpaper.jpeg)

Credit: Microsoft

Credit: Microsoft

Microsoft says [it hears the complaints people have](https://arstechnica.com/gadgets/2026/03/microsoft-keeps-insisting-that-its-deeply-committed-to-the-quality-of-windows-11/) about the current state of Windows, and it wants to fix them. One of those fixes is another overhaul for its Windows Insider Program, the public beta system that Microsoft has used since Windows 10 to test and preview upcoming versions of the operating system and new app updates.

The company hinted at this in its “[commitment to Windows quality](https://blogs.windows.com/windows-insider/2026/03/20/our-commitment-to-windows-quality/)” post last month, and it’s announcing details today in [another post](https://blogs.windows.com/windows-insider/2026/04/10/improving-your-windows-insider-experience/) attributed to Microsoft Principal Group Product Manager Alec Oot.

[Since its last reorganization in 2023](https://arstechnica.com/gadgets/2023/03/new-canary-channel-will-showcase-more-experimental-less-stable-windows-builds/), the Windows Insider Program has had four testing channels. From least to most stable, these are the Canary channel, the Dev channel, the Beta channel, and the Release Preview channel. Both Canary and Dev are for earlier builds of Windows and new apps, while Beta tends to get things that are closer to finished and much more likely to ship to the general public. The Release Preview channel is a new Windows version’s last stop before public release and is usually near-final.

The new version of the program will combine the Canary and Dev channels into a single “Experimental” channel, which Microsoft says “is where new features generally show up first and where your feedback has the most direct impact on what we build.” The new Beta channel is more or less the same as the old one and “is the better fit if you want a more stable experience with features closer to shipping.”

Both the Experimental and Beta channels will include toggles to select the specific baseline version of Windows you want to test—the special 26H1 version aimed primarily at new Arm-based PCs, and the normal 25H2 version that everyone else has. An additional “Future Platforms” option in the Experimental channel will enable testing of “our earliest preview build for Windows” and “is not aligned to a retail version of Windows,” for people who want to test what may or may not eventually become Windows 11 26H2 or some future version.

The Release Preview channel will continue to exist, but as a hidden “advanced” option aimed primarily at IT shops hoping to perform early compatibility testing with upcoming updates.

Microsoft says that hopping between channels and opting out of the Windows Insider Program will also get easier and that it will generally no longer require users to completely wipe the PC and reinstall Windows. Switching between the Experimental, Beta, and Release Preview channels and the current shipping version of Windows can now be done as an “in-place upgrade” that preserves user data, as long as users stay on the same “core version” of Windows (i.e., 25H2, 26H1).

## It’s still a maze, but it’s more predictable

The new version of the program doesn’t seem much less confusing than the current system, as there are still a whole bunch of branches, sub-branches, and exceptions to rules that Insiders will need to keep track of to be certain what they’re testing. But they do address the _other_ major pain point of the Insider Program as it currently exists—the thing where you read about a new feature in a fresh Insider build, install that build to your PC, and then don’t actually see the feature on your system.

In the current Insider Program, that happens because of what Microsoft calls Controlled Feature Rollout (CFR), a process by which new features and updates are released to PCs gradually so that the rollout can be paused if problems arise. This is how Microsoft releases most Windows updates, and it makes sense for the general populace, but it mostly ends up being frustrating for Insider Program users who have already chosen to trade some potential bugginess for the ability to test new things early.

For the Beta channel, Microsoft is turning off CFR entirely. You may see slightly different iterations of those features depending on what Microsoft is A/B testing. But if it’s described in a Windows Insider blog post and you install the build the post is about, you should see that feature appear after you reboot.

For the Experimental branch, Microsoft is adding a “Feature flags page” to the Windows Insider settings that will let users manually enable and disable individual features. Users could do this sort of thing before using third-party software like ViVeTool, a command-line utility that would let you manually enable installed-but-turned-off functionality. It’s nice to see Microsoft build similar capabilities into Windows directly, though ViVeTool will probably still be useful for discovering and testing early versions of features that Microsoft is testing but not talking about yet.

All of these new changes will roll out in the “coming weeks.” Current Beta, Dev, and Canary channel testers will be moved to new channels seamlessly, though exactly where you move will depend on what Windows version you’re running. Dev channel users will be moved to the Windows 11 25H2 version of the Experimental channel; Canary channel users running a 28000 series build of Windows will be moved to the Windows 11 26H1 version of the Experimental channel, while users running a 29500 series build will move to the “Experimental (Future Platforms)” version of the channel.

[![Photo of Andrew Cunningham](https://cdn.arstechnica.net/wp-content/uploads/2016/05/a.cunningham-45-1.jpg)](https://arstechnica.com/author/andrew_cunningham/)

Andrew is a Senior Technology Reporter at Ars Technica, with a focus on consumer tech including computer hardware and in-depth reviews of operating systems like Windows and macOS. Andrew lives in Philadelphia and co-hosts a weekly book podcast called [Overdue](https://overduepodcast.com/).

[49 Comments](https://arstechnica.com/gadgets/2026/04/microsoft-makes-it-easier-for-windows-insider-testers-to-actually-get-new-features/#comments "49 comments")

1.  [![Listing image for first story in Most Read: Orion helium leak no threat to Artemis II reentry but will require redesign](https://cdn.arstechnica.net/wp-content/uploads/2026/04/55194459003_3bae619a73_o-768x432-1775781074.jpg)](https://arstechnica.com/space/2026/04/nasa-homes-in-on-likely-redesign-to-fix-orion-spacecrafts-leaky-valves/)
