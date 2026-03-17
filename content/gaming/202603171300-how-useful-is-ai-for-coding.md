---
title: "How useful is AI for coding?"
source: "Alex Forbes-Calvin"
url: "https://www.gamesindustry.biz/how-useful-is-ai-for-coding"
published: "2026-03-17T13:00:00.000Z"
category: "gaming"
summary: "This article is part of AI Week. Read more"
---
_This article is part of [AI Week](https://www.gamesindustry.biz/events/ai-week)._

Since the start of the current wave of excitement around generative AI, coding has been viewed as a field that is ripe for implementation of the tech. After all, the dream that big tech firms have envisioned for AI is that it will replace repetitive, tiresome work. "Vibe coding" has become the buzzword of choice, with AI companies painting a picture of a world where anyone can magic up an app using their technology.

The tech has become a contentious topic. Companies like [Nexon](https://www.gamesindustry.biz/nexon-ceo-says-its-important-to-assume-every-game-company-is-using-ai-following-arc-raiders-debate) and [Krafton](https://www.gamesindustry.biz/krafton-to-undergo-complete-reorganization-as-it-positions-itself-as-an-ai-first-company) have gone all-in on AI, while others have employed it selectively or rejected it outright. Google's [Project Genie](https://www.gamesindustry.biz/google-releases-project-genie-ai-tool-for-creating-playable-worlds-that-can-feature-copyrighted-ip) crashed game stocks with the suggestion that whole game worlds could be prompted into life, while some developers have expressed regret that AI [hasn't been as transformative as they'd hoped](https://www.gamesindustry.biz/ai-was-an-expensive-mistake-charles-cecil-on-innovation-insolvency-and-broken-sword).

But what do the programmers actually using AI think? [According to a Stack Overflow survey published in 2025](https://survey.stackoverflow.co/2025/ai), 47.7% of developers are using AI tools daily, with 36.8% viewing the technology "favourably." Yet surveys only tell part of the story.

To get a sense of how the tech is actually being used – and whether it lives up to the hype – _GamesIndustry.biz_ approached a number of coders across the field of game development with a simple question: How useful is AI for coding?

## The case for

Kristinn Þór Sigurbergsson, director of gameplay engineering at Eve Online maker [CCP](https://www.gamesindustry.biz/companies/ccp-games), says that the company is using "AI tools extensively in code-related work", although he adds that "how useful they are depends very much on the task at hand."

For the Icelandic studio, part of the allure of these AI models is that they can help developers quickly get to grips with "a large and mature codebase," like that found in the company's 23-year-old MMO.

![Eve Online](https://www.gamesindustry.biz/eve-online_tBY7qWv.jpg)

Eve Online maker CCP is using AI tools "extensively" for code-related work. | Image credit: CCP

"Opening the project in tools like Cursor or Claude Code can bring you up to speed remarkably quickly," Sigurbergsson explains. "They’re particularly strong at codebase navigation, summarisation, and tracing logic across files."

He adds that AI has uses in debugging, although the company has had "less success" when simply asking the tech for a fix in this field. "The suggested solution is surprisingly often to suppress a log line, which occasionally is correct, but certainly not most of the time," notes Sigurbergsson. "It still requires experienced judgement."

The CCP director says that the biggest difference now that it is employing AI is that developers spend more time in the planning and review stage, and less time implementing code. "An interesting side effect is that teams are often braver in the planning phase," he says. "The 'cost of being wrong' is lower, because implementation is faster to iterate on. That shifts the energy toward design thinking rather than typing."

CCP devs are also using AI for prototyping features or behaviours in Eve Online; Sigurbergsson says this is "very rarely production-ready code – and it isn't intended to be – but it's extremely effective as a communication and exploration tool."

> "Something that might have taken half a day can now be done in minutes"
> 
> Kristinn Þór Sigurbergsson

However, he says the biggest area of change is non-production code, where AI has been "transformative".

"We frequently need to write small scripts to generate data, investigate issues, or automate one-off tasks," Sigurbergsson says. "In those cases, we care far more about the output than the elegance of the code. The value proposition of writing a script versus doing manual work has shifted dramatically: something that might have taken half a day can now be done in minutes."

Indie veteran Cliff Harris of [Positech](https://www.gamesindustry.biz/companies/positech-games) has similarly been enamoured by AI. He describes using Anthropic's Claude model to code as "life-changing".

"I have learned more about obscure algorithms and optimisations in C++ in the last year than in the previous fifteen years," he tells _GamesIndustry.biz_. "I've been coding since 1981, at age 11, and have 45 years of experience as a developer, and I find simply using Claude to bounce ideas off and help me find bugs to be incredibly useful. Anybody coding without using a premium SOTA LLM is coding with one hand behind their backs."

Garry Newman, the founder of [Facepunch Studios](https://www.gamesindustry.biz/companies/facepunchstudios), maker of [Rust](https://store.steampowered.com/app/252490/Rust/) and [Garry's Mod](https://store.steampowered.com/app/4000/Garrys_Mod/), also says that AI can make his job easier, noting that using ChatGPT or a similar tool to explain something to him rather than Google is "an evolution of coding."

"If I want to refactor, I don't have to spend 10 minutes copying and pasting the same shit into 30 different files; I can just spend five minutes arguing with Claude into doing it for me," he says.

![Garry's Mod](https://www.gamesindustry.biz/garry-headline-gman.jpg)

Garry Newman was behind the phenomenally successful Garry's Mod. | Image credit: Valve

Newman adds that he isn't concerned about AI replacing coders such as himself, saying that the tech is making him better at his job. "Some people worry that it enables anyone to do my job, but I don't think that's true. It's making me a better coder. It's making it so I can work faster. I'm learning from it. I'm a better coder because of it," he explains. "I'm not worried about it, I'm excited."

Like Newman, [Mode 7 Games](https://www.gamesindustry.biz/companies/mode-7-games)' Paul Kilduff-Taylor sees AI as having a "supporting role" within coding. "Many experienced coders I speak to use AI for quick references and cues, as current 'reasoning' models, which display very low levels of hallucination, are effective for this use case," he says. "Casting AI in a 'supporting role', such as offering suggestions for optimisation or debugging, quickly interrogating documentation, or being a sounding board, is becoming much more common."

## The case against

While many have been impressed by AI's ability to help in writing code, others have concerns, or feel like there are severe limitations to what the technology is capable of.

While Kilduff-Taylor concedes that it has "never been easier" to get a game up and running thanks to AI, there are some limitations on what the technology can output, not least that humans do not create things in the same way an AI does.

"Working with code you don't personally understand in a structure you don't control scales extremely poorly, and current commercial AI systems don't yet have access to context windows which can encompass something like an entire Unity project," he says. "This is the reason that a lot of the 'Wow AI made a game!?' instances often make use of very lightweight frameworks or boil down to simplistic prototypes."

Concerns about having a complete understanding of the end result are also shared by Chet Faliszek of [Stray Bombay](https://www.gamesindustry.biz/chet-faliszek-and-kimberly-voll-form-stray-bombay-company), who has been an outspoken critic of the hype surrounding AI.

"Could it help you write some small, discreet systems? Sure. Code is code, and you often aren't reinventing the wheel," the Valve veteran says. "But for instance, I am relearning C# as I learn Godot – I don't just want an end output I don't understand. I want to understand and make it, because then I understand what it's good at. Often during that, you learn the little bits and pieces that make you think: 'Oh wait, if I do damage this way, that means then I can improve it this way or offer these kinds of upgrades'."

![The Anacrusis](https://www.gamesindustry.biz/the-anacrusis.jpg)

Stray Bombay released The Anacrusis in 2023. | Image credit: Stray Bombay

These anxieties are also felt by Bram Ridder, technical director at Kythera AI and formerly of [Rebellion](https://www.gamesindustry.biz/companies/rebellion), who says that although he has used it to generate basic, "boilerplate" code, he has generally steered away from generative AI, "as it deprives you of understanding and learning. It is a useful tool, but not one that anyone should rely on."

Apprehension about the accuracy of AI's output is a major concern for the developers _GamesIndustry.biz_ spoke to. Generative AI models, at least at the moment, are prone to hallucination, meaning they confidently present incorrect information.

"Anytime I've used AI, it's more to brainstorm around a particular problem outside my knowledge base," says Adam Grimley, senior programmer at Huey Games. "Even then, I usually take them with a massive grain of salt and will double-check their answers against papers, or human-written blogs and tutorials. It is a very slow process and usually only used when I feel I've exhausted most other avenues."

> "When I last used AI, I found it immensely unhelpful and frustrating"
> 
> Alex Darby

Veteran technical director Alex Darby, who was formerly principal programmer at [Bithell Games](https://www.gamesindustry.biz/companies/bithell-games) and [Roll7](https://www.gamesindustry.biz/companies/roll7), adds: "When I last used AI, I found it immensely unhelpful and frustrating to use AI programming tools; any perceived speed boosts were in the 'it can type infinitely fast but produces nonsense at least 10–15% of the time' category.

"Once I realised it was not reliable, and that I couldn't trust my 'first glance acceptance' of the code it generated, I ended up spending so much time reading, verifying and correcting the code that it would have been quicker for me to have just typed it myself the first time."

This concern is shared by Hannah Rose, a senior programmer at Fallen London developer [Failbetter Games](https://www.gamesindustry.biz/companies/failbetter-games), who questions the value of models like Copilot that suggest paragraphs of code pulled from Stack Overflow or YouTube tutorials.

"Having huge blocks of code taken from public codebases suggested for your project can save you the time of typing it out, but even in the best case, you lose some time reviewing that code, and then in most cases either editing it or just removing it entirely," she says. "It's a tradeoff where you save typing time and lose time thinking. I've very rarely found typing speed to be the main limiting factor to how fast I can work."

Matthew Davis of Subset Games describes AI as "completely unreliable as a coding tool" for anything beyond auto-complete functionality, adding that "it cannot be trusted to make something reliable and usable".

"When letting it make longer solutions, I inevitably have to burn more time debugging it than making it would have cost me to write it," he continues. "And creating a larger code base you don’t fully understand exponentially increases the long-term technical debt. AI as it currently stands is, at best, an inefficient tool with an extreme cost."

![Into the Breach screenshot](https://www.gamesindustry.biz/into-the-breach-3.jpg)

Subset Games released Into the Breach in 2018.

Beyond concerns over accuracy, other developers have problems with the nature of the code produced, and how AI forces them to change the way they work.

Failbetter backend web developer Jem Frisby describes most AI-generated code as "rubbish." The issue, from her point of view, is not so much the tech itself as how it is prioritised to operate.

"It has poor architecture, it's brittle, and is utterly disinterested in performance," she explains. "Worse, it forces you to adapt to it; you have to take what it's given you and figure out how to make it fit with what you already have. Software is a collaborative endeavour, and no one likes working with a 'my way or the highway' sort."

> "It has poor architecture, it's brittle, and is utterly disinterested in performance"
> 
> Jem Frisby, Failbetter Games

John Ogden, CTO at Huey Games, says that while AI "can be useful" at a functional level, this falls apart at the architectural level. "It is not a full-spectrum replacement for programmers," he says.

One instance in which he can see AI falling short is in console development, as a result of its closed nature. "AI will have had limited training that covers that stuff."

The "worst case" scenario, he thinks, would be where developers have used AI to create a large body of code that requires human debugging. "Any programmer who has worked with a system for a while will have a mental model of that system, especially if they were instrumental in writing it," Ogden says. "With a large blob of AI code, you lose all that. AI is not going wake up in the middle of the night and realise there is a problem with some aspect of the system, or spend its evenings asking if there is a better way of doing it. You have effectively removed any aspect of general intelligence from the development."

Among those who have concerns about AI in coding, there are some who see a future in which the technology could work as those hyping it up say it can – but there are some substantial barriers to overcome first.

> "AI can be very stupid or surprisingly powerful"
> 
> Paul Kilduff-Taylor, Mode 7 Games

Darby thinks that the only way to get AI-generated code to work at a company-wide level would be to build your entire workflow around it. "Tech companies, I think, are more able to leverage this approach, because they are predominantly on the 'massive suites of automated tests and continuous delivery' process tip," he says. "This demands a different approach to software architecture, which in turn means that any given chunk of code tends to be more modular and self-contained – to facilitate testing – and so less context is needed to write the code."

Meanwhile, Mode 7's Kilduff-Taylor sees the main blocker to widespread AI usage within game coding is context.

"AI can be very stupid or surprisingly powerful: there is definitely a dissonance between 'stochastic parrot' jumped-up-autocomplete idiocy at one end of the scale, and novel discoveries in physics at the other," he says. "Context, scaffolding, and secondary systems are key to that." He concludes: "We don't yet have the right framework for this in games. Some people believe this is insurmountable – and I personally don't have the insight to make a valid judgement on that, especially in the long term."
