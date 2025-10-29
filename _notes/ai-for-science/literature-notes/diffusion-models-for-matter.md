---
title: "Diffusion Models for Matter"
---

Key takeaways from recent papers that adapt diffusion models to atomic systems:

- Guidance terms need explicit symmetry handling to respect periodic boundary conditions.
- Training data remains the bottleneck; synthetic augmentation helps but must preserve energy ordering.
- Score-matching losses benefit from adaptive noise schedules tied to interatomic distances.

Follow-up questions: can equivariant diffusion kernels replace hand-crafted symmetry constraints, and how sensitive are results to the noise schedule?
