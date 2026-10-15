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

A natural question is: how can we recover classical electromagnetic physics from QFT theory? Let's take the magnetic and spin interaction for examples. 
First, we can perform the variation of $A_{\mu}$ on $S[\mathcal{L}_{QED}]$ to get Euler–Lagrange equation $\frac{\partial\mathcal L}{\partial A_\nu} -\partial_\mu \frac{\partial\mathcal L} {\partial(\partial_\mu A_\nu)}=0 \to \partial_{\mu} F^{\mu\nu} = q\bar\psi\gamma^\nu\psi = J^{\nu}$, which corresponded to Maxwell equations. Another example is to derive the spin magnetic interaction, we can perform the variation of $\bar \Psi$ to get the Dirac equation with charge $(i\gamma^\mu D_\mu-m)\Psi=0$, and organize it as Schrodinger equation with Hamiltonian $i\partial_t\psi = \left[ \boldsymbol\alpha\cdot(\mathbf p-q\mathbf A) +\beta m+q\Phi \right]\Psi$, with $\boldsymbol\pi=\mathbf p-q\mathbf A,~ \psi=e^{-imt} (\varphi, \chi)^T$, we can yield $H_{\mathrm{Pauli}} = \frac{(\mathbf p-q\mathbf A)^2}{2m} +q\Phi -\frac{q}{2m}\boldsymbol\sigma\cdot\mathbf B$, which can further give $g=2$ and Lorentz Force.

Spinor QED Scattering
---

Previous analysis provides the fermion and photon propagator $S(p)=\frac{- p\!\!\!/ + m}{p^2+m^2-i\epsilon}$ and $D_{\mu\nu}^{\text{F}}(p) =\frac{-ig_{\mu\nu}}{p^2-i\epsilon}$ under Feynman gauge. To derive the vertex factor of interaction term $e \bar \Psi \gamma^{\mu} \Psi A_{\mu}$, we similarly use first-order S-matrix $S^{(1)} = -iq\int d^4x\, \bar\psi(x)\gamma^\mu\psi(x)A_\mu(x)$, which then gives $\langle f|S^{(1)}|i\rangle \propto (2\pi)^4\delta^{(4)}(p-p'-k) \bar u(p')(-iq\gamma^\mu)u(p)\epsilon_\mu^*(k)$. Now we can read the vertex factor $ie \gamma^{\mu}$, as well as the particle line -- $u_s(p)$ for incoming electron as $\langle0|\psi(x) b^{\dagger}_s(p)|0\rangle =u_s(p)e^{-ipx}$, $\bar v_s (p)$ for incoming positron, and their conjugate for outgoing ones, like $\langle0|b_s (p) \bar\psi(x)|0\rangle =\bar u_s(p)e^{ipx}$ at final states; the incoming photon corresponds to $\epsilon_{\mu}^{(\lambda)}(k)$ due to $\langle0|A_\mu(x) a^{\dagger}_{\lambda}(k)|0\rangle =\epsilon_\mu^{(\lambda)}(k)e^{-ikx}$, and outgoing photon is  $\epsilon_{\mu}^{(\lambda)*}(k)$.

Now we can calculate the scattering cross section. The first example is the $e^-\mu^-\to e^-\mu^-$ process, the Feynman diagram is shown below, with exchange of a virtual photon. Thus we can use the Feynman Rules to write the amplitude $i\mathcal M= \bar u_e(p_3)(-iq_e\gamma^\mu)u_e(p_1) \times\frac{-ig_{\mu\nu}}{k^2+i\epsilon} \times\bar u_\mu(p_4)(-iq_\mu\gamma^\nu)u_\mu(p_2)$. Considering different spin states, we should average unpolarized initial states while sum up undefined final states as $\overline{|\mathcal M|^2} = \frac14 \sum_{s_1,s_2} \sum_{s_3,s_4} |\mathcal M_{s_3s_4;s_1s_2}|^2$, then $\mathcal M = \frac{e^2}{t} (\bar u_3\gamma^\mu u_1) (\bar u_4\gamma_\mu u_2)$ becomes $|\mathcal M|^2 =\frac{e^4}{t^2} (\bar u_3\gamma^\mu u_1) (\bar u_1\gamma^\nu u_3) \times (\bar u_4\gamma_\mu u_2) (\bar u_2\gamma_\nu u_4)$, then using $\sum_{s_1,s_3} (\bar u_3\gamma^\mu u_1) (\bar u_1\gamma^\nu u_3) = \operatorname{Tr} \left[ (\not p_3+m_e)\gamma^\mu (\not p_1+m_e)\gamma^\nu \right]$, we have $\overline{|\mathcal M|^2} =\frac{2e^4}{t^2} \left[ (s-m_e^2-m_\mu^2)^2 +(u-m_e^2-m_\mu^2)^2 +2t(m_e^2+m_\mu^2) \right]$ and $\frac{d\sigma}{d\Omega} = \frac{1}{64\pi^2s} \frac{|\mathbf p_f|}{|\mathbf p_i|} \overline{|\mathcal M|^2}$.
- Consider non-relativistic situation, using $\bar u_{s'}(p)\gamma^\mu u_s(p)=2p^\mu\delta_{s's}$ where $p_1^{\mu} p_{2\mu} \simeq m_1 m_2$ and $t=k^2\simeq-|\mathbf q|^2$, we can write $\mathcal M_{\mathrm{NR}} \simeq-\frac{4e^2m_em_\mu}{|\mathbf q|^2} \triangleq =-4m_em_\mu\,\widetilde V(\mathbf q)$, then using Fourier transformation we have $V(r)=\frac{e^2}{4\pi r}=\frac{\alpha}{r}$, the column potential! As $s\simeq(m_e+m_\mu)^2$, we introduce $\mu=\frac{m_em_\mu}{m_e+m_\mu}$ and write $|\mathbf p|=\mu v,~ t\simeq-4\mu^2v^2\sin^2\frac{\theta}{2}$, then derive $\frac{d\sigma}{d\Omega} =\frac{\alpha^2} {4\mu^2v^4\sin^4(\theta/2)}$, which is the same with Rutherford differential cross section. In this way, we have recovered the classical correspondence!

```
e⁻ ───────────●─────────── e⁻
              ┆ γ
              ┆
μ⁻ ───────────●─────────── μ⁻
```


