---
title: "Why are Epstein’s emails full of equals signs?"
source: "Joshua Dzieza"
url: "https://www.theverge.com/policy/879016/epstein-files-emails-text-errors-encoding"
published: "2026-02-15T13:00:00.000Z"
category: "tech"
summary: "Many of the emails released by the Department of Justice from its investigation into Jeffrey Epstein are full of garbled symbols like: Or: The scrambled text is so ubiquitous that it's spurred conspiracy theories that it could be some kind of code. But as believable as it might be that a cabal of elite sex traffickers would communicate in a secret language, the reality is probably more boring: The symbols are likely artifacts from the way the Department of Justice converted the emails to PDFs. \"The glyphs and symbols are probably some artifact of a poor conversion process,\" said Chris Prom, professor and archivist at the University of Il … Read the full story at The Verge."
---
Many of the emails released by the Department of Justice from its investigation into Jeffrey Epstein are [full of garbled symbols like](https://www.justice.gov/epstein/files/DataSet%2011/EFTA02474673.pdf):

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/Screenshot-2026-02-13-at-6.56.54%E2%80%AFPM.png?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/Screenshot-2026-02-13-at-6.56.54%E2%80%AFPM.png?quality=90&strip=all&crop=0,0,100,100)

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/Screenshot-2026-02-13-at-6.59.44%E2%80%AFPM.png?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/Screenshot-2026-02-13-at-6.59.44%E2%80%AFPM.png?quality=90&strip=all&crop=0,0,100,100)

The scrambled text is so ubiquitous that it’s spurred conspiracy theories that it could be some kind of code. But as believable as it might be that a cabal of elite sex traffickers would communicate in a secret language, the reality is probably more boring: The symbols are likely artifacts from the way the Department of Justice converted the emails to PDFs.

“The glyphs and symbols are probably some artifact of a poor conversion process,” said Chris Prom, professor and archivist at the University of Illinois Urbana-Champaign. Specifically, the symbols look like remnants of [Multipurpose Internet Mail Extensions](https://www.rfc-editor.org/rfc/rfc2045#section-6.7), or MIME, a 30-year-old standard for encoding emails. The protocol underlying email transmits messages as short strings of simple ASCII characters, so as people started writing longer messages and trying to include formatting and symbols, MIME was developed as a way of encoding them in ASCII.

With MIME, the “=” is used to signal either that a string of text should be broken for transmission and rejoined — a “soft line break” — or, when followed by two other characters, that it should be converted to a particular non-ASCII mark. If you wanted to actually write “=” in an email, for example, it would be encoded as “=3D.” During normal use, the recipient’s email client decodes these symbols before displaying the formatted message.

Whatever software the Department of Justice used to extract the emails and convert them to PDFs appears to have mangled some of the decoding, said Peter Wyatt, the chief technology officer of the PDF Association, who examined a batch of the [Epstein documents](https://pdfa.org/a-case-study-in-pdf-forensics-the-epstein-pdfs/).

“It was in the news, and it was a whole lot of PDFs,” he said. The association performed similar analyses of the Mueller report and Manafort documents. “Generally speaking, we’re interested in anything to do with PDF. That’s kind of what we do and what we’re about.”

The clarity of the text and URLs led Wyatt to believe these documents were extracted digitally then converted to PDF, rather than physically printed and scanned, as the [Mueller report was](https://pdfa.org/a-technical-and-cultural-assessment-of-the-mueller-report-pdf/). “So things have improved since that time,” Wyatt said.

Specifically, the Department of Justice likely extracted the email data, converted it to PDF, then redacted it. In order to strip the document of metadata and bake in the redactions so that the black bars couldn’t be removed, they then converted the documents to image files like JPEG before converting them _back_ into PDF. The software used to initially extract and convert the data also captured portions of the underlying MIME format instead of properly decoding it. Or more simply: emails, sometimes partially decoded, converted to PDF, converted to JPEG, converted to PDF.

That at least explains the profusion of “=”. But it doesn’t fully explain why the “=” sometimes replaces letters, like the “J” in “Jeffrey.” No one I spoke to could definitively answer this question, except to say that email is hard and converting it to PDF is harder, and the DoJ was converting a lot of documents in a hurry. (The redactions have been notably inconsistent throughout the files, too.)

Prom thought it might be a character set conversion problem, which he saw frequently when the archival tool he was testing couldn’t find the specific character set or font the email server was using.

Craig Ball, a forensic examiner who teaches at the University of Texas at Austin School of Law pointed out that different email clients implement standards in slightly different ways, adding to the difficulty of conversion. “My hunch is that this is an incompatibility between the code pages used by the transmitting mail client (possibly a BlackBerry) and the application used to print the messages to PDF,” Ball wrote. “The presence of BlackBerry and iPhone signatures in these emails suggests the messages traversed multiple systems with different encoding practices, compounding the decoding issues during PDF generation.”

“You’re looking at hundreds of different methods of converting these files from hundreds of different people using whatever software they had available to them, some of which might have been good, some of which might not have been,” said Prom.

“The PDF standard is quite complex,” wrote Prom. “And email to PDF is particularly fraught.”

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Joshua Dzieza
