---
title: "Figuring out why AIs get flummoxed by some games"
source: "
                    John Timmer
                "
url: "https://arstechnica.com/ai/2026/03/figuring-out-why-ais-get-flummoxed-by-some-games/"
published: "2026-03-13T21:47:34.000Z"
category: "tech"
summary: "When winning depends on intuiting a mathematical function, AIs come up short."
---
Your move

When winning depends on intuiting a mathematical function, AIs come up short.

Oddly, the training methods that work great for chess fail on far simpler games. Credit: [SimpleImages](https://www.gettyimages.com/detail/photo/chess-pieces-arranged-for-the-start-of-a-chess-game-royalty-free-image/2230224523?phrase=chess&searchscope=image,film)

With its Alpha series of game-playing AIs, Google’s DeepMind group seemed to have found a way for its AIs to tackle any game, mastering games like [chess](https://arstechnica.com/gaming/2017/12/deepmind-ai-needs-mere-4-hours-of-self-training-to-become-a-chess-overlord/) and [_Go_](https://arstechnica.com/gadgets/2017/05/googles-alphago-ai-beats-worlds-best-human-go-player/) by repeatedly playing itself during training. But then some odd things happened as people started identifying _Go_ positions that would lose against relative newcomers to the game but [easily defeat a similar _Go_\-playing AI](https://arstechnica.com/information-technology/2022/11/new-go-playing-trick-defeats-world-class-go-ai-but-loses-to-human-amateurs/).

While beating an AI at a board game may seem relatively trivial, it can help us identify failure modes of the AI, or ways in which we can improve their training to avoid having them develop these blind spots in the first place—things that may become critical as people rely on AI input for a growing range of problems.

A recent paper published in Machine Learning describes an entire category of games where the method used to train AlphaGo and AlphaChess fails. The games in question can be remarkably simple, as exemplified by the one the researchers worked with: _Nim_, which involves two players taking turns removing matchsticks from a pyramid-shaped board until one is left without a legal move.

## Impartiality

[_Nim_](https://en.wikipedia.org/wiki/Nim) involves setting up a set of rows of matchsticks, with the top row having a single match, and every row below it having two more than the one above. This creates a pyramid-shaped board. Two players then take turns removing matchsticks from the board, choosing a row and then removing anywhere from one item to the entire contents of the row. The game goes until there are no legal moves left. It’s a simple game that can easily be taught to children.

It also turns out to be a critical example of an entire category of rule sets that define “impartial games.” These differ from something like chess, where each player has their own set of pieces; in impartial games, the two players share the same pieces and are bound by the same set of rules. _Nim’s_ importance stems from a theorem showing that any position in an impartial game can be represented by a configuration of a _Nim_ pyramid. Meaning that if something applies to _Nim_, it applies to all impartial games.

One of the distinctive features of _Nim_ and other impartial games is that, at any point in the game, it’s easy to evaluate the board and determine which player has the potential to win. Put another way, you can size up the board and know that, if you play the optimal moves from then on, you will likely win. Doing so just requires feeding the board’s configuration into a parity function, which does the math to tell you whether you’re winning.

(Obviously, the person who is currently winning could play a suboptimal move and end up losing. And the exact series of optimal moves is not determined until the end, since they will depend on exactly what your opponent does.)

The new work, done by Bei Zhou and Soren Riis, asks a simple question: What happens if you take the AlphaGo approach to training an AI to play games, and try to develop a _Nim-playing_ AI? Put differently: They asked whether an AI could develop a representation of a parity function purely by playing itself in _Nim_.

## When self-teaching fails

AlphaZero, the chess-playing version, was trained from only the rules of chess. By playing itself, it can associate different board configurations with a probability of winning. To keep it from getting stuck in ruts, there’s also a random sampling element that allows it to continue exploring new territory. And, once it can identify a limited number of high-value moves, it’s able to explore deeper into future possibilities that arise from those moves. The more games it plays, the higher the probability that it will be able to assign values to potential board configurations that could arise from a given position (although the benefits of more games tend to tail off after a sufficient number are played).

In _Nim_, there is a limited number of optimal moves for a given board configuration. If you don’t play one of them, then you essentially cede control to your opponent, who can go on to win if they play nothing but optimal moves. And again, the optimal moves can be identified by evaluating a mathematical parity function.

So, there are reasons to think that the training process that worked for chess might not be effective for _Nim_. The surprise is just how bad it actually was. Zhou and Riis found that for a _Nim_ board with five rows, the AI got good fairly quickly and was still improving after 500 training iterations. Adding just one more row, however, caused the rate of improvement to slow dramatically. And, for a seven-row board, gains in performance had essentially stopped by the time the AI had played itself 500 times.

To better illustrate the problem, the researchers swapped out the subsystem that suggested potential moves with one that operated randomly. On a seven-row _Nim_ board, the performance of the trained and randomized versions was indistinguishable over 500 training gains. Essentially, once the board got large enough, the system was incapable of learning from observing game outcomes. The initial state of the seven-row configuration has three potential moves that are all consistent with an ultimate win. Yet when the trained move evaluator of their system was asked to check all potential moves, it evaluated every single one as roughly equivalent.

The researchers conclude that Nim requires players to learn the parity function to play effectively. And the training procedure that works so well for chess and _Go_ is incapable of doing so.

## Not just _Nim_

One way to view the conclusion is that _Nim_ (and by extension, all impartial games) is just weird. But Zhou and Riis also found some signs that similar problems could also crop up in chess-playing AIs that were trained in this manner. They identified several “wrong” chess moves—ones that missed a mating attack or threw an end-game—that were initially rated highly by the AI’s board evaluator. It was only because the software took a number of additional branches out several moves into the future that it was able to avoid these gaffes.

For many _Nim_ board configurations, the optimal branches that lead to a win have to be played out to the end of the game to demonstrate their value, so this sort of avoidance of a potential gaffe is much harder to manage. And they noted that chess players have found mating combinations that require long chains of moves that chess-playing software often misses entirely. They suggest that the issue isn’t that chess doesn’t have the same issues, but rather that _Nim_\-like board configurations are generally rare in chess. Presumably, similar things apply to _Go_, as illustrated by the odd weaknesses of AIs in that game.

“AlphaZero excels at learning through association,” Zhou and Riis argue, “but fails when a problem requires a form of symbolic reasoning that cannot be implicitly learned from the correlation between game states and outcomes.” In other words, even if the rules governing a game enable simple rules for deciding what to do, we can’t expect Alpha-style training to enable an AI to identify them. The result is what they call a “tangible, catastrophic failure mode.”

Why does this matter? Lots of people are exploring the utility of AIs for math problems, which often require the sort of symbolic reasoning involved in extrapolating from a board configuration to general rules such as the parity function. While it may not be obvious how to train an AI to do that, it can be useful to know which approaches will clearly not work.

Machine Learning, 2026. DOI: [10.1007/s10994-026-06996-1](http://dx.doi.org/10.1007/s10994-026-06996-1) ([About DOIs](http://arstechnica.com/science/news/2010/03/dois-and-their-discontents-1/)).

[![Photo of John Timmer](https://cdn.arstechnica.net/wp-content/uploads/2026/02/john-timmer-300x300.jpg)](https://arstechnica.com/author/john-timmer/)

John is Ars Technica's science editor. He has a Bachelor of Arts in Biochemistry from Columbia University, and a Ph.D. in Molecular and Cell Biology from the University of California, Berkeley. When physically separated from his keyboard, he tends to seek out a bicycle, or a scenic location for communing with his hiking boots.

[19 Comments](https://arstechnica.com/ai/2026/03/figuring-out-why-ais-get-flummoxed-by-some-games/#comments "19 comments")

1.  [![Listing image for first story in Most Read: HP has new incentive to stop blocking third-party ink in its printers](https://cdn.arstechnica.net/wp-content/uploads/2026/03/GettyImages-458639693-768x432.jpg)](https://arstechnica.com/gadgets/2026/03/hp-has-new-incentive-to-stop-blocking-third-party-ink-in-its-printers/)
