---
layout: page
title: projects
permalink: /projects/
description: Selected research and open-source projects in autonomous driving.
nav: true
nav_order: 2
---

<style>
  .project-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem;
    margin: 0;
  }

  .project-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.65rem;
    background: var(--global-card-bg-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.09);
  }

  .project-card-media {
    display: flex;
    width: 100%;
    aspect-ratio: 4 / 3;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom: 1px solid var(--global-divider-color);
    background: color-mix(in srgb, var(--global-theme-color) 4%, var(--global-card-bg-color));
  }

  .project-card-media img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    cursor: zoom-in;
    object-fit: contain;
  }

  .project-card-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .project-card-link:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: -3px;
  }

  .project-card-body {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.1rem 1.1rem;
  }

  .project-card-title {
    margin: 0 0 0.45rem;
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.38;
  }

  .project-card-link:hover .project-card-title {
    color: var(--global-theme-color);
  }

  .project-card-description {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.48;
  }

  @media (max-width: 575.98px) {
    .project-cards {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }
  }
</style>

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="project-cards">
  {% for project in sorted_projects %}
    <article class="project-card">
      <div class="project-card-media">
        <img src="{{ project.img | prepend: '/' | relative_url }}" alt="{{ project.title }} project cover. Click to enlarge." data-zoomable loading="lazy">
      </div>
      <a class="project-card-link" href="{{ project.url | relative_url }}" aria-label="Open project: {{ project.title }}">
        <div class="project-card-body">
          <h2 class="project-card-title">{{ project.title }}</h2>
          <p class="project-card-description">{{ project.description }}</p>
        </div>
      </a>
    </article>
  {% endfor %}
</div>
