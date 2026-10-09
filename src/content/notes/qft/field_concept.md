---
id: field_concept
title: Field and Quantization
date: 2026-09-30
order: 1
lang: en
description: ""
---

In quantum field theory, instead of classical particle point or wave with different angular momentum, we introduce the field again, which we have seen in electrodynamics, as $\vec E,~\vec B$, and in the gauge field form $A_{\mu},~\phi,~F_{\mu\nu}$.

The motivation that we introduce the field to describe the interaction of particles is that:
- The number of particle in a closed system is variable, which makes quantum mechanics in Hilbert space failed.
- The special relativity yield a second-order derivative of time, which mismatches the first-order derivative of time in Schrodinger Equation.
- more to be added.

Real Scalar Field
---
Actually, the field is more naturally introduced in mathematics, with a physics analogy of harmonic oscillator that generates and annihilates particles in the form of fields. Mathematically, this can be derived from mass-energy equation, Schrodinger equation and operator form: $(-\partial^{2}+m^{2})\varphi=0$, where the Hamiltonian is $H = \int d^{3}p(\mathbf{p}^{2} + m^{2})^{1/2} \tilde{a}^{\dagger}(\mathbf{p}) \tilde{a}(\mathbf{p})$, and $E(\mathbf{p}) = (\mathbf{p}^2 + m^2)^{1/2}$.
- This gives the first field we meet: real scalar field $\varphi$, and its equation of motion. Like what we have done in classical mechanics, the Lagrangian of this field is corresponded to the equation: $\mathcal{L} = -\frac{1}{2}\partial^{\mu} \varphi\partial_{\mu} \varphi - \frac{1}{2}m^{2}\varphi^{2}$, which can be varied to $0 = \delta S =\int d^{4}x [\partial^{2}\varphi - m^2 \varphi] \delta \varphi$.
- Notice that we use the negative coefficient for 4-vector kinetic term because it can be expanded as $-\partial^{\mu} \varphi\partial_{\mu} \varphi  = -\partial_t^2 \varphi + \nabla^2 \varphi$.

As we mentioned above, we want to use this field to describe particles, which can be generated and annihilated like states of harmonic oscillator. This requires we to quantize the field, and view the multi-particle state as excitement of the field. Before that, we rewrite the field in the form of momentum under Fourier expansion.
- $\varphi(\mathbf{x},t) = \int \frac{d^{3}k}{f(k)} [ a(\mathbf{k}) e^{i\mathbf{k·x}-i\omega t} + b(\mathbf{k}) e^{i\mathbf{k·x}+i\omega t}] \overset{\text{some derivation}}{=} \int \frac{d^{3}k}{(2\pi)^{3}2\omega} [ a(\mathbf{k}) e^{ikx} + a^*(\mathbf{k}) e^{-ikx}]$.
- We can write $a(\mathbf{k})$ by multiplying Fourier inversion on $\varphi,~\partial_{0}\varphi$ to get $a(\mathbf k) = \int d^3x\,e^{-ikx} [ i\partial_0\varepsilon(x)+\omega\varphi(x)] = i\int d^3x\,e^{-ikx} \overleftrightarrow{\partial_0} \varphi(x)$.

You may have noticed that in Hamiltonian $H$, the $a(\bf k)$ is the annihilation operator, then as the field $\varphi$ is an integral of operators. Such field operators work on state in Fock space instead of Hilbert space, where the vector state is like $|\bf p_1, p_2, ... \rangle$. The field operator can change the state to generate or annihilate a particle with a specific momentum. For example, $\phi(x)|\mathbf{p}\rangle = \frac{1}{\sqrt{2\omega_{\mathbf{p}}}} e^{-ipx} |0\rangle + \int \frac{d^3k}{(2\pi)^3} \frac{1}{\sqrt{2\omega_{\mathbf{k}}}} e^{ikx} |\mathbf{k},\mathbf{p}\rangle$, generating a superposition state of vacuum state and double particle state.

To obtain such a field operator, we need to quantize the classical field $\varphi$ like what we used to do for harmonic oscillator. The most standard way is the canonical quantization. Consider a canonical momentum $\pi (\mathbf{x},t) = \frac{\partial \mathcal{L}}{\partial(\partial_{0} \varphi)} = \partial_{0} \varphi(\mathbf{x},t)$, and we will have Hamiltonian $\mathcal{H} = \pi \partial_{0}\varphi -\mathcal{L} = \frac{1}{2} \pi^{2} + \frac{1}{2} (\nabla \varphi)^2 + \frac{1}{2}m^2 \varphi^{2}$ accordingly, where $H=\int d^2 x \mathcal{H} = \frac{1}{2} \int \tilde{dk} \omega (a^*(\mathbf{k})a(\mathbf{k}) + a(\mathbf{k})a^*(\mathbf{k}))$.
- In quantum theory, we take commutators: $[\varphi(\mathbf{x},t),\varphi(\mathbf{x'},t)]=0,~[\pi(\mathbf{x},t),\pi(\mathbf{x'},t)]=0,~[\varphi(\mathbf{x},t),\pi(\mathbf{x'},t)]=i\delta^{3}(\mathbf{x} - \mathbf{x'})$.
- This yields $[a(\mathbf{k}),a(\mathbf{k'})]=0,~[a^{\dagger}(\mathbf{k}),a^{\dagger}(\mathbf{k'})]=0,~[a(\mathbf{k}),a^{\dagger}(\mathbf{k'})]=(2\pi)^{3}2\omega \delta^{3}(\mathbf{k} - \mathbf{k'})$, and $H = \int \tilde{dk} \omega a^*(\mathbf{k})a(\mathbf{k})$.

Complex Scalar Field
---

All above discuss the real scalar field, which will be used in most of our cases. But there can also be complex scalar field that $\varphi \neq \varphi^{\dagger}$, let's see what property it has.

Generally, we can write the complex scalar field in terms of 2 real scalar fields like $\varphi = \frac{1}{\sqrt 2}(\varphi_1+i\varphi_2)$, and $\varphi^{\dagger}$ is another independent field. The corresponding Lagrangian is $\mathcal{L} = -\partial^{\mu}\varphi^{\dagger} \partial_{\mu}\varphi - m^2 \varphi^{\dagger} \varphi$.
- A natural question will come up with the kinetic term: why do we combine the complex scalar field with its conjugated field instead of $(\partial\phi)^2+(\partial\phi^\dagger)^2$? This is due to the Lorentz invariance under U(1) transformation: $\varphi(x)\to e^{iq\alpha(x)}\varphi(x)$. 

Similarly, we can expand the complex scalar field in momentum mode: $\varphi(\mathbf{x},t) = \int \tilde{dk} [ a(\mathbf{k}) e^{ikx} + b^{\dagger}(\mathbf{k}) e^{-ikx}]$, and derive $a(\mathbf k)= i\int d^3x\,e^{-ikx} \overleftrightarrow{\partial_0} \varphi(x)$, $b(\mathbf k)= i\int d^3x\,e^{-ikx} \overleftrightarrow{\partial_0} \varphi^{\dagger}(x)$. The Hamiltonian is $H = \int \tilde{dk} \omega [a^{\dagger}(\mathbf{k})a(\mathbf{k}) + b^{\dagger}(\mathbf{k})b(\mathbf{k})]$.

In this way, we should notice that there are 2 kinds of particles! Let's distinguish them with transformation invariance. Consider $U(1):\varphi \rightarrow e^{i\alpha} \varphi$, using $(\partial_{\mu}j^{\mu}=0,~\delta \mathcal{L}=0)$, we have $j^\mu = i ( \phi^\dagger\partial^\mu\phi - \phi\,\partial^\mu\phi^\dagger)$, which yields $Q = \int d^3x\,j^0 = \int \widetilde{dp}\, [ a^\dagger(\mathbf p)a(\mathbf p) - b^\dagger(\mathbf p)b(\mathbf p) ]$, indicating that these 2 kinds of particles have opposite charge! We identify them as positive and negative particles, this is a property of complex scalar field.


Spinor Field
---

> Srednicki introduces so many math at first, which I've already forgotten after chapters. As for me, spin-1/2 is a relatively difficult section.

The motivation of defining a spinor field for spin-1/2 particle is to satisfy the rules of its transformation in the language of field theory. Here, we first deal with the representation of the spinor field from the structure of field representation, then its statistical laws of fermions. A natural question is, what's the difference between spinor field and scalar field? Because its spin property also needs to be dealt with in its field representation, as spin is a irreducible representation in Poincare group.

Consider a infinitesimal transformation: $\Lambda^{\mu}_{\nu} = \delta^{\mu}_{\nu} + \omega^{\mu}_{\nu},~ x^{\mu} \rightarrow \Lambda^{\mu}_{\nu}x^{\nu}$, from $\Lambda^{T} g \Lambda = g$ we have $\omega_{\mu\nu} = -\omega_{\nu\mu}$, thus we only have 6 generator $M^{\mu\nu}$ (like triangle matrix) in Lorentz transformation. We would like to organize them as $J_{i} = \frac{1}{2}\varepsilon_{ijk}M^{jk}$ (rotate), $K_{i}=M^{0i}$ (boost), which have algebra $[J_i,J_j]=i\epsilon_{ijk}J_k,~[J_i,K_j]=i\epsilon_{ijk}K_k,~[K_i,K_j]=-i\epsilon_{ijk}J_k$.

We can see $J, K$ are coupling in their algebra. let's decouple them by organizing $A_i = \frac{1}{2} (J_{i}+iK_{i}),~ B_i = \frac{1}{2} (J_{i}-iK_{i})$, and they are two independent algebra (not hermitian conjugate): $[A_i,A_j]=i\epsilon_{ijk}A_k,~ [B_i,B_j]=i\epsilon_{ijk}B_k,~ [A_i,B_j]=0$, like what we used to see in angular momentum as $SU(2)_{L} \times SU(2)_{R}$ (L, R are just labels).
- Above are general Lorentz transformation, not only for spin-1/2.

In quantum mechanics, we have known that such $SU(2)$ has the irreducible representation label $j=0,\frac{1}{2},1,...$, which can be written as $(j_{L},j_{R})$. We can look into the simplest cases: $(0,0)$ for scalar field whose internal freedom has no change under Lorentz transformation; $(\frac{1}{2},0)$ and $(\frac{1}{2})$ are what we want to study now and call spinor; $(\frac{1}{2},\frac{1}{2})$ will be discussed as spin-1 field later.

Consider $(\frac{1}{2},0)$, we can write $A_i = \frac{\sigma_i}{2},~B_i=0$, which correspond to $J_i = \frac{\sigma_i}{2},~ K_i = -i \frac{\sigma_i}{2}$ (such representations tell us its dynamics transformation). As the representation dimension for $j$ is $(2j+1)$, we should write the field as $\psi_L = (\psi_1, \psi_2)^T$, like 2-dim Pauli matrices. Actually, this what we call left-handed Weyl spinor. For $(0, \frac{1}{2})$, we call its right-handed Weyl spinor with opposite boost sign: $K_i = i \frac{\sigma_i}{2}$.

Now we can define the so-called "spinor field" $\psi_L,\psi_R$ with such representation of Lorentz transformation. Still working on $(\frac{1}{2},0)$, using rotation and boost, we have $S(\Lambda) = \exp[ -i\boldsymbol\theta\cdot\mathbf J -i\boldsymbol\xi\cdot\mathbf K ] = \exp( -i\boldsymbol\theta\cdot\frac{\boldsymbol\sigma}{2} -\boldsymbol\xi\cdot\frac{\boldsymbol\sigma}{2})$, and $x\rightarrow \Lambda x ,~ \psi_L(x) \rightarrow S_L(\Lambda)\psi_L(x)$ changing the spacetime location and internal spinor index. Though two Weyl fields are independent, they will be coupled in the Lagrangian mass term, which should be gauge invariant. Thus we combine these two fields into a 4-dim form $\Psi = (\psi_L, \psi_R)^T$, which is called Dirac spinor $\Psi \sim \left(\frac12,0\right) \oplus \left(0,\frac12\right)$.
- We find that rotating $2\pi$ will cause $\psi \rightarrow -\psi$ as what we did in quantum mechanics!


Next, we introduce the calculus rules of the spinor fields. As the derivative of the spinor fields is so complicated, their calculus also follows specific rules.
We will clarify $\varepsilon_{ij}$, $\sigma^{\mu}_{a\dot a}$, and $\gamma^{\mu}$, and derive the Dirac equation in the end.
- These should be studied before Feynman rules of spinor fields, but the advanced calculus tricks can be studied just before QED.
- Maybe should move to an independent section.

With further analysis of the Dirac equation, we will write:
$$\Psi(x) = \sum_s\int\widetilde{dp} [ a_s(\mathbf p)u_s(p)e^{ipx} + b_s^\dagger(\mathbf p)v_s(p)e^{-ipx}]$$


BTW, another more intuitive way to derive the Dirac equation is historical, with less modern mathematical structure. For Schrodinger equation $i\partial_{t}\psi = E \psi$, we want to integrate special relativity $E^2 = \mathbf{p}^2 + m^2$ into it by writing $E = \vec \alpha·\mathbf{p} +\beta m$. This requires $\{\alpha_i,\alpha_j\}=2\delta_{ij},~\{\alpha_i,\beta\}=0, ~\beta^2=1$, which can be further organized as Clifford algebra $\{\gamma^{\mu}, \gamma^{\nu}\} = 2g^{\mu\nu}$. In this way, the dynamic equation can be written as $(i \gamma^{\mu}\partial_{\mu} -m) \psi = 0$. However, such derivative can't tell us the representation structure.

Vector Field
---


I think we have 2 ways to derive the vector field at least: the representation structure of fields or the gauge invariance of Electromagnetic. Let's follow the "modern" perspective of representation in Lorentz transformation, and meet gauge theory in the end.

Let's look into the $(\frac{1}{2},\frac{1}{2})$, whose irreducible dimension is $2 \times 2 = 4$. Such $2 \times 2$ representation can correspond to 4-dim spacetime vector through $V_{a \dot a} = V_{\mu} \sigma^{\mu}_{a \dot a}$, or be written as $V = V_{\mu} \sigma ^{\mu}$, where $\sigma^{\mu} = (I,\sigma^{i})$. Under any transformation $V \rightarrow S V S^{\dagger}$, where $\det S = 1$, $\det V' = \det V = V_{\mu}V^{\mu}$, thus $V^{\mu} \rightarrow \Lambda^{\mu}_{\nu} V^{\nu}$ is Lorentz transformation, where $\Lambda^{\nu}_{\mu} \sigma^{\mu} = S \sigma^{\nu} S^{\dagger}$.

For two $SU(2)$ group $(\frac{1}{2}, \frac{1}{2})$ under the same space rotation, the angular momentum addition gives $\frac{1}{2} \otimes \frac{1}{2} = 0 \oplus 1$, which means that the Lorentz 4-vector can be divided into a spin-0 and spin-1 triplet, like $A^{\mu} = (A^{0},\mathbf{A})$. To remove the spin-0 term, consider the simplest Lagrangian $\mathcal L = -\frac12(\partial_\mu A_\nu)(\partial^\mu A^\nu) +\frac{\alpha}{2}(\partial_\mu A^\mu)^2 +\frac12m^2A_\mu A^\mu$, where the coefficient of the second kinetic term is not decided yet. The Euler-Lagrange equation gives $(\Box+m^2)A^\nu -\alpha\,\partial^\nu(\partial\cdot A)=0$, and we can add another divergence $\partial_{\nu}$ to derive $(1-\alpha)\Box(\partial\cdot A) + m^2(\partial\cdot A)=0$. If $\partial A \neq 0$, it means that $A^0$ spin-0 term have its dynamics as an additional scalar mode, but we don't want it in spin-1 field and thus constrains $\alpha = 1$.

In this way, we have Lagrangian $\mathcal L_{\rm Proca} = -\frac14F_{\mu\nu}F^{\mu\nu} +\frac12m^2A_\mu A^\mu$, where $F_{\mu\nu} = \partial_\mu A_\nu-\partial_\nu A_\mu$ and the motion equation is $(\Box+m^2)A^\mu=0$. Take a plain wave $A^\mu(x) = \epsilon^\mu(p)e^{-ip\cdot x}$, $\partial_{\mu}A^{\mu}$ gives $p_{\mu} \epsilon^{\mu}(p) = 0$. For massive spin-1 field, we can operate in the rest frame where $p^{\mu} = (m,0,0,0)$, and gives $\epsilon^0=0$, other 3 terms $\epsilon_{+1}, \epsilon_{0}, \epsilon_{-1}$ form the $(j=1)$ physical polarization for spin-1 representation, like $\{x,y,z\} \rightarrow \{+,-,0\}$ eigenstates in angular momentum representation.
- Actually, the constrain in Lagrangian derives $\partial_{\mu}A^{\mu}=0$ by adding another divergence $\partial^{\nu}$, making 1 freedom degree in $A^{\mu}$ degree disappear and leaving 3 freedom degrees corresponding to $\lambda = +1,0,-1$.

For massless spin-1 field, the motion equation becomes $\partial_\mu F^{\mu\nu}=0$, and we can't derive the constrain $\partial_{\mu}A^{\mu}=0$ again. In this way, as $F_{\mu\nu} = \partial_\mu A_\nu-\partial_\nu A_\mu$, which is invariant under transformation $A_\mu\rightarrow A_\mu+\partial_\mu\alpha$, this yields gauge redundancy: $\partial_{\mu}A^{\mu}=0$ can be just a gauge choice. Besides $\Box\alpha=0$, there is still residual gauge transformation satisfying it, where another nonphysical freedom can be removed, leaving only 2 freedom degrees corresponding to $\lambda=+1, -1$. This also means that massless particle has no rest frame, we will use helicity to describe it later.

Under the mode expansion, the vector field can be written as:
$$A^\mu(x) = \sum_{\lambda} \int\widetilde{dp}\ [ \epsilon^\mu_\lambda(p) a_\lambda(\mathbf p)e^{ipx} + \epsilon^{\mu *}_\lambda(p) a_\lambda^\dagger(\mathbf p)e^{-ipx}]$$
- The quantization is not done yet.

We might notice that the "gauge transformation" $A_\mu\rightarrow A_\mu+\partial_\mu\alpha$ seems interesting and useful if the global phase symmetry $\psi(x)\to e^{iq\alpha}\psi(x)$ become local $\alpha \rightarrow \alpha(x)$, which makes the derivative don't work and requires the covariant derivative. We leave the gauge structure to other section.