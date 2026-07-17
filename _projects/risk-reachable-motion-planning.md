---
layout: page
title: Risk-Reachable Motion Planning
description: Safe RL and constrained optimization for structured-road trajectory planning.
img: assets/img/projects/risk-reachable-planning.svg
importance: 1
category: research
---

This project is the official implementation of my master's thesis, **The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets**.

## Overview

The framework combines four complementary components:

1. **Risk estimation:** Gaussian-process regression models spatiotemporal driving risk.
2. **Safe set construction:** risk-reachable sets describe safe and feasible regions for trajectory generation.
3. **Learning-based initialization:** PPO-Lagrangian generates an efficient initial trajectory.
4. **Constrained optimization:** constrained iLQR refines the trajectory for comfort, efficiency, and safety.

## Results

In high-speed merging simulations, the proposed method increased average driving speed by **49%** and reduced maximum jerk by **52%** compared with sampling-based baselines.

[View code on GitHub](https://github.com/wenqing-2021/Structure_Road_Motion_Planning) · [Read thesis](https://kns.cnki.net/kcms2/article/abstract?v=OazRilB95d1uF6aijltrXBrzpW8ZolZbagCk1ZLMmbXcs7XBYnvkRYBL8J9H-W3yEixr77xIKYKUGcs56Wr7baKxUmxB1LM-q70uZyp_Eo013O6jQvEU2CWCkUIlu2SCHHmSTyYrD-UgkHIlGhBwvcyWSGpv9-4k13moFNlBadQ=&uniplatform=NZKPT)
