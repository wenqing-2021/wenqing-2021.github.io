---
layout: page
title: Human-Aligned Safe RL for Highway On-Ramp Merging
description: Preference-aware constrained RL, action shielding, and MPC for safe highway merging.
img: assets/img/projects/safe-on-ramp-merging/SRL-MPC-architecture_0607.png
importance: 3
category: research
highlights:
  - "Uses discrete SAC for merging decisions."
  - "Rejects unsafe actions with a trajectory shield."
  - "Executes smooth vehicle motion with MPC."
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

  .research-project .project-links {
    margin: 0 0 1.4rem;
    font-weight: 600;
  }

  .research-project .project-links i {
    margin-right: 0.3rem;
  }

  .research-project .publications {
    display: grid;
    grid-template-columns: 3.5rem minmax(0, 1fr);
    column-gap: 1.15rem;
    row-gap: 1.8rem;
    margin-top: 0;
    margin-bottom: 1.4rem;
  }

  .research-project .publications h2.bibliography {
    grid-column: 1;
    align-self: start;
    margin: 0;
    padding: 0;
    border-top: 0;
    color: var(--global-text-color);
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: left;
  }

  .research-project .publications ol.bibliography {
    grid-column: 2;
    min-width: 0;
    margin: 0;
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

  .research-project .project-figure--network img {
    max-height: 40rem;
    object-fit: contain;
  }

  .research-project .project-figure--fuzzy-example img {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  }

  .research-project .project-figure--action-shield img {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
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

  .research-project .experiment-summary {
    margin-bottom: 0;
  }

  .research-project .metric-table-wrap {
    overflow-x: auto;
    margin: 1.2rem 0;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.55rem;
  }

  .research-project .metric-table {
    width: 100%;
    min-width: 42rem;
    margin: 0;
    border-collapse: collapse;
    font-size: 0.88rem;
  }

  .research-project .metric-table--wide {
    min-width: 66rem;
  }

  .research-project .metric-table th,
  .research-project .metric-table td {
    padding: 0.7rem 0.78rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: right;
    vertical-align: middle;
    white-space: nowrap;
  }

  .research-project .metric-table th:first-child,
  .research-project .metric-table td:first-child {
    text-align: left;
  }

  .research-project .metric-table thead tr:first-child {
    background: color-mix(in srgb, var(--global-theme-color) 10%, transparent);
  }

  .research-project .metric-table thead tr:last-child {
    background: color-mix(in srgb, var(--global-theme-color) 5%, transparent);
  }

  .research-project .metric-table tr:last-child th,
  .research-project .metric-table tr:last-child td {
    border-bottom: 0;
  }

  .research-project .metric-table .proposed-row {
    color: var(--global-theme-color);
    font-weight: 600;
  }

  .research-project .table-caption {
    margin: 1.7rem 0 -0.65rem;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
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

    .research-project .publications {
      grid-template-columns: 3.1rem minmax(0, 1fr);
      column-gap: 0.75rem;
    }
  }

  @media (min-width: 992px) {
    .post {
      max-width: 72rem;
    }

    .post .post-title {
      font-size: clamp(1rem, 1.2vw, 1.15rem);
      letter-spacing: -0.025em;
      white-space: nowrap;
    }
  }
</style>

<div class="research-project" markdown="1">

<p class="project-links"><a href="https://github.com/wenqing-2021/On_Ramp_Merge_Safe_RL"><i class="fa-brands fa-github" aria-hidden="true"></i>Source Code</a> · <a href="https://www.alphaxiv.org/abs/2503.02624"><i class="fa-solid fa-book" aria-hidden="true"></i>Paper</a></p>

<div class="publications">

{% bibliography --query @*[key=teng2026adaptive] %}

</div>

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/episode_001_predicted_trajectories.gif' | relative_url }}" alt="Animated MPC-predicted vehicle trajectories during an on-ramp merging episode." loading="lazy">
  <figcaption>MPC-predicted trajectories during an on-ramp merging episode.</figcaption>
</figure>

## Abstract

Autonomous on-ramp merging requires a practical safety–efficiency trade-off and a policy that reflects driver risk preference. This work proposes a hierarchical human-aligned safe RL framework: a constrained Markov decision process adapts its permissible safety cost to traffic density and user preference; discrete SAC learns high-level manoeuvres; and MPC executes low-level motion. Before execution, an action shield predicts trajectories, checks conflicts with surrounding traffic, and replaces unsafe decisions. Simulations across low-, medium-, and high-density traffic show substantially fewer safety violations while retaining efficient merges.

## Keywords

<ul class="project-keywords">
  <li>Autonomous Driving</li>
  <li>On-Ramp Merging</li>
  <li>Safe Reinforcement Learning</li>
  <li>Action Shielding</li>
  <li>Model Predictive Control</li>
  <li>Human Risk Preference</li>
</ul>

## Methods

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/SRL-MPC-architecture_0607.png' | relative_url }}" alt="Hierarchical architecture for preference-aware safe reinforcement learning and model predictive control in highway on-ramp merging." loading="lazy">
  <figcaption>Hierarchical safe-merging architecture: high-level reinforcement-learning decisions are safety-checked before MPC generates low-level vehicle controls.</figcaption>
</figure>

<div class="method-stage">
  <h3>1. MPC Prediction and Motion Execution</h3>
  <p>For a candidate high-level decision, MPC first maps the action to a reference speed and trajectory, transforms the reference from Frenet to Cartesian coordinates, and solves a quadratic program. In prediction mode it returns the ego vehicle’s future states for safety checking; in execution mode it returns the optimized control sequence.</p>
</div>

<figure class="project-figure project-figure--network">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/network_update.png' | relative_url }}" alt="Policy, critic, cost, and target-network construction used by the human-aligned safe reinforcement-learning algorithm." loading="lazy">
  <figcaption>Network construction for the discrete SAC policy, twin reward critics, cost critic, and target networks.</figcaption>
</figure>

<div class="method-stage">
  <h3>2. Human-Aligned Safe Reinforcement Learning</h3>
  <p>Traffic density and the user’s risk preference determine the CMDP cost limit through fuzzy control. The discrete SAC policy samples a manoeuvre, stores its shielded transition with reward and cost, and updates twin Q-networks, the cost network, policy, temperature, Lagrangian multiplier, and target networks. The constrained objective makes safety an explicit learning requirement rather than only a reward term.</p>
</div>

<figure class="project-figure project-figure--fuzzy-example">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/example_result.png' | relative_url }}" alt="Example fuzzy-control inference that maps risk preference and traffic density to a cost limit of 0.0595." loading="lazy">
  <figcaption>Example Mamdani fuzzy-control inference. The aggregated fuzzy output is defuzzified into a CMDP cost limit of 0.0595.</figcaption>
</figure>

<div class="method-stage">
  <h3>3. Action Shielding Module</h3>
  <p>The action shield uses MPC-predicted states to detect collisions, an unsafe continuation after the vehicle has merged, or a failure to reach the merge objective. When a decision is unsafe or invalid, it is replaced with a safe alternative before the low-level controller executes it, improving safety during both exploration and deployment.</p>
</div>

<figure class="project-figure project-figure--action-shield">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/ASM_module.png' | relative_url }}" alt="Action shielding replaces actions that cause a collision, an unexpected decision, or a failure to merge with safe alternatives." loading="lazy">
  <figcaption>Action shielding in three typical unsafe situations: collision, unexpected decision after merging, and failure to merge. Unsafe actions are replaced before execution.</figcaption>
</figure>

## Experiments

<p class="experiment-summary">The experiments use a highway-env on-ramp scenario with low-, medium-, and high-density traffic. The following values reproduce the implementation settings and reported evaluation results from the accompanying paper.</p>

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/train_results_a.png' | relative_url }}" alt="Training curves comparing Dueling DQN, SACD, PPO, and SACD-lambda-TM for crash ratio, average cost, and average reward." loading="lazy">
  <figcaption>Training comparison with Dueling DQN, SACD, and PPO. Curves show crash ratio, average cost, and average reward; shaded bands indicate the 95% confidence interval across five random seeds.</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/safe-on-ramp-merging/train_results_b.png' | relative_url }}" alt="Ablation training curves comparing SACD, SACD-lambda, SACD-lambda-M, and SACD-lambda-TM for crash ratio, average cost, and average reward." loading="lazy">
  <figcaption>Ablation training comparison of SACD, SACD-λ, SACD-λ-M, and SACD-λ-TM. Curves show crash ratio, average cost, and average reward; shaded bands indicate the 95% confidence interval across five random seeds.</figcaption>
</figure>

<p class="table-caption">RL hyperparameters</p>
<div class="metric-table-wrap" role="region" aria-label="Reinforcement-learning hyperparameters" tabindex="0">
  <table class="metric-table">
    <thead>
      <tr>
        <th scope="col">Parameter</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Optimizer</th><td>Adam</td></tr>
      <tr><th scope="row">Policy / critic / cost learning rate</th><td>1e-4</td></tr>
      <tr><th scope="row">Temperature learning rate</th><td>1e-4</td></tr>
      <tr><th scope="row">Initial Lagrangian multiplier</th><td>1.0</td></tr>
      <tr><th scope="row">Lagrangian multiplier learning rate</th><td>1e-4</td></tr>
      <tr><th scope="row">Replay-buffer size</th><td>1e5</td></tr>
      <tr><th scope="row">Batch size</th><td>256</td></tr>
    </tbody>
  </table>
</div>

<p class="table-caption">Constraint-free RL baselines and the proposed method</p>
<div class="metric-table-wrap" role="region" aria-label="Comparison of reinforcement-learning methods across traffic densities" tabindex="0">
  <table class="metric-table metric-table--wide">
    <thead>
      <tr>
        <th scope="col" rowspan="2">Method</th>
        <th scope="colgroup" colspan="3">Success rate (%)</th>
        <th scope="colgroup" colspan="3">Collision rate</th>
        <th scope="colgroup" colspan="3">Average cost</th>
        <th scope="colgroup" colspan="3">Average time (s)</th>
      </tr>
      <tr>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Dueling DQN</th><td>87.0</td><td>94.3</td><td>99.0</td><td>0.013</td><td>0.005</td><td>0.005</td><td>0.50</td><td>0.28</td><td>0.08</td><td>11.78</td><td>11.47</td><td>10.85</td></tr>
      <tr><th scope="row">SACD</th><td>94.5</td><td>97.5</td><td>99.2</td><td>0.010</td><td>0.008</td><td>0.005</td><td>0.44</td><td>0.25</td><td>0.10</td><td>11.59</td><td>11.33</td><td>10.82</td></tr>
      <tr><th scope="row">PPO</th><td>99.5</td><td>97.7</td><td>99.2</td><td>0.003</td><td>0.018</td><td>0.008</td><td>0.01</td><td>0.03</td><td>0.01</td><td>12.36</td><td>11.62</td><td>10.95</td></tr>
      <tr class="proposed-row"><th scope="row">SACD-λ-TM (proposed)</th><td>99.0</td><td>99.5</td><td>99.3</td><td>0.003</td><td>0.005</td><td>0.005</td><td>0.02</td><td>0.02</td><td>0.02</td><td>11.87</td><td>11.46</td><td>10.96</td></tr>
    </tbody>
  </table>
</div>

## Results

<p class="table-caption">Comparison with the lattice-based planner</p>
<div class="metric-table-wrap" role="region" aria-label="Comparison between the lattice planner and proposed method" tabindex="0">
  <table class="metric-table metric-table--wide">
    <thead>
      <tr>
        <th scope="col" rowspan="2">Method</th>
        <th scope="colgroup" colspan="3">Success rate (%)</th>
        <th scope="colgroup" colspan="3">Collision rate</th>
        <th scope="colgroup" colspan="3">Average time (s)</th>
      </tr>
      <tr>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Lattice</th><td>98.5</td><td>99.0</td><td>97.3</td><td>0.012</td><td>0.010</td><td>0.027</td><td>10.44</td><td>10.12</td><td>9.93</td></tr>
      <tr class="proposed-row"><th scope="row">SACD-λ-TM (proposed)</th><td>99.0</td><td>99.5</td><td>99.3</td><td>0.003</td><td>0.005</td><td>0.005</td><td>11.87</td><td>11.46</td><td>10.96</td></tr>
    </tbody>
  </table>
</div>

<p class="table-caption">Ablation study</p>
<div class="metric-table-wrap" role="region" aria-label="Ablation study across traffic densities" tabindex="0">
  <table class="metric-table metric-table--wide">
    <thead>
      <tr>
        <th scope="col" rowspan="2">Method</th>
        <th scope="colgroup" colspan="3">Success rate (%)</th>
        <th scope="colgroup" colspan="3">Collision rate</th>
        <th scope="colgroup" colspan="3">Average cost</th>
        <th scope="colgroup" colspan="3">Average time (s)</th>
      </tr>
      <tr>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
        <th scope="col">High</th><th scope="col">Medium</th><th scope="col">Low</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">SACD</th><td>94.5</td><td>97.5</td><td>99.2</td><td>0.010</td><td>0.008</td><td>0.005</td><td>0.44</td><td>0.25</td><td>0.10</td><td>11.59</td><td>11.33</td><td>10.82</td></tr>
      <tr><th scope="row">SACD-λ</th><td>97.2</td><td>97.3</td><td>99.3</td><td>0.003</td><td>0.005</td><td>0.005</td><td>0.23</td><td>0.13</td><td>0.04</td><td>12.08</td><td>11.54</td><td>10.99</td></tr>
      <tr><th scope="row">SACD-λ-M</th><td>98.3</td><td>98.8</td><td>98.9</td><td>0.010</td><td>0.008</td><td>0.003</td><td>0.02</td><td>0.02</td><td>0.02</td><td>12.33</td><td>11.58</td><td>11.02</td></tr>
      <tr class="proposed-row"><th scope="row">SACD-λ-TM (proposed)</th><td>99.0</td><td>99.5</td><td>99.3</td><td>0.003</td><td>0.005</td><td>0.005</td><td>0.02</td><td>0.02</td><td>0.02</td><td>11.87</td><td>11.46</td><td>10.96</td></tr>
    </tbody>
  </table>
</div>

</div>
