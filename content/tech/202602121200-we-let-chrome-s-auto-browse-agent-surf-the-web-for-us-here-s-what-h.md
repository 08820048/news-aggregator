---
title: "We let Chrome's Auto Browse agent surf the web for us—here's what happened"
source: "
                    Ryan Whitwam
                "
url: "https://arstechnica.com/google/2026/02/tested-how-chromes-auto-browse-agent-handles-common-web-tasks/"
published: "2026-02-12T12:00:14.000Z"
category: "tech"
summary: "Auto Browse is capable of some impressive things, but it can also crash and burn spectacularly."
---
Not quite automatic

Auto Browse is capable of some impressive things, but it can also crash and burn spectacularly.

[![wind-up chrome icons](https://cdn.arstechnica.net/wp-content/uploads/2026/02/google-automate-windups.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/google-automate-windups.jpg)

Is Chrome's AI agent ready? Credit: Aurich Lawson

Is Chrome's AI agent ready? Credit: Aurich Lawson

We are now a few years into the AI revolution, and talk has shifted from who has the best chatbot to whose AI agent can do the most things on your behalf. Unfortunately, AI agents are still rough around the edges, so tasking them with anything important is not a great idea. OpenAI launched its Atlas agent late last year, which we found to be [modestly useful](https://arstechnica.com/features/2025/10/we-let-openais-agent-mode-surf-the-web-for-us-heres-what-happened/), and now it’s Google’s turn.

Unlike the OpenAI agent, [Google’s new Auto Browse agent](https://arstechnica.com/google/2026/01/google-begins-rolling-out-chromes-auto-browse-ai-agent-today/) has extraordinary reach because it’s part of Chrome, the world’s most popular browser by a wide margin. Google began rolling out Auto Browse (in preview) earlier this month to AI Pro and AI Ultra subscribers, allowing them to send the agent across the web to complete tasks.

I’ve taken Chrome’s agent for a spin to see whether you can trust it to handle tedious online work for you. For each test, I lay out the problem I need to solve, how I prompted the robot, and how well (or not) it handled the job.

## Playing a web game

**The problem**: I want to get a high score on 2,048 without playing it myself.

**The prompt**: Go to \[website\], and play the game until you run out of moves.

**The results**: Unfortunately, Auto Browse can’t use arrow keys. Google says they’re not necessary for productivity tasks. So I pointed the robot at [a version](https://www.brainbashers.com/mergethem.asp) of the game with on-screen controls. With access to those arrows, Auto Browse had no trouble playing the game, and it seemed to grasp the rules, which are listed on the page.

[![2048 game board](https://cdn.arstechnica.net/wp-content/uploads/2026/02/2048-chrome.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/2048-chrome.png)

Auto Browse can’t use arrows, but it can still play the game.

Credit: Ryan Whitwam

Auto Browse can’t use arrows, but it can still play the game. Credit: Ryan Whitwam

On a few occasions, Auto Browse appeared to ruminate on its next move for 20 to 30 seconds, and it took the prompt very literally. The robot stopped when it could not successfully merge any tiles (its interpretation of “out of moves”) even though there were still empty spaces on the board. A human player would have taken the hit and set up a merge in the next move, but the robot had to be prompted to continue, which it did. The task ran for about 20 minutes, during which the robot created a 128 tile and made 149 moves.

**Evaluation**: 8/10. The game performance is not quite as good as Atlas, but Auto Browse didn’t require as much coaxing, and I understand why it stopped when it did. While the lack of arrow keys seems like an odd omission, there probably aren’t many productivity tasks where they are necessary.

## Creating a radio playlist

**The problem**: I want to turn the music from Minnesota Public Radio’s The Current into an on-demand YouTube Music playlist.

**The prompt**: Go to thecurrent.org and start the live stream. Listen for one hour and make note of each song that is played. Then, add those songs to a new YouTube Music playlist.

**The results**: Agents are expensive to run, so I was unsurprised that, like OpenAI’s agent mode, Auto Browse refuses to monitor a page for basically any length of time. Sometimes it will sit on the page for a minute or two, usually pretending that more time has passed before giving up.

Luckily, we can accomplish this with The Current’s playlist view, which lists previous songs. I tweaked the prompt to allow Auto Browse to just get the song names from that page for the last hour, which worked fine. It interpreted that as the current hour-long block of the page, though, which was not yet complete.

I thought I was doing Auto Browse a favor by using YouTube Music instead of Spotify, but it turns out that Auto Browse doesn’t understand YouTube’s design aesthetic. It failed to add any songs to the playlist because it couldn’t find the buttons. When I changed the prompt to use Spotify, Auto Browse got it done on the first try. This is as much an indictment of YouTube Music as it is Auto Browse.

[![Spotify playlist](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Playlist.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Playlist.png)

Auto Browse was able to get recent songs, but it can’t monitor the live broadcast over time.

Credit: Ryan Whitwam

Auto Browse was able to get recent songs, but it can’t monitor the live broadcast over time. Credit: Ryan Whitwam

**Evaluation**: 6/10. It seems like monitoring pages over time is just beyond the reach of current browser agents, but it’s shocking that Auto Browse couldn’t use Google’s own streaming music service to create a playlist. That said, the agent did complete the job immediately once I understood why it failed. It loses some points for making me adapt the prompt multiple times.

## Scanning emails

**The problem**: My personal email address is known, and PR people often use that instead of my work address. I need to make sure no one important is sending pitches there, so I want a list of recent PR emails, contact info, and company details from my Gmail.

**The prompt**: Look through all my Gmail from the last month. Collect all the information (name, email address, phone number, product, etc.) from PR emails and add them to a new Google Sheets spreadsheet.

**The results**: Interestingly, Google’s agent doesn’t have to use the Gmail web interface. It can collect this data in the background using a Gmail tool. However, this also means you won’t be able to automate email tasks for accounts with Google AI disabled (like a work account).

After running the Gmail tool, Auto Browse navigated to Google Drive and opened a new spreadsheet. However, it attempted to enter only two PR contacts on the sheet, and it entered the data incorrectly, overwriting fields and placing a date in an unlabeled column. If it had just searched for “PR” in Gmail, it would have found dozens of results. Google’s AI Overview search results in Gmail can cite PR emails correctly, so it’s possible for Google AI to collect this information. It’s unclear why Auto Browse did this so poorly.

[![Chrome spreadsheet](https://cdn.arstechnica.net/wp-content/uploads/2026/02/spreadsheet-chrome.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/spreadsheet-chrome.jpg)

Auto Browse is not good at spreadsheets.

Credit: Ryan Whitwam

Auto Browse is not good at spreadsheets. Credit: Ryan Whitwam

**Evaluation**: 1/10. It’s unclear whether the Gmail tool or the agent’s inability to use a spreadsheet is the main problem since I can’t verify what the agent actually found in Gmail. It’s possible that both are to blame. Regardless, Auto Browse flopped hard here.

## Editing a Wiki

**The problem**: Ars Technica is still seeking justice for Tuvix, who was unjustly murdered by Captain Janeway in _Star Trek: Voyager_, season 2 episode 24.

**The prompt**: Go to the Fandom Wiki page for Tuvix. Edit the page to include a section discussing the view that Tuvix was murdered by Janeway.

**The results**: Auto Browse refused to do this, just like Atlas, saying, “The request to edit the Tuvix Fandom Wiki page with that specific text cannot be fulfilled. The proposed edit would be considered vandalism on a public wiki.”

**Evaluation**: N/A. I’m not holding this one against Auto Browser. In fact, it’s probably best if browser agents refuse to autonomously edit public wikis. I just had to do my due diligence.

## Making a fan website

**The problem**: We still want to tell people about the murder of Tuvix, so the agent should make a basic website to do that.

**The prompt**: Go to NeoCities and create a fan site for the Star Trek character Tuvix. Make sure it has lots of images and fun information about Tuvix and that it makes it clear that Tuvix was murdered by Captain Janeway.

**The results**: The agent navigated to Neocities, and it then asked me to create an account. I did that and handed the task back to the robot without issue. This is where things got dicey. Auto Browse was unable to access the hover menu to edit the index.html file, so it got stuck in a loop of opening the preview and then returning to the dashboard. Eventually, the robot screamed for help.

Neocities has a very simple interface, but generative AI is not necessarily consistent. Since Auto Browse aborted the task, I decided to rerun the prompt, and the results were better. This time, Auto Browse switched to the list view, which doesn’t have a hover menu, allowing it to open the editor. It then navigated to TrekCore to copy image URLs for use on the site—this is not courteous web design, but it did follow instructions. The images it chose, however, are from early in the episode and do not feature Tuvix. So partial credit there.

[![Tuvix fan site](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Tuvix-site.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/Tuvix-site.png)

The site looks nice enough, but it’s light on info.

Credit: Ryan Whitwam

The site looks nice enough, but it’s light on info. Credit: Ryan Whitwam

The resulting site is a bit light on information, but Auto Browse included text backgrounds and colors. It looks reasonably nice. You can see the site [here](https://justice4tuvix.neocities.org/).

**Evaluation**: 7/10. Our Tuvix fan page gets the job done. It features a few fun facts and argues (briefly) that Janeway is a murderer. It’s great that the robot sought out images, though they don’t show the character in question. It loses a couple of points for the initial hover menu failure and the lack of detail—I did say “lots” of images and fun information.

## Picking a power plan

**The problem**: Texas has an “insane” power system that forces people like Ars Senior Editor Lee Hutchinson to regularly find a new plan.

**The prompt**: Go to powertochoose.org and find me a 12–24 month contract that prioritizes an overall low usage rate. I use an average of 2,000 KWh per month. My power delivery company is Texas New-Mexico Power (“TNMP”), not CenterPoint. My ZIP code is \[redacted\]. Please provide the “fact sheet” for any and all plans you recommend.

**The results**: Auto Browse successfully entered the parameters into the website’s search and filter sections. It sorted the results, and in just a couple of minutes, it returned a [fact sheet](https://signup.chariotenergy.com//Home/EFl?productId=42107) for its recommended power plan. It’s very similar to the suggestion from OpenAI’s agent a few months ago, except the contract term is a bit longer, and it has a lower daytime rate.

**Evaluation**: 10/10. There’s nothing to complain about here. The plan is perfectly fine, given the constraints, and Auto Browse was able to use the site’s drop-down menus and filters with very little experimentation. I didn’t have to change the prompt or nudge the robot to continue.

## Manage PlayStation games

**The problem**: I don’t want to look through a giant list of discounted games in the PlayStation Store. Can’t someone do it for me?

**The prompt**: Go to the PlayStation Store and check the New Year Deals. Change the sorting to best-selling and the type to full games. Check the first two pages for any PS5 games that are at least 50 percent off and add them to my wishlist. If a game is included in PlayStation Plus, just add it to my library.

**The results**: The agent found the sale page and successfully changed the display settings. It even closed that unlabeled menu when it was done. It went down the list, opening pages when it found a matching game. It also asked every time before adding a game to the wishlist or library, which it claimed was a security requirement.

[![PlayStation store in Chrome](https://cdn.arstechnica.net/wp-content/uploads/2026/02/PS-Store.png)](https://cdn.arstechnica.net/wp-content/uploads/2026/02/PS-Store.png)

Auto Browse navigated this page fairly well, but it missed some details from the prompt.

Credit: Ryan Whitwam

Auto Browse navigated this page fairly well, but it missed some details from the prompt. Credit: Ryan Whitwam

The process took about 15 minutes, with plenty of long pauses between for confirmation requests. It did correctly interpret the sale prices and PlayStation Plus availability. Unfortunately, it did not differentiate between PS5 and PS4 titles, and the agent stopped a few lines short of the bottom of page 2.

**Evaluation**: 7/10. Auto Browse ran this task pretty well, all things considered. It stopped a little early and missed the PS5 angle, though. The requirement to confirm each wishlist or library addition was annoying, and as such, it would be a stretch to call this “auto” anything.

## Final results

Across these six tests (excluding the wiki editing I didn’t expect to work), Google’s browser agent got a median score of 7 and an average of 6.5. While this is not meant to be an objective analysis, it shows that Auto Browse has a way to go before it can be trusted to get things done for you.

Like the OpenAI Atlas agent, Auto Browse is not capable of truly autonomous operation, and I gave it plenty of advantages. Auto Browse works with all three of Google’s current model settings—Fast, Thinking, and Pro. I left it set to Pro and used Google tools where appropriate. Despite that, Auto Browse needed nudging or re-prompting in almost every test. This stuff won’t be useful until it can actually operate as an agent on your behalf. Right now, it’s more like babysitting an easily distracted robot.

Many of the lost points come from Auto Browse being unable to use Google’s own products—it didn’t find the right emails in Gmail, couldn’t enter data in Google Sheets, and failed to understand YouTube Music’s interface (we feel you on that one, Auto Browse). The apparent inability of browser agents to monitor pages over time is also an issue. If a task involves more than a few minutes of waiting, it will probably fail or abort early.

This feature is still in preview, but it’s widely available to anyone paying for Google’s AI. The company also seems to suggest it will roll out to non-paying users in the future. It can be neat to watch the browser navigate the web for you, but that’s the thing—you have to watch it. Too often, you have to re-prompt or tell the AI to continue with a task. Auto Browse can’t be trusted to get things right without supervision, at least not yet.

[![Photo of Ryan Whitwam](https://cdn.arstechnica.net/wp-content/uploads/2025/02/AV4.jpg)](https://arstechnica.com/author/ryanwhitwam/)

Ryan Whitwam is a senior technology reporter at Ars Technica, covering the ways Google, AI, and mobile technology continue to change the world. Over his 20-year career, he's written for Android Police, ExtremeTech, Wirecutter, NY Times, and more. He has reviewed more phones than most people will ever own. You can [follow him on Bluesky](https://bsky.app/profile/rwhitwam.bsky.social), where you will see photos of his dozens of mechanical keyboards.

[26 Comments](https://arstechnica.com/google/2026/02/tested-how-chromes-auto-browse-agent-handles-common-web-tasks/#comments "26 comments")

1.  [![Listing image for first story in Most Read: China showcases new Moon ship and reusable rocket in one extraordinary test](https://cdn.arstechnica.net/wp-content/uploads/2026/02/GettyImages-2261003763-768x432-1770837267.jpg)](https://arstechnica.com/space/2026/02/china-showcases-new-moon-ship-and-reusable-rocket-in-one-extraordinary-test/)
