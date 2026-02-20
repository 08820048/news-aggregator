---
title: "Microsoft deletes blog telling users to train AI on pirated Harry Potter books"
source: "
                    Ashley Belanger
                "
url: "https://arstechnica.com/tech-policy/2026/02/microsoft-removes-guide-on-how-to-train-llms-on-pirated-harry-potter-books/"
published: "2026-02-20T12:11:28.000Z"
category: "tech"
summary: "The now-deleted Harry Potter dataset was \"mistakenly\" marked public domain."
---
Wizarding world of AI slop

The now-deleted Harry Potter dataset was “mistakenly” marked public domain.

Following backlash in a [Hacker News thread](https://news.ycombinator.com/item?id=47067759), Microsoft deleted a blog post that critics said encouraged developers to pirate Harry Potter books to train AI models that could then be used to create AI slop.

The blog, which is archived [here](https://archive.is/D9vEN), was written in November 2024 by a senior product manager, Pooja Kamath. According to her LinkedIn, Kamath has been at Microsoft for more than a decade and remains with the company. In 2024, Microsoft tapped her to promote a new feature that the blog said made it easier to “add generative AI features to your own applications with just a few lines of code using Azure SQL DB, LangChain, and LLMs.”

What better way to show “engaging and relatable examples” of Microsoft’s new feature that would “resonate with a wide audience” than to “use a well-known dataset” like Harry Potter books, the blog said.

The books are “one of the most famous and cherished series in literary history,” the blog noted, and fans could use the LLMs they trained in two fun ways: building Q&A systems providing “context-rich answers” and generating “new AI-driven Harry Potter fan fiction” that’s “sure to delight Potterheads.”

To help Microsoft customers achieve this vision, the blog linked to a Kaggle dataset that included all seven Harry Potter books, which, Ars verified, has been available online for years and incorrectly marked as “public domain.” Kaggle’s [terms](https://www.kaggle.com/terms) say that rights holders can send notices of infringing content, and repeat offenders risk suspensions, but Hacker News commenters speculated that the Harry Potter dataset flew under the radar, with only 10,000 downloads over time, not catching the attention of J.K. Rowling, who famously keeps a strong grip on the Harry Potter copyrights. The dataset was promptly deleted on Thursday after Ars reached out to the uploader, Shubham Maindola, a data scientist in India with no apparent links to Microsoft.

Maindola told Ars that “the dataset was marked as Public Domain by mistake. There was no intention to misrepresent the licensing status of the works.”

It’s unclear whether Kamath was directed to link to the Harry Potter books dataset in the blog or if it was an individual choice. Cathay Y. N. Smith, a law professor and co-director of Chicago-Kent College of Law’s Program in Intellectual Property Law, told Ars that Kamath may not have realized the books were too recent to be in the public domain.

“Someone might be really knowledgeable about books and technology, but not necessarily about copyright terms and how long they last,” Smith said. “Especially if she saw that something was marked by another reputable company as being public domain.”

Microsoft declined Ars’ request to comment. Kaggle did not respond to Ars’ request to comment.

## Microsoft was “probably smart” to pull the blog

On Hacker News, commenters suggested that it’s unlikely anyone familiar with the popular franchise would believe the Harry Potter books were in the public domain. They debated whether Microsoft’s blog was “problematic copyright-wise,” since Microsoft not only encouraged customers to download the infringing materials but also used the books themselves to create Harry Potter AI models that relied on beloved characters to hype Microsoft products.

Microsoft’s blog was posted more than a year ago, at a time when AI firms began facing lawsuits over AI models, which had allegedly infringed copyrights by training on pirated materials and regurgitating works verbatim.

The blog recommended that users learn to train their own AI models by downloading the Harry Potter dataset and then uploading text files to Azure Blob Storage. It included example models based on a dataset that Microsoft seemingly uploaded to Azure Blob Storage, which only included the first book, _Harry Potter and the Sorcerer’s Stone_.

Training large language models (LLMs) on text files, Harry Potter fans could create Q&A systems capable of pulling up relevant excerpts of books. An example query offered was “Wizarding World snacks,” which retrieved an excerpt from _The Sorcerer’s Stone_ where Harry marvels at strange treats like Bertie Bott’s Every Flavor Beans and chocolate frogs. Another prompt asking “How did Harry feel when he first learnt that he was a Wizard?” generated an output pointing to various early excerpts in the book.

But perhaps an even more exciting use case, Kamath suggested, was generating fan fiction to “explore new adventures” and “even create alternate endings.” That model could quickly comb the dataset for “contextually similar” excerpts that could be used to output fresh stories that fit with existing narratives and incorporate “elements from the retrieved passages,” the blog said.

As an example, Kamath trained a model to write a Harry Potter story she could use to market the feature she was blogging about. She asked the model to write a story in which Harry meets a new friend on the Hogwarts Express train who tells him all about Microsoft’s Native Vector Support in SQL “in the Muggle world.”

Drawing on parts of _The Sorcerer’s Stone_ where Harry learns about Quidditch and gets to know Hermione Granger, the fan fiction showed a boy selling Harry on Microsoft’s “amazing” new feature. To do this, he likened it to having a spell that helps you find exactly what you need among thousands of options, instantly, while declaring it was perfect for machine learning, AI, and recommendation systems.

Further blurring the lines between Microsoft and Harry Potter brands, Kamath also generated an image showing Harry with his new friend, stamped with a Microsoft logo.

Smith told Ars that both use cases could frustrate rights holders, depending on the content in the model outputs.

“I think that the regurgitation and the creation of fan fiction, they both could flag copyright issues, in that fan fiction often has to take from the expressive elements, a copyrighted character, a character that’s famous enough to be protected by a copyright law or plot stories or sequences,” Smith said. “If these things are copied and reproduced, then that output could be potentially infringing.”

But it’s also still a gray area. Looking at the blog, Smith said, “I would be concerned,” but “I wouldn’t say it’s automatically infringement.”

Smith told Ars that, in pulling the blog, Microsoft “was probably smart,” since courts have only generally said that training AI on copyrighted books is fair use. But courts continue to probe questions about pirated AI training materials.

On the deleted Kaggle dataset page, Maindola previously explained that to source the data, he “downloaded the ebooks and then converted them to txt files.”

## Microsoft may have infringed copyrights

If Microsoft ever faced questions as to whether the company knowingly used pirated books to train the example models, fair use “could be a difficult argument,” Smith said.

Hacker News commenters suggested the blog could be considered fair use, since the training guide was for “educational purposes,” and Smith said that Microsoft could raise some “good arguments” in its defense.

However, she also suggested that Microsoft could be deemed liable for contributing to infringement on some level after leaving the blog up for a year. Before it was removed, the Kaggle dataset was downloaded more than 10,000 times.

“The ultimate result is to create something infringing by saying, ‘Hey, here you go, go grab that infringing stuff and use that in our system,’” Smith said. “They could potentially have some sort of secondary contributory liability for copyright infringement, downloading it, as well as then using it to encourage others to use it for training purposes.”

On Hacker News, commenters slammed the blog, including a self-described former Microsoft employee who claimed that Microsoft lets employees “blog without having to go through some approval or editing process.”

“It looks like somebody made a bad judgment call on what to put in a company blog post (and maybe what constitutes ethical activity) and that it was taken down as soon as someone noticed,” the former employee said.

Others suggested the blame was solely with the Kaggle uploader, Maindola, who told Ars that the dataset should never have been marked “public domain.” But Microsoft critics pushed back, noting that the Kaggle page made it clear that no special permission was granted and that Microsoft’s employee should have known better. “They don’t need to know any details to know that these properties belong to massive companies and aren’t free for the taking,” one commenter said.

The Harry Potter books weren’t the only books targeted, the thread noted, linking to a separate Azure [sample](https://github.com/Azure-Samples/azure-sql-db-vector-search/commit/9cfb689fd5b57304c76b187edbdce7c0b4e8a150) containing Isaac Asimov’s Foundation series, which is also not in the public domain.

“Microsoft could have used any dataset for their blog, they could have even chosen to use actual public domain novels,” another Hacker News commenter wrote. “Instead, they opted to use copywritten works that J.K. hasn’t released into the public domain (unless user ‘Shubham Maindola’ is J.K.’s alter ego).”

Smith suggested Microsoft could have avoided this week’s backlash by more carefully reviewing blogs, noting that “if a company is risk averse, this would probably be flagged.” But she also understood Kamath’s preference for Harry Potter over the many long-forgotten characters that exist in the public domain. On Hacker News, some commenters defended Kamath’s blog, urging that it should be considered fair use since nonprofits and educational institutions could do the same thing in a teaching context without issue.

“I would have been concerned if I were the one clearing this for Microsoft, but at the same time, I completely understand what this employee was doing,” Smith said. “No one wants to write fan fiction about books that are in the public domain.”

[![Photo of Ashley Belanger](https://cdn.arstechnica.net/wp-content/uploads/2022/06/Ashley-Belanger-400x400.jpg)](https://arstechnica.com/author/ashleybelanger/)

Ashley is a senior policy reporter for Ars Technica, dedicated to tracking social impacts of emerging policies and new technologies. She is a Chicago-based journalist with 20 years of experience.

[40 Comments](https://arstechnica.com/tech-policy/2026/02/microsoft-removes-guide-on-how-to-train-llms-on-pirated-harry-potter-books/#comments "40 comments")

1.  [![Listing image for first story in Most Read: What happens to a car when the company behind its software goes under?](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-1238829734-768x432.jpg)](https://arstechnica.com/cars/2026/02/what-happens-to-a-car-when-the-company-behind-its-software-goes-under/)
