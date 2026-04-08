---
title: "WireGuard VPN developer can’t ship software updates after Microsoft locks account"
source: "Zack Whittaker"
url: "https://techcrunch.com/2026/04/08/wireguard-vpn-developer-cant-ship-software-updates-after-microsoft-locks-account/"
published: "2026-04-08T21:50:41.000Z"
category: "tech"
summary: "The popular open source VPN maker is the second high-profile developer to say Microsoft locked his account without notifying him and are blocking their ability to send software updates to users."
---
WireGuard, the major software project and VPN that underpins popular security software including Mullvad and others, has found itself locked out of a key part of its Microsoft developer’s account and unable to ship software updates to Windows users.

Jason Donenfeld, the creator of the open source WireGuard VPN software, told TechCrunch that he has been locked out of his Microsoft developer account, and as a result cannot sign drivers or ship updates for WireGuard for Windows users, which are critical for its software to run. Donenfeld said [in a post on X](https://x.com/EdgeSecurity/status/2041872931576299888) on Wednesday that the account termination stopped a WireGuard update from shipping.

It’s [the second such incident](https://techcrunch.com/2026/04/08/veracrypt-encryption-software-windows-microsoft-lock-boot-issues/) of a high-profile and widely used open source project being shut out from its customers due to a seemingly abrupt account termination from Microsoft, with popular encryption software VeraCrypt facing a similar circumstance. Both developers said Microsoft locked them out of their accounts without first alerting them. 

In the case of VeraCrypt, which is used by hundreds of thousands of users to encrypt files and operating systems, its developer Mounir Idrassi [told TechCrunch](https://techcrunch.com/2026/04/08/veracrypt-encryption-software-windows-microsoft-lock-boot-issues/) that being locked out of his account means he is unable to update the software in time for a crucial certificate authority expiry, which he said may prevent some users from booting up.

Donenfeld, the WireGuard developer, told TechCrunch in an email: “If there were a critical vulnerability to fix right now — there isn’t! I just mean hypothetically — then users would be totally exposed.”

WireGuard is an open-source VPN software used around the world to connect devices over the internet. WireGuard’s code is highly popular for its simplicity and security, as it serves as the foundation of many VPN implementations and commercial services that rely on its code, like Proton and Tailscale.

Donenfeld told TechCrunch in an email that he has spent the past few weeks modernizing WireGuard’s Windows code and was ready to send a copy update to Microsoft for checks before it can ship out to users, but was met with an “access restricted” error when logging into the developer portion of his Microsoft account.

Despite going through the process to verify his driver’s license or passport with Microsoft (the third party Microsoft uses for verification said he was “verified”), Donenfeld said his access was still suspended.

Donenfeld told TechCrunch that he [found a page on Microsoft’s website](https://techcommunity.microsoft.com/blog/hardware-dev-center/action-required-account-verification-for-windows-hardware-program-begins-october/4455452) saying that the company had been carrying out “mandatory account verification for all partners in the Windows Hardware Program who have not completed account verification since April 2024,” but that the verification program had since closed.

Microsoft’s Windows Hardware Program allows developers like Donenfeld and VeraCrypt’s Idrassi to “deploy hardware and device drivers for Windows PCs and other devices.” The ability to develop and release drivers for Windows users is restricted to known and vetted developers, as drivers can grant vast access to an operating system and its data and are known to be [abused by hackers](https://techcrunch.com/2022/12/13/cuba-ransomware-microsoft-drivers/) for that reason.

That account verification process meant that developers were required to upload their government-issued ID before they were allowed to publish potentially highly sensitive code to the broader Windows user base.

“Microsoft never sent me any notification at all about this. I’ve looked in every inbox in every spam folder in every mail log, and zero, nothing, zilch,” Donenfeld said.

The Windows Hardware Program’s verification program has “now concluded” and developers who have not uploaded their documents had their accounts “suspended,” the page reads, meaning that these accounts can no longer send updates.

Donenfeld said that he was referred to Microsoft’s executive support team, which handles customer service and account requests for high-profile individuals, which confirmed his appeal had been received but that they had to wait as long as 60 days for review.

By late Wednesday, there was a glimmer of hope in Donenfeld’s case. He told TechCrunch that he was finally in contact with Microsoft and that hopefully the issue would be resolved soon.

Microsoft did not immediately comment when reached by TechCrunch.

Donenfeld and Idrassi are not alone, with the account lockout issues affecting others as well.

Windscribe, a maker of VPN and other consumer privacy tools, said [in a post on X](https://x.com/windscribecom/status/2041929519628443943) that it had also been locked out of its Partner Center account. The company said it had a verified account for over eight years in order to sign its drivers.

“We’ve been trying to resolve this for over a month, and getting nowhere. Support is non-existent,” Windscribe said in its post. “Anyone know a human with a brain that still works at Microsoft and can help?”
