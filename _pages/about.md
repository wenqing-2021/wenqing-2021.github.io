---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p class="profile-name">Shijie Yuan</p>
    <p class="profile-location">Shanghai, China</p>
    <div class="profile-social-links">
      <a href="mailto:yuansj@hnu.edu.cn" title="Email"><i class="fa-solid fa-envelope"></i> yuansj@hnu.edu.cn</a>
      <a href="https://github.com/wenqing-2021" title="GitHub"><i class="fa-brands fa-github"></i> GitHub</a>
      <a href="https://scholar.google.com/citations?user=iLVzwyUAAAAJ&amp;hl=en" title="Google Scholar"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    </div>

selected_papers: false # Rendered explicitly below to control the About section order.
social: false

announcements:
  enabled: false # Rendered explicitly below; retain the existing news display settings.
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

<style>
  /* === Fonts === */
  body {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6,
  .post-title, .title, .navbar-brand,
  .profile .name {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  figcaption, .caption, .pub-meta, .news-date,
  .profile-location, .more-info {
    font-family: Georgia, Times, serif;
  }

  code, pre, kbd, samp,
  .highlight, .code {
    font-family: Monaco, Consolas, "Lucida Console", monospace;
  }

  /* === Fix bold text (overridden by theme) === */
  strong, b {
    font-weight: 600;
  }

  /* === Hide theme's top-level name & subtitle === */
  .post-title,
  .desc {
    display: none;
  }

  .post-header {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .profile {
    width: 36%;
    max-width: 130px;
    margin-right: 3rem !important;
  }

  .profile .more-info {
    text-align: left;
    font-size: 0.78rem;
    width: 100%;
  }

  .profile-name {
    margin: 0.45rem 0 0.1rem;
    font-size: 1.05rem;
    font-weight: 600;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    color: var(--global-text-color);
  }

  @media (min-width: 576px) {
    .profile {
      width: 18%;
    }
  }

  /* --- profile column gap to content --- */
  .post-header + .row,
  .about .row,
  div:has(> .profile) {
    gap: 3rem;
  }

  .profile-location {
    margin: 0.15rem 0 1.2rem !important;
    font-size: 1rem;
    color: var(--global-text-color-light, #666);
  }

  .profile-social-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0;
  }

  .profile-social-links a {
    color: var(--global-text-color);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 0.82rem;
    line-height: 1.6;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .profile-social-links a i,
  .profile-social-links a .ai {
    font-size: 1rem;
    width: 1.2rem;
    text-align: center;
  }

  .profile-social-links a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  /* --- align homepage sections with body text --- */
  article .home-news,
  article .home-publications,
  article .education,
  article .home-projects {
    margin-left: 11rem;
  }

  .education,
  .home-news,
  .home-publications,
  .home-projects {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .education > h2,
  .home-news > h2,
  .home-publications > h2,
  .home-projects > h2 {
    font-weight: 300;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .education-item {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 1rem;
  }

  .education-period {
    color: var(--global-text-color-light, #666);
    font-family: Georgia, Times, serif;
    white-space: nowrap;
  }

  .education-school,
  .education-degree,
  .education-detail {
    margin: 0;
  }

  .education-school {
    font-weight: 600;
  }

  .education-detail {
    color: var(--global-text-color-light, #666);
    font-size: 0.9rem;
  }

  /* --- compact project cards --- */
  .home-projects .project-cards {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1.15rem;
    margin: 0;
  }

  .home-projects .project-card {
    display: grid;
    grid-template-columns: minmax(10rem, 32%) minmax(0, 1fr);
    align-items: center;
    column-gap: 1.5rem;
    min-width: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  .home-projects .project-card-media {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border: 0;
    background: transparent;
  }

  .home-projects .project-card-media img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    cursor: zoom-in;
    object-fit: contain;
  }


  .home-projects .project-card-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .home-projects .project-card-link:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: -3px;
  }

  .home-projects .project-card-body {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .home-projects .project-card-title {
    margin: 0 0 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.38;
  }

  .home-projects .project-card-link:hover .project-card-title {
    color: var(--global-theme-color);
  }

  .home-projects .project-card-description {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.86rem;
    line-height: 1.45;
  }

  .home-projects .project-card-highlights {
    margin: 0.65rem 0 0;
    padding-left: 1.05rem;
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    line-height: 1.38;
  }

  .home-projects .project-card-highlights li + li {
    margin-top: 0.2rem;
  }

  .home-projects .project-card-highlights li::marker {
    color: var(--global-theme-color);
  }

  .home-projects-link {
    margin: -0.15rem 0 0;
    text-align: right;
  }

  .home-projects-link a {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
  }

  .home-projects-link a:hover {
    text-decoration: underline;
  }

  /* --- keep news dates close to their corresponding events --- */
  .home-news .news th[scope="row"] {
    width: 1% !important;
    padding-right: 1rem;
    white-space: nowrap;
  }

  .home-news .news td {
    padding-left: 0;
  }

  /* --- divider under section headings --- */
  .home-news > h2,
  .home-publications > h2,
  .education > h2,
  .home-projects > h2 {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.35rem;
    margin-bottom: 0.8rem;
  }

  /* --- About-only publication rows, matching the reference layout --- */
  .home-publications > h2 {
    margin-bottom: 1.75rem;
    padding-bottom: 0;
    border-bottom: 0;
    font-weight: 300;
    text-transform: capitalize;
  }

  .home-publications > h2 a {
    color: inherit;
    text-decoration: none;
  }

  .home-publications > .publications ol.bibliography {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .home-publications > .publications ol.bibliography > li {
    margin: 0 0 2rem;
    padding: 0;
  }

  .home-publications > .publications .row {
    display: grid;
    grid-template-columns: 12.5rem minmax(0, 1fr);
    grid-template-rows: min-content min-content;
    gap: 0.45rem 1.8rem;
    align-items: start;
    margin: 0;
  }

  .home-publications > .publications .row:has(#teng2026adaptive) {
    --publication-venue: "Machines";
    --publication-preview: url("{{ '/assets/img/projects/safe-on-ramp-merging/SRL-MPC-architecture_0607.png' | relative_url }}");
  }

  .home-publications > .publications .row:has(#xu2022space) {
    --publication-venue: "Electronics";
    --publication-preview: url("{{ '/assets/img/publication_preview/corridor-fig10.png' | relative_url }}");
  }

  .home-publications > .publications .row::before {
    content: var(--publication-venue);
    grid-column: 1;
    grid-row: 1;
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
    background: #bf4667;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25;
    text-align: center;
  }

  .home-publications > .publications .row::after {
    content: "";
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    aspect-ratio: 8 / 5;
    border-radius: 0.25rem;
    background: #fff var(--publication-preview) center / contain no-repeat;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .home-publications > .publications .row > div[id] {
    grid-column: 2;
    grid-row: 1 / span 2;
    width: 100%;
    max-width: none;
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .home-publications > .publications .title {
    margin-bottom: 0.1rem;
    color: var(--global-text-color);
    font-weight: 500;
  }

  .home-publications > .publications .author {
    color: var(--global-text-color);
  }

  .home-publications > .publications .author em {
    font-style: normal;
    text-decoration: none;
  }

  .home-publications > .publications .periodical {
    margin: 0;
  }

  .home-publications > .publications .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem 0.6rem;
    margin-top: 0.4rem;
  }

  .home-publications > .publications .links .btn {
    min-width: 3.4rem;
    margin: 0;
    padding: 0.25rem 0.65rem;
    border: 1px solid var(--global-text-color);
    border-radius: 0;
    background: transparent;
    color: var(--global-text-color);
    box-shadow: none;
    font-size: 0.65rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .home-publications > .publications .links .btn:hover,
  .home-publications > .publications .links .btn:focus-visible {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    .home-publications > .publications .row {
      grid-template-columns: 10rem minmax(0, 1fr);
      column-gap: 1.25rem;
    }
  }

  @media (max-width: 767.98px) {
    article .home-news,
    article .home-publications,
    article .education,
    article .home-projects {
      margin-left: 0;
    }
  }

  @media (max-width: 575.98px) {
    .home-projects .project-card {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0.8rem;
    }

    .home-projects .project-card-media {
      aspect-ratio: 4 / 3;
    }

    .home-publications > .publications .row {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0.6rem;
    }

    .home-publications > .publications .row::before,
    .home-publications > .publications .row::after {
      width: min(100%, 12.5rem);
    }

    .home-publications > .publications .row > div[id] {
      grid-column: 1;
      grid-row: 3;
    }

    .education-item {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0.1rem;
    }
  }
</style>

<script>
  /* --- reformat news dates to YYYY.MM.DD --- */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('article .news th[scope="row"]').forEach(function (th) {
      var txt = th.textContent.trim();
      var d = new Date(txt);
      if (!isNaN(d.getTime())) {
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        th.textContent = y + '.' + m;
      }
    });
  });
</script>

I am currently **an independent research** focused on reinforcement learning and motion planning for robotic systems. I received my M.E. in Mechanical Engineering from [Hunan University](https://www-en.hnu.edu.cn/) in 2024 and my B.E. in Vehicle Engineering from [Dalian University of Technology](https://en.dlut.edu.cn/) in 2021.

At [Li Auto](https://www.liauto.com/) (2024 – present), I developed learning-based trajectory planning modules that have been deployed in millions of production vehicles. My research interests include **safe reinforcement learning**, **risk-aware motion planning**, and **constrained optimization** for complex driving scenarios. My long-term goal is to develop safe, intelligent, and trustworthy robotic systems that assist human beings, augment human capabilities, and improve quality of life.

<section class="education">
  <h2>Education</h2>
  <div class="education-list">
    <div class="education-item">
      <div class="education-period">2021.09–2024.06</div>
      <div>
        <p class="education-school"><a href="https://www-en.hnu.edu.cn/">Hunan University</a></p>
        <p class="education-degree">M.E. in Mechanical Engineering</p>
        <p class="education-detail">Thesis: The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets</p>
      </div>
    </div>
    <div class="education-item">
      <div class="education-period">2017.09–2021.06</div>
      <div>
        <p class="education-school"><a href="https://en.dlut.edu.cn/">Dalian University of Technology</a></p>
        <p class="education-degree">B.E. in Vehicle Engineering</p>
        <p class="education-detail">Excellent Graduate of Dalian University of Technology</p>
      </div>
    </div>
  </div>
</section>

<section class="home-news" aria-labelledby="home-news-heading">
  <h2 id="home-news-heading">News</h2>
  {% include news.liquid limit=true %}
</section>

<section class="home-publications" aria-labelledby="home-publications-heading">
  <h2 id="home-publications-heading"><a href="{{ '/publications/' | relative_url }}">Selected Publications</a></h2>
  {% include selected_papers.liquid %}
</section>

<section class="home-projects">
  <h2>Research Projects</h2>
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="project-cards">
    {% for project in sorted_projects %}
      {% unless project.title == "EasyRLlib" %}
        <article class="project-card">
          <div class="project-card-media">
            <img
              src="{{ project.img | prepend: '/' | relative_url }}"
              alt="{{ project.title }} project cover. Click to enlarge."
              data-project-cover-zoom
              loading="lazy"
            >
          </div>
          <a class="project-card-link" href="{{ project.url | relative_url }}" aria-label="Open project: {{ project.title }}">
            <div class="project-card-body">
              <h3 class="project-card-title">{{ project.title }}</h3>
              <p class="project-card-description">{{ project.description }}</p>
              {% if project.highlights %}
                <ul class="project-card-highlights">
                  {% for highlight in project.highlights %}
                    <li>{{ highlight }}</li>
                  {% endfor %}
                </ul>
              {% endif %}
            </div>
          </a>
        </article>
      {% endunless %}
    {% endfor %}
  </div>
  <p class="home-projects-link"><a href="{{ '/projects/' | relative_url }}">View all projects →</a></p>
</section>

<script defer src="{{ '/assets/js/project-cover-zoom.js' | relative_url }}"></script>
