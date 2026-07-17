---
layout: page
title: Safe RL for On-Ramp Merging
description: Constraint-aware decision making with action shielding and model predictive control.
img: assets/img/projects/safe-on-ramp-merging.svg
importance: 3
category: research
related_publications: true
---

This research studies safe and efficient autonomous decision making in highway on-ramp merging. The hierarchical framework uses reinforcement learning for high-level maneuver decisions and model predictive control for low-level vehicle motion.

## Safety mechanisms

- Safety requirements are represented explicitly as constraints rather than only as reward penalties.
- A preference-aware mechanism adapts the constraint limit to traffic conditions and driver risk preference.
- Action shielding evaluates candidate actions before execution and replaces unsafe or infeasible decisions.

Simulation experiments demonstrate a better safety–efficiency trade-off across different traffic densities. The related peer-reviewed work is listed below {% cite teng2026adaptive %}.

[View code on GitHub](https://github.com/wenqing-2021/On_Ramp_Merge_Safe_RL) · [Read the paper](https://doi.org/10.3390/machines14060605)
