---
id: 4_QED_intro
title: Introduction to Quantum Electrodynamics
date: 2026-10-13
order: 4
lang: en
description: ""
---


We have learnt the classical electrodynamics before, where the interaction is described by the electromagnetic field $A^\mu=(\Phi,\mathbf A),~ F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, and interaction with current $\mathcal{L}_{int} = - j^{\mu}A_{\mu}$. However, this theory doesn't include the generation and annihilation of particles, as well as the quantum theory.

With the Dirac field $\mathcal L_D=\bar\Psi(i \partial\!\!\!/ -m)\Psi$ and photon field introduced before, we can use the current $j^\mu=\bar\Psi\gamma^\mu\Psi$ to construct the interaction term $\mathcal L_{\mathrm{int}} =-q\bar\Psi\gamma^\mu A_\mu\Psi$ with the electromagnetic coupling constants $q=-e$ intuitively. But we can't tell the uniqueness of such form and why the conservative charge is exactly the electric one. In this section, we will describe the interaction between Dirac field and photon vector field using the gauge transformation.

Gauge Symmetry and QED Lagrangian
---

In electrodynamics, we know that the transformation $A_\mu(x)\rightarrow A_\mu(x)+\partial_\mu\alpha(x)$ won't change the physics field, while global $U(1)$ transformation on Dirac field $\Psi\rightarrow e^{-i\alpha}\Psi$ also keeps the Lagrangian invariant. If we promote the $U(1)$ locally $\Psi\rightarrow e^{-iq\lambda(x)}\Psi$ (the $q$ is for later convenience), then the Lagrangian will yield an additional term $-q \Psi(x) \gamma^{\mu} \partial_{\mu} \lambda(x) \bar \Psi(x)$. To remove the additional term, we define the covariant derivative $D_\mu=\partial_\mu+iqA_\mu$ and replace $\partial_{\mu} \to D_{\mu},~ i\bar\Psi \partial\!\!\!/ \Psi \to i\bar\Psi D\!\!\!/ \Psi$, which is Lorentz-invariant. Actually, the $\lambda(x)$ bridges the local phase transformation of Dirac field with the gauge redundancy of photon field which compensates the additional term, allowing us to construct the covariant derivative to introduce their coupling. With the kinetic term of photon field, we can write the Lagrangian now:
$$\mathcal{L} = -\frac14 F^{\mu\nu}F_{\mu\nu} + i \bar\Psi \partial \!\!\!/ \Psi - m \bar \Psi \Psi +e \bar \Psi \gamma^{\mu} \Psi A_{\mu}$$

Now we call the photon field the "gauge field" $A_{\mu}$ (also called connection on internal space), actually we should construct the dynamics for it specially. The commutator of covariant derivative gives $[D_\mu,D_\nu]=ieQ_iF_{\mu\nu}$, which defines the field strength (also curvature in spacetime) and can be used to construct the Lorentz-invariant kinetic term $\mathcal{L}_{A} = -\frac14 F^{\mu\nu}F_{\mu\nu}$. Notice that the mass term of gauge field $\mathcal L_m=\frac12m^2A_\mu A^\mu$ will violent the gauge  invariance, the mass of massive gauge boson like $W^\pm,~Z$ will be acquired through Higgs mechanism.

What's more, the charge $q=-e$ for electron here is determined by the normalization of electromagnetic field's kinetic term $-\frac14 F^{\mu\nu}F_{\mu\nu}$, and also called the electromagnetic coupling strength. In more general cases like quarks, we can write $\mathcal L_{\mathrm{int},i} =-eQ_i A_\mu\bar\psi_i\gamma^\mu\psi_i$ with the relative charge $q_i = eQ_i$, like $Q_{e^-} =-1$.

