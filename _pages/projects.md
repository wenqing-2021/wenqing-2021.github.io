---
layout: page
title: projects
permalink: /projects/
description: Selected research and open-source projects in autonomous driving.
nav: true
nav_order: 2
---

<style>
  .project-list {
    margin: 0;
    padding: 0;
  }

  .project-list-item {
    display: grid;
    grid-template-columns: minmax(13rem, 16rem) minmax(0, 1fr);
    gap: 1.4rem;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .project-list-item:first-child {
    padding-top: 0;
  }

  .project-list-media {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    padding: 0.35rem;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color);
  }

  .project-list-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-list-title {
    margin: 0;
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .project-list-title a {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .project-list-title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }

  @media (max-width: 575.98px) {
    .project-list-item {
      grid-template-columns: minmax(7.5rem, 9rem) minmax(0, 1fr);
      gap: 0.9rem;
    }

    .project-list-title {
      font-size: 1rem;
    }
  }
</style>

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="project-list">
  {% for project in sorted_projects %}
    <article class="project-list-item">
      <div class="project-list-media">
        <img src="{{ project.img | prepend: '/' | relative_url }}" alt="{{ project.title }} project cover" loading="lazy">
      </div>
      <h2 class="project-list-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    </article>
  {% endfor %}
</div>
