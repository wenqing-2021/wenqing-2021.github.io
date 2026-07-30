---
layout: page
title: EasyRLlib
description: A compact PyTorch library for reproducible reinforcement-learning experiments.
img: assets/img/projects/easy-rllib/easy-rllib.svg
importance: 4
category: open-source
highlights:
  - "Implements DQN, PPO, SAC, DDPG, TD3, and A2C."
  - "Runs reproducible Gymnasium tasks from YAML."
  - "Exports checkpoints, curves, metrics, and GIFs."
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

  .research-project .project-links {
    margin: 0 0 1.4rem;
    font-weight: 600;
  }

  .research-project .project-links i {
    margin-right: 0.3rem;
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

  .research-project .project-figure--framework img {
    max-height: 40rem;
    object-fit: contain;
  }

  .research-project .project-figure figcaption {
    margin-top: 0.55rem;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    line-height: 1.45;
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

  .research-project .algorithm-table-wrap {
    overflow-x: auto;
    margin: 1.2rem 0;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.55rem;
  }

  .research-project .algorithm-table {
    width: 100%;
    min-width: 36rem;
    margin: 0;
    border-collapse: collapse;
    font-size: 0.92rem;
  }

  .research-project .algorithm-table th,
  .research-project .algorithm-table td {
    padding: 0.72rem 0.85rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: left;
    vertical-align: middle;
  }

  .research-project .algorithm-table thead {
    background: color-mix(in srgb, var(--global-theme-color) 10%, transparent);
  }

  .research-project .algorithm-table tr:last-child th,
  .research-project .algorithm-table tr:last-child td {
    border-bottom: 0;
  }

  .research-project .algorithm-table .algorithm-family {
    color: var(--global-theme-color);
    font-weight: 600;
    white-space: nowrap;
  }

  .research-project .project-demo-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    margin: 1.2rem 0 0;
  }

  .research-project .project-demo {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.55rem;
    background: var(--global-card-bg-color);
  }

  .research-project .project-demo a {
    display: block;
  }

  .research-project .project-demo img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    border-bottom: 1px solid var(--global-divider-color);
    background: #fff;
    object-fit: contain;
  }

  .research-project .project-demo figcaption {
    margin: 0;
    padding: 0.75rem 0.9rem 0.85rem;
    color: var(--global-text-color-light);
    font-size: 0.86rem;
    line-height: 1.45;
  }

  .research-project .project-demo strong {
    color: var(--global-text-color);
    font-weight: 600;
  }

  @media (max-width: 575.98px) {
    .post .post-title {
      font-size: 2rem;
    }

    .research-project .method-stage {
      padding: 0.9rem 1rem;
    }

    .research-project .project-keywords {
      gap: 0.45rem;
    }

    .research-project .project-keywords li {
      font-size: 0.8rem;
    }

    .research-project .project-demo-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }
  }

  @media (min-width: 992px) {
    .post {
      max-width: 72rem;
    }
  }
</style>

<div class="research-project" markdown="1">

<p class="project-links"><a href="https://github.com/wenqing-2021/EasyRLlib"><i class="fa-brands fa-github" aria-hidden="true"></i>Source Code</a></p>

## Abstract

EasyRLlib is a compact PyTorch library for reproducible single-agent reinforcement-learning experiments. It provides implementations of value-based, actor–critic, and policy-gradient algorithms for Gymnasium environments, with YAML configurations that define each experiment. A locked `uv` environment, a shared training entry point, and built-in logging, checkpointing, evaluation, and visualization utilities keep the workflow lightweight and easy to inspect.

## Keywords

<ul class="project-keywords">
  <li>PyTorch</li>
  <li>Reinforcement Learning</li>
  <li>Gymnasium</li>
  <li>Reproducible Experiments</li>
  <li>YAML Configuration</li>
  <li>CUDA</li>
</ul>

## Workflow

<figure class="project-figure project-figure--framework">
  <img src="{{ '/assets/img/projects/easy-rllib/easy-rllib-framework.svg' | relative_url }}" alt="EasyRLlib workflow from YAML configuration through run.py, Gymnasium, PyTorch agents, on-policy or off-policy training, and saved artifacts." loading="lazy">
  <figcaption>Configuration, runtime, training branches, shared components, and generated artifacts.</figcaption>
</figure>

<div class="method-stage">
  <h3>1. Configuration-Driven Runs</h3>
  <p>Each experiment is defined by a YAML run configuration. The configuration selects the algorithm, Gymnasium environment, seed, and training device, so an experiment can be reproduced or moved between CPU and CUDA without changing training code.</p>
</div>

<div class="method-stage">
  <h3>2. Compact Agent Implementations</h3>
  <p>The codebase groups agents, neural-network components, replay buffers, and training loops into small, inspectable modules. It separates off-policy and on-policy training while preserving a shared experiment entry point.</p>
</div>

<div class="method-stage">
  <h3>3. Evaluation and Visualization</h3>
  <p>Training writes logs and checkpoints below <code>output/</code>. Companion utilities aggregate reward curves, evaluate supplied policies, and render visualizations for supported demo environments.</p>
</div>

## Supported Algorithms

<div class="algorithm-table-wrap" role="region" aria-label="Supported EasyRLlib algorithms" tabindex="0">
  <table class="algorithm-table">
    <thead>
      <tr>
        <th scope="col">Family</th>
        <th scope="col">Algorithm</th>
        <th scope="col">Action Space</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="algorithm-family">Value-based</td>
        <th scope="row">DQN · Dueling DQN</th>
        <td>Discrete</td>
      </tr>
      <tr>
        <td class="algorithm-family">Policy-gradient</td>
        <th scope="row">PPO · A2C</th>
        <td>Discrete and continuous</td>
      </tr>
      <tr>
        <td class="algorithm-family">Actor–critic</td>
        <th scope="row">SAC</th>
        <td>Discrete and continuous</td>
      </tr>
      <tr>
        <td class="algorithm-family">Deterministic policy</td>
        <th scope="row">DDPG · TD3</th>
        <td>Continuous</td>
      </tr>
    </tbody>
  </table>
</div>

## Reproduce an Experiment

The repository README includes the following tracked evaluation captures. Select either animation to open its original source file.

<div class="project-demo-grid">
  <figure class="project-demo">
    <a href="https://github.com/wenqing-2021/EasyRLlib/blob/4044827d0832f68aa4f54b6087b9985012206773/assets/demos/DuelingDQN_CartPole_eval.gif">
      <img src="https://raw.githubusercontent.com/wenqing-2021/EasyRLlib/4044827d0832f68aa4f54b6087b9985012206773/assets/demos/DuelingDQN_CartPole_eval.gif" alt="Dueling DQN policy evaluation on CartPole-v1." loading="lazy">
    </a>
    <figcaption><strong>Dueling DQN · CartPole-v1</strong><br>Tracked evaluation GIF from the README.</figcaption>
  </figure>
  <figure class="project-demo">
    <a href="https://github.com/wenqing-2021/EasyRLlib/blob/4044827d0832f68aa4f54b6087b9985012206773/assets/demos/PPO_BipedalWalker_eval.gif">
      <img src="https://raw.githubusercontent.com/wenqing-2021/EasyRLlib/4044827d0832f68aa4f54b6087b9985012206773/assets/demos/PPO_BipedalWalker_eval.gif" alt="PPO policy evaluation on BipedalWalker-v3." loading="lazy">
    </a>
    <figcaption><strong>PPO · BipedalWalker-v3</strong><br>Tracked evaluation GIF from the README.</figcaption>
  </figure>
</div>

</div>
