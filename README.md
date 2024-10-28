# Solidarity ID

Our project initially sought to implement the concept of "Degen Communism," proposed by Vitalik Buterin (https://vitalik.eth.limo/general/2024/04/01/dc.html). As we developed, we recognized the need for interoperable tools that didn’t yet exist in the market, or weren’t well-executed in terms of open-source design. This led us to focus on a modular approach, ensuring open-source interoperability for tools that support the backend infrastructure of communities building peer-to-peer trust networks.

Describe any pioneering development work in your project, particularly in enhancing privacy, interoperability, or user experience.

We prioritize privacy and interoperability. Our foundation lies in identity. Specifically, we developed an MVP for decentralized identity, leveraging the concept of self-sovereign identity (SSI) where identities derive from verified credentials (VCs). We utilized the cheqd+veramo stack to handle VC issuance and DID modules, wrapped within the zupass PCD package developed by 0xparc. This combination ensures both privacy protection and interoperability.

Building on this identity infrastructure, our other modules—such as voting—can operate more effectively. For example, by using pairwise QV (Quadratic Voting), we can address collusion issues by factoring in the relational distance between individuals.

What specific problems or challenges in the Ethereum ecosystem does your project address? How does your solution improve upon existing alternatives?

Rather than addressing a core Ethereum issue, we focus on niche challenges related to pop-up city organization and community management. Our project emphasizes interoperability and blockchain-agnostic solutions. We treat blockchain as a specialized database, detached from core mechanisms like identity, matching, referrals, discussions, and voting. This allows community or event managers the flexibility to issue VCs, points, or NFTs on any blockchain they choose, independent of our system’s core design.

Outline your project's roadmap and how the grant funds will be used to achieve your development goals.

Our roadmap consists of two key phases:

1. Completing the six core modules (currently, the most complex identity module is finished, along with matching and referral).

2. Developing a demo app utilizing all six modules (we’ve already created an app using the identity and onboarding modules for WAMO, an event in Chiang Mai, and plan to implement all modules for an event in Taipei this December).

Our team includes four full-stack engineers, one zk-proof engineer, a designer, and a PM, all contributing part-time with no plans for fundraising. If we receive grant funding, it would help refine our designs and provide retroactive rewards to our developers.

How does your project contribute to the decentralization and security of the Ethereum network?

1. Our vision is to empower pop-up city organizers and event managers to integrate our permissionless modules into their own systems, introducing game mechanics and other features.

2. Our modules complement and extend the tools developed by the PCD Team at 0xparc (such as zupass, Zupoll, and Zucast), contributing to a broader decentralized ecosystem.

