---
id: camille-fournier-001
guest: Camille Fournier
episode: "The things engineers are desperate for PMs to understand"
youtubeUrl: https://www.youtube.com/watch?v=hZSh0rs20uI
categories: [strategic-thinking, leadership, experience-advantage]
featured: false
---

## Tip

Camille Fournier talks about system rewrites: "I have seen so many instances of cases where the engineers have convinced themselves that the only solution to the woes that they're experiencing with the system—it's hard to support, it's hard to change, nobody wants to work on it because it's this old crappy technology—is that they just have to go over to the side, build the new thing that will replace this old system." But she's overseen enough rewrites to know the pattern: "Engineers notoriously, notoriously, notoriously massively underestimate the migration time from old system to new system."

Turns out AI platform migrations work the same way.

Your team wants to rebuild the entire AI infrastructure. Current system is messy—patchwork of LangChain, custom prompts, scattered evals. The new system will be clean, modular, built on the latest framework. They estimate 3 months. You've watched this movie before.

Here's what they're missing: Migration time. They're thinking about building the new system. They're not thinking about the six months after that—migrating every prompt, every eval, every integration, every edge case. They're not thinking about supporting the old system while building the new one. They're not thinking about all the undocumented logic buried in the current implementation—the weird prompt adjustments that actually matter, the business rules no one remembers why they exist.

Younger engineers see "rebuild" as the solution because they haven't watched enough rewrites fail. You have. You know the migration is always 3x longer than the build. You know the old system has more complexity than anyone documents. You know you'll be supporting both systems in parallel for way too long.

This doesn't mean never evolve systems. It means: staged migrations. Take one piece, uplift it, keep iterating. Don't go dark for a year to rebuild everything. That pattern recognition—knowing rewrites almost never go as planned—comes from watching it play out enough times. Trust that judgment.

## Context

Camille Fournier wrote "The Manager's Path" and served as CTO of Rent the Runway after roles at Goldman Sachs and Two Sigma. She's personally overseen multiple major system rewrites and re-architectures.

The insight about underestimating migration time comes from watching the pattern repeatedly: engineers estimate the build time accurately but miss that migrating data, users, and undocumented logic takes far longer. For experienced leaders evaluating AI platform decisions, this pattern recognition is the advantage—you know which technical problems require evolution versus revolution because you've seen both approaches enough times to recognize when each applies.
