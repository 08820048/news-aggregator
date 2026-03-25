---
title: "Google bumps up Q Day deadline to 2029, far sooner than previously thought"
source: "
                    Dan Goodin
                "
url: "https://arstechnica.com/security/2026/03/google-bumps-up-q-day-estimate-to-2029-far-sooner-than-previously-thought/"
published: "2026-03-25T15:49:17.000Z"
category: "tech"
summary: "Company warns entire industry to move off RSA and EC more quickly."
---
Google is dramatically shortening its deadline readiness for the arrival of Q Day, the point at which existing quantum computers can break public-key cryptography algorithms that secure decades’ worth of secrets belonging to militaries, banks, governments, and nearly every individual on earth.

In a [post](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/) published on Wednesday, Google said it is giving itself until 2029 to prepare for this event. The post went on to warn that the rest of the world needs to follow suit by adopting PQC—short for post-quantum cryptography—algorithms to augment or replace elliptic curves and RSA, both of which will be broken.

## The end is nigh

“As a pioneer in both quantum and PQC, it’s our responsibility to lead by example and share an ambitious timeline,” wrote Heather Adkins, Google’s VP of security engineering, and Sophie Schmieg, a senior cryptography engineer. “By doing this, we hope to provide the clarity and urgency needed to accelerate digital transitions not only for Google, but also across the industry.”

Estimates for when Q Day will arrive have varied widely since the mid-1990s, when mathematician Peter Shor first showed that a quantum computer of sufficient strength could factor integers in polynomial time, much faster than classical computers. That put the world on notice that RSA’s days were limited. Follow-on research showed quantum computers provided a similar speed-up in solving the discrete log problem that underpins elliptic curves.

The timeline for this arrival is based on when existing quantum computers will contain the required number of qubits that can correct inevitable errors. In 2012, most estimates were that a 2048-bit RSA key could be broken by a quantum computer with a billion physical qubits. By 2019, the estimate was lowered to 20 million physical qubits. A running joke among researchers has been that Q Day has been 20 years away for the past 30 years.
