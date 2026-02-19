---
title: "Bug in student admissions website exposed children’s personal information"
source: "Zack Whittaker"
url: "https://techcrunch.com/2026/02/19/bug-in-student-admissions-website-exposed-childrens-personal-information/"
published: "2026-02-19T15:05:35.000Z"
category: "tech"
summary: "Ravenna Hub, which lets parents apply and track the status of their kids' applications across thousands of schools, allowed any logged-in user to access the personally identifiable data associated with any other user, including their children."
---
A student admissions website used by families to enroll children into schools has fixed a security lapse that was exposing their personal information.

The website, Ravenna Hub, which lets parents apply and track the status of their kids’ applications across thousands of schools, was allowing any logged-in user to access the personally identifiable data associated with any other user, including their children.

The exposed data includes children’s names, dates of birth, addresses, pictures, and details about their school. Email addresses and phone numbers of parents, as well as information about children’s siblings, were also exposed.

Florida-based VentureEd Solutions, which develops and maintains Ravenna Hub, [says](https://www.ravennasolutions.com/) on its website that it serves over a million students, and processes hundreds of thousands of applications a year.

TechCrunch first learned of the vulnerability on Wednesday and soon after alerted the company. VentureEd fixed the bug the same day, but TechCrunch held this report until we could verify that the bug was fixed.

Nick Laird, the chief executive of VentureEd Solutions, told TechCrunch in an email that the company was able to replicate the issue and has addressed the vulnerability.

Laird said the company was investigating the incident, but he would not commit to notifying users about the security lapse, or say — when asked by TechCrunch — if the company has the ability to check if there was any improper access to other users’ data. We also asked if Ravenna Hub had its security checked by a third-party, and if so, by whom. Laird would not say, and declined to comment further.

It’s not clear who, if anyone, oversees cybersecurity at VentureEd and Ravenna Hub.

The vulnerability is known as an insecure direct object reference, or IDOR, a [common security flaw](https://techcrunch.com/2023/07/27/cisa-nsa-australia-idor-flaws/) that allows users to access stored information because of weak or non-existent security controls on the concerned servers. 

In practice, the bug allowed any logged-in user to access another student’s data, including their personal information, by modifying the unique number associated with a student’s profile using their web browser’s address bar. 

In the case of Ravenna Hub, student numbers are sequential, meaning it was possible for any user to access another student’s data by changing the profile number by one or more digits.

When TechCrunch created a new account with test data, we found that the web address contained a seven-digit number. As such, there were slightly more than 1.63 million records prior to ours that were accessible to any other user.

This is the latest security lapse involving simple security flaws affecting the personal information of children. In January, [online mentoring site UStrive exposed the personal information of its users](https://techcrunch.com/2026/01/20/ustrive-security-lapse-exposed-personal-data-of-its-users-including-children/), many of whom are still in school. 

Zack Whittaker is the security editor at TechCrunch. He also authors the weekly cybersecurity newsletter, [this week in security](https://this.weekinsecurity.com/).

He can be reached via encrypted message at zackwhittaker.1337 on Signal. You can also contact him by email, or to verify outreach, at [zack.whittaker@techcrunch.com](mailto:zack.whittaker@techcrunch.com).

[View Bio](https://techcrunch.com/author/zack-whittaker/)
