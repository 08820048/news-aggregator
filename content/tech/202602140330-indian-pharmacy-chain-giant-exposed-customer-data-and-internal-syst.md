---
title: "Indian pharmacy chain giant exposed customer data and internal systems"
source: "Jagmeet Singh"
url: "https://techcrunch.com/2026/02/13/indias-major-pharmacy-chain-exposed-customer-data-and-internal-systems/"
published: "2026-02-14T03:30:00.000Z"
category: "tech"
summary: "A backend flaw in web admin dashboards used by one of India's largest pharmacy chains, exposed thousands of online pharmacy orders."
---
A security lapse by one of India’s largest pharmacy chains allowed outsiders to gain full administrative control of its platform, exposing customer order data and sensitive drug-control functions, TechCrunch has exclusively learned.

The issue affected DavaIndia Pharmacy, the pharmacy arm of Zota Healthcare, which operates a large network of retail outlets across India. Security researcher Eaton Zveare told TechCrunch that he discovered the flaw after identifying insecure “super admin” application programming interfaces on DavaIndia’s website and privately shared details with Indian cybersecurity authorities.

The bug is now fixed, and Zveare [disclosed his findings](https://eaton-works.com/2026/02/13/dava-india-hack/).

The exposure comes as Zota Healthcare rapidly scales DavaIndia Pharmacy’s retail business. The Gujarat-headquartered company operates more than 2,300 DavaIndia stores across India, including [276 new outlets](https://www.business-standard.com/markets/capital-market-news/zota-health-care-gains-after-adding-276-davaindia-stores-in-q3-fy26-126010200369_1.html) announced in January, and plans to [add another 1,200 to 1,500](https://www.msn.com/en-in/lifestyle/pets-animals/zota-health-care-to-pump-rs-350-crore-into-dawa-india-plans-1-500-stores-in-two-years/ar-AA1SOVYR?apiversion=v2&domshim=1&noservercache=1&noservertelemetry=1&batchservertelemetry=1&renderwebcomponents=1&wcseo=1) over the next two years.

Zveare told TechCrunch that the flaw stemmed from insecure admin interfaces, which allowed unauthenticated users to create “super admin” accounts with high privileges.

With that level of access, an attacker could view thousands of online orders containing customer information, modify product listings and prices, create discount coupons, and change settings governing whether certain medicines required a prescription, the researcher said.

Based on system timestamps, Zveare said the vulnerable administrative interfaces appeared to have been live since late 2024. The access exposed nearly 17,000 online orders and administrative controls spanning 883 stores, he said, allowing changes to product pricing, prescription requirements, and promotional discounts. Zveare said the access allowed edits to website content that could have been used for defacement or disruption.

Pharmacy order data can be particularly sensitive, as it may reveal information about a person’s health conditions, medications or other private purchases. Exposure of such data, even without evidence of misuse, carries heightened privacy and patient-safety risks compared with other consumer information.

“Customer information was linked to their orders,” said Zveare. “This includes name, phone numbers, email IDs, mailing addresses, total amount paid, and the products purchased. Since this is a pharmacy, the products being purchased could be considered private and even embarrassing for some people.”

Zveare said he reported the issue to CERT-In, India’s national cyber emergency response agency, in August 2025. The vulnerability was fixed within weeks, though confirmation from the company took longer and was provided to the cyber authorities in late November, he said.

Sujit Paul, chief executive of Zota Healthcare, did not respond to emails sent by TechCrunch last month. The researcher said there was no indication the flaw had been exploited before it was patched.

Jagmeet covers startups, tech policy-related updates, and all other major tech-centric developments from India for TechCrunch. He previously worked as a principal correspondent at NDTV.

You can contact or verify outreach from Jagmeet by emailing [mail@journalistjagmeet.com](mailto:mail@journalistjagmeet.com).

[View Bio](https://techcrunch.com/author/jagmeet-singh/)
