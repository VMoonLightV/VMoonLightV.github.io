---
title: "Benchmarking Checklist"
---

When validating new trial wavefunctions I run through this quick checklist:

1. Compare energy estimates against baseline Slater-Jastrow calculations.
2. Inspect variance reduction after reconfiguration steps.
3. Track wall-clock cost per configuration to avoid regressions.
4. Record seeds and dataset provenance to make re-runs reproducible.

This list saves time by catching missing diagnostics before a large experiment starts.
