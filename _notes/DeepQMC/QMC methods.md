---
title: "QMC Methods"
---

DeepQMC：以VMC为核心，以NQS（NN ansatz）为形式。
- ansatz的形式（表达能力）影响我们最终VMC优化的精度，常见的有SJB，SJ。

传统VMC
使用物理构造的参数较少的ansatz，like SJ，SJB。
- 传统VMC只能依赖物理形式显式处理电子之间的关系，而NN VMC能够学到复杂的多电子关联，因此deepqmc的精度远超传统VMC方法。


投影MC - Projector MC：

从trial波函数出发，通过投影，滤除掉高能量的激发态成分，最终投影到基态波函数上。一个投影算符的粒子是$e^{-\tau \hat{H}}$，在虚时$\tau \to \infty$会衰减掉所有能量高于基态能量的分量。原则上来说可以获得比初始trial波函数更精确的结果，而VMC的精度受限于trial波函数本身。
- DMC - Diffusion MC：将含时薛定谔方程变换到虚时，得到一个类似扩散方程的形式，模拟电子在构型空间（？）中的扩散、漂移、消亡过程。
	- 符号问题：对于费米子系统，波函数有正有负，直接模拟会导致sign problem，使得统计误差指数增长，计算失效。一种解决方法是【固定节点近似】，强制DMC模拟的波函数与另一个给定的trial波函数$\psi_T$具有相同的节点超曲面【波函数值=0的区域】，在节点约束下找到最低能量解，但是其精度取决于节点结构的精度。在相同的$\psi_T$（是SJB吗？）下精度优于传统VMC（低于NQS VMC），但也更多cost。
	- deepqmc优化得到的$\psi_T$可以输入到DMC中。
- AFQMC - Auxiliary-Field MC：在二次量子化形式下，基于一组基函数进行。通过Hubbard-S变换引入辅助场，将电子间的二体相互作用转化为电子在随机波动场中的单体运动问题（how???），然后在辅助场的路径上进行积分。

但是Projector MC并不直接提供一个易于使用的波函数形式。

deepqmc能够提供给我们一个显式的波函数NN，由此我们可以直接计算任意的物理可观测量。2）特别的，deepqmc能够为我们提供可迁移性，使我们不需要为每个分子构型都从头训练（如Orbformer将分子构型作为神经网络的输入？？？）。于是我们可以使用pretraining-fine-tuning的计算范式，大大摊销的计算成本，是WF FM成为可能。

问题：
- 计算成本：deepqmc的神经网络参数量很大。即使我们的scaling还行，计算复杂度是O(N4)，但是每次取样评估（包括求导）耗时大，迭代步数多（参数量大）。
- memory cost：使用VMC优化ansatz时（即求loss），求二阶导对于神经网络是一个很消耗计算资源和memory的操作，这也制约了模型可以处理的电子数N和batch size。【Forward Laplacian似乎就是为此开发的】
- 尽管我们为NN ansatz的架构进行了或多或少的物理设计，但是其训练过程仍然像一个黑盒。同时，二阶优化器（如KFAC？？？）是有效收敛所必须的。
- size consistency：两个相隔无限远的分子总能量应该要等于它们各自能量之和。【就像传统CI方法一样？？？】deepqmc方法使用多个行列式（Slater）理论上不保证尺寸一致性。【Orbformer说是可以在单行列式的情况下能够保证】

多参考体系优势
TBA

note：Orbformer试图通过分析NN波函数学到的轨道解析模型？？？