---
layout: page
title: Automated Valet Parking
description: Hybrid A* and optimization-based trajectory planning in narrow parking spaces.
img: assets/img/projects/automated-valet-parking.svg
importance: 2
category: research
---

An open-source motion planning framework for automated valet parking in unstructured environments. The project covers the full planning pipeline from rough path generation to a dynamically feasible trajectory.

## Planning pipeline

**Hybrid A\*** → **Path optimization** → **Cubic interpolation** → **Velocity planning** → **Optimal control**

The planner uses slack-variable-based optimization to handle hard spatial constraints and bounding-box collision checking to improve robustness in narrow spaces. Parallel and perpendicular parking scenarios are supported.

The repository has received **160+ GitHub stars**, reflecting broad interest from the motion-planning community.

[View code on GitHub](https://github.com/wenqing-2021/AutomatedValetParking)
