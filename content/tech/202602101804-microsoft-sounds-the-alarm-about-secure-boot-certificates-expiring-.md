---
title: "Microsoft sounds the alarm about Secure Boot certificates expiring later this year"
source: "
                    Andrew Cunningham
                "
url: "https://arstechnica.com/gadgets/2026/02/microsoft-sounds-the-alarm-about-secure-boot-certificates-expiring-later-this-year/"
published: "2026-02-10T18:04:01.000Z"
category: "tech"
summary: "PCs without the new certificates could eventually have trouble booting new OSes."
---
[Skip to content](#main)

getting the boot

PCs without the new certificates could eventually have trouble booting new OSes.

[![A laptop PC running Windows 11 sitting next to a coffee mug.](https://cdn.arstechnica.net/wp-content/uploads/2023/02/win11-pc-2023.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2023/02/win11-pc-2023.jpeg)

A PC running Windows 11. Credit: Microsoft

A PC running Windows 11. Credit: Microsoft

Windows 8 is remembered most for [its oddball touchscreen-focused full-screen Start menu](https://arstechnica.com/information-technology/2022/10/too-much-and-too-soon-steven-sinofsky-looks-back-at-windows-8-10-years-later/), but it also introduced a number of under-the-hood enhancements to Windows. One of those was UEFI Secure Boot, a mechanism for verifying PC bootloaders to ensure that unverified software can’t be loaded at startup. Secure Boot was enabled but technically optional for Windows 8 and Windows 10, but it became a formal system requirement for installing Windows [starting with Windows 11 in 2021](https://support.microsoft.com/en-us/windows/windows-11-and-secure-boot-a8ff1202-c0d9-42f5-940f-843abef64fad).

Secure Boot has relied on the same security certificates to verify bootloaders since 2011, during the development cycle for Windows 8. But those original certificates are set to expire in June and October of this year, something Microsoft is highlighting in a [post](https://blogs.windows.com/windowsexperience/?p=180181) today.

This certificate expiration date isn’t news—Microsoft and most major PC makers have been [talking about it](https://support.microsoft.com/en-us/topic/windows-devices-for-home-users-businesses-and-schools-with-microsoft-managed-updates-29bfd847-5855-49f1-bb94-e18497fe2315) for months or years, and behind-the-scenes work to get the Windows ecosystem ready has been happening for some time. And renewing security certificates is the kind of routine occurrence that most users only notice [when something goes wrong](https://arstechnica.com/gadgets/2026/01/expired-certificate-completely-breaks-macos-logitech-apps-user-customizations/).

But the downside is that the certificate expiration may cause problems for PCs that don’t pull down the patches before the June 2026 deadline. While these PCs will continue to function, expired certificates can prevent Microsoft from patching newly discovered Secure Boot vulnerabilities and can also keep those PCs from booting and installing newer operating system versions that use the new 2023-era certificates.

“If a device does not receive the new Secure Boot certificates before the 2011 certificates expire, the PC will continue to function normally, and existing software will keep running,” writes Nuno Costa, a program manager in Microsoft’s [Windows Servicing and Delivery division](https://www.linkedin.com/pulse/inside-windows-servicing-delivery-chris-tyburski/?trackingId=%2Fp%2FqsHCnSYOdQHZDIyEQOQ%3D%3D).

“However, the device will enter a degraded security state that limits its ability to receive future boot-level protections. As new boot‐level vulnerabilities are discovered, affected systems become increasingly exposed because they can no longer install new mitigations. Over time, this may also lead to compatibility issues, as newer operating systems, firmware, hardware, or Secure Boot–dependent software may fail to load.”

## Making sure you’ve got the new certificates

For most systems, including older ones that aren’t being actively supported by their manufacturers, Microsoft is relying on Windows Update to provide updated certificates. For fully patched, functioning PCs running supported versions of Windows with Secure Boot enabled, the transition should be seamless, and you may in fact already be using the new certificates without realizing it.

This is possible because UEFI-based systems have a small amount of NVRAM that can be used to store variables between boots; generally, both Windows and Linux operating systems using [LVFS](https://fwupd.org/) for firmware updates ought to be able to update any given system’s NVRAM with the new certificates. PCs will only have problems deploying the new certificates if NVRAM is full or fragmented in some way, or if the PC manufacturer is shipping buggy firmware that doesn’t support this kind of update.

As detailed by [a Dell support page](https://www.dell.com/support/kbdoc/en-us/000385747/how-to-check-secure-boot-certificates), the easiest way to [see if your PC has the new certificates](https://www.dell.com/support/kbdoc/en-us/000385747/how-to-check-secure-boot-certificates) is to run a PowerShell command that checks the certificate stored in the “active db,” which is the one currently used to boot the PC.

[![](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-11.36.33-AM.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-11.36.33-AM.jpeg)

A screenshot from a Windows 11 PC that is already using the new 2023 Secure Boot certificates to boot (the first command has returned “true”) but which does not have the new certificates baked into its UEFI firmware (the second command has returned “false.”) This is normal behavior for older PCs; for newer PCs, check to see if a BIOS update is available.

Credit: Andrew Cunningham

A screenshot from a Windows 11 PC that is already using the new 2023 Secure Boot certificates to boot (the first command has returned “true”) but which does not have the new certificates baked into its UEFI firmware (the second command has returned “false.”) This is normal behavior for older PCs; for newer PCs, check to see if a BIOS update is available. Credit: Andrew Cunningham

To check this, right-click either the PowerShell or Terminal app and run it as an Administrator, and type `([System.Text.Encoding]::ASCII.GetString((Get-SecureBootUEFI db).bytes) -match 'Windows UEFI CA 2023')`. If this command returns “true,” then your PC is using the new certificate, and you’re good to go.

If it returns “false,” here are some steps to enable Windows Update to install the new certificates for you.

-   Make sure you’re running a supported version of Windows. For Windows 11, that means version 24H2 or 25H2. For Windows 10, you need to [enroll the PC in the Extended Security Updates (ESU) program](https://arstechnica.com/gadgets/2025/07/how-to-get-another-free-year-of-updates-for-your-windows-10-pc/), which consumers can do for free after jumping through a couple of hoops.
-   Make sure Secure Boot is enabled in the BIOS and working properly. To check from within Windows, type Windows + R to open a Run window, type msinfo32, and press Enter. In the msinfo32 app, make sure Secure Boot State is set to “on.”
-   Check to see whether there’s a firmware update available for your PC. These may fix bugs preventing the new certificates from being installed.
-   Especially for older PCs that originally shipped with Windows 8 or Windows 10, it [may help](https://fwupd.github.io/libfwupdplugin/uefi-db.html) to do a factory reset of your Secure Boot keys from within your PC’s BIOS settings. This can help ensure that there is enough free space in your PC’s NVRAM to store the new certificates.
    -   If you do this on a system with BitLocker encryption enabled, [make sure you have your recovery key handy](https://arstechnica.com/gadgets/2026/01/how-to-encrypt-your-pcs-disk-without-giving-the-keys-to-microsoft/) so you can unlock your drive.

The second thing to check is the “default db,” which shows whether the new Secure Boot certificates are baked into your PC’s firmware. If they are, even [resetting Secure Boot settings to the defaults in your PC’s BIOS](https://www.dell.com/support/kbdoc/en-us/000368610/how-to-update-secure-boot-active-database-from-bios) will still allow you to boot operating systems that use the new certificates.

To check this, open PowerShell or Terminal again and type `([System.Text.Encoding]::ASCII.GetString((Get-SecureBootUEFI dbdefault).bytes) -match 'Windows UEFI CA 2023')`. If this command returns “true,” your system is running an updated BIOS with the new Secure Boot certificates built in. Older PCs and systems without a BIOS update installed will return “false” here.

Microsoft’s Costa says that “many newer PCs built since 2024, and almost all the devices shipped in 2025, already include the certificates” and won’t need to be updated at all. And PCs several years older than that may be able to get the certificates via a BIOS update.

In the US, [Dell](https://www.dell.com/support/kbdoc/en-us/000347876/microsoft-2011-secure-boot-certificate-expiration), [HP](https://support.hp.com/us-en/document/ish_13070353-13070429-16), [Lenovo](https://support.lenovo.com/us/en/solutions/HT518129), and [Microsoft](https://support.microsoft.com/en-us/surface/surface-secure-boot-certificates-532abf3b-bafe-420f-b615-bf174105549e) all have lists of specific systems and firmware versions, while [Asus](https://www.asus.com/support/faq/1055903/) provides more general information about how to get the new certificates via Windows Update, the MyAsus app, or the Asus website. The oldest of the PCs listed generally date back to 2019 or 2020. If your PC shipped with Windows 11 out of the box, there ought to be a BIOS update with the new certificates available, though that may not be true of every system that meets the requirements for upgrading to Windows 11.

Microsoft encourages home users who can’t install the new certificates to use [its customer support services](https://support.microsoft.com/en-us/home/contact?SourceApp=smc2&ContactUsExperienceEntryPointAssetId=Bing) for help. [Detailed documentation](https://support.microsoft.com/en-us/topic/windows-secure-boot-certificate-expiration-and-ca-updates-7ff40d33-95dc-4c3c-8725-a9b95457578e) is also available for [IT shops](https://techcommunity.microsoft.com/blog/windows-itpro-blog/secure-boot-playbook-for-certificates-expiring-in-2026/4469235) and other large organizations that manage their own updates.

“The Secure Boot certificate update marks a generational refresh of the trust foundation that modern PCs rely on at startup,” writes Costa. “By renewing these certificates, the Windows ecosystem is ensuring that future innovations in hardware, firmware, and operating systems can continue to build on a secure, industry‐aligned boot process.”

[![Photo of Andrew Cunningham](https://cdn.arstechnica.net/wp-content/uploads/2016/05/a.cunningham-45-1.jpg)](https://arstechnica.com/author/andrew_cunningham/)

Andrew is a Senior Technology Reporter at Ars Technica, with a focus on consumer tech including computer hardware and in-depth reviews of operating systems like Windows and macOS. Andrew lives in Philadelphia and co-hosts a weekly book podcast called [Overdue](https://overduepodcast.com/).

[3 Comments](https://arstechnica.com/gadgets/2026/02/microsoft-sounds-the-alarm-about-secure-boot-certificates-expiring-later-this-year/#comments "3 comments")

1.  [![Listing image for first story in Most Read: Discord faces backlash over age checks after data breach exposed 70,000 IDs](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-2225503659-768x432.jpg)](https://arstechnica.com/tech-policy/2026/02/discord-faces-backlash-over-age-checks-after-data-breach-exposed-70000-ids/)
