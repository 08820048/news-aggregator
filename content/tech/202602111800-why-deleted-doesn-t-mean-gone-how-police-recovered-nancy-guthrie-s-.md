---
title: "Why ‘deleted’ doesn’t mean gone: How police recovered Nancy Guthrie’s doorbell footage"
source: "Jennifer Pattison Tuohy"
url: "https://www.theverge.com/tech/877235/nancy-guthrie-google-nest-cam-video-storage"
published: "2026-02-11T18:00:33.000Z"
category: "tech"
summary: "Video footage from Nancy Guthrie’s doorbell camera was recovered by Google and released by the FBI. | Image: The Verge, FBI FBI Director Kash Patel said yesterday that investigators recovered footage from Savannah Guthrie's mother's doorbell camera using \"residual data located in backend systems.\" This claim has many home security camera users asking an uncomfortable question: Is your data really gone when you hit delete? When Nancy Guthrie went missing, officials said she had a doorbell camera, but that it had been forcibly removed, and she did not have a subscription. This meant there were no videos stored in the cloud. Ten days later, the FBI released footage from the camera, which was revealed to be a Nest Doorbell, clearly showing the masked suspect. This … Read the full story at The Verge."
---
FBI Director Kash Patel said yesterday that investigators recovered footage from Savannah Guthrie’s mother’s doorbell camera using [“residual data located in backend systems.”](https://www.theverge.com/tech/876542/fbi-nancy-guthrie-nest-cam-video) This claim has many home security camera users asking an uncomfortable question: Is your data really gone when you hit delete?

When Nancy Guthrie went missing, officials said she had a doorbell camera, but that it had been forcibly removed, and she did not have a subscription. This meant there were no videos stored in the cloud. Ten days later, the FBI released [footage from the camera](https://www.theverge.com/tech/876542/fbi-nancy-guthrie-nest-cam-video), which was revealed to be a [Nest Doorbell](https://www.theverge.com/23404602/google-nest-doorbell-wired-review-hello), clearly showing the masked suspect.

This is a huge break in the case and proves the value of security cameras in solving crimes, even if their deterrent effect remains largely unproven. But it raises privacy concerns around how this supposedly “lost” footage was recovered.

How did Google retrieve footage that was deleted and that the user’s account didn’t have access to? Does this mean your deleted footage could be accessed by law enforcement? The answer to the second question, according to a forensic expert I spoke to, is technically yes. Deleted footage stored in the cloud can be recovered, but in this case, it was probably very difficult, and the resources to do so were likely made available only because of the case’s high profile.

I also reached out to Google, but it did not provide any additional information other [than confirming](https://www.theverge.com/tech/876542/fbi-nancy-guthrie-nest-cam-video#:~:text=Google%20spokesperson%20Patrick%20Seybold%20tells%20The%20Verge%20that%20the%20company%20is%20%E2%80%9Cassisting%20law%20enforcement%20with%20their%20investigations.%E2%80%9D) that it is “assisting law enforcement with their investigations.”

To understand what likely happened, it helps to know how Google’s Nest cameras work, because they operate differently from most cameras on the market. Most of them only stream live footage unless you either pay for a subscription to the company’s cloud service or use local storage, such as a microSD card or a home hub.

“When you delete something from a server, it doesn’t get overwritten immediately”

— Nick Barreiro

Nest cameras, by contrast, can send clips to Google’s servers even without a [paid subscription](https://www.anrdoezrs.net/links/8836598/type/dlg/https://store.google.com/product/google_home_premium?hl=en-US). Google offers a small amount of free cloud storage — older models store clips up to 5 minutes long for 3 hours; the [latest models](https://www.theverge.com/news/789412/new-nest-cams-nest-doorbell-launch-price-specs-release-date) store ten-second clips for six hours. That means some footage is uploaded and stored, at least temporarily, whether you pay or not.

Unlike most competitors, Google doesn’t offer true local storage that you can access yourself. Newer Nest cameras do have limited [on-device backup storage](https://support.google.com/googlenest/answer/9242083?hl=en), but it’s only accessible through Google’s cloud.

All of this means the footage of the suspect went to Google’s servers, even though Nancy Guthrie did not pay for a subscription. If we assume Guthrie did not have the latest Nest doorbell, which launched last October, then her doorbell would have been capable of recording 5-minute clips, and she would have had access to them via the Nest or Google Home app for up to 3 hours after recording.

The Pima County Sheriff’s Department said the doorbell was disabled at 1:47 am on February 1, and she was not reported missing until the next morning, more than 3 hours later. By that time, those recordings were no longer accessible to anyone with access to the account. (It’s possible members of the Guthrie family had access to the app; I know I have access to my elderly parents’ video doorbell app.)

But because it had once been in the cloud, there was a chance it could be retrieved. According to Nick Barreiro, chief forensic analyst with [Principle Forensics](https://principleforensics.com/about), deleting footage from the cloud doesn’t necessarily mean it’s immediately gone. “When you delete something from a server, it doesn’t get overwritten immediately — the file system is just told to ignore this data, and this space is now available to be used. But if no new data is written over it, it’s still going to be there, even though you can’t see it.”

While it would be fairly straightforward to retrieve this data from a local server or hard drive, Barreiro said the process to retrieve it from Google’s servers was likely much more complicated.

While Barreiro has no direct knowledge of Google’s processes, he spent a decade in law enforcement focused on recorded evidence before moving to the private sector five years ago. “These video files aren’t necessarily all stored on a single server; they are probably stored in fragments in servers all over the world. It probably gets very complicated with Google’s architecture,” he said.

Footage of the suspect went to Google’s servers, even though Nancy Guthrie did not pay for a subscription

While the basic data recovery process remains the same, finding these files is like searching for a proverbial needle in a haystack. “Because they have been deleted, they aren’t identified by the file system anymore,” he says. “So you’re manually looking for them.”

There may be other reasons it took over a week for the footage to be released. Barreiro says it could be that Google was able to access it immediately, but wouldn’t release the footage without the proper legal process. “Google is notoriously uncooperative with law enforcement; they will comply with search warrants, but in the least helpful way possible and they will fight it,’ he says. “It’s possible the delay was just getting through that legal process, properly worded court orders, and Google’s lawyers fighting it.”

However, he says that this seems unlikely, given the high-profile nature of the case. Additionally, [reports indicate](https://www.cnn.com/2026/02/10/tech/google-video-nancy-guthrie#:~:text=Engineers%20at%20Google%2C%20which%20owns%20Nest%2C%20were%20able%20to%20recover%20data%20after%20several%20days.) it took Google’s engineers “several days” to recover the footage.

But it’s an important point for those concerned about their data being accessible after it’s been deleted. While it was technically possible in this case, it’s highly unlikely to happen regularly. Barreiro believes this is “absolutely not something Google would do in a typical case.”

Ring, which also stores its video in the cloud, told me that the concept of “residual data” is not familiar to them. “We have run into this issue when folks have deleted footage and asked us if we can help get it back,” Ring spokesperson Emma Daniels said. “But it’s gone.”

While this case shows recovery is technically possible, it also shows it’s rare, resource-intensive, and reserved for extraordinary circumstances. But if the idea makes you uneasy, you can reduce your risk by using [local storage that you control](https://www.theverge.com/24074904/smart-home-camera-security-privacy-how-to) and/or a cloud service that offers end-to-end encryption, which means not even the provider can access your footage.

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Jennifer Pattison Tuohy
