---
title: "Linux kernel maintainers are following through on removing Intel 486 support"
source: "
                    Andrew Cunningham
                "
url: "https://arstechnica.com/gadgets/2026/04/linux-kernel-maintainers-are-following-through-on-removing-intel-486-support/"
published: "2026-04-07T16:39:12.000Z"
category: "tech"
summary: "Linux devs think even one second spent on 486 support is a second too many."
---
“Unfortunately there’s a nostalgic cost: your old original 386 DX33 system from early 1991 won’t be able to boot modern Linux kernels anymore,” Molnar [wrote](https://www.zdnet.com/article/good-bye-386-linux-to-drop-support-for-i386-chips-with-next-major-release/). “Sniff.”

## A tree falling in a forest

The practical impact of the end of 486 support will be negligible; the number of modern Linux distributions that use the kernel’s 486 support is negligible.

Many of the consumer-focused Linux distros have more Windows-like minimum system requirements, an acknowledgment of how CPU and RAM-intensive modern web browsers and browser-based apps have become; Ubuntu [raised its minimum RAM requirement from 4GB to 6GB](https://www.omgubuntu.co.uk/2026/04/ubuntu-2604-system-requriments) for the 26.04 LTS release. Even lightweight distros like [Xubuntu](https://xubuntu.org/download/) or [AntiX](https://antixlinux.com/about/) recommend 512MB to 1GB of RAM, amounts far in excess of what any 486-based PC ever shipped with (or could reasonably work with, using actual hardware).

One of the few actively maintained distros that explicitly mentions 486 support [is Tiny Core Linux](http://tinycorelinux.net/faq.html#req) (and its GUI-less counterpart, Micro Core Linux). These OSes can run on a 486DX chip as long as it’s paired with at least 48MB or 28MB of RAM, respectively, though a Pentium 2 with at least 128MB of RAM is the recommended configuration. But [even on the Tiny Core forums](https://forum.tinycorelinux.net/index.php/topic,27623.15.html), few users are mourning the loss of 486 support.

“I get the nostalgia, like classic cars, but a car you’ve spent a year’s worth of weekends fixing up isn’t a daily driver,” writes user andyj. “Some of the extensions I maintain, like `rsyslog` and `mariadb`, require that the CPU be set to i586 as they will no longer compile for i486. The end is already here.”

Those still using a 486 for one reason or another will still be able to run older Linux kernels and vintage operating systems—running old software without emulation or virtualization is one of the few reasons to keep booting up hardware this old. If you demand an actively maintained OS, you still have options, though—[the FreeDOS project](https://arstechnica.com/gadgets/2024/06/30-years-later-freedos-is-still-keeping-the-dream-of-the-command-prompt-alive/) isn’t Linux, but it does still run on PCs going all the way back to the original IBM Personal Computer and its 16-bit Intel 8088.
