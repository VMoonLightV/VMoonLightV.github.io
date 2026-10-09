---
id: lagrangian_process
title: Spinor and Vector Calculations
date: 2026-10-09
order: 3
lang: en
description: ""
---


For spin-1/2 field, we have the representation of left-handed Weyl spinor $\psi_L = (\psi_1, \psi_2)^T$, and the Lorentz transformation $x\rightarrow \Lambda x ,~ \psi_L(x) \rightarrow S_L(\Lambda)\psi_L(x)$, where $S(\Lambda) = \exp[ -i\boldsymbol\theta\cdot\mathbf J -i\boldsymbol\xi\cdot\mathbf K ] = \exp( -i\boldsymbol\theta\cdot\frac{\boldsymbol\sigma}{2} -\boldsymbol\xi\cdot\frac{\boldsymbol\sigma}{2})$. Together with the right-handed Weyl spinor, we have the 4-dim Dirac spinor $\Psi = (\psi_L, \psi_R)^T$.

As the derivative of the spinor fields is so complicated, their calculus also follows specific rules. We will clarify $\varepsilon_{ij}$, $\sigma^{\mu}_{a\dot a}$, and $\gamma^{\mu}$, and derive the Dirac equation in the end.

Spinor
---

For a certain Weyl spinor, we have $\psi_a \to A^{b}_a \psi_b$, then we can try to construct Lorentz-invariant term like $\varphi\varphi,~V^\mu W_\mu=g_{\mu\nu}V^\mu W^\nu$. However, we could soon find that $\psi^{\dagger} \chi$ is not Lorentz-invariant, we need to define $\psi^T M\chi$ which satisfies $(A\psi)^T M(A\chi)=\psi^TM\chi$. This gives $\varepsilon_{ab}$ and $\psi_\alpha =\varepsilon_{\alpha\beta}\psi^\beta,~ \psi^T\varepsilon\chi = \varepsilon_{\alpha\beta}\psi^\alpha\chi^\beta =\psi_1\chi_2-\psi_2\chi_1$, which is also anti-symmetric. In this way, we can write the mass scalar term $\mathcal L_M =-\frac12 m (\varepsilon_{\alpha\beta}\psi^\alpha\psi^\beta)$.
$$\varepsilon_{\alpha\beta} =\begin{pmatrix}0&1\\-1&0\end{pmatrix}, \qquad \varepsilon^{\alpha\beta} =\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

Then we consider the kinetic term $\partial_\mu\psi_a$, we need new matrix to connect these index $\mu,~ a$ to construct Lorentz-invariant scalar. As $(\frac12,0)\otimes (0,\frac12) = (\frac12,\frac12)$, we have $V_{a\dot a} \leftrightarrow V_{\mu}$ and link their indices with $V_{a \dot a} = V_{\mu}\sigma^\mu_{a\dot a}$, while the $2\times2$ space can be represented in a 4-dim basis $\sigma^\mu_{a\dot a} = (I,\sigma^1,\sigma^2,\sigma^3)$. We want to notice that for left-handed Weyl spinor, the Lorentz boost on z-axis is $\psi_L\rightarrow A_L\psi_L,~ A_L=e^{-\frac{\varphi}{2}\sigma^3}$, which yields $j_L^0=\psi_L^\dagger\psi_L \to j_L^3=-\psi_L^\dagger\sigma^3\psi_L$, while the right-handed Weyl spinor gives $j_R^0=\psi_R^\dagger\psi_R \to j_R^3=\psi_R^\dagger\sigma^3\psi_R$. To unify the boost transformation, we define $\bar \sigma^\mu_{a\dot a} = (I,-\sigma^1,-\sigma^2,-\sigma^3)$ for left-handed, and use $X(x)=x_\mu\bar\sigma^\mu$ for later derivation. Under Lorentz transformation$X'=AXA^\dagger,~ x^\mu=\Lambda^\mu{}_\nu(A)x^\nu$, we have $A\bar\sigma_\nu A^\dagger = \Lambda^\mu{}_\nu\bar\sigma_\mu$. Then we can construct a Lorentz vector $j_L^\mu=\psi_L^\dagger\bar\sigma^\mu\psi_L$, and combine it with $\partial_{\mu}$ to write the Lorentz-invariant kinetic term $\mathcal L_L =i\psi_L^\dagger\bar\sigma^\mu\partial_\mu\psi_L$. The $i$ is to keep $S=\int d^4x\,\mathcal L_L$ real with just a total derivative in the conjugate $\mathcal{L}^{\dagger}$.

Together with right-handed Weyl field, we have $\psi_L'(x')=A\psi_L(x),~ \psi_R'(x')=(A^\dagger)^{-1}\psi_R(x)$ due to the opposite direction in Lorentz boost. Thus the corresponding Lorentz scalar is $\mathcal L_m =-m(\psi_L^\dagger\psi_R+\psi_R^\dagger\psi_L)$, where left-handed and right-handed Weyl spinor couple with each other. 
$$\mathcal L_D= i\psi_L^\dagger\bar\sigma^\mu\partial_\mu\psi_L +i\psi_R^\dagger\sigma^\mu\partial_\mu\psi_R -m(\psi_L^\dagger\psi_R+\psi_R^\dagger\psi_L)$$

Doing variation on both conjugate fields, we get $i\bar\sigma^\mu\partial_\mu\psi_L=m\psi_R,~ i\sigma^\mu\partial_\mu\psi_R=m\psi_L$. For express convenience, we combine them using the gamma matrix $\gamma^{\mu}$ and the Dirac field $\Psi = (\psi_L, \psi_R)^T$. In this way, the motion equation of the Weyl field can be write as $(i\gamma^\mu\partial_\mu-m)\Psi=0$, which is also called the Dirac equation. Using $\gamma^{\mu}$, we can define the Dirac adjoint $\bar\Psi\equiv\Psi^\dagger\gamma^0 = (\psi^{\dagger}_{R},\psi^{\dagger}_{L})$, and rewrite the Lagrangian as $\mathcal L_D=\bar\Psi(i\gamma^\mu\partial_\mu-m)\Psi$. One step more, if you multiply $(i\gamma^\nu\partial_\nu+m)$ on the left of the Dirac equation, you will find $(\Box+m^2)\Psi=0$, which satisfies the special relativity.
$$\gamma^\mu= \begin{pmatrix} 0&\sigma^\mu\\ \bar\sigma^\mu&0 \end{pmatrix}$$



