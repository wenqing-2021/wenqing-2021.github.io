---
layout: page
title: Automated Valet Parking
description: Hybrid A* and optimization-based trajectory planning in narrow parking spaces.
img: assets/img/projects/automated-valet-parking/automated-valet-parking.svg
importance: 2
category: research
---

<style>
  .post {
    max-width: 54rem;
    margin-right: auto;
    margin-left: auto;
  }

  .post .post-header {
    margin-bottom: 1.5rem;
    padding-bottom: 0;
  }

  .post .post-header .post-description {
    display: none;
  }

  .post .post-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
    line-height: 1.18;
    overflow-wrap: anywhere;
  }

  .research-project > h2 {
    margin-top: 2.6rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--global-divider-color);
    font-weight: 300;
  }

  .research-project .project-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .research-project .project-keywords li {
    padding: 0.28rem 0.68rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    background: var(--global-card-bg-color);
    color: var(--global-text-color-light);
    font-size: 0.86rem;
    line-height: 1.35;
  }

  .research-project .method-stage {
    margin-top: 1rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid var(--global-theme-color);
    border-radius: 0 0.45rem 0.45rem 0;
    background: color-mix(in srgb, var(--global-theme-color) 6%, transparent);
  }

  .research-project .method-stage + .method-stage {
    margin-top: 0.85rem;
  }

  .research-project .method-stage h3 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
  }

  .research-project .method-stage p {
    margin: 0;
  }

  .research-project .project-links {
    margin: 0 0 1.4rem;
    font-weight: 600;
  }

  .research-project .project-links i {
    margin-right: 0.3rem;
  }

  .research-project .project-figure {
    margin: 1.4rem 0 1.7rem;
  }

  .research-project .project-figure img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.55rem;
    background: #fff;
  }

  .research-project .project-figure figcaption {
    margin-top: 0.55rem;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .research-project .experiment-case {
    margin-top: 1.35rem;
    padding: 1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.6rem;
    background: var(--global-card-bg-color);
  }

  .research-project .experiment-case h3 {
    margin: 0 0 0.85rem;
    font-size: 1.05rem;
  }

  .research-project .case-media {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
  }

  .research-project .case-media figure {
    min-width: 0;
    margin: 0;
  }

  .research-project .case-media .case-visual {
    height: clamp(10rem, 26vw, 18rem);
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.45rem;
    background: #fff;
  }

  .research-project .case-media .case-visual img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(1.5);
    transform-origin: center center;
  }

  .research-project .case-media figcaption {
    margin-top: 0.5rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.35;
    text-align: center;
  }

  @media (max-width: 575.98px) {
    .post .post-title {
      font-size: 2rem;
    }

    .research-project .method-stage,
    .research-project .experiment-case {
      padding: 0.9rem;
    }

    .research-project .project-keywords {
      gap: 0.45rem;
    }

    .research-project .project-keywords li {
      font-size: 0.8rem;
    }

    .research-project .case-media {
      gap: 0.65rem;
    }

    .research-project .case-media .case-visual {
      height: 8rem;
    }
  }

  @media (min-width: 992px) {
    .post {
      max-width: 72rem;
    }
  }
</style>

<div class="research-project" markdown="1">

<p class="project-links"><a href="https://github.com/wenqing-2021/AutomatedValetParking"><i class="fa-brands fa-github" aria-hidden="true"></i>Source Code</a></p>

## Abstract

This open-source project implements a complete motion-planning pipeline for automated valet parking in constrained, unstructured environments. It starts with a Hybrid A\* path and progressively produces a dynamically feasible trajectory through path optimization, cubic interpolation, velocity planning, and optimal control.

The implementation is designed for tight parking maneuvers, with collision checking and optimization-based refinement used to improve path quality and trajectory feasibility. Benchmark scenarios are represented as parking maps with initial and goal vehicle poses, obstacles, and their vertices.

## Keywords

<ul class="project-keywords">
  <li>Automated Valet Parking</li>
  <li>Hybrid A*</li>
  <li>Path Optimization</li>
  <li>Trajectory Planning</li>
  <li>Optimal Control</li>
</ul>

## Methods

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/automated-valet-parking/automated-valet-parking-framework-vertical.svg?v=20260724' | relative_url }}" alt="Vertical end-to-end Automated Valet Parking framework from scenario modelling and Hybrid A-star search through path smoothing, interpolation, velocity planning, and IPOPT-based optimal control." loading="lazy">
  <figcaption>End-to-end automated valet parking framework: scenario modelling and Hybrid A* initial-path search, path smoothing and interpolation, then speed planning and IPOPT-based optimal control.</figcaption>
</figure>

<div class="method-stage">
  <h3>1. Initial Path Generation</h3>
  <p>Hybrid A* searches for a collision-free coarse path that connects the initial and goal poses in a parking map with geometric obstacles.</p>
</div>

<div class="method-stage">
  <h3>2. Path Smoothing and Interpolation</h3>
  <p>The coarse path is optimized and then interpolated with cubic curves to obtain a smooth geometric reference suitable for vehicle motion.</p>
</div>

<div class="method-stage">
  <h3>3. Velocity Planning and Optimal Control</h3>
  <p>A velocity profile is planned along the reference path, and an optimization problem is solved with IPOPT to generate the final dynamically feasible parking trajectory.</p>
</div>

## Experiments

The following benchmark cases are reproduced from the project repository. Each row pairs the final static trajectory visualization with its corresponding animated parking process.

<section class="experiment-case">
  <h3>Case 1</h3>
  <div class="case-media">
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case1.png' | relative_url }}" alt="Static visualization of the planned trajectory for Automated Valet Parking Case 1." loading="lazy">
      </div>
      <figcaption>Static trajectory visualization</figcaption>
    </figure>
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case1.gif' | relative_url }}" alt="Animated parking process for Automated Valet Parking Case 1." loading="lazy">
      </div>
      <figcaption>Animated parking process</figcaption>
    </figure>
  </div>
</section>

<section class="experiment-case">
  <h3>Case 2</h3>
  <div class="case-media">
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case2.png' | relative_url }}" alt="Static visualization of the planned trajectory for Automated Valet Parking Case 2." loading="lazy">
      </div>
      <figcaption>Static trajectory visualization</figcaption>
    </figure>
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case2.gif' | relative_url }}" alt="Animated parking process for Automated Valet Parking Case 2." loading="lazy">
      </div>
      <figcaption>Animated parking process</figcaption>
    </figure>
  </div>
</section>

<section class="experiment-case">
  <h3>Case 3</h3>
  <div class="case-media">
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case3.png' | relative_url }}" alt="Static visualization of the planned trajectory for Automated Valet Parking Case 3." loading="lazy">
      </div>
      <figcaption>Static trajectory visualization</figcaption>
    </figure>
    <figure>
      <div class="case-visual">
        <img src="{{ '/assets/img/projects/automated-valet-parking/cases/Case3.gif' | relative_url }}" alt="Animated parking process for Automated Valet Parking Case 3." loading="lazy">
      </div>
      <figcaption>Animated parking process</figcaption>
    </figure>
  </div>
</section>

</div>
