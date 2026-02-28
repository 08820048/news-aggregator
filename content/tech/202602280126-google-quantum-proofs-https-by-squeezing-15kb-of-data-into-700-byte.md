---
title: "Google quantum-proofs HTTPS by squeezing 15kB of data into 700-byte space"
source: "
                    Dan Goodin
                "
url: "https://arstechnica.com/security/2026/02/google-is-using-clever-math-to-quantum-proof-https-certificates/"
published: "2026-02-28T01:26:41.000Z"
category: "tech"
summary: "Merkle Tree Certificate support is already in Chrome. Soon, it will be everywhere."
---
Google on Friday unveiled its plan for its Chrome browser to secure HTTPS certificates against quantum computer attacks without breaking the Internet.

The objective is a tall order. The quantum-resistant cryptographic data needed to transparently publish TLS certificates is roughly 40 times bigger than the classical cryptographic material used today. A typical [X.509 certificate](https://en.wikipedia.org/wiki/X.509) chain used today comprises six elliptic curve signatures and two EC public keys, each of them only 64 bytes. This material can be cracked through the quantum-enabled [Shor’s algorithm](https://en.wikipedia.org/wiki/Shor's_algorithm). The full chain is roughly 4 kilobytes. All this data must be transmitted when a browser connects to a site.

## The bigger they come, the slower they move

“The bigger you make the certificate, the slower the handshake and the more people you leave behind,” said Bas Westerbaan, principal research engineer at Cloudflare, which is partnering with Google on the transition. “Our problem is we don’t want to leave people behind in this transition.” Speaking to Ars, he said that people will likely disable the new encryption if it slows their browsing. He added that the massive size increase can also degrade “middle boxes,” which sit between browsers and the final site.

To bypass the bottleneck, companies are turning to [Merkle Trees](https://en.wikipedia.org/wiki/Merkle_tree), a data structure that uses cryptographic hashes and other math to verify the contents of large amounts of information using a small fraction of material used in more traditional verification processes in public key infrastructure.

Merkle Tree Certificates, “replace the heavy, serialized chain of signatures found in traditional PKI with compact Merkle Tree proofs,” members of Google’s Chrome Secure Web and Networking Team [wrote Friday](https://security.googleblog.com/2026/02/cultivating-robust-and-efficient.html). “In this model, a Certification Authority (CA) signs a single ‘Tree Head’ representing potentially millions of certificates, and the ‘certificate’ sent to the browser is merely a lightweight proof of inclusion in that tree.”

Google and other browser makers require that all TLS certificates be published in public transparency logs, which are append-only distributed ledgers. Website owners can then check the logs in real time to ensure that no rogue certificates have been issued for the domains they use. The transparency programs were implemented in response to the [2011 hack](https://www.theregister.com/2011/09/07/diginotar_hacker_proof/) of Netherlands-based DigiNotar, which allowed the minting of 500 counterfeit certificates for Google and other websites, some of which were used to spy on web users in Iran.
