---
layout: page
title: The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets
description: Safe RL and constrained optimization for structured-road trajectory planning.
img: assets/img/projects/risk-reachable-motion-planning/risk_planing_PIC.png
importance: 1
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

  .research-project .project-figure--method img {
    max-height: 48rem;
    object-fit: contain;
  }

  .research-project .project-figure figcaption {
    margin-top: 0.55rem;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    line-height: 1.45;
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
    font-size: 0.92rem;
  }

  .research-project .metric-table th,
  .research-project .metric-table td {
    padding: 0.72rem 0.85rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: left;
    vertical-align: middle;
  }

  .research-project .metric-table tr:last-child th,
  .research-project .metric-table tr:last-child td {
    border-bottom: 0;
  }

  .research-project .metric-table thead {
    background: color-mix(in srgb, var(--global-theme-color) 10%, transparent);
  }

  .research-project .metric-improvement {
    color: var(--global-theme-color);
    font-weight: 600;
    white-space: nowrap;
  }

  .research-project .project-links {
    margin-top: 2rem;
    font-weight: 600;
  }

  .research-project .project-links--header {
    margin: 0 0 1.4rem;
  }

  .research-project .project-links i {
    margin-right: 0.3rem;
  }

  .research-project .experiment-summary {
    margin-bottom: 0;
  }

  .research-project .experiment-summary span {
    display: block;
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

<p class="project-links project-links--header"><a href="https://github.com/wenqing-2021/Structure_Road_Motion_Planning"><i class="fa-brands fa-github" aria-hidden="true"></i>Source Code</a> · <a href="https://kns.cnki.net/kcms2/article/abstract?v=OazRilB95d1uF6aijltrXBrzpW8ZolZbagCk1ZLMmbXcs7XBYnvkRYBL8J9H-W3yEixr77xIKYKUGcs56Wr7baKxUmxB1LM-q70uZyp_Eo013O6jQvEU2CWCkUIlu2SCHHmSTyYrD-UgkHIlGhBwvcyWSGpv9-4k13moFNlBadQ=&uniplatform=NZKPT"><i class="fa-solid fa-book" aria-hidden="true"></i>Master Thesis</a></p>

## Abstract

Trajectory planning is a key technology for ensuring the safety, comfort, and efficiency of autonomous vehicles. This study investigates the influence of spatially distributed driving risks on trajectory planning and proposes a framework combining risk-reachable sets, safe reinforcement learning, and constrained optimization.

First, a risk-reachable-set construction method is developed by integrating vehicle motion uncertainty with a driving-risk field. Gaussian-process regression is used to model surrounding-vehicle trajectories, while a probability-density-based risk assessment and Conditional Value at Risk are employed to identify high-risk boundaries over time and space.

Second, a safe reinforcement-learning method is proposed to generate initial trajectories. Polynomial trajectory parameters form the action space, and a constrained Markov decision process is solved using proximal policy optimization with a Lagrangian formulation. The generated trajectories are further projected onto the risk-reachable sets to improve safety and feasibility.

Third, a constrained iterative linear quadratic regulator is developed for trajectory optimization. Vehicle kinematics, comfort, efficiency, and safety are incorporated into the objective and constraints, while a barrier-function method ensures that trajectory points remain within safe regions.

Finally, a simulation platform is established, and high-speed merging experiments demonstrate that the proposed framework avoids high-risk areas while maintaining trajectory comfort, efficiency, and vehicle safety.

## Keywords

<ul class="project-keywords">
  <li>Intelligent Vehicles</li>
  <li>Trajectory Planning</li>
  <li>Safe Reinforcement Learning</li>
  <li>Risk-Reachable Sets</li>
  <li>Constrained Iterative Linear Quadratic Regulator</li>
</ul>

## Methods

<figure class="project-figure project-figure--method">
  <img src="{{ '/assets/img/projects/risk-reachable-motion-planning/safe_risk_traj_planning.png' | relative_url }}" alt="Risk field setup, safe reinforcement-learning initialization, and constrained iterative LQR trajectory optimization workflow." loading="lazy">
  <figcaption>End-to-end planning framework: risk-field construction, safe reinforcement-learning initialization, and constrained iterative LQR refinement.</figcaption>
</figure>

<div class="method-stage">
  <h3>1. Risk Field and Risk-Reachable Set</h3>
  <p>A vehicle kinematic model and forward simulation produce nominal trajectories under Gaussian noise. Separate Gaussian-process regressors model lateral and longitudinal position uncertainty, which is converted into a time-aware driving-risk field. Forward reachability and CVaR then remove high-risk positions to form a safe, feasible risk-reachable set.</p>
</div>

<div class="method-stage">
  <h3>2. Safe RL Initial Trajectory</h3>
  <p>Trajectory planning is formulated as a constrained Markov decision process. PPO-Lagrangian learns a policy from reward and safety-cost signals, selects target positions, and produces longitudinal and lateral polynomial trajectories. A set-based projection corrects any trajectory point or speed that falls outside the risk-reachable set.</p>
</div>

<div class="method-stage">
  <h3>3. Constrained Trajectory Refinement</h3>
  <p>CILQR starts from the projected feasible trajectory and uses the risk-reachable set as a positional boundary. The objective balances jerk, steering-rate change, curvature, lateral offset, and safety distance; velocity, acceleration, steering, and obstacle constraints are handled with exponential barrier functions.</p>
</div>

## Experiments

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/risk-reachable-motion-planning/cppo_us101_26.gif' | relative_url }}" alt="Animated high-speed merging simulation with an ego vehicle and surrounding traffic." loading="lazy">
  <figcaption>High-speed merging simulation in the US-101 traffic scenario.</figcaption>
</figure>

<p class="experiment-summary"><span>Compared with a Lattice planner in high-speed merging, the proposed planner generates safer and smoother trajectories.</span><span>It also improves driving efficiency by reducing travel time and increasing average speed.</span></p>

## Results

<div class="metric-table-wrap" role="region" aria-label="Final evaluation metrics" tabindex="0">
  <table class="metric-table">
    <thead>
      <tr>
        <th scope="col">Metric</th>
        <th scope="col">Lattice Baseline</th>
        <th scope="col">Proposed Planner</th>
        <th scope="col">Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Average speed (m/s)</th>
        <td>10.17</td>
        <td>16.34</td>
        <td class="metric-improvement">+60.7%</td>
      </tr>
      <tr>
        <th scope="row">Maximum jerk (m/s<sup>3</sup>)</th>
        <td>11.98</td>
        <td>5.75</td>
        <td class="metric-improvement">−52.0%</td>
      </tr>
      <tr>
        <th scope="row">Maximum curvature (m<sup>−1</sup>)</th>
        <td>0.02</td>
        <td>0.01</td>
        <td class="metric-improvement">−50.0%</td>
      </tr>
      <tr>
        <th scope="row">Travel time (s)</th>
        <td>7.40</td>
        <td>4.80</td>
        <td class="metric-improvement">−35.1%</td>
      </tr>
      <tr>
        <th scope="row">Maximum risk</th>
        <td>0.999</td>
        <td>0.266</td>
        <td class="metric-improvement">−73.4%</td>
      </tr>
      <tr>
        <th scope="row">Average risk</th>
        <td>0.417</td>
        <td>0.074</td>
        <td class="metric-improvement">−82.3%</td>
      </tr>
    </tbody>
  </table>
</div>

The proposed planner increased average speed to 16.34 m/s while reducing travel time to 4.80 s. It also produced smoother trajectories, cutting maximum jerk by 52.0% and maximum curvature by 50.0%. Most importantly, the risk-aware reachable-set constraint reduced maximum risk by 73.4% and average risk by 82.3% relative to the Lattice baseline.

</div>
